const filter = document.getElementById("employee-filter");
const employeeList = document.getElementsByClassName("name");
const cards = document.getElementsByClassName("card")

Array.from(employeeList).forEach(employeeName =>{
    console.log(employeeName.textContent)
})

for(let i=0; i<employeeList.length; i++){
    console.log(employeeList[i]);
}

filter.addEventListener('keyup', (e) =>{
    userInput = e.target.value.toLowerCase();
    console.log(userInput)
})


//test to see if i know how for loops actually work
for(let j=0; j<12; j++){
    console.log(j)
}