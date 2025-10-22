#!/usr/bin/env python3
"""
Port Scanner Kullanım Örneği
Bu dosya port_scanner.py modülünün nasıl kullanılacağını gösterir
"""

from port_scanner import PortScanner

def example_scan():
    """Örnek tarama fonksiyonu"""
    
    # Localhost'u tara
    target_ip = "127.0.0.1"
    
    print(f"Örnek: {target_ip} adresi taranıyor...")
    
    # Port scanner oluştur
    # Örnek için daha az thread ve daha kısa timeout kullan
    scanner = PortScanner(
        target_ip=target_ip,
        max_threads=50,  # Daha az thread
        timeout=0.5      # Daha kısa timeout
    )
    
    # IP doğrula
    if not scanner.validate_ip():
        print("Geçersiz IP adresi!")
        return
    
    # Sadece yaygın portları tara (örnek için)
    common_ports = [21, 22, 23, 25, 53, 80, 110, 143, 443, 993, 995, 3306, 5432, 8080]
    
    print(f"Yaygın portlar taranıyor: {common_ports}")
    
    open_ports = []
    for port in common_ports:
        result = scanner.scan_port(port)
        if result:
            open_ports.append(result)
    
    # Sonuçları göster
    if open_ports:
        print(f"\nAçık portlar: {open_ports}")
        for port in open_ports:
            service = scanner.get_service_name(port)
            print(f"Port {port}: {service}")
    else:
        print("\nHiç açık port bulunamadı.")

def custom_range_scan():
    """Özel port aralığı tarama örneği"""
    
    target_ip = "127.0.0.1"
    start_port = 80
    end_port = 100
    
    print(f"\nÖzel aralık örneği: {target_ip} - Portlar {start_port}-{end_port}")
    
    scanner = PortScanner(target_ip, max_threads=20, timeout=0.3)
    
    open_ports = []
    for port in range(start_port, end_port + 1):
        result = scanner.scan_port(port)
        if result:
            open_ports.append(result)
    
    print(f"Port aralığı {start_port}-{end_port} sonuçları: {open_ports}")

if __name__ == "__main__":
    print("=== Port Scanner Örnekleri ===\n")
    
    # Örnek 1: Yaygın portları tara
    example_scan()
    
    # Örnek 2: Özel port aralığı
    custom_range_scan()
    
    print("\n=== Tam tarama için port_scanner.py'ı çalıştırın ===")
