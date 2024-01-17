const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let clr = "#";

  for (let i = 0; i < 6; i++) {
    clr += hex[Math.floor(Math.random() * 16)];
  }
  return clr;
};

let intID;

const startChangingColor = function () {
  function changeClr() {
    document.body.style.backgroundColor = randomColor();
  }

  if (!intID) {
    intID = setInterval(changeClr, 1000);
  }
};

const stopChangingColor = function () {
  clearInterval(intID);
  intID = null;
};

document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click", stopChangingColor);
