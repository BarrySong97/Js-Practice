"use strict";
function greeter(person) {
    return "hello" + person;
}
const user = "barry allen";
greeter(user);
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
const a = Direction.Up;
console.log(Direction[0]);
