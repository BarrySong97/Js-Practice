function greeter(person: string) {
    return "hello" + person;
}

const user = "barry allen";

greeter(user);

enum Direction {
    Up ,
    Down ,
    Left,
    Right
}

const a = Direction.Up;
console.log(Direction[0]);


