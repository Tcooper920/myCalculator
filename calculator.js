
/*Calculator App*/

/* Calculator 1 ************************************/

var submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function () {
	
	var firstNumber = document.getElementById("number-one").value;
	firstNumber = parseInt(firstNumber);
	
	var secondNumber = document.getElementById("number-two").value;
	secondNumber = parseInt(secondNumber);

	var operation = document.getElementById("dropdown-menu").value;


	if (operation == "+") {
		document.getElementById("answer").value = (firstNumber + secondNumber);
	} else if (operation == "-") {
		document.getElementById("answer").value = (firstNumber - secondNumber);
	} else if (operation == "*") {
		document.getElementById("answer").value = (firstNumber * secondNumber);
	} else if (operation == "/") {
		document.getElementById("answer").value = (firstNumber / secondNumber);
	} 
});

/* Calculator 2 ************************************/

/* input field */
var calculatorField = document.getElementById("my-number");

/*  clear button */
document.getElementsByClassName("button")[0].onclick = function() {
	calculatorField.value = "";
}

/* numerical and operation buttons */
for (var counter = 1; counter < 15; counter++) {
	document.getElementsByClassName("button")[counter].onclick = function() {
		calculatorField.value = (calculatorField.value) + this.innerText;
	}
}

/* equals button */
document.getElementsByClassName("button")[15].onclick = function() {
	calculatorField.value = eval(calculatorField.value);
}