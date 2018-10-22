# NEW FEATURES 

## generator function

```javascript
functioin taskA() {
    //do task
    return 'A';
}
function taskB() {
    //do task 
    return 'B';
}
function* gen() {
    yield* [taskA, taskB]; //如果这里没有*，则直接一次性返回整个数组；
}
for(let i of gen) {
    i.call();
}
```

- generator函数返回一个迭代器对象`{value: xx, done: true/false}`，其中value等于taskA/taskB的返回值。

## async / await

## promise object

## class

## symbol

- ES6中引入的一种新的原始数据类型，用来产生一个全局唯一标识；

- 用法：

  - `var s1 = Symbol()`或者`var s1 = Symbol("identifier")`或者`var s1 = Symbol.for("identifier")`，可以用`s1`作为对象的属性进行访问，这样可以保证不和现有的对象属性重复

  - 使用Symbol.keyFor(s1)返回使用`Symbol.for("identifier")`变量的"identifier"

  - 用于定义对象属性：

    ```javascript
    var attr1 = Symbol();
    var attr2 = Symbol();
    var a = {
        [attr1]: "hello",
        [attr2]: function() {
            return false;
        }
    }
    
    a[attr1];
    a[attr2]();
    ```

- 特性：不能被for...in、for...of、Object.keys()、Object.getOwnPropertyNames()访问到，但可以使用Object.getownPropertySymbols()访问到;

- 另外还有11个内置的Symbol属性被用作特殊用途：

  - hasInstance: 当调用`var1 instanceof MyObject`的时候被调用
  - species: 函数值，用于返回自定义的构造函数
  - isConcatSpreadable：布尔值，对象需要含有`{length: 2, 0:'a', 1:'b'}`，在调用Array.concat是设置是否可以展开
  - toPrimitive：用于自定义对象与基本数据类型之间的转换和比较
  - match：函数值，在调用String.prototype.match()时被调用
  - replace：函数值，在调用String.prototype.replace()时被调用
  - split：函数值，在调用String.prototype.split()时被调用
  - iterator：函数值，指向默认的遍历器方法，即在对对象进行`for...of`的时候会被调用
  - toStringTag：函数值，在调用对象.toString()函数的时候被调用
  - unscopables：指向一个对象，用于设置with关键字时，那些属性会被with环境**排除**

## module

## function extension

## MISC

