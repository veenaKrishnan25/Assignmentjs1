alert("Welcome to our students marks calculator! \n This program will calculate your Total Marks, Average, and Grade.")

let englishMark = Number(prompt("Enter your maks of each subjects mentioned below. \n 1. English"))
while (englishMark < 0 || englishMark > 100) {
  alert("Invalid mark");
  englishMark = Number(prompt("Re-enter marks for English"))
}
let physicsMark = Number(prompt("2. Physics"))
while (physicsMark < 0 || physicsMark > 100) {
  alert("Invalid mark");
  physicsMark = Number(prompt("Re-enter marks for Physics"))
}
let bioMark = Number(prompt("3. Biology"))
while (bioMark < 0 || bioMark > 100) {
  alert("Invalid mark");
  bioMark = Number(prompt("Re-enter marks for Biology"))
}
let chemiMark = Number(prompt("4. Chemistry"))
while (chemiMark < 0 || chemiMark > 100) {
  alert("Invalid mark");
  chemiMark = Number(prompt("Re-enter marks for Chemistry"))
}
let CSMark = Number(prompt("5. ComputerScience"))
 while (CSMark < 0 || CSMark > 100) {
  alert("Invalid mark");
  CSMark = Number(prompt("Re-enter marks for Computer Science"))
}
let totalMarks = englishMark + physicsMark + bioMark + chemiMark + CSMark
 let average = totalMarks / 5
let grade;
if (average  >= 90 && average  <= 100){
    alert(`Total marks = ${totalMarks} \n Average =  ${average} \n Grade = A+`)
}else if (average >= 80 && average <= 89){
    alert(`Total marks = ${totalMarks} \n Average =  ${average} \n Grade = A`)
}else if (average >= 70 && average <= 79){
    alert(`Total marks = ${totalMarks} \n Average = ${average} \n Grade = B`)
}else if (average >= 60 && average <= 69){
    alert(`Total marks = ${totalMarks} \n Average = ${average} \n Grade = C`)
}else if (average >= 50 && average <= 59){
    alert(`Total marks = ${totalMarks} \n Average = ${average} \n Grade = D`)
} else if (average < 50 && average >= 0){
    alert(`Total marks = ${totalMarks} \n Average = ${average} \n Grade = F`)
} else {
    alert("Invalid input")
}

