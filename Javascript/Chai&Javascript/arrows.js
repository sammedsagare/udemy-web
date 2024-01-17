const user = {
  username: "sammed",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to this website`);
  },
};

user.welcomeMessage();

// function chai() {
//   let username = "sammed";
//   console.log(this.username);
// }

// const chai = () => {
//   let username = "sammed";
//   console.log(this.username);
// };

// chai();

// const addTwo = (n1, n2) => {
//   return n1 + n2;
// };

// const addTwo = (n1, n2) => n1 + n2;

// const addTwo = (n1, n2) => (n1 + n2)

const addTwo = (n1, n2) => ({ username: "sammed" });

console.log(addTwo(5, 6));

// const myArray = [2,4,5,6]

// myArray.forEach()
