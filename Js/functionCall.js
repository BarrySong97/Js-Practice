let greeting = function (action) {
    console.log(`hello ${this.name} do ${action}`);
}
// call

let obj = { name: "barry" }
greeting.call(obj, "speak");


// apply
let args = ["talk"];
greeting.apply(obj, args);

// bind
let newGreeting = greeting.bind(obj, "walk");
newGreeting();


// myCall

Function.prototype.myCall = function (context, ...args) {
    context.func = this;
    context.func(...args);
    delete context.func;
}

greeting.myCall(obj, "run");


Function.prototype.myBind = function (context, ...args) {
    let that = this;
    return (
        function () {
            context.func = that;
            context.func(args);
            delete context.func;
        }
    )
}

let newGreeting1 = greeting.myBind(obj, "play");
newGreeting1();