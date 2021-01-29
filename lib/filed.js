"use strict";

function _foo(a, b) {
  console.log(b);
  return {
    foo: function foo(c) {
      return _foo(c, a);
    }
  };
}

var func1 = _foo(0); // undifined


func1.foo(1); // 0

func1.foo(2); // 0

func1.foo(3); // 0

var func2 = _foo(0).foo(1).foo(2).foo(3); // undefined, 0,1, 2


var func3 = _foo(0).foo(1); //undefined 0


func3.foo(2); // 1

func3.foo(3); // 1

class Test {
  constructor() {
    this.href = "baidu.com";
  }

}

let test = new Test();

function buildUrl() {
  let qs = "?debug=true"; // with (test) {
  //   // let url = href  + qs;
  //   var url = href + qs;
  // }

  return url;
}

console.log(buildUrl());