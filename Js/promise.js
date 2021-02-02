// let p1 = new Promise((resolve, reject) => resolve());
// setTimeout(console.log, 0, p1); // Promise <resolved>
// let p2 = new Promise((resolve, reject) => reject());
// setTimeout(console.log, 0, p2); // Promise <rejected>
// new Promise(() => setTimeout(console.log, 0, 'executor'));
// setTimeout(console.log, 0, 'promise initialized');


// let p = new Promise((resolve, reject) => setTimeout(resolve, 1000)); 
// setTimeout(console.log, 0, p); // Promise <pending>

// let p = new Promise((resolve, reject) => {
//     setTimeout(reject, 10000); // 10 秒后调用 reject()
//     // 执行函数的逻辑
// });
// setTimeout(console.log, 0, p);
//    setTimeout(console.log, 11000, p);


// setTimeout(console.log, 0, Promise.resolve());
// Promise <resolved>: undefined
// setTimeout(console.log, 0, Promise.resolve(3));

// try {
//     throw new Error('foo');
// } catch (e) {
//     console.log(e); // Error: foo
// }
// try {
//     Promise.reject(new Error('bar'));
// } catch (e) {
//     console.log(e);
// }
// Uncaught (in promise) Error: bar


function onResolved(id) {
    setTimeout(console.log, 0, id, 'resolved');
}

function onRejected(id) {
    setTimeout(console.log, 0, id, 'rejected');
}
let p1 = new Promise((resolve, reject) => setTimeout(resolve, 3000));
let p2 = new Promise((resolve, reject) => setTimeout(reject, 3000));
p1.then(() => onResolved('p1'),
    () => onRejected('p1'));
p2.then(() => onResolved('p2'),
    () => onRejected('p2'));