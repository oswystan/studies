## audio codec used in webrtc

### opus
> Opus是一个有损声音编码的格式，由Xiph.Org基金会开发，之后由互联网工程任务组（IETF）进行标准化，目标用希望用单一格式包含声音和语音，取代Speex和Vorbis，且适用于网络上低延迟的即时声音传输，标准格式定义于RFC 6716文件。Opus格式是一个开放格式，使用上没有任何专利或限制。
Opus集成了两种声音编码的技术：以语音编码为导向的SILK和低延迟的CELT。Opus可以无缝调节高低比特率。在编码器内部它在较低比特率时使用线性预测编码在高比特率时候使用变换编码（在高低比特率交界处也使用两者结合的编码方式）。Opus具有非常低的算法延迟（默认为22.5 ms），非常适合用于低延迟语音通话的编码，像是网络上的即时声音流、即时同步声音旁白等等，此外Opus也可以通过降低编码比特率，达成更低的算法延迟，最低可以到5 ms。在多个听觉盲测中，Opus都比MP3、AAC、HE-AAC等常见格式，有更低的延迟和更好的声音压缩率

特性：
- 6 kb/秒到510 kb/秒的比特率；单一频道最高256 kb/秒
- 采样率从8 kHz（窄带）到48 kHz（全频）
- 帧大小从2.5毫秒到60毫秒
- 支持恒定比特率（CBR）、受约束比特率（CVBR）和可变比特率（VBR）
- 支持语音（SILK层）和音乐（CELT层）的单独或混合模式
- 支持单声道和立体声；支持多达255个音轨（多数据流的帧）
- 可动态调节比特率，音频带宽和帧大小
- 良好的鲁棒性丢失率和数据包丢失隐藏（PLC）
- 浮点和定点实现
- algorightm delay ranging from 5ms-65.2ms

带宽BANDWIDTH：
- 8-12 kbit/s for NB speech,
- 16-20 kbit/s for WB speech,
- 28-40 kbit/s for FB speech,
- 48-64 kbit/s for FB mono music, and
- 64-128 kbit/s for FB stereo music.

帧长FRAMESIZE:

```
204 #define OPUS_FRAMESIZE_ARG                   5000 /**< Select frame size from the argument (default) */
205 #define OPUS_FRAMESIZE_2_5_MS                5001 /**< Use 2.5 ms frames */
206 #define OPUS_FRAMESIZE_5_MS                  5002 /**< Use 5 ms frames */
207 #define OPUS_FRAMESIZE_10_MS                 5003 /**< Use 10 ms frames */
208 #define OPUS_FRAMESIZE_20_MS                 5004 /**< Use 20 ms frames */
209 #define OPUS_FRAMESIZE_40_MS                 5005 /**< Use 40 ms frames */
210 #define OPUS_FRAMESIZE_60_MS                 5006 /**< Use 60 ms frames */
```

**REFERENCE**
[rfc6716](https://tools.ietf.org/html/rfc6716)

### iSAC
> internet Speech Audio Codec (iSAC) is a wideband speech codec, developed by Global IP Solutions (GIPS) (acquired by Google Inc in 2011) It is suitable for VoIP applications and streaming audio. The encoded blocks have to be encapsulated in a suitable protocol for transport, e.g. RTP.
It is one of the codecs used by AIM Triton, the Gizmo5, QQ, and Google Talk. It was formerly a proprietary codec licensed by Global IP Solutions. As of June 2011, it is part of open source WebRTC project,[4] which includes a royalty-free license for iSAC when using the WebRTC codebase.

特性：

- Sampling frequency of 16 kHz (wideband) or 32 kHz (superwideband)[1][6][7]
- Adaptive and variable bit rate of 10 kbit/s to 32 kbit/s (wideband) or 10 kbit/s to 52 kbit/s (superwideband)[1][6][7]
- Adaptive packet size 30 to 60 ms (30ms or 60ms BUT NOT the middle values like 40ms or 50ms)
- Complexity comparable to G.722.2 at comparable bit-rates
- Algorithmic delay of frame size plus 3 ms

### G722
> G.722是1988年由国际电信联盟（ITU-T）订定音频编码方式，又称为ITU-T G.722，是第一个用于16KHz采样率的宽带语音编码算法。
G.722使用子带自适应差分脉冲编码调制（SB-ADPCM，sub-band adaptive differential pulse code modulation）技术，信号被分为两个子带，分别为高频子带和低频子带，高、低子带之间以4kHz为界，子带中的信号都用类似G.721建议的ADPCM进行编码。G.722采用64, 56和48kbps编码速率，采样率为每秒16000个样本，音频信号宽带达7KHz

### CN
> Comfort Noise

reference:
[rfc3389](https://tools.ietf.org/html/rfc3389)
 
### PCMU, PCMA
> also named as G.711;  There are two slightly different versions: μ-law, which is used primarily in North America, and A-law, which is in use in most other countries outside North America.

