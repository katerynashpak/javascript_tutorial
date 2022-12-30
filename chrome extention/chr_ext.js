
let myLeads = []
let oldLeads = []

const inputEl = document.getElementById("input-el") //const can;t be reassigned
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

const ulEl = document.getElementById("ul-el")

//myLeads = JSON.parse(myLeads) //turn the myLeads into an array
//myLeads.push("www.lead2.com") //push a new value to the array
//myLeads = JSON.stringify(myLeads)
//console.log(typeof myLeads) //print the variable type of myLeads

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)

if (leadsFromLocalStorage){
	myLeads = leadsFromLocalStorage
	renderLeads(myLeads)
}

tabBtn.addEventListener("click", function(){
	
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
		
		myLeads.push(tabs[0].url)
		localStorage.setItem("myLeads", JSON.stringify(myLeads))
		render(myLeads)
	})
	
})


function renderLeads(leads){
	let listItems = "" //create a variable to hold all of the HTML for the list items, assign it to an empty string

	for (let i = 0; i < leads.length; i++) {
		
		//listItems += "<li><a target='_blank' href=' " + myLeads[i] + "'>" + myLeads[i] + "</a></li>" //add the item to the listItems variable instead of the ulEl.innerHTML
		
		listItems += 
			`
				<li>
					<a target='_blank' href='${leads[i]}'>
						${leads[i]}
					</a>
				</li>
			`

		/* //another way
		const li = document.createElement("li")
		li.textContent = myLeads[i]
		ulEl.append(li)
		*/	
	}
	ulEl.innerHTML = listItems //render the listItems inside the unordered list ulEl.innerHTML
}

deleteBtn.addEventListener("dblclick", function() { //double-click on the delete button for event to occur
	
	localStorage.clear() //clear items from localStorage
	myLeads = [] //clear the array
	renderLeads(myLeads) //output, but it's cleared
	
})



inputBtn.addEventListener("click", function() {
	myLeads.push(inputEl.value)
	inputEl.value = ""
	
	localStorage.setItem("myLeads", JSON.stringify(myLeads))
	renderLeads(myLeads) //call this func every time you click the button
})


/*
const recipient = "James"
const email = `Hey ${recipient}! How are you?`

console.log(email)
*/

//Use Local Storage in out app
					//key		//value
//localStorage.setItem("myLeads", "www.examplelead.com") //set

//console.log(localStorage.getItem("myLeads")) //get

