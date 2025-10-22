# TCP Port Scanner

Multi-threaded TCP port scanner that scans all ports (1-65535) on a target IP address.

## Features

- **Complete Port Range**: Scans all TCP ports from 1 to 65535
- **Multi-threaded**: Uses concurrent threading for fast scanning
- **Progress Display**: Shows real-time scanning progress
- **Service Detection**: Identifies services running on open ports
- **Error Handling**: Handles invalid IPs, timeouts, and network errors
- **User-friendly Output**: Clean, formatted results display

## Requirements

- Python 3.6 or higher
- No external dependencies (uses built-in libraries only)

## Usage

### Basic Usage

```bash
python3 port_scanner.py
```

The script will prompt you to enter an IP address:

```
[?] Taranacak IP adresini girin: 192.168.1.1
```

### Example Output

```
    ╔═══════════════════════════════════════════╗
    ║           TCP PORT SCANNER v1.0           ║
    ║        Multi-threaded Port Scanner        ║
    ╚═══════════════════════════════════════════╝

[?] Taranacak IP adresini girin: 192.168.1.1

[*] 192.168.1.1 hedefinde port tarama başlatılıyor...
[*] Port aralığı: 1-65535
[*] Thread sayısı: 100
[*] Timeout: 1 saniye
--------------------------------------------------
[*] İlerleme: 100.0% (65535/65535)

[*] Tarama tamamlandı!
[*] Süre: 0:02:15.123456
--------------------------------------------------

[+] 5 açık port bulundu:
--------------------------------------------------
PORT		SERVİS
--------------------------------------------------
22		ssh
80		http
443		https
3306		mysql
8080		http-alt
--------------------------------------------------
[*] Toplam taranan port: 65535
[*] Açık port sayısı: 5
```

## Configuration

You can modify the following parameters in the `PortScanner` class:

- `max_threads`: Number of concurrent threads (default: 100)
- `timeout`: Connection timeout in seconds (default: 1)

### Example with custom settings:

```python
scanner = PortScanner(target_ip, max_threads=200, timeout=0.5)
```

## Technical Details

### Threading Model

The scanner uses `ThreadPoolExecutor` from the `concurrent.futures` module to manage multiple threads efficiently. This allows for:

- Concurrent port scanning
- Automatic thread management
- Better resource utilization

### Network Operations

- Uses TCP socket connections (`socket.AF_INET`, `socket.SOCK_STREAM`)
- Non-blocking connect operations with `connect_ex()`
- Configurable timeouts to prevent hanging connections

### Error Handling

The script handles various error conditions:

- Invalid IP address format
- Network connectivity issues
- Timeout errors
- Keyboard interrupts (Ctrl+C)
- System resource limitations

## Performance Considerations

- **Thread Count**: Default 100 threads provide good balance between speed and system resources
- **Timeout**: 1-second timeout prevents hanging on filtered ports
- **Memory Usage**: Minimal memory footprint with efficient thread management
- **Network Load**: Respects target system resources with controlled concurrent connections

## Limitations

- Only scans TCP ports (UDP not supported)
- Requires network connectivity to target
- Performance depends on network latency and target responsiveness
- May trigger intrusion detection systems on target networks

## Legal Notice

This tool is for educational and authorized testing purposes only. Ensure you have proper authorization before scanning any network or system that you do not own.

## License

This project is open source and available under the MIT License.
