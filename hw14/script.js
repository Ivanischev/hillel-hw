// создаем функцию конструктор Human
function Human(config) {
    this.name = config.name;
    this.surname = config.surname;
    this.age = config.age;

    // получаем полное имя и фамилию
    this.getFullName = () => {
        return `${this.name} ${this.surname}`;
    };

    // разбиваем имя и фамилию
    this.setFullName = (fullName) => {
        var fullname = fullName.split(' ');
        this.name = fullname[0],
        this.surname = fullname[fullname.length - 1];
    }
}


//Student
function Student(config) {
    Human.call(this, config);
}
// Наследование для студента
Student.prototype = Object.create(Human.prototype);
Student.prototype.constructor = Student;

Student.prototype = Object.assign(Student.prototype, {
    // example() {
    //     console.log('example');
    // }
})


//Teacher
function Teacher(config) {
    Human.call(this, config);
    this.group = config.group;
}
// Наследование для учителя
Teacher.prototype = Object.create(Human.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype = Object.assign(Teacher.prototype, {
    // example() {
    //     console.log('example');
    // }
})


let human = new Human({
    name: 'Jon',
    surname: 'Doe',
    age: 34
});

let student = new Student({
    name: 'Bill',
    surname: 'Clinton',
    age: 55
});

let teacher = new Teacher({
    name: 'Martin',
    surname: 'Scorseze',
    age: 40
});


