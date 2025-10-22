#!/usr/bin/env python3
"""
Gelişmiş Port Scanner
Komut satırı argümanları ile özelleştirilebilir port tarayıcı
"""

import argparse
import sys
from port_scanner import PortScanner

def parse_port_range(port_range_str):
    """
    Port aralığını parse et
    Örnek: "80-443" -> [80, 443]
    """
    try:
        if '-' in port_range_str:
            start, end = port_range_str.split('-')
            return int(start), int(end)
        else:
            port = int(port_range_str)
            return port, port
    except ValueError:
        raise argparse.ArgumentTypeError(f"Geçersiz port aralığı: {port_range_str}")

def parse_port_list(port_list_str):
    """
    Port listesini parse et
    Örnek: "80,443,8080" -> [80, 443, 8080]
    """
    try:
        return [int(p.strip()) for p in port_list_str.split(',')]
    except ValueError:
        raise argparse.ArgumentTypeError(f"Geçersiz port listesi: {port_list_str}")

def main():
    parser = argparse.ArgumentParser(
        description='Gelişmiş TCP Port Scanner',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Örnekler:
  %(prog)s 192.168.1.1                    # Tüm portları tara
  %(prog)s 192.168.1.1 -p 80-443         # Port aralığı tara
  %(prog)s 192.168.1.1 -l 80,443,8080    # Belirli portları tara
  %(prog)s 192.168.1.1 -t 200 --timeout 2    # Özel ayarlarla tara
        """
    )
    
    parser.add_argument('target', help='Hedef IP adresi')
    
    group = parser.add_mutually_exclusive_group()
    group.add_argument('-p', '--port-range', type=parse_port_range, 
                      help='Port aralığı (örn: 1-1000)')
    group.add_argument('-l', '--port-list', type=parse_port_list,
                      help='Port listesi (örn: 80,443,8080)')
    
    parser.add_argument('-t', '--threads', type=int, default=100,
                       help='Thread sayısı (varsayılan: 100)')
    parser.add_argument('--timeout', type=float, default=1.0,
                       help='Timeout süresi saniye cinsinden (varsayılan: 1.0)')
    parser.add_argument('-q', '--quiet', action='store_true',
                       help='Sadece açık portları göster')
    parser.add_argument('--no-service', action='store_true',
                       help='Servis adlarını gösterme')
    
    args = parser.parse_args()
    
    # Port scanner oluştur
    scanner = PortScanner(args.target, max_threads=args.threads, timeout=args.timeout)
    
    # IP doğrula
    if not scanner.validate_ip():
        print(f"[!] Geçersiz IP adresi: {args.target}")
        sys.exit(1)
    
    try:
        if args.port_range:
            # Port aralığı tarama
            start_port, end_port = args.port_range
            if not args.quiet:
                print(f"[*] {args.target} - Port aralığı: {start_port}-{end_port}")
            
            open_ports = []
            for port in range(start_port, end_port + 1):
                result = scanner.scan_port(port)
                if result:
                    open_ports.append(result)
            
            scanner.open_ports = open_ports
            
        elif args.port_list:
            # Belirli portları tara
            if not args.quiet:
                print(f"[*] {args.target} - Portlar: {args.port_list}")
            
            open_ports = []
            for port in args.port_list:
                result = scanner.scan_port(port)
                if result:
                    open_ports.append(result)
            
            scanner.open_ports = open_ports
            
        else:
            # Tüm portları tara
            if not args.quiet:
                scanner.scan_all_ports()
            else:
                # Quiet modda progress gösterme
                scanner.total_ports = 65535
                open_ports = []
                for port in range(1, 65536):
                    result = scanner.scan_port(port)
                    if result:
                        open_ports.append(result)
                scanner.open_ports = open_ports
        
        # Sonuçları göster
        if args.quiet:
            # Quiet mod: sadece açık portları listele
            if scanner.open_ports:
                for port in sorted(scanner.open_ports):
                    if args.no_service:
                        print(port)
                    else:
                        service = scanner.get_service_name(port)
                        print(f"{port} ({service})")
        else:
            # Normal mod: detaylı sonuçlar
            scanner.display_results()
            
    except KeyboardInterrupt:
        print("\n[!] Tarama kullanıcı tarafından durduruldu!")
        sys.exit(0)
    except Exception as e:
        print(f"\n[!] Hata: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
