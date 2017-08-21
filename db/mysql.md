## 数据库锁

按类型分

- 共享锁（S)
- 排它锁（X）

按粒度分

- 行级锁
- 页级锁
- 表级锁

意向锁：MySQL特有，是将锁定的对象分为多个层次，这就意味着事物希望在更细的粒度上加锁（数据库的结构：数据库=》表=》页=》行）

### 一致性非锁定读

是InnoDB实现的一种MVCC方式，指如果读取的数据正在执行DELETE或者UPDATE操作，这是读取操作并不等待行锁释放，而是读取当前行的一个snapshot data，这样可以极大的提高数据读取的并行性。snapshot data是使用undo段来实现的。

两种事物隔离级别：

- READ COMMITTED：总是读取锁定行的最新一份快照数据
- REPEATABLE READ： 总是读取事物开始时的一份快照数据，这样可以保证在当前事物内部多次读取得到的结构都是一样的

_InnoDB对于select语句操作使用一致性非锁定读_

### 一致性锁定读

MySQL支持如下两种方式的一致性锁定读

```
BEGIN

- SELECT ... FOR UPDATE;  (X lock)
- SELECT ... LOCK IN SHARE MODE; 	(S lock)

COMMIT
```

### 数据库锁相关的信息表

```
information_schema.INNODB_TRX
information_schema.INNODB_LOCKS
information_schema.INNODB_LOCKS_WAITS
```


## 实验

- mysql主从备份
- linux lvm机制
- 数据库备份操作命令使用：mysqldump, xtrabackup等