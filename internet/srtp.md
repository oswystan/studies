## replay protection
使用滑动窗口的概念，记录一个窗口内收到的数据包信息，每次收到一个新的数据包，更新滑动窗口的记录信息或者滑动窗口位置．

##完整性保护方案


## key生成，交换，加密，解密过程，key刷新
- session encr_key
- session auth_key
- session salt_key

## 算法
- 加解密：AES-CM, NULL
- 消息完整性: HMAC-SHA1
- key生成：AES-CM


