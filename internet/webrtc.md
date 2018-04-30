## WebRTC

[WebRTC通信架构](https://www.2cto.com/kf/201701/587483.html)

[WebRTC中RTP/RTCP协议实现分析](http://www.jianshu.com/p/c84be6f3ddf3)

[如何为WebRTC项目选择信令协议](http://blog.csdn.net/fireroll/article/details/50782095)

[什么是WebRTC](https://segmentfault.com/a/1190000000436544)

[webrtc入门学习](http://www.cnblogs.com/happykoukou/p/5708095.html)

[ICE](https://zhuanlan.zhihu.com/p/25087606)
[即时通讯](http://www.52im.net/thread-590-1-1.html)

## SDP attributes

[a=rtcp-fb: xxx goog-remb](https://tools.ietf.org/pdf/draft-alvestrand-rmcat-remb-03.pdf)
[a=rtcp-fb: *](https://tools.ietf.org/pdf/rfc4585.pdf)

## rtmp & rtsp
[RTMP学习](http://mingyangshang.github.io/2016/03/06/RTMP%E5%8D%8F%E8%AE%AE/)
[RTSP基础](http://blog.csdn.net/ygm_linux/article/details/49977821)


## rtx
- rfc4588
- 包重传机制，用来解决网络传输的丢包问题，在webrtc中默认开启
- 在SDP中，rtx包使用不同的payload type和ssrc来标识．
- 通常使用rtcp-nack来出发重传操作
- 可以通过session-multiplexing, ssrc-multiplexing(不能用于多播场景)来实现；
- session-mutiplexing: 使用相同的ssrc来关联原始数据流
- ssrc-multiplexing:根据CNAME或者之前的NACK请求来关联原始数据流;
- SDP描述符

```
a=fmtp:<number> apt=<apt-val>;rtx-time=<rtx-time-val>
a=rtpmap:xxx rtx/9000
a=group:FID xx xx        ## session-multiplexing
a=ssrc-group:FID xx xx   ## ssrc-multiplexing
```

##丢包补偿机制
rfc2354, rfc4588
- FEC
- RTX
- interleaving

## 修改音视频比特率的方法：
1. Use the standard b=AS:BITRATE (Chrome) or b=TIAS:BITRATE (Firefox) attributes in the SDP for the audio or video channel[1]
2. Use codec specific attributes (this work at least for opus audio codec with maxaveragebitrate property) [2]
3. Use the proprietary x-max-bitrate attribute in the video channel of the SDP answer.  For example with something like this:
answer.sdp += "a=fmtp:100 x-google-max-bitrate=500\r\n";


## WebRTC协议
- dtls
- ice
- rtp/rtcp and extention
- srtp
- sctp
- sdp
	> - 在webrtc上会在一个端口上发送这些数据：STUN => DTLS(handshake) => AV-RTP / AV-RTCP
	> - 另外stun请求是每个一段时间就发送一次，因此要求服务端收到请求的时候，需要给出响应

### 协议交互
- STUN: 服务器和客户端都要同时支持发送和接收STUN请求和响应消息
- DTLS-handshake：
	- ClientHello with extensions
	- ServerHello + Certificate + ServerKeyExchange + CertificateRequest + ServerHelloDone
	- Certificate + ClientKeyExchange + CertificateVerify + ChangeCipherSpec + EncryptedHandshakeMessage(?)
	- NewSessionTicket + ChangeCipherSpec + EncryptedHandShakeMessage(?)
- SRTP/SRTCP：

> 其中Certificate用于双方互发证书，ServerKeyExchange用于发送服务端公钥，ClientKeyExchange用于发送客户端公钥


## Debug Tips
```
## enable log of webrtc on ubuntu16.04
$ /opt/google/chrome/chrome --enable-logging --vmodule=*/webrtc/*=1

## then you can explore the log
$ less ~/.config/google-chrome/chrome_debug.log

```

## openssl commands

```
## 查看证书信息
$ openssl x509 -in cert.pem -noout -text
$ openssl x509 -in cacert.pem -fingerprint -sha256
```

##源码分析
- rtp时间戳

```
modules/rtp_rtcp/source/rtp_sender.cc : timestamp_offset_设置初始rtp包的时间戳

```

- audio: 时间单位是一个1/samplerate
- video: 时间单位是sdp中的1/samplerate（不同的格式可能不一样），这个时间和帧率无关，一般是9000（如h.264）

##系统结构
- 协议: STUN, DTLS, RTP/RTCP, SRTP, SDP, QUIC, SCTP, UDP
- 音视频编解码: opus, isac, cn, g.722/g.711(PCMA, PCMU), vp8/vp9, h.264;
- 音视频同步
- 丢包处理
- 时间戳管理
- jitter buffer
- 模块分解
- 对外接口与调用流程
- 用户级spec
- 设备管理

## RTCP-FIR

```
./modules/rtp_rtcp/source/rtcp_packet/psfb.cc
modules/rtp_rtcp/source/rtcp_packet/fir.cc

FMT=4(FIR), PT=206(PSFB)
  // RFC 4585: Feedback format.
  // Common packet format:
  //
  //   0                   1                   2                   3
  //   0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
  //  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
  //  |V=2|P|   FMT   |       PT      |          length               |
  //  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
  //  |                  SSRC of packet sender                        |
  //  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
  //  |             SSRC of media source (unused) = 0                 |
  //  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
  //  :            Feedback Control Information (FCI)                 :
  //  :     	                                                          :
  // Full intra request (FIR) (RFC 5104).
  // The Feedback Control Information (FCI) for the Full Intra Request
  // consists of one or more FCI entries.
  // FCI:
  //   0                   1                   2                   3
  //   0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
  //  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
  //  |                              SSRC                             |
  //  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
  //  | Seq nr.       |    Reserved = 0                               |
  //  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

```