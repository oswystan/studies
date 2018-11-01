# Distributed System Theories

## 概述总结

分布式系统主要解决单机系统中出现的如下问题：

- 计算能力不足
- 存储能力不足
- 可用性较差，SPF会导致整个业务无法使用


## contents
- storge: Ralational-DB/Mongo, Cassandra, HDFS
- computation: Hadoop, Spark, Storm, MapReduce
- synchronization: NTP, vector clocks
- consensus: Paxos, Zookeeper
- messaging: Kafka

## CAP
- consistency
- availability
- partition tolerance 

## ACID

- atomic

- consistency 
- isolated
- durable 

## failure detector
heart-beat based.


## raft协议
[raft图解](http://thesecretlivesofdata.com/raft/)

三个角色：leader, follower, candidate

主要操作：<BR>

- leader election
  每个server被赋予随机事件长度的term，在term超时的时候发起leader election，随后将自己的角色变为candidate，发送的leader election消息中包含当前的term id和log entry id，如果发起者的termid和logentry id最大，则获胜，否则就要等待超时进行下次选举；
    * 每个term结束的时候，term_id++;
    * 选举失败，则将发起leader election的server状态变为follower
    * 以收到超过半数的follower的结果为最终结果，这样防止出现follower宕机导致无法进行选举的情况出现（当然如果有一个follower提出反对，则本轮选举失败??）

- log replication

    * leader根据自己的log id发送AppendEntriesRPC，然后follower查找这个log id是否存在，如果不存在则拒绝
    * leader只要收到拒绝的消息，就将log id--然后继续发送AppendEntriesRPC消息，知道所有的follower返回接受为止。
    * leader根据找到的log id，持续发送AppendEntriesRPC记录，知道log id = leader当前的log id为止。
- log压缩

对于log无限增长的问题，raft的解决方案是为log生成快照，然后对快照内容进行归档，只在server端保留last log id信息，其他全部删掉；

- 集群成员调整

## 疑问
- 为什么需要读写分离，什么情况下使用
- 数据分块存储有哪些问题，有哪些解决方案
- 一致性hash有哪些算法，使用场景是什么

### raft协议
- 如果正在处理一个logentry时发生lead election，如何处理？
- 在集群中新成员加入或者老成员退出流程是什么
- 在集群初始化状态时，谁先发起leader election，是否需要等待term超时？


### 2PC和3PC的区别
    * 2PC包含propose和commit阶段，而3PC包含prose+precommit+commit阶段
    * 3PC对于对于slave的容错性更加好：对于slave在不同阶段宕机，都可以进行恢复；但2PC则在slave宕机的时候会一直等待其恢复，在这段时间内，系统无法响应外部请求，因此3PC的可用性较2PC更高；
    * 2PC仅使用2个RTT就可以完成一次客户端请求处理，但是3PC需要3个RTT，时间上相对较长

*RTT: Round-Trip Time*

## Hadoop架构

[参考](http://www.36dsj.com/archives/67078)


## 一致性hash
主要是解决分布式的partition的问题，主要应用场景：

* 负载均衡，要求对于一个源的所有请求都路由到一个固定的服务器上，同时保证在删除或添加节点的时候保证负载的平衡性
* 分布式缓存，要求对同一个源的缓存只放到一台服务器上。

关键点：

* 使用虚拟节点保证平衡性
* 对每个虚拟节点，加入到系统中时就要保证节点均衡分散在节点环上；
* 对于节点的删除和加入，还是需要迁移数据的，主要保证数据的迁移具有局部性就可以了。

### 疑问
- 一致性hash是如何保证平衡性的，如何保证加入了虚拟节点之后是如何保证平衡性和单调性的

## 高并发

- 分析系统瓶颈
- 优先单机优化
    * 使用非阻塞IO - libuv
    * 使用多线程、多进程机制，充分利用CPU多核处理器
    * 使用内存池、线程池，减少资源创建和释放开销
    * 购买高性能主机
- 集群化处理
    * 对静态资源使用独立的缓存服务器
    * 优化数据库
        * 优化SQL语句
        * 优化索引
        * 数据分库分表
        * 读写分离
    * 使用负载均衡技术把计算分散到多个机器上
    * 使用分布式的文件系统，数据分散存储，提升并行读取写入性能
