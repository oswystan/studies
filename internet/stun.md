##识别
- 消息的前两个bit固定位0
- fingerprint: CRC32(STUN message upto but excluding FINGERPRINT) XOR 0x5354554e
- magic cookie:0x2112A442

##典型使用场景
- 获取主机对于外网的IP地址和端口号
- 有简单的验证机制：用户名+密码，但用户名和密码需要通过其他协议传递给服务端，STUN协议本身不负责传输这部分数据，可以用来验证消息完整性

##消息结构
> 
```
0                   1                   2                   3
0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|0 0| STUN Message Type        | Message Length                 |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
| Magic Cookie                                                  |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                                                               |
| Transaction ID (96 bits)                                      |
|                                                               |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
| attributes                                                    |
```

##传输层协议
- UDP
- TCP
- TLS over TCP
> TCP/UDP默认端口号3478, TLS默认端口号为: 5349

##算法
- MD5生成MESSAGE-INTEGRITY: MD5(username ":" realm ":" SASLprep(password))

##主要的消息
### methods:
> 
0x000: (Reserved)
0x001: Binding
0x002: (Reserved; was SharedSecret)

### attributes:
> 
Comprehension-required range (0x0000-0x7FFF):
0x0000: (Reserved)
0x0001: MAPPED-ADDRESS
0x0002: (Reserved; was RESPONSE-ADDRESS)
0x0003: (Reserved; was CHANGE-ADDRESS)
0x0004: (Reserved; was SOURCE-ADDRESS)
0x0005: (Reserved; was CHANGED-ADDRESS)
0x0006: USERNAME
0x0007: (Reserved; was PASSWORD)
0x0008: MESSAGE-INTEGRITY
0x0009: ERROR-CODE
0x000A: UNKNOWN-ATTRIBUTES
0x000B: (Reserved; was REFLECTED-FROM)
0x0014: REALM
0x0015: NONCE
0x0020: XOR-MAPPED-ADDRESS
Comprehension-optional range (0x8000-0xFFFF)
0x8022: SOFTWARE
0x8023: ALTERNATE-SERVER
0x8028: FINGERPRINT

### error code:
> 
**300 **Try Alternate
**400 **Bad Request
**401 **Unauthorized
**420 **Unknown Attribute
**438 **Stale Nonce
**500 **Server Error

## 其他
在WebRTC中，发流端每隔一段时间就会发送一个STUN请求给收流端，以此来保证连通性．因此收流端还需要实现一个STUN服务的功能，以便可以互通.