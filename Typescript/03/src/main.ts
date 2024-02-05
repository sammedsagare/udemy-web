let stringArr = ["one", "two", "three"];
let guitars = ["Strat", "Les Paul", 5150];
let mixedArr = ["EVH", 1984, true];

stringArr[0] = "1";
stringArr.push("4_four");

guitars[0] = 2134;
guitars.unshift("JIM");

let test = [];
let bands: string[] = [];
bands.push("XYZ");

// tuple
let myTuple: [string, number, boolean] = ["Sammed", 18, true];

let mixed = ["Sammed", 1, false];

myTuple[1] = 21;

//objects
let myObj: object;
myObj = [];

myObj = bands;
myObj = {};

const exampleObj = {
  prop1: "Sammed",
  prop2: true,
};

exampleObj.prop2 = false;

interface Guitarist {
  name: string;
  active?: boolean;
  albums: (string | number)[];
}

let evh: Guitarist = {
  name: "Eddie",
  active: false,
  albums: [1241, 456, "yo"],
};

let jp: Guitarist = {
  name: "Jimmy",
  active: true,
  albums: ["I", "II", "VI"],
};

const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name.toUpperCase()}`;
  }
  return `Hello`;
};

console.log(greetGuitarist(jp));

//Enums

enum Grade {
    U,
    D,
    C,
    B,
    A,
}

console.log(Grade.B);

