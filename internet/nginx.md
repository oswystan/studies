## 知识点
- nginx使用`ngx_process_slot`变量来表示当前是哪个进程，worker进程重启后slot不变
- nginx当一个worker的连接数超过配置的7/8的时候，才会禁止当前worker监听后续的连接请求，这样可以把复杂均衡到其他worker上，从而利用CPU多核来并行处理
- 一个nginx worker进程是一个单线程进程，因此可以不用考虑锁问题

## Q&A
- **如何在workder进程中，关闭单个服务端口，以便服务隔离**
    > 不可以，nginx默认所有的worker可以处理所有的服务请求，使用`accept_mutex`来限制每个workder进程谁来负责accept，如果在某个workder关闭了一些服务的端口监听，则会导致服务无法正常建立监听。

- **upstream机制中，是每个后端服务器建立一个连接还是每个客户端连接建立一个队后端服务的连接**
    > 针对客户端的连接创建与后端服务器的连接，客户端关闭后，代理会关闭和后端服务器的连接

## reference
(如何向模块传递参数)[http://www.voidcn.com/article/p-fbgcpxrz-kv.html]
(location规则匹配原则)[https://blog.csdn.net/tjcyjd/article/details/50897959]
