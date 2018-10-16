# new features

## generator function

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
  - species:用于构造函数
  - match:
  - isConcatSpreadable
  - replace
  - split
  - toPrimitive
  - iterator
  - toStringTag
  - unscopables

## module

## function extension

## MISC

