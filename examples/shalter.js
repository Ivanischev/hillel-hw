let shalter = [{
    who: "cat",
    color: "brown",
    breed: "british",
    name: "Tom"
},
{
    who: "cat",
    color: "black",
    breed: "siam",
    name: "Den"
},
{
    who: "dog",
    color: "brown",
    breed: "siam",
    name: "Bob"
}
];

function describeAnimal() {
let findedAnimal = prompt('Кот или собака');
findedAnimal = findedAnimal.toLowerCase();

let color = prompt('Цвет животного');
let breed = prompt('Порода животного');
let name = prompt('Имя животного');

let animalInfo = {
    who: findedAnimal,
    color,
    breed,
    name,
};

setAnimal(animalInfo);
}
function setAnimal(animalInfo) {
shalter.push(animalInfo);
}

// function getAnimals(key, value){
//     shalter.filter(function(animal, index){
//         animal[key] === value;
//     })
// }

function getValueForFilter() {
let value = prompt('Цвет, Порода, Имя животного');
value = value.toLowerCase();

// TODO Проверки для данных
console.log(getAnimalsByColor(value));
}

function getAnimalsByColor(value) {
return shalter.filter(function (animal, index) {
    return animal.color === value;
})
}