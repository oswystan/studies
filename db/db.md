## 数据库优化
- 使用参数化的SQL语句，这样可以利用SQL语句缓存，防止每次都编译SQL；
- 复杂操作使用存储过程
- 使用索引（不是每个查询都能用到索引）
- 优化查询SQL语句：
	- 使用	