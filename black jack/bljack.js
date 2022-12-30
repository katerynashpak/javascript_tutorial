
let player = { //create an object 'player'
	name: "Per",
	chips: 200,
	sayHello: function() {
		console.log("Heisann!")
	}
	
}


let cards = [] //array

let sum = 0
let hasBlackJack = false

let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")

//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el") //specify the selector, id in this case
//let sumEl = document.querySelector(".sum-el") //selector by class

let cardsEl = document.querySelector("#cards-el")

let playerEl = document.querySelector("#player-el")

playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard(){
	//Math.random() generates a random number between 0.000 and 0.999
	//Math.random()*6 --> between 0.000 and 5.999
	//Math.floor() gives the whole part of the number, ex: floor of 6.999 is 6
	
	let randomNum = Math.floor(Math.random() * 13) + 1 //between 1 and 13
	
	if(randomNum > 10) {
		return 10
	} else if (randomNum === 1) {
		return 11
	} else {
		return randomNum
	}
	
	
	return randomNum;
}



function startGame(){
	
	isAlive = true
	let firstCard = getRandomCard()
	let secondCard = getRandomCard()
	cards = [firstCard, secondCard]
	sum = firstCard + secondCard
	
	
	renderGame()
}

function renderGame(){

	cardsEl.textContent = "Cards: "
	for (let i = 0; i < cards.length; i++) {
		cardsEl.textContent += cards[i] + " " //add up cards together using array and for loop
	}
	
	sumEl.textContent = "Sum: " + sum
	
	if (sum <= 20){
		message = "Do you want to draw a new card?"
	} else if (sum == 21){ //blackjack
		message = "Wohoo! You've got Blackjack!"
		hasBlackJack = true
	} else {
		message = "You're out of the game!"
		isAlive = false
	}

	//to compare that two numbers are exacly same, use "num === 100" (tripple equals)
	//double equals is less strict than the tripple equals

	// CASH OUT!
	//console.log(message)
	messageEl.textContent = message //display on the website as the message element

}


function newCard(){
	
	if (isAlive === true && hasBlackJack === false) { //is in the game and has a blackjack
		let card = getRandomCard()
		sum += card
		
		cards.push(card)
		console.log(cards)
		renderGame()
	}
}




