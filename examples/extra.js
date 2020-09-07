// let fruit = prompt("Какой фрукт купить?", "apple");

// let bag = {
//     [fruit]: 5, 
// }

// console.log(bag.apple);

// function makeUser(name, age) {
//     return {
//         name: name,
//         age: age,
//     }
// }

// let user = makeUser("Ivan", 28);


// проверка на свойство в объекте
//let user2 = {};
// alert(user2.someProperty === undefined);
// alert('someProperty' in user2);


// let user3 = {
//     name: "Ivan",
//     age: 23,
//     isAdmin: false,
// }


// for (let key in user3) {
//     console.log(key);
//     console.log(user3[key]);
// }



// let shedule = {
//     name: "Sam",
// };


// function isEmpty(shedule) {
//     for (let key in shedule) {
//         return false; // вернет false тк в объекте есть ключ
//     }
//     return true;
// }

// var isEmptyVar = isEmpty(shedule);
// console.log(isEmptyVar);



// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
// let sum = 0;

// for (let key in salaries) {
//     sum += salaries[key];
// }

// console.log(sum);



// до вызова функции
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
  

// function multiplyNumeric(menu) {
//     for( let key in menu) {
//         if(typeof menu[key] == 'number') {
//             menu[key] *= 2;
//         }
//     }
// }

// multiplyNumeric(menu);

// console.log(menu);



///// массивы

// let fruits = ["Яблоко", "Груша", "Слива"];

// fruits[3] = "Банан";

// console.log(fruits.length);
// console.log(fruits.pop());
// console.log(fruits);

// push добавляет элемент в конец.
// shift удаляет элемент в начале, сдвигая очередь, так что второй элемент становится первым.

// for (let i = 0; i < fruits.length; i++) {
//     alert(fruits[i]);
// }

// for (fruit of fruits) {
//     alert(fruit);
// }



// let arr = [1, 2, 3];

// alert( arr ); // 1,2,3
// alert( String(arr) === '1,2,3' ); // true

// push(...items)добавляет items в конец массива.
// pop() удаляет элемент в конце массива и возвращает его.
// shift() удаляет элемент в начале массива и возвращает его.
// unshift(...items) добавляет items в начало массива.



// let styles = ['Jazz', 'Blues'];
// styles.push('Rock-N-Roll');
// styles[Math.floor((styles.length - 1) / 2)] = "Классика";
// styles.unshift("Рэп", "Рэгги");
// console.log(styles);
// alert(styles.shift());

