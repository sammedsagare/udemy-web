"use strict";
class Coder {
    constructor(name, music, age, lang = "Javascript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Your age is ${this.age}`;
    }
}
const X = new Coder("Sammed", "Photograph", 18, "Javascript");
console.log(X.getAge());
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I code in ${this.lang}`;
    }
}
const Sammed = new WebDev('Lenovo', "Sammed", "Pop", 18);
console.log(Sammed.getLang());
console.log(Sammed.computer);
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} ${this.instrument}`;
    }
}
const Test = new Guitarist("Sammed", "Casio");
console.log(Test.play("plays"));
//////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const One = new Peeps("One");
const Two = new Peeps("Two");
const Three = new Peeps("Three");
console.log(Peeps.count);
///////////////////////////////
class Technology {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Param is not an array of strings");
    }
}
const myTech = new Technology();
myTech.data = ["React", "Next"];
console.log(myTech.data);
myTech.data = [...myTech.data, "Vanila"];
console.log(myTech.data);
myTech.data = [...myTech.data, "MERN"];
console.log(myTech.data);
