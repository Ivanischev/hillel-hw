class Human {
    constructor(config) {
        this.name = config.name;
        this.surname = config.surname;
        this.age = config.age;
    }

    get getFullName() {
        return `${this.name} ${this.surname}`;
    }

    set setFullName(fullName) {
        var fullName = fullName.split(" ");
        this.name = fullName[0];
        this.surname = fullName[1];
    }
}


class Student extends Human {
    constructor({name, surname, age, marks}) {
        super({name, surname, age});
        this.marks = marks;
    }

    averageMark() {
        return this.marks.reduce((sum, item) => sum + item) / this.marks.length;
    }

    minMark() {
        return this.marks.sort((a, b) => b - a)[this.marks.length - 1];
    }

    maxMark() {
        return this.marks.sort((a, b) => a - b)[this.marks.length - 1];
    }

    getFullName() {
        return `${this.name} ${this.surname} - student`;
    }
}


class Teacher extends Human {
    constructor({name, surname, age, group}) {
        super({name, surname, age});
        this.group = group;
    }

    getListOfNamesByAverageMark() {
        return this.group
        .sort((a, b) => b.averageMark() - a.averageMark())
        .map((item) => item.name);
    }

    getStudentByName(name) {
        return this.group.find((item) => item.name === name);
    }

    removeStudentByName(name) {
        let tempName = this.getStudentByName(name);
        return this.group.splice(this.group.indexOf(tempName), 1);
    }

    updateStudentByName(student, name) {
        this.group.splice(
            this.group.indexOf(this.getStudentByName(name)), 1,
            new Student(student)
        );
    }

}



let group = [
    new Student({
        name: "John",
        surname: "Doe",
        age: 19,
        marks: [9, 9, 10, 4, 4]
    }),
    new Student({
        name: "John2",
        surname: "Doe2",
        age: 18,
        marks: [9, 9, 10, 4, 4]
      
    }),
    new Student({
        name: "John3",
        surname: "Doe3",
        age: 19,
        marks: [10, 6, 8, 9, 10]
    }),
    new Student({
        name: "John4",
        surname: "Doe4",
        age: 19,
        marks: [9, 7, 8, 10, 5]
    }),
    new Student({
        name: "John5",
        surname: "Doe5",
        age: 18,
        marks: [9, 9, 10, 4, 4]
    })
];


let human = new Human({
    name: 'Harry',
    surname: 'Potter',
    age: 34
});

let student = new Student({
    name: 'Bill',
    surname: 'Clinton',
    age: 18,
    marks: [4, 5, 4, 10, 10]
});

let teacher = new Teacher({
    name: 'Martin',
    surname: 'Scorseze',
    age: 60,
    group
});

let secondTeacher = new Teacher({
    name: "Christopher",
    surname: "Nolan",
    age: 45
})

// console.log(human);
// console.log(student)
// console.log(secondTeacher);
// console.log(student.averageMark())
// console.log(student.minMark())
// console.log(student.maxMark())

// console.log(teacher.getListOfNamesByAverageMark())
// console.log(teacher.getStudentByName('John3'))
// console.log(teacher.removeStudentByName('John5'));
// console.log(teacher);



window.onload = init;

function init() {

    let teacher = new Teacher({
        name: 'Robert',
        surname: 'Downey',
        age: 45,
        group: []
    });

    let addBtn = document.querySelector('#addBtn');
    let addStudentForm = document.getElementById('add-student-form').elements;
    let updBtn = document.querySelector('#updBtn');
    let studentList = document.getElementById('student-list');

    


    addBtn.addEventListener('click', (e) =>  {
        e.preventDefault();
        let name = addStudentForm.name.value,
            surname = addStudentForm.surname.value,
            age = addStudentForm.age.value,
            marks = addStudentForm.marks.value;

        teacher.group.push(new Student({
            name,
            surname,
            age,
            marks: marks.split(',').map( (item) => Number.parseInt(item))
        }));
    })


    updBtn.addEventListener('click', (e) => {
        e.preventDefault();

        teacher.group.sort( (student1, student2) => student2.averageMark() - student1.averageMark());

        let newStudent = teacher.group.map( (item) => '<li>' + item.name + ' - ' + item.surname + ' - ' + item.averageMark() + '</li>').join("");
        studentList.innerHTML = newStudent;
    })
}


