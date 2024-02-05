class Coder {

  secondLang!: string

  constructor(public readonly name: string, public music: string, private age: number, protected lang: string = "Javascript") {
    this.name = name
    this.music = music
    this.age = age
    this.lang = lang
  }

  public getAge() {
    return `Your age is ${this.age}`
  }

}

const X = new Coder( "Sammed", "Photograph", 18, "Javascript" )
console.log(X.getAge())

class WebDev extends Coder {

  constructor(public computer: string, name: string, music: string, age: number) {
    super(name, music, age)
    this.computer = computer
  }

  public getLang() {
    return `I code in ${this.lang}`
  }
}

const Sammed = new WebDev('Lenovo', "Sammed", "Pop", 18)
console.log(Sammed.getLang());
console.log(Sammed.computer);
///////////////////////////////////

interface Musician {
  name: string,
  instrument: string,
  play(action: string): string
}

class Guitarist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string): string {
      return `${this.name} ${action} ${this.instrument}`
  }
}

const Test = new Guitarist("Sammed", "Casio")
console.log(Test.play("plays"));
//////////////////////////////////////

class Peeps{
  static count: number = 0
  static getCount(): number {
    return Peeps.count
  }
  public id: number
  constructor(public name: string) {
    this.name = name
    this.id = ++Peeps.count
  }
}

const One = new Peeps("One")
const Two = new Peeps("Two")
const Three = new Peeps("Three")

console.log(Peeps.count);
///////////////////////////////

class Technology {
  private dataState: string[]

  constructor() {
    this.dataState = []
  }

  public get data(): string[] {
    return this.dataState
  }

  public set data(value: string[]) {
    if(Array.isArray(value) && value.every(el => typeof el === 'string')){
      this.dataState = value
      return
    } else throw new Error("Param is not an array of strings")
  }
}

const myTech = new Technology()
myTech.data = ["React", "Next"]
console.log(myTech.data);
myTech.data = [...myTech.data, "Vanila"]
console.log(myTech.data);
myTech.data = [...myTech.data, "MERN"]
console.log(myTech.data);

