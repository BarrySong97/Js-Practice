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
var add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12

function name() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    },
  };
}

var Counter = (function () {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    },
  };
})();

let test = function () {
  return {
    increment: function () {
      console.log(1);
    },
    decrement: function () {
      console.log(-1);
    },
    value: function () {
      return 0;
    },
  };
};

console.log();
