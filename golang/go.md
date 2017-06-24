## best practises

### profiling

- 使用regex前先compile，避免每次都编译导致的cpu消耗
- 使用带cache的io函数
- 使用缓冲池避免频繁内存申请和释放导致的CPU消耗和GC

### code structure
