
function Student(name, mark) {
  this.name = name;
  this.mark = mark;
}

Student.prototype.minMark = function(mark) {
  console.log(Math.min(...this.mark));
}

Student.prototype.maxMark = function(mark) {
  console.log(Math.max(...this.mark));
}

Student.prototype.averageMark = function(mark) {
  let total = this.mark.reduce((sum, current) => sum + current);
  let average = total / this.mark.length;

  console.log("Средний балл " + this.name + ' - ' + average);
}



let s1 = new Student('Student 1', [10,9,8,1,10]);
s1.minMark();
s1.maxMark();
s1.averageMark();

let s2 = new Student('Student 2', [2,2,8,5,9]);
s2.minMark();
s2.maxMark();
s2.averageMark();



