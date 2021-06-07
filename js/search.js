const filter = document.getElementById("employee-filter");
const employeeList = document.getElementsByClassName("name");


const handleSearch = event =>{
    userInput = event.target.value.toLowerCase();
    employeeList.forEach(employeeName => {
        console.log(employeeName);

    })
    
}

filter.addEventListener("keyup", handleSearch);


