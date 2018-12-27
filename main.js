var idArr = ["Dog Mom", "Coffee Addict", "Plant Killer", "Pasta Connoisseur", "Full Stack Engineer"]

$(document).ready(function () {
	welcomeUser(now);
	var idTimer = setInterval(changeID, 2000);
});

let now = new Date();
now = now.toString()

function welcomeUser(now) {
	let hour = parseInt(now.slice(16,18))
	if (hour < 12) {
		welcome = "Good Morning"
	} else if (hour < 17) {
		welcome = "Good Afternoon"
	} else {
		welcome = "Good Evening"
	}
	$("#welcome-line").text(welcome)
};

let index = 0

function changeID() {
	document.getElementById("person-id").innerHTML = idArr[index];
	index++
	console.log(index)

	if (index === idArr.length) {
		index = 0
	}
}
