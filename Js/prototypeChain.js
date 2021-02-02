
// // 父对象
// function SuperType() {
//     this.property = true;
// }

// // 对象的prototype
// SuperType.prototype.getSuperValue = function () {
//     return this.property;
// };
// // 子对象
// function SubType() {
//     this.subproperty = false;
// }
// // 继承 
// SubType.prototype = new SuperType();

// SubType.prototype.getSubValue = function () {
//     return this.subproperty;
// };

// let instance = new SubType();
// console.log(instance.getSuperValue()); // true


// function SuperType() {
//     this.property = true;
// }

// SuperType.prototype.getSuperValue = function () {
//     return this.property;
// };
// function SubType() {
//     this.subproperty = false;
// }
// // 继承 SuperType
// SubType.prototype = new SuperType();
// // 新方法
// SubType.prototype.getSubValue = function () {
//     return this.subproperty;
// };
// // 覆盖已有的方法
// SubType.prototype.getSuperValue = function () {
//     return false;
// };
// let instance = new SubType();
// console.log(instance.getSuperValue());// false
// console.log(instance.getSubValue()); // false


// function SuperType() {
//     this.colors = ["red", "blue", "green"];
// }
// function SubType() { }
// // 继承 SuperType
// SubType.prototype = new SuperType();
// let instance1 = new SubType();
// instance1.colors.push("black");
// console.log(instance1.colors); // "red,blue,green,black"
// let instance2 = new SubType();
// console.log(instance2.colors); // "red,blue,green,black"


// function SuperType() {
//     this.colors = ["red", "blue", "green"];
// }
// function SubType() {
//     // 继承 SuperType
//     SuperType.call(this);
// }
// let instance1 = new SubType();
// instance1.colors.push("black");
// console.log(instance1.colors); // "red,blue,green,black"
// let instance2 = new SubType();
// // console.log(instance2.colors); // "red,blue,green" 

// function SuperType(name) {
//     this.name = name;
//     this.colors = ["red", "blue", "green"];
// }

// SuperType.prototype.sayName = function () {
//     console.log(this.name);
// };

// function SubType(name, age) {
//     // 继承属性
//     SuperType.call(this, name);
//     this.age = age;
// }

// // 继承方法
// SubType.prototype = new SuperType();

// SubType.prototype.sayAge = function () {
//     console.log(this.age);
// };

// let instance1 = new SubType("Nicholas", 29);
// instance1.colors.push("black");
// console.log(instance1.colors); // "red,blue,green,black"
// instance1.sayName(); // "Nicholas";
// instance1.sayAge(); // 29
// let instance2 = new SubType("Greg", 27);
// console.log(instance2.colors); // "red,blue,green"
// instance2.sayName(); // "Greg";
// instance2.sayAge(); // 27 


// function SuperType(name) {
//     this.name = name;
//     this.colors = ["red", "blue", "green"];
// }
// SuperType.prototype.sayName = function () {
//     console.log(this.name);
// };
// function SubType(name, age) {
//     SuperType.call(this, name); // 第二次调用 SuperType()
//     this.age = age;
// }
// SubType.prototype = new SuperType(); // 第一次调用 SuperType()
// SubType.prototype.constructor = SubType;
// SubType.prototype.sayAge = function () {
//     console.log(this.age);
// }; 

function object(o) {
    function F() { }
    F.prototype = o;
    return new F();
}


function inheritPrototype(subType, superType) {
    let prototype = object(superType.prototype); // 创建对象
    prototype.constructor = subType; // 增强对象
    subType.prototype = prototype; // 赋值对象
}

function SuperType(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function () {
    console.log(this.name);
};
function SubType(name, age) {
    SuperType.call(this, name);
    this.age = age;
}
inheritPrototype(SubType, SuperType);
SubType.prototype.sayAge = function () {
    console.log(this.age);
}; 