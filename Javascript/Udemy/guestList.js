let name = prompt("Enter your name: ");
let guestList = ["Sammed", "Ameya", "Ayaan", "Harshit", "Kriish"];

if (guestList.indexOf(name) == -1) {
  alert(`Sorry ${name}, your name is not on the guest list.`)
} else if (guestList.indexOf(name) !=-1) {
    alert(`Welcome, ${name}`)
}
