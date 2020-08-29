var num = +prompt("Введите число");
var	error = "Введите число больше 10ти";

if (num > 10) {
	for (let i = 1; i <= num; i++) {
        console.log(i + num);
        
	}
} else {
	alert(error);
}