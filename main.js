$(document).ready(function () {
	welcomeUser(now);
	var idTimer = setInterval(changeID, 2000);
	$("#about").hide()
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

var idArr = ["Dog Mom", "Coffee Addict", "Plant Killer", "Pasta Connoisseur", "Full Stack Engineer"]

function changeID() {
	document.getElementById("person-id").innerHTML = idArr[index];
	index++

	if (index === idArr.length) {
		index = 0
	}
}

$("#arrow-icon").on("click", function() {
	alert("I've been clicked")
	$("#about").show()
})



