"use strict";

class MyPromise {
  static test() {}

  constructor(execute) {
    this.value = "";
    this.status = "pending";
    this.reason = "";
    execute(this.resolve, this.reject);
    let self = this;
  }

  resolve(value) {
    console.log(value);
    this.value = value;
    this.status = "resolved";
  }

  reject(reason) {
    this.reason = reason;
    this.status = "rejected";
  }

}

let p = new MyPromise((resolve, reject) => {
  resolve(123);
});
console.log(p);