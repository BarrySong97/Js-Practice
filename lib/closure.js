"use strict";

function init() {
  let name = "我是 init() 函数的变量 name"; // name 是一个被 init 创建的局部变量

  function displayName() {
    // displayName() 是内部函数，一个闭包
    console.log(name); // 使用了父函数中声明的变量
  }

  displayName();
}

function makeFunc() {
  let name = "我是 init() 函数的变量 name";

  function displayName() {
    console.log(name);
  }

  return displayName;
}

var myFunc = makeFunc();

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10); // console.log(add5(2)); // 7
// console.log(add10(2)); // 12

function name() {
  var privateCounter = 0;

  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment: function increment() {
      changeBy(1);
    },
    decrement: function decrement() {
      changeBy(-1);
    },
    value: function value() {
      return privateCounter;
    }
  };
}

var Counter = function () {
  var privateCounter = 0;

  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment: function increment() {
      changeBy(1);
    },
    decrement: function decrement() {
      changeBy(-1);
    },
    value: function value() {
      return privateCounter;
    }
  };
}();

console.log(Counter.value()); //0

Counter.increment();
console.log(Counter.value()); //1

let test = function test() {
  return {
    increment: function increment() {
      console.log(1);
    },
    decrement: function decrement() {
      console.log(-1);
    },
    value: function value() {
      return 0;
    }
  };
};