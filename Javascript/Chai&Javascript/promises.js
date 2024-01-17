const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  //DB calls, cryptography, network calls - examples
  setTimeout(function () {
    console.log("Async task is completed.");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed.");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("\n\nAsync task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved\n\n");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Sammed", email: "xyz@sam.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let err = true;
    if (!err) {
      resolve({ username: "sammed", password: "123" });
    } else {
      reject("ERROR: Something went wrong!");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() =>
    console.log("The promise is either resolved or rejected.\n\n")
  );

const promseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let err = false;
    if (!err) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("ERROR: JS went wrong!");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const res = await promseFive;
    console.log(res);
  } catch (error) {
    console.log("ERRRORR");
  }
}

consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }
//getAllUsers();

fetch("https://api.github.com/users/sammedsagare")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((errorr) => {
    console.log(errorr);
  });
