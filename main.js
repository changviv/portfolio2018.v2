let now = new Date();
now = now.toString()

var idArr = ["Full Stack Engineer", "Dog Lover", "Coffee Addict", "Plant Killer", "Pasta Connieuseur"]

$(document).ready(function () {
	welcomeUser(now);
	var timer = setInterval(myTimer, 1000);
	var idTimer = setInterval(changeID, 2000);

	function myTimer() {
	    var d = new Date();
	    var t = d.toLocaleTimeString();
	    document.getElementById("time").innerHTML = t;
	}
});


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

welcomeUser(now);

let index = 0

function changeID() {
	document.getElementById("person-id").innerHTML = idArr[index];
	index++
	console.log(index)

	if (index === idArr.length) {
		index = 0
	}
}
