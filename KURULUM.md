# Port Scanner Kurulum ve Kullanım Kılavuzu

## Sistem Gereksinimleri

- **Python**: 3.6 veya daha yeni sürüm
- **İşletim Sistemi**: Linux, macOS, Windows
- **Ağ Bağlantısı**: Hedef sisteme erişim
- **İzinler**: Network socket oluşturma izni

## Kurulum

### 1. Repository'yi İndirin

```bash
git clone <repository-url>
cd port-scanner
```

### 2. Python Sürümünü Kontrol Edin

```bash
python3 --version
# Python 3.6+ olmalı
```

### 3. Dosyaları Çalıştırılabilir Yapın

```bash
chmod +x port_scanner.py
chmod +x advanced_scanner.py
chmod +x example.py
```

## Kullanım Örnekleri

### Temel Kullanım

```bash
# İnteraktif mod - tüm portları tara
python3 port_scanner.py

# Örnek kullanımları göster
python3 example.py
```

### Gelişmiş Kullanım

```bash
# Tüm portları tara
python3 advanced_scanner.py 192.168.1.1

# Belirli port aralığını tara
python3 advanced_scanner.py 192.168.1.1 -p 1-1000

# Belirli portları tara
python3 advanced_scanner.py 192.168.1.1 -l 22,80,443,8080

# Sessiz mod (sadece açık portları göster)
python3 advanced_scanner.py 192.168.1.1 -p 80-443 -q

# Hızlı tarama (daha fazla thread, daha kısa timeout)
python3 advanced_scanner.py 192.168.1.1 -t 200 --timeout 0.5

# Sadece port numaraları (servis adları olmadan)
python3 advanced_scanner.py 192.168.1.1 -l 80,443 -q --no-service
```

## Performans Ayarlamaları

### Thread Sayısı

- **Düşük (50-100)**: Güvenli, sistem kaynaklarını korur
- **Orta (100-200)**: Dengeli performans
- **Yüksek (200+)**: Hızlı ama yoğun sistem kullanımı

### Timeout Değeri

- **Kısa (0.5-1s)**: Hızlı tarama, filtrelenmiş portları atlayabilir
- **Orta (1-2s)**: Dengeli yaklaşım
- **Uzun (3s+)**: Yavaş ağlar için güvenilir

## Yaygın Kullanım Senaryoları

### 1. Localhost Test

```bash
python3 advanced_scanner.py 127.0.0.1 -l 22,80,443,3306,5432
```

### 2. Ağ Cihazı Keşfi

```bash
python3 advanced_scanner.py 192.168.1.1 -p 1-1000 -t 150
```

### 3. Web Servisi Kontrolü

```bash
python3 advanced_scanner.py example.com -l 80,443,8080,8443 -q
```

### 4. Veritabanı Port Kontrolü

```bash
python3 advanced_scanner.py db-server.local -l 3306,5432,1433,27017
```

## Hata Giderme

### Yaygın Hatalar

1. **"Permission denied"**
   - Çözüm: `sudo` ile çalıştırın veya yönetici izinleri alın

2. **"Connection timed out"**
   - Çözüm: Timeout değerini artırın (`--timeout 3`)

3. **"Invalid IP address"**
   - Çözüm: IP adres formatını kontrol edin (örn: 192.168.1.1)

4. **"Too many threads"**
   - Çözüm: Thread sayısını azaltın (`-t 50`)

### Performans Sorunları

- **Yavaş tarama**: Thread sayısını artırın, timeout'u azaltın
- **Sistem yavaşlığı**: Thread sayısını azaltın
- **Ağ hatası**: Timeout değerini artırın

## Güvenlik ve Etik Kullanım

### ⚠️ Önemli Uyarılar

- Bu araç sadece **yetkili test** amaçlı kullanılmalıdır
- Sahip olmadığınız sistemleri taramayın
- Kurumsal ağlarda IT departmanından izin alın
- IDS/IPS sistemleri tarafından tespit edilebilir

### Legal Sorumluluk

Kullanıcı bu aracın yasal ve etik kullanımından sorumludur. Yetkisiz ağ tarama faaliyetleri yasadışı olabilir.

## Destek

Sorunlar için:
1. README.md dosyasını inceleyin
2. Örnek kullanımları kontrol edin (`python3 example.py`)
3. Komut satırı yardımını görün (`python3 advanced_scanner.py --help`)

## İleri Seviye Özelleştirme

Kendi scriptinizde kullanmak için:

```python
from port_scanner import PortScanner

scanner = PortScanner("192.168.1.1", max_threads=100, timeout=1)
result = scanner.scan_port(80)
if result:
    print(f"Port {result} açık")
```
