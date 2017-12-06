## WebRTC

[WebRTC通信架构](https://www.2cto.com/kf/201701/587483.html)

[WebRTC中RTP/RTCP协议实现分析](http://www.jianshu.com/p/c84be6f3ddf3)

[如何为WebRTC项目选择信令协议](http://blog.csdn.net/fireroll/article/details/50782095)

[什么是WebRTC](https://segmentfault.com/a/1190000000436544)

[webrtc入门学习](http://www.cnblogs.com/happykoukou/p/5708095.html)

[ICE](https://zhuanlan.zhihu.com/p/25087606)

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

