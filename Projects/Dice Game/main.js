let randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1)
let dice1_IMG = `./images/dice${randomNumber1}.png`

document.querySelector(".img1").setAttribute("src", dice1_IMG)

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2)
let dice2_IMG = `./images/dice${randomNumber2}.png`

document.querySelector(".img2").setAttribute("src", dice2_IMG)

if (randomNumber1 > randomNumber2) {
    document.getElementById("result").innerHTML=`Player 1 won!`
} else if (randomNumber1 < randomNumber2){
    document.getElementById("result").innerHTML=`Player 2 won!`
} else {
    document.getElementById("result").innerHTML=`Tie!`

}
let rollbtn = document.getElementById("rollBtn")
rollbtn.addEventListener('click', function(){
    location.reload()
})
