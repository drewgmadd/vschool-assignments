var employees =[];

function Employee(name, jobTitle, salary, status) {
  this.name = name;
  this.jobTitle = jobTitle;
  this.salary = salary;
  this.status = "Full Time";
  this.printEmployeeForm = function() {
    return ("Name: " + this.name + ", Job Title: " + this.jobTitle + ", Salary: " + this.salary + ", Status: " + this.status);
  }
}

var andrew = new Employee('Andrew', 'Line Cook', '$10/hour');
  andrew.status = 'Contract';
var alek = new Employee('Alek', 'Barista', '$15/hour')
  alek.status = 'Part Time';
var max = new Employee('Max', 'P.E. teacher', '$20.hour')
  max.status = 'Contract';
console.log(andrew.printEmployeeForm());
console.log(alek.printEmployeeForm());
console.log(max.printEmployeeForm());
employees.push(andrew, alek, max);
