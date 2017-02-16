## node学习
源码位置：[nodejs](https://github.com/nodejs/node)

目录介绍：

```
src: 内置对象的源码目录，为C++代码，包含各种内置对象的wrap
lib: nodejs自带库文件，为js代码
deps: 包含所有第三方依赖的代码，包括npm，v8引擎，npm包管理工具
```


## TIPS
- 获取系统运行时异常

```
process.on('uncaughtException', function(err) {
    // do what you want
});

另外运行时错误可以通过try {} catch (e) {}语句来捕获的，不过对于回调函数就不行了，不过大牛们已经有了不少解决方案：domain
```