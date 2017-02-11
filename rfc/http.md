##体系结构
> http属于TCP-IP协议的应用层协议，其依赖于底层的TCP协议来实现可靠数据传输。https是安全http协议，和http不同的是，其底层不是直接使用TCP协议来直接进行数据传输，而是通过TLS层进行加密后再调用TCP进行数据传输，以实现安全传输的目的。

> ![ HTTP分层结构图 ](./http-layer.png)

###报文结构
一个http报文分为请求报文和响应报文，结构包括：

- 起始行
- 报文首部
- 可选的报文实体

报文的上述三部分以CRLF进行分隔

####请求报文的语法结构

```
<method> <request url> <version>

<headers>

<entity-body>
```

####响应报文的语法结构：

```
<version> <status> <reason-phrase>

<headers>

<entity-body>

```

下图是一个请求和响应的实例：

![](./http-example.png)



## HTTP报文

### 请求方法
- GET：从服务器请求一个文档
- POST：将数据发给服务器处理
- PUT：将数据发给服务器存储
- DELETE：删除服务器上的文档
- OPTIONS：决定可以从服务器上可以执行哪些方法
- TRACE：对可能经过代理服务器传输到服务器上的报文进行跟踪

### 首部
- 通用首部

```
Date:
Via:
Connection:[close]
Cache-Control:
```

- 请求首部

```
User-Agent:
Authorization: Basic YnJpYW4tdG90dHk6T3ch
Accept: text/*, image/*,
Accept-Encoding: gzip
Accept-Charset: utf-8
Accept-Language: en;q=0.9
From: xxx@xxx.com # email地址
Host: www.hotbot.com:80 #对于虚拟主机服务有用
```

- 响应首部

```
Location: #地址重定向使用
Server: Microsoft-Internet-Information-Server/1.0 #用来识别服务器软件的
WWW-Authenticate: 
Allow: GET,HEAD,PUT,POST,DELETE #用于服务器向客户端告知对特定资源支持哪些操作
Range: [bytes=1-10|bytes=10-]
```
s
- 实体首部

```
Content-Type: [text/html|text/plain|image/jpeg|];charset=utf-8
Content-Encoding: [gzip|compress|deflate|indentity]
Content-Length:实体长度，如果实体为gzip，则为gzip编码后长度
Content-Language:
Content-Range: bytes 500-900/1200 #左边是范围，右边是总长度
Content-MD5:
ETag: 
Last-Modified:
Expires:
Cache-Control:
```

- 扩展首部

```
# 扩展请求首部
Client-ip: 201.10.12.23
Cookie:

#扩展响应首部
Set-Cookie: 

```


## HTTP代理
- 出口代理
> 将代理服务器放在本地网络的出口点上，以便控制流量和权限管理，禁止访问不该访问的网站内容

- 入口代理
> 一般放在ISP的访问点上，用来处理来自客户的聚合请求，ISP使用缓存代理来存储常用的文件副本，以提高用户的下载速度

- 反向代理
> 部署在网络边缘，放在web服务器之前，作为web服务器的替代物，将外部请求转发给web服务器，可以用作负载均衡

- 网络交换代理
> “可以将具有足够处理能力的代理放在网络之间的因特网对等交换点上，通过缓存来减轻因特网节点的拥塞，并对流量进行监视”

## FAQ

- 如何启用https？
> 这个主要是服务器端的工作，需要开启TLS/SSL编码，并指定一个证书以及公钥

- 如何启用http压缩机制？
> 服务端返回的响应中添加 `Content-Encoding: gzip` ，然后在实体出追加对应的压缩后的内容即可

- 如何实现http文件断点续传功能？
> 请求的head中加上 `Range: byte=10-100`，然后服务器的响应中会包含 `Content-Range: bytes 10-100/1000`

- HTTP代理、HTTP网关、HTTP反向代理的区别？
> HTTP代理扮演了客户端与服务器之间的中间人角色，在代理的两端使用的都是HTTP协议，
> 网关则充当了协议转换的角色，在网关的两端使用的是不同的协议。
> HTTP反向代理可以用作为服务器端的代理，用来接收真是HTTP请求，并转发给对应的服务器，可以用作负载均衡，也可以为请求找到对应的内容服务器进行请求分发的功能。

- 什么是HTTP长连接
> 在HTTP1.1中默认使用的就是长连接，即客户端在建立了和服务器之间的连接后，后续所有的请求都使用同一个TCP连接进行通讯，而不会对每个请求都建立一次连接，但是在http1.0版本中需要在首部中添加keep-alive进行特别声明才行。

- 什么是HTTP隧道
> 是使用HTTP的connect方法建立一个连接，并在连接中发送非http协议的数据的方法。一般把隧道部署在代理上。例如可以使用http连接来传输ssl流量，以穿过防火墙。
> 
> ![](./http-tunnel.png)













