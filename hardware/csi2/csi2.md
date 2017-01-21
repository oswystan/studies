## CSI-2架构
![arch](./csi2-arch.png)

- CSI2包含一个发送端transmitter和一个接收端receiver
    - 发送端和接收端可以有最多4路数据传输通道和1个clock通道
    - 每个lane（通道）包含2根物理连线
- CCI：一个I2C fastmode兼容协议，支持400K数据传输和7bit地址
- 一般transmitter作为CCI的slave，receiver作为CCI的master端

### 分层结构图
![layer](./csi2-layer.png)


## 打包类型与结构
![](./csi2-package.png)

- 打包格式分为：长包和短包格式
- 长包格式：

![](./csi2-longpack.png)

- 短包格式：

![](./csi2-shortpack.png)

- 包组合举例：

![](./csi2-package-example.png)

- DT类型表

![](./csi2-dt.png)

![](./csi2-shortpack_dt.png)

## 数据传输

