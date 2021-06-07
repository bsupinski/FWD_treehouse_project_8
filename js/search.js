
const filter = document.getElementById("employee-filter");
const employeeList = document.getElementsByClassName("name");


const handleSearch = e =>{
    userInput = e.target.value.toLowerCase();
    Array.from(employeeList).forEach(employeeNames => {
        employeeName = employeeNames.textContent.toLowerCase();
        nameCard = employeeNames.parentNode.parentNode;
        if(employeeName.includes(userInput)){
            nameCard.style.display="flex";
        }else{
            nameCard.style.display="none"
        }
    })
    
}



filter.addEventListener("keyup", handleSearch);


