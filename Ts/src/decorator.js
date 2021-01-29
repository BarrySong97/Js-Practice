"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//类装饰器
function addAge(constructor) {
    constructor.prototype.age = 18;
    console.log("constructor: ", constructor);
}
//方法装饰器
function spite(something) {
    return function (target, propertyKey, descriptor) {
        let originalValue = descriptor.value;
        descriptor.value = function () {
            console.log("spite" + something);
            return originalValue.apply(this, arguments);
        };
        return descriptor;
    };
}
let Person = class Person {
    constructor() {
        this.name = "xiaomuzhu";
    }
    say() {
        console.log("say something");
    }
};
__decorate([
    spite("something")
], Person.prototype, "say", null);
Person = __decorate([
    addAge
], Person);
let p = new Person();
console.log(p.age);
p.say();
console.log(Person.prototype);
