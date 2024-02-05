"use strict";
let stringArr = ["one", "two", "three"];
let guitars = ["Strat", "Les Paul", 5150];
let mixedArr = ["EVH", 1984, true];
stringArr[0] = "1";
stringArr.push("4_four");
guitars[0] = 2134;
guitars.unshift("JIM");
let test = [];
let bands = [];
bands.push("XYZ");
// tuple
let myTuple = ["Sammed", 18, true];
let mixed = ["Sammed", 1, false];
myTuple[1] = 21;
//objects
let myObj;
myObj = [];
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Sammed",
    prop2: true,
};
exampleObj.prop2 = false;
let evh = {
    name: "Eddie",
    active: false,
    albums: [1241, 456, "yo"],
};
let jp = {
    name: "Jimmy",
    active: true,
    albums: ["I", "II", "VI"],
};
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}`;
    }
    return `Hello`;
};
console.log(greetGuitarist(jp));
//Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
console.log(Grade.B);
