function Human(config) {
    this.name = config.name;
    this.surname = config.surname;
    this.age = config.age;
}


function Student(config) {
    Human.call(this, config);
    this.marks = config.marks;
}

function Teacher(config) {
    Human.call(this, config);
    this.group = config.group;
}


Human.prototype = Object.assign(Human.prototype, {
    getFullName() {
      return `${this.name} ${this.surname}`;
    },
  
    setFullName(fullName) {
      var fullName = fullName.split(" ");
      this.name = fullName[0];
      this.surname = fullName[1];
    }
});


Student.prototype = Object.create(Human.prototype);
Student.prototype.constructor = Student;

Student.prototype = Object.assign(Student.prototype, {
    averageMark() {
        return this.marks.reduce((acc, curr) => acc + curr) / this.marks.length;
    },

    minMark() {
        return this.marks.sort((a, b) => b - a)[this.marks.length - 1];
    },

    maxMark() {
        return this.marks.sort((a, b) => a - b)[this.marks.length - 1];
    },

    getFullName() {
        return `${this.name} ${this.surname} - student`;
    }
})


Teacher.prototype = Object.create(Human.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype = Object.assign(Teacher.prototype, {
    getListOfNamesByAverageMark() {
        return this.group
        .sort((a, b) => b.averageMark() - a.averageMark())
        .map((item) => item.name);
    },

    getStudentByName(name) {
        return this.group.find((item) => item.name === name);
    },

    removeStudentByName(name) {
        let tempName = this.getStudentByName(name);
        return this.group.splice(this.group.indexOf(tempName), 1);
    },

    updateStudentByName(student, name) {
        this.group.splice(
            this.group.indexOf(this.getStudentByName(name)), 1,
            new Student(student)
        );
    }
})


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
//console.log(teacher);