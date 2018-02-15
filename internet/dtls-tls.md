##组件
- 证书：需要发送给对端用于验证服务器的合法性
- 公钥：需要发送给对端，用于加密数据（这样本端就可以用自己的私钥解密数据，从而实现数据加解密）
- 私钥：用于解密对端发送的数据



##参考
[SSL握手过程及参考代码](http://blog.csdn.net/sjin_1314/article/details/21043613)


## program

```
./openssl s_server -dtls -cert /home/winner/usr/project/github/relayserver/cert.pem -key /home/winner/usr/project/github/relayserver/key.pem -accept 8881
./openssl s_client -connect 127.0.0.1:8881 -cert /home/winner/usr/project/github/relayserver/cert.pem -key /home/winner/usr/project/github/relayserver/key.pem  -dtls
```
