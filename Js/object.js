let person = {};
Object.defineProperty(person, "name", {
    writable: false,
    value: "Nicholas"
});
console.log(person.name); // "Nicholas"
person.name = "Greg";
console.log(person.name); // "Nicholas"


// get set useage
let book = {
    year_: 2017,
    edition: 1
};
Object.defineProperty(book, "year", {
    get() {
        return this.year_;
    },
    set(newValue) {
        if (newValue > 2017) {
            this.year_ = newValue;
            this.edition += newValue - 2017;
        }
    }
});
book.year = 2018;
console.log(book.edition); // 2

// defineProperties
// let book = {};
// Object.defineProperties(book, {
//     year_: {
//         value: 2017
//     },
//     edition: {
//         value: 1
//     },
//     year: {
//         get() {
//             return this.year_;
//         },

//         set(newValue) {
//             if (newValue > 2017) {
//                 this.year_ = newValue;
//                 this.edition += newValue - 2017;
//             }
//         }
//     }
// });

//mixin

let sayHiMixin = {
    sayHi() {
        console.log(`Hello ${this.name}`);
    },
    sayBye() {
        console.log(`Bye ${this.name}`);
    }
};

class User {
    constructor(name) {
        this.name = name;
    }
}

// copy the methods
Object.assign(User.prototype, sayHiMixin);

// now User can say hi
new User("Dude").sayHi(); // Hello Dude!``



// computed

const nameKey = 'name';
const ageKey = 'age';
let jobKey = 'job';
let person1 = {};
person1[nameKey] = 'Matt';
person1[ageKey] = 27;
person1[jobKey] = 'Software engineer'

console.log(person1.job);
jobKey = "h"
console.log(person1.h);


function Person2(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function () {
        console.log(this.name);
    };
}
let person2 = new Person2("Greg", 27, "Doctor");
person2.sayName(); // Greg
let keys = Object.keys(Person2.prototype);
console.log(keys);
let keys2 = Object.keys(person2);
console.log(keys2);
// let key3 = Object.getOwnPropertyNames(person2.prototype);
// console.log(key3);

Person.prototype = {
    name: "Nicholas",
    age: 29,
    job: "Software Engineer",
    sayName() {
        console.log(this.name);
    }
};