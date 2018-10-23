[TOC]

# NEW FEATURES 

## generator function

```javascript
function* generatorFunction() {
    let b = yield 'a';
    return b;
}

var gen = generatorFunction();
gen.next('b');
```

- generator function: 一种特殊类型的函数，声明的时候需要用*表示，函数体内部需要包含>=0个yield语句

- generator object：生成器对象，调用generator function后返回的对象，可以通过next()函数来调用生成器函数体内部功能；

- gen.next(val)：这个语句可以设置generator function中yield语句的返回值

- gen.return(val)：这个语句可以设置next()函数的返回值`{value: val, done: true}`

- generator function也可以作为对象的成员

  > ```javascript
  > class A
  > {
  >     * [Symbol.iterator]() {
  >         yield 'field1';
  >         yield 'field2';
  >     }
  > }
  > 
  > var a = new A();
  > for(let i of a) {
  >     log(i); // a, b
  > }
  > ```
  >
  >

- yield：

  - `yield; // {value: undefined, done: true/false}` 
  - `yield 'a' //{value: 'a', done: true/false}`
  - `yield func() //{value: ret_val_of_func, done: true/false}`
  - `yield* func()`：调用另外一个生成器函数
  - `yield new Promise((resolve, reject)=>{resolve()})`
  - `yield [1, 2] //{value: [1,2], done:true/false}`
  - `yield* [1, 2] //{value: 1, done: false} {value:2, done: false}`

- for (let i of gen)：i为返回的生成器对象的value；

### reference

[Understanding ES6 Generators](https://medium.com/dailyjs/a-simple-guide-to-understanding-javascript-es6-generators-d1c350551950)

## async / await

## promise object

- 三种状态：Pending, Resolved, Rejected

- 例子

  > ```javascript
  > var promise = new Promise(function(resolve, reject) {
  >     log("in function"); // called immediately
  >     if (succ) {
  >         resolve(0);
  >     } else {
  >         reject(1);
  >     }
  > });
  > 
  > promise.then( e => {
  >     log("succ", e) // called in next loop e = 0
  > }).catch( e => {
  >     log("fail", e); // called in next loop e = 1
  > });
  > 
  > ```
  >
  >

- Promise.then(f)：设置下一步需要执行的操作，参数为resolve时给定的值，并返回一个新的promise对象

- Promise.catch(f)：设置出错时需要执行的操作，参数为reject时给定的值，并返回一个新的promise的对象；

- Promise.resolve()：返回一个新的Resolved状态的promise对象

- Promise.reject()：返回一个新的Rejected状态的promise对象；

- Promise.all([p1, p2, p3])：等待所有promise对象都变为Resolved状态或者有其中一个变为Rejected状态，调用then

- Promise.race([p1, p2, p3])：只要其中一个promise状态变为Resolved状态就返回，并调用then

  ```javascript
  const log = console.log;
  
  var succ = 1;
  let p1 = new Promise(function(resolve, reject) {
      setTimeout(()=>{
          log("in p1");
          resolve(0);
      }, 1000);
  });
  
  let p2 = new Promise(function(resolve, reject) {
      setTimeout(()=>{
          log("in p2");
          resolve(0);
      }, 100);
  });
  
  Promise.all([p1, p2]).then( e=>log("succ")).catch(e=>log("fail"));
  // in p2
  // in p1
  // succ
  Promise.race([p1, p2]).then( e=>log("succ")).catch(e=>log("fail"));
  // p2
  // succ
  // p1
  
  ```


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

