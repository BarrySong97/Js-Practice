"use strict";

var _class, _class2;

function _applyDecoratedDescriptor(
  target,
  property,
  decorators,
  descriptor,
  context
) {
  var desc = {};
  Object.keys(descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;
  if ("value" in desc || desc.initializer) {
    desc.writable = true;
  }
  desc = decorators
    .slice()
    .reverse()
    .reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);
  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }
  if (desc.initializer === void 0) {
    Object.defineProperty(target, property, desc);
    desc = null;
  }
  return desc;
}

//类装饰器
function classDecorator(target) {
  target.hasDecorator = true;
  return target;
}

let Button = classDecorator((_class = class Button {})) || _class;

console.log("Button 是否被装饰了：", Button.hasDecorator); //方法装饰器

function funcDecorator(target, name, descriptor) {
  let originalMethod = descriptor.value;

  descriptor.value = function () {
    console.log("我是Func的装饰器逻辑");
    return originalMethod.apply(this, arguments);
  };

  return descriptor;
}

let Button1 =
  ((_class2 = class Button1 {
    onClick() {
      console.log("我是Func的原有逻辑");
    }
  }),
  _applyDecoratedDescriptor(
    _class2.prototype,
    "onClick",
    [funcDecorator],
    Object.getOwnPropertyDescriptor(_class2.prototype, "onClick"),
    _class2.prototype
  ),
  _class2);
const button1 = new Button1();
button1.onClick();
