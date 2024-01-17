var n1 = prompt("What is your name: ")
var n2 = prompt("What is your partner's name: ")

function love(){
    var per = Math.floor(Math.random()*100)
    if(per >= 75) {
        console.log(`Damn! ${per}% huh? Y'all made for each other fr`)
    } else if(per >=50 && per < 75) {
        console.log(`${per}%<br>to be honest....`)
    } else {
        console.log(`${per}%<br>You deserve better.`)
    }
    //console.log(per+"%");
}

love();