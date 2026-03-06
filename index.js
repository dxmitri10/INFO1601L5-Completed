let radius = 7;
const pi = 3.14;

let area = radius * radius * pi;;
console.log(area);

let name = "bob";
let age = 24;

console.log(typeof(name))
console.log(typeof(age))

console.log(`Hello my name is ${name}, I'm ${age} years old`);

console.log(`I was born in ${2020 - age}`)

console.log('1' === 1); //true
console.log(1 === true);
console.log("false" === false);
console.log("false" === true);

if("false")
  console.log("Hello false")

let grade = 67;
if(grade < 50){
  console.log(`failed`);
}else{
  console.log(`Passed`);
}

let num = 0 ;
while (num < 10){
  console.log(num);
  num++;
}
for(let i =0; i <10; i++){
  console.log(i);
}

for(let i =0; i <50; i++){
  if(i % 3 === 0 && i % 5 === 0){
    console.log(`fizzbuss`);
  }else if ( i % 3 === 0){
    console.log(`fizz`);
  }else if ( i % 5 === 0){
    console.log(`buzz`);
  }else{
    console.log(i); 
  }
}

function happyPrint(string){
  console.log("😀 : "+string);
}
function sadPrint(string){
  console.log("😢 : "+string);
}

function add(a, b, callback){
   let ans = a + b;
   callback(ans);
}
add(5,10, happyPrint);
add(11,12, sadPrint);


function printDate(){
  console.log(Date().toLocaleTimeString());
}
setInterval(printDate, 1000);


let arr = [-5, 16, 33, 42, 103, 344];

console.log(arr.includes(-5));
arr.push(11);
console.log(arr)
let lastItem = arr.pop();
console.log(lastItem, arr);
arr.unshift(22);
console.log(arr);

let firstItem = arr.shift();
console.log(firstItem, arr);

let reversed = arr.reverse();
console.log(reversed);
console.log(arr.join('-'));

let arr1 = [12, 33, 4, 5, -4, 8, 19, 25];

function double (num){
  function double (num){
    return num * 2;
  }
  let doubleArr1 = arr1.map(double); 
  console.log(doubleArr1);

  function isOdd(num){
    return element % 2 !==0;
  }

  let odds = arr1.filter(isOdd);
  console.log(odds);

  function has5Factor(){
    return ele % 5 === 0;
  }
  let hasFiveFactor = arr1.some (has5Factor);
  console.log(hasFiveFactor);

  function intCompare(a, b){
    return a - b;
  }
  let ascending = arr1.sort(intCompare);
  console.log(ascending);
}
//task 6
function createPerson(name, height, weight){
  return {name: name, height: height, weight: weight};
}
function calcBMI(weight, height){
  return weight / (height * height);
}
function avgBMI(people){
  let sum = 0;
  for(let person of people){
    sum += calcBMI(person.weight, person.height);
  }
  return sum / people.lenght;
}
let people = [
  createPerson("Alice", 1.65, 60),
  createPerson("Bob", 1.8, 80),
  createPerson("Charlie", 1.75, 70)
];
console.log(avgBMI(people));

//excercise 10
let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1603',
      grades: [ 89, 34, 67 ]
    },
    {
      course: 'INFO 1601',
      grades: [ 89, 34, 67 ]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1601',
      grades: [ 100, 89, 79 ]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1600',
      grades: [ 89, 34, 67 ]
    }
  ]
};


const students = [bob, sally, paul];

function getAverageGrade(student, course){
  for (let i = 0; i < student.transcript.length; i++){
    if(student.transcript[i].course === course){
      let sum = 0;
      for (let j = 0; j <student.transcript[i].grades.length; j++){
        sum += student.transcript[i].grades[j];
  }
      return sum / student.transcript[i].grades.length;
}
  }
  return -1;
}

function getAssignmentMark(student, course, num){
  for (let i = 0; i<student.transcript.length; i++){
    if(student.transcript[i].course === course){
      if(num <student.transcript[i].grades.length && num >=0){
        return student.transcript[i].grades[num];
}     
    }
  }
  return -1;
}

function averageAssessment(students, courseName, assignment){
  let sum = 0;
  let count = 0;

  for (let s of students){
    let mark = getAssignmentMark(s, courseName, assignment);
    if(mark !== -1){
      sum += mark;
      count++;
    }   
  }
  if (count > 0){
    return sum / count;
  }
  retunr -1;
}
console.log("==============================================");
console.log("Average grade for " + bob.fname + " " + bob.lname + " in INFO 1603: " + getAverageGrade(bob, 'INFO 1603'));
console.log("Average grade for " + sally.fname + " " + sally.lname + " in INFO 1601: " + getAverageGrade(sally, 'INFO 1601'));
console.log("Average grade for " + paul.fname + " " + paul.lname + " in INFO 1600: " + getAverageGrade(paul, 'INFO 1600'));
console.log("==============================================");
console.log("Mark for " + bob.fname + " " + bob.lname + " in INFO 1603 assignment 1: " + getAssignmentMark(bob, 'INFO 1603', 0));
console.log("Mark for " + sally.fname + " " + sally.lname + " in INFO 1601 assignment 2: " + getAssignmentMark(sally, 'INFO 1601', 1));
console.log("Mark for " + paul.fname + " " + paul.lname + " in INFO 1600 assignment 3: " + getAssignmentMark(paul, 'INFO 1600', 2));
console.log("==============================================");
console.log("Average mark for INFO 1603 assignment 1: " + averageAssessment(students, 'INFO 1603', 0));
console.log("Average mark for INFO 1601 assignment 2: " + averageAssessment(students, 'INFO 1601', 1));
console.log("Average mark for INFO 1600 assignment 3: " + averageAssessment(students, 'INFO 1600', 2));
