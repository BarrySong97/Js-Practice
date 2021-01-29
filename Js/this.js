globalThis.a = 2;
let Test = {
  a: 1,
  func1: () => {
    console.log("箭头   => a: " + this.a);
  },

  func2() {
    console.log("普通匿名 => a: " + this.a);
  },

  func3: function () {
    console.log("变量匿名 => a:" + this.a);
  },

  func4() {
    return function () {
      console.log("闭包函数 => a: " + this.a);
    };
  },
};
console.log("\n 直接调用函数 -----------  \n");
Test.func1();
Test.func2();
Test.func3();
Test.func4()();
console.log("\n 赋值调用函数 ----------- \n");
let func1 = Test.func1;
let func2 = Test.func2;
let func3 = Test.func3;
let func4 = Test.func4();
func1();
func2();
func3();
func4();



let a = 0;
let func5 = () => {
    console.log("箭头函数 a: " + this.a)
}

func5()