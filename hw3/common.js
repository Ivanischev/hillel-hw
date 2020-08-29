var numA = +prompt("Введите первое число");
    operation = prompt("Введите математический символ");
    numB = +prompt("Введите второе число");
    result = null;

switch (operation) {
    case "+":
        result = numA + numB;
        break;
    case "-":
        result = numA - numB;
        break;
    case "*":
        result = numA * numB;
        break;
    case "/":
        result = numA / numB;
        break;
    default:
        alert("Введен неверный символ, допустимы: +,-,*,/");
        break;
}

alert("Результат равен " + result);