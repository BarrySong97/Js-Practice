function MyPromise(executor) {
    this.value = null;
    this.reason = null;
    this.status = "pending";

    this.rejectedQueue = [];
    this.resolvedQueue = [];
    let self = this;

    function resolve(value) {

        if (self.status !== "pending") {
            return;
        }
        self.value = value;
        self.status = "resolved";

        self.resolvedQueue.forEach((resolved) => {
            resolved(value);
        })

    }

    function reject(value) {
        if (self.status !== "pending") {
            return;
        }
        self.reason = value;
        self.status = "rejected"
        self.rejectedQueue.forEach((rejected) => {
            rejected(value);
        })

    }

    executor(resolve, reject);

}

MyPromise.prototype.then = function (onResolved, onRejected) {
    // 注意，onResolved 和 onRejected必须是函数；如果不是，我们此处用一个透传来兜底
    if (typeof onResolved !== 'function') {
        onResolved = function (x) { return x };
    }
    if (typeof onRejected !== 'function') {
        onRejected = function (e) { throw e };
    }

    let self = this;
    if (self.status === "resolved") {
        onRejected(self.value);
    } else if (self.status === 'rejected') {
        onRejected(self.value);
    } else {
        self.rejectedQueue.push(onRejected);
        self.resolvedQueue.push(onResolved);
    }

    return this;
}

let mp = new MyPromise((re, rj) => {
   setTimeout(() => re("resolved"), 5000);
})

mp.then((res) => {
    console.log("value: " + res);
    console.log("任务 1");
}, (rej) => {

}).then((res) => {
    console.log("value: " + res);
    console.log("任务 2");
}, (rej) => {

})

