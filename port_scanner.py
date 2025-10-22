#!/usr/bin/env python3
"""
Multi-threaded TCP Port Scanner
Tüm TCP portlarını (1-65535) tarayan performanslı port tarayıcı
"""

import socket
import threading
import time
import sys
import ipaddress
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime

class PortScanner:
    def __init__(self, target_ip, max_threads=100, timeout=1):
        """
        Port Scanner sınıfı
        
        Args:
            target_ip (str): Taranacak IP adresi
            max_threads (int): Maksimum thread sayısı
            timeout (int): Bağlantı timeout süresi (saniye)
        """
        self.target_ip = target_ip
        self.max_threads = max_threads
        self.timeout = timeout
        self.open_ports = []
        self.scanned_ports = 0
        self.total_ports = 65535
        self.lock = threading.Lock()
        
    def validate_ip(self):
        """IP adresini doğrula"""
        try:
            ipaddress.ip_address(self.target_ip)
            return True
        except ValueError:
            return False
    
    def scan_port(self, port):
        """
        Tek bir portu tara
        
        Args:
            port (int): Taranacak port numarası
            
        Returns:
            int: Açık port numarası (açıksa), None (kapalıysa)
        """
        try:
            with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
                sock.settimeout(self.timeout)
                result = sock.connect_ex((self.target_ip, port))
                
                with self.lock:
                    self.scanned_ports += 1
                    
                if result == 0:
                    return port
                    
        except socket.error:
            with self.lock:
                self.scanned_ports += 1
        return None
    
    def update_progress(self):
        """Tarama ilerlemesini göster"""
        while self.scanned_ports < self.total_ports:
            progress = (self.scanned_ports / self.total_ports) * 100
            sys.stdout.write(f"\r[*] İlerleme: {progress:.1f}% ({self.scanned_ports}/{self.total_ports})")
            sys.stdout.flush()
            time.sleep(0.1)
    
    def scan_all_ports(self):
        """Tüm portları tara"""
        print(f"\n[*] {self.target_ip} hedefinde port tarama başlatılıyor...")
        print(f"[*] Port aralığı: 1-{self.total_ports}")
        print(f"[*] Thread sayısı: {self.max_threads}")
        print(f"[*] Timeout: {self.timeout} saniye")
        print("-" * 50)
        
        start_time = datetime.now()
        
        # Progress gösterimi için thread başlat
        progress_thread = threading.Thread(target=self.update_progress, daemon=True)
        progress_thread.start()
        
        # ThreadPoolExecutor ile concurrent tarama
        with ThreadPoolExecutor(max_workers=self.max_threads) as executor:
            # Tüm portlar için future'lar oluştur
            future_to_port = {
                executor.submit(self.scan_port, port): port 
                for port in range(1, self.total_ports + 1)
            }
            
            # Sonuçları topla
            for future in as_completed(future_to_port):
                result = future.result()
                if result:
                    with self.lock:
                        self.open_ports.append(result)
        
        # Progress thread'ini bekle
        progress_thread.join(timeout=1)
        
        end_time = datetime.now()
        scan_duration = end_time - start_time
        
        print(f"\n\n[*] Tarama tamamlandı!")
        print(f"[*] Süre: {scan_duration}")
        print("-" * 50)
        
        return self.open_ports
    
    def get_service_name(self, port):
        """Port numarasına göre servis adını getir"""
        try:
            return socket.getservbyport(port)
        except OSError:
            return "unknown"
    
    def display_results(self):
        """Sonuçları göster"""
        if self.open_ports:
            print(f"\n[+] {len(self.open_ports)} açık port bulundu:")
            print("-" * 50)
            print("PORT\t\tSERVİS")
            print("-" * 50)
            
            # Portları sırala
            self.open_ports.sort()
            
            for port in self.open_ports:
                service = self.get_service_name(port)
                print(f"{port}\t\t{service}")
                
        else:
            print("\n[-] Hiç açık port bulunamadı.")
        
        print("-" * 50)
        print(f"[*] Toplam taranan port: {self.total_ports}")
        print(f"[*] Açık port sayısı: {len(self.open_ports)}")


def banner():
    """Banner göster"""
    print("""
    ╔═══════════════════════════════════════════╗
    ║           TCP PORT SCANNER v1.0           ║
    ║        Multi-threaded Port Scanner        ║
    ╚═══════════════════════════════════════════╝
    """)


def get_user_input():
    """Kullanıcıdan input al"""
    banner()
    
    while True:
        try:
            ip_address = input("[?] Taranacak IP adresini girin: ").strip()
            
            if not ip_address:
                print("[!] IP adresi boş olamaz!")
                continue
            
            # IP adresi doğrulaması
            try:
                ipaddress.ip_address(ip_address)
                break
            except ValueError:
                print("[!] Geçersiz IP adresi formatı! Örnek: 192.168.1.1")
                continue
                
        except KeyboardInterrupt:
            print("\n[!] Çıkış yapılıyor...")
            sys.exit(0)
    
    return ip_address


def main():
    """Ana fonksiyon"""
    try:
        # Kullanıcıdan IP al
        target_ip = get_user_input()
        
        # Port scanner oluştur
        scanner = PortScanner(target_ip, max_threads=100, timeout=1)
        
        # IP doğrulaması (ekstra güvenlik)
        if not scanner.validate_ip():
            print("[!] Geçersiz IP adresi!")
            return
        
        # Tarama başlat
        open_ports = scanner.scan_all_ports()
        
        # Sonuçları göster
        scanner.display_results()
        
    except KeyboardInterrupt:
        print("\n[!] Tarama kullanıcı tarafından durduruldu!")
        sys.exit(0)
    except Exception as e:
        print(f"\n[!] Beklenmeyen hata: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()
