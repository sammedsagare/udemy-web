//type aliases
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type Guitarist = {
  name: string;
  active?: boolean;
  albums: (string | number)[];
}

type UserID = stringOrNumber

// Literal types

let myName: "Sammed"
let username: "sammedsagare" | "johnnywalker" | "amywatson"
username = "sammedsagare"

//functions
const add = (a: number, b: number) => {
  return a + b
}

const logMessage = (message: any): void => {
  console.log(message);
}

logMessage("Hello")
logMessage(add(2, 3))

let sub = function (c: number, d: number): number {
  return c - d
}

//type mathFunc = (a: number, b: number) => number
interface mathFunc {
  (a: number, b: number): number
}

let multiply: mathFunc = function (c, d) {
  return c * d
}

logMessage(multiply(4, 5))

//optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== 'undefined') {
    return a + b + c
  } return a + b
}
const sumAll = (a: number, b: number, c: number = 2): number => {
  return a + b + c
}

logMessage(addAll(2, 3, 2))
logMessage(addAll(2, 3))
logMessage(sumAll(2, 3))

// Rest Parameters
const total = (a:number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev+curr)
}

logMessage(total(1, 2, 5))

const createErr = (errMsg: string): never => {
  throw new Error(errMsg)
}

const infinite =  () => {
  let i: number = 1
  while(true) {
    i++
    if(i>100) break
  }
}

// custom typeguard
const isNumber = (value: any): boolean => {
  return typeof value === 'number' ? true : false
}

// use of the never type
const numberOrString = (value: number | string): string => {
  if( typeof value === "string") return 'string'
  if( typeof value === "number") return 'number'
  return createErr("This should never happen!")
}