##　消息类型
RTCP包经常包含多个RTCP消息(compound packet)，因此在处理的时候，需要循环处理所有收到的消息．

### 基础消息类型(rfc3550)：
- SR
- RR
- SDES
- BYE
- APP

### 扩展消息类型：
- RTPFB(**rfc5104**)
	- NACK
	- TMMBR + TMMBN
- PSFB(**rfc4585 + rfc5104**)
	- PLI
	- SLI
	- RPSI
	- FIR
	- TSTR + TSTN
	- VBCM
- XR(**rfc3611**)
	- RRTR
	- DLRR
	- VoipMetric

## 带宽控制
- 整个session的带宽需要应用层根据使用场景和网络状况给出，在SDP中设置．
- RTCP带宽最大占整个session带宽的5%，其中发送端RTCP带宽占整个RTCP带宽的1/4(25%)．

## 发送间隔计算
- 最小发送间隔5s．(也可以使用公式360/BW, 其中BW是当前session带宽，以kb/s位为单位)
- 发送间隔随着回话参与者的数量线性变化
- 首包的发送间隔：取0-min_interval/2之间的一个随机值．
- 需要根据收到和发送的RTCP包来估算平均RTCP包大小，以此最为控制参数
- 最终发送间隔：rand([0.5,1.5])*cal_interval
- 当回话中同时出现大量参与者时，需要一种补偿机制保证不会出现网络拥塞
- BYE包的发送需要特殊处理．
> 计算算法参考rfc3550 A.7

## 成员维护
- 收到RTP包，增加sender
- 收到RTCP包，增加成员
- 收到RTCP-BYE包，删除成员和sender

##　计算jitter

```C
int transit = arrival - r->ts;
int d = transit - s->transit;
s->transit = transit;
if (d < 0) d = -d;
s->jitter += (1./16.) * ((double)d - s->jitter);
```
> 参考rfc3550 A.8