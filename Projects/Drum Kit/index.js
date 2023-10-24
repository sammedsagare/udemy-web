function playSound(character) {
  switch (character) {
    case "w":
      let audioW = new Audio("./sounds/tom-1.mp3");
      audioW.play();
      break;
    case "a":
      let audioA = new Audio("./sounds/tom-2.mp3");
      audioA.play();
      break;
    case "s":
      let audioS = new Audio("./sounds/tom-3.mp3");
      audioS.play();
      break;
    case "d":
      let audioD = new Audio("./sounds/tom-4.mp3");
      audioD.play();
      break;
    case "j":
      let audioJ = new Audio("./sounds/snare.mp3");
      audioJ.play();
      break;
    case "k":
      let audioK = new Audio("./sounds/crash.mp3");
      audioK.play();
      break;
    case "l":
      let audioL = new Audio("./sounds/kick-bass.mp3");
      audioL.play();
      break;
    default:
      console.log(character);
      break;
  }
}

let drumLength = document.querySelectorAll(".drum").length;
for (let i = 0; i < drumLength; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let btn = this.innerHTML;
    playSound(btn);
    btnAnimation(btn)
  });
}

document.addEventListener("keydown", function (event) {
  playSound(event.key);
  btnAnimation(event.key)
});

function btnAnimation(currentKey){
    let activeBtn = document.querySelector("."+currentKey)
    activeBtn.classList.add("pressed")
    setTimeout(function(){
        activeBtn.classList.remove("pressed")
    }, 100)
}
