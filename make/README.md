## > make命令行选项

```
## 打印make数据库信息，可以看到目标和依赖被展开后的值，方便定位
make -p

##生成的文件中.DEFAULT_GOAL表示默认的目标，可以看看是否正确

## 尽可能生成更多目标
make -k

```

## > 知识点

> 双冒号规则允许为一个目标定义不同的规则，当任何一个规则的依赖被更新时，都会触发对一个的规则被执行；当一个双冒号规则没有依赖时，会被无条件执行；

```
PROG :: foo.c
	gcc $< -o $@

PROG :: bar.c
	gcc $< -o $@
```

> 静态规则: 一种多目标的规则，对于多个不同目标，可以根据不同类的目标制定不同的依赖和生成规则；其最大的优势是可以使用pattern来进行规则匹配，而不用制定具体的依赖名，另外可以使用$*获取目标的“茎”

```
TARGETS ...: TARGET-PATTERN: PREREQ-PATTERNS
	COMMANDS...
```

> order-only依赖：当文件依赖更新的时候并不重新构建目标，但依赖不存在的时候，会先生成依赖，然后在看目标

```
target: dependency-1 | order-dependency
	commands
```

> 规则中也可以使用shell变量，但是使用的时候需要注意，保证shell变量赋值和使用在同一行，否则会被认为shell变量没有定义，另外shell变量使用$$xxx来解引用

```
all:
	tmp="OK" && echo $$tmp
```


