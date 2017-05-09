## contents
- storge: Ralational-DB/Mongo, Cassandra, HDFS
- computation: Hadoop, Spark, Storm, MapReduce
- synchronization: NTP, vector clocks
- consensus: Paxos, Zookeeper
- messaging: Kafka

## CAP
consistency <BR>
availability <BR>
partiation tolerance <BR>

## ACID

atomic <BR>
consistency <BR>
isolated <BR>
durable <BR>

## failure detector
heart-beat based.


## raft协议
[raft图解](http://thesecretlivesofdata.com/raft/)

三个角色：leader, follower, candidate
主要操作：
- leader election
每个server被赋予随机事件长度的term，在term超时的时候发起leader election，随后将自己的角色变为candidate，发送的leader election消息中包含当前的term id和log entry id，如果发起者的termid和logentry id最大，则获胜，否则就要等待超时进行下次选举；

    * 每个term结束的时候，term_id++;
    * 选举失败，则将发起leader election的server状态变为follower
    * 以收到超过半数的follower的结果为最终结果，这样防止出现follower宕机导致无法进行选举的情况出现（当然如果有一个follower提出反对，则本轮选举失败??）

- log replication

    * leader根据自己的log id发送AppendEntriesRPC，然后follower查找这个log id是否存在，如果不存在则拒绝
    * leader只要收到拒绝的消息，就讲log id--然后继续发送AppendEntriesRPC消息，知道所有的follower返回接受为止。
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
