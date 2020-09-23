
function Student(name, mark) {
  this.name = name;
  this.mark = mark;
}

Student.prototype.minMark = function(mark) {
  return Math.min(...this.mark);
}

Student.prototype.maxMark = function(mark) {
  return Math.max(...this.mark);
}

Student.prototype.averageMark = function(mark) {
  let total = this.mark.reduce((sum, current) => sum + current);
  let average = total / this.mark.length;

  return average;
}



let s1 = new Student('Student 1', [10,9,8,1,10]);
console.log(s1.minMark());
console.log(s1.maxMark());
console.log(s1.averageMark());

let s2 = new Student('Student 2', [2,2,8,5,9]);
s2.minMark();
s2.maxMark();
s2.averageMark();



