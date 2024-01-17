const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, currVal) {
//   console.log(`acc: ${acc} and currVal: ${currVal}`);
//   return acc + currVal;
// }, 0);

const myTotal = myNums.reduce((acc, currVal) => acc + currVal, 0);

console.log(myTotal);

const shoppingCart = [
  {
    itemName: "apple",
    price: 99,
  },
  {
    itemName: "banana",
    price: 29,
  },
  {
    itemName: "mango",
    price: 199,
  },
  {
    itemName: "kiwi",
    price: 399,
  },
];

console.log(shoppingCart.reduce((acc, item) => acc + item.price, 0));
