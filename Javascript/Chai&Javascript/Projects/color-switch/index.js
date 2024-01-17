const clrs = document.querySelectorAll(".square");
const body = document.querySelector("body");

clrs.forEach(function (square) {
  square.addEventListener("click", function (e) {
    if (e.target.id === "square1") {
      document.body.style.backgroundColor = "red";
    } else if (e.target.id === "square2") {
      document.body.style.backgroundColor = "blue";
    } else if (e.target.id === "square3") {
      document.body.style.backgroundColor = "green";
    } else if (e.target.id === "square4") {
      document.body.style.backgroundColor = "yellow";
    } else if (e.target.id === "square5") {
      document.body.style.backgroundColor = "black";
    }
  });
});
