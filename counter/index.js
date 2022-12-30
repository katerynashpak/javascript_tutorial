//document.getElementById("count-el").innerText = 5

/*let count = 0;
count = count + 1
console.log(count)


let bonusPoints = 50
console.log(bonusPoints)

bonusPoints = bonusPoints + 50
console.log(bonusPoints)

bonusPoints = bonusPoints - 75
console.log(bonusPoints)

bonusPoints = bonusPoints + 45
console.log(bonusPoints)
*/



//Strings in JavaScript
/*

let username = "per"
let message = "You have three new notifications"

let messageToUser = message + ", " + username + "!"
console.log(messageToUser)

let totalPoints = 4 + "10" //equals to "410" bc string always wins
*/


/*
let welcomeEl = document.getElementById("welcome-el")

let name = "Per Harald Borden"
let greeting = "Welcome back "

welcomeEl.innerText = greeting + name
welcomeEl.innerText = welcomeEl.innerText + " 🦆"

*/

////////////////////////////////////////////////////////////
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(countEl) //kind of like print for console

function increment(){
	count += 1
	countEl.textContent = count
}

function save(){
	
	let countStr = count + " - "
	
	saveEl.textContent += countStr
	countEl.textContent = 0
	count = 0
}

