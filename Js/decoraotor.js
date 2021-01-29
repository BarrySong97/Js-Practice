//类装饰器
function classDecorator(target) {
  target.hasDecorator = true;
  return target;
}

@classDecorator
class Button {}

console.log("Button 是否被装饰了：", Button.hasDecorator);

//方法装饰器
function funcDecorator(target, name, descriptor) {
  let originalMethod = descriptor.value;
  descriptor.value = function () {
    console.log("我是Func的装饰器逻辑");
    return originalMethod.apply(this, arguments);
  };
  return descriptor;
}

class Button1 {
  @funcDecorator
  onClick() {
    console.log("我是Func的原有逻辑");
  }
}

const button1 = new Button1();
button1.onClick();
