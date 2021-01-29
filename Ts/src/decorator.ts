//类装饰器
function addAge(constructor: Function) {
  constructor.prototype.age = 18;
  console.log("constructor: ", constructor);
}

//方法装饰器
function spite(something: string) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    let originalValue = descriptor.value;
    descriptor.value = function () {
      console.log("spite " + something);
      return originalValue.apply(this, arguments);
    };

    return descriptor;
  };
}

@addAge
class Person {
  name: string;
  age!: number;
  constructor() {
    this.name = "xiaomuzhu";
  }

  @spite("something")
  say() {
    console.log("say something");
  }
}

let p = new Person();
console.log(p.age);
p.say();
console.log(Person.prototype);
