function foo(a, b) {
  console.log(b);
  return {
    foo: function (c) {
      return foo(c, a);
    },
  };
}

var func1 = foo(0); // undifined
func1.foo(1); // 0
func1.foo(2); // 0
func1.foo(3); // 0
var func2 = foo(0).foo(1).foo(2).foo(3); // undefined, 0,1, 2
var func3 = foo(0).foo(1); //undefined 0
func3.foo(2); // 1
func3.foo(3); // 1


class Test {
  href = "baidu.com"
}

// let test = new Test();
// function buildUrl() {
//   let qs = "?debug=true";
//   // with (test) {
//   //   // let url = href  + qs;
//   //   var url = href + qs;
//   // }
//   return url;
// }

// console.log(buildUrl());


// var name = 'xiuyan';

// function showName() {
//   console.log(name);
// }

// function changeName() {
//   var name = 'BigBear';
//   showName();

// }

// changeName();



// function test() {
//   var num = []
//   var i

//   for (i = 0; i < 10; i++) {
//     num[i] = function () {
//       console.log(i)
//     }
//   }

//   return num[9]
// }

// test()()


// var test = (function () {
//   var num = 0
//   return () => {
//     return num++
//   }
// }())

// for (var i = 0; i < 10; i++) {
//   test()
// }

// console.log(test())


// var a = 1;
// function test() {
//   a = 2;
//   return function () {
//     console.log(a);
//   }
//   var a = 3;
// }
// test()();


// var b =1;
// function test2() {
//   var b = 3;
//   return function () {
//     console.log(b);
//   }
// }

// test2()();