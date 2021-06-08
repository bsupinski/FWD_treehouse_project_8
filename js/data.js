let employees = [];
const urlAPI = `https://randomuser.me/api/?results=45&inc=name,picture,
email,location,phone,dob&noinfo&nat=US`;
const gridContainer = document.querySelector('.grid-container');
const overlay = document.querySelector(".overlay");
const modalContainer = document.querySelector(".modal-content");
const modalClose = document.querySelector(".modal-close");
const previous = document.getElementById("previous");
const next = document.getElementById("next");

//Fetch API
async function getJson(url){
    try{
        const response = await fetch(url);
        return await response.json();
    } catch {
        throw error;
    }
}

async function getEmployees(url) {
    const employeesJSON = await getJson(url);
    employees = employeesJSON.results; 
    return employees
}

function createEmployeeList(list){
    employeeHTML=``;
    employees.forEach((employee, index) => {
        let name = employee.name;
        let email = employee.email;
        let city = employee.location.city;
        let picture = employee.picture;
    

        employeeHTML+=`
        <div class="card" data-index="${index}">
            <img class="avatar" src="${picture.large}" alt="emplyee #${index}">
            <div class="text-container">
                <h2 class="name">${name.first} ${name.last}</h2>
                <p class="email">${email}</p>
                <p class="address">${city}</p>
            </div>
        </div>
        `
    });
    gridContainer.innerHTML = employeeHTML;
}


getEmployees(urlAPI)
.then(createEmployeeList)


function displayModal(index){
    let {name, dob, phone, email, location:{city, street, state, postcode}, picture} = employees[index];
    let date = new Date(dob.date);
    const modalHTML = `
        <img class="avatar" src="${picture.large}" alt="${name.first} ${name.last}">
        <div class="text-container">
            <h2 class="modalname">${name.first} ${name.last}</h2>
            <p class="email">${email}</p>
            <p class="address">${city}</p>
            <hr />
            <p class="phone-number">${phone}</p>
            <p class="address">${street.number} ${street.name}, ${state}, ${postcode}</p>
            <p class="birthday">Birthday: ${date.getMonth()}/${date.getDay()}/${date.getFullYear()}</p>
        </div>
    `;

    overlay.classList.remove("hidden");
    modalContainer.innerHTML = modalHTML;
}

gridContainer.addEventListener("click", e =>{
    if(e.target !==gridContainer){
        const card = e.target.closest(".card");
        let index = card.getAttribute("data-index");
        displayModal(index);
    }
})


modalClose.addEventListener("click", () => {
    overlay.classList.add("hidden")
})

previous.addEventListener("click", () => {
    //if displayModal(index)==0
        //displaymodal(index+employees.length)
    //else change displayModal(index-1)
    


})

next.addEventListener("click", () => {
    //if displayModal(index)==employee.length
        //displaymodal(index)==0
    //else change displayModal(index+1)
})

