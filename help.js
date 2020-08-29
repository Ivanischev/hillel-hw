var num = +prompt('enter number');

for (let i = 0; i < num; i++) {
    let result = i;
    console.log(i);

}


// typeof
function getTypeof(x) {
	if(typeof x == "number") {
		return 1;
	} else if (typeof x == "string") {
		return 0;
	} else {
		return -1;
	}
}

getTypeof(Boolean);


// calculator
function calculator(a, b, sign) {
	a = +prompt("enter a");
	b = +prompt("enter b");
	sign = prompt("enter the sign");

	switch (sign) {
		case "+" :
			return a + b;
			break;
		case "-" :
			return a - b;
			break;
		case "*" :
			return a * b;
			break;
		case "/" : 
			return a / b;
			break;
		default :
			alert("Error");
	};
};

calculator();



// cycles
var number = +prompt("enter the number");
var	errorMessage = "Enter more 10";
var amount = 0;

if (number > 10) {
	for (let i = 1; i <= number; i++) {
		amount ++;
	}
} else {
	alert(errorMessage);
}

alert(amount)