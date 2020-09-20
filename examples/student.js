
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
  
  Student.prototype.stud = function(mark) {
    let total = this.mark.reduce((sum, current) => sum + current);
    let average = total / this.mark.length;
  
    console.log(average);
  }
  
  
  
  let s1 = new Student('Student 1', [10,9,8,1,10]);
  s1.minMark();
  s1.maxMark();
  s1.averageMark();
  
  let s2 = new Student('Student 2', [2,2,8,5,9]);
  s2.minMark();
  s2.maxMark();
  s2.averageMark();
  
  let s3 = new Student('Student 3', [4,2,8,5,8]);
  s3.minMark();
  s3.maxMark();
  s3.averageMark();
  
  let s4 = new Student('Student 4', [8,9,8,5,9]);
  s4.minMark();
  s4.maxMark();
  s4.averageMark();
  
  let s5 = new Student('Student 5', [4,2,3,5,7]);
  s5.minMark();
  s5.maxMark();
  s5.averageMark();
  
  
  
  
  
  // s5.findBestStudent();
  
  function findMaxMark() {
  
    let students = [s1, s2, s3, s4, s5];
  
    for(let i = 0; i < students.length; i++) {
      students[i].stud();
  
    }
  }
  
  findMaxMark();