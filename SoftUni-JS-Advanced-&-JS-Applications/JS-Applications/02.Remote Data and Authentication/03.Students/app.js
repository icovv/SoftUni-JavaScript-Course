window.addEventListener('load',doSth);
function doSth(){
    let firstNameField = document.querySelector("#form > div.inputs > input[type=text]:nth-child(1)");
    let lastNameField = document.querySelector("#form > div.inputs > input[type=text]:nth-child(2)");
    let facNum = document.querySelector("#form > div.inputs > input[type=text]:nth-child(3)");
    let gradeField = document.querySelector("#form > div.inputs > input[type=text]:nth-child(4)");
    let btn = document.querySelector("#submit");
    let url = "http://localhost:3030/jsonstore/collections/students";
    let tbody = document.querySelector("#results > tbody");
    innerFN();

    async function innerFN(){
    let getResponse = await fetch(url);
    let dataReturned = await getResponse.json();
    let dataValues = Object.values(dataReturned);

    for (let item of dataValues){
        let tr = document.createElement(`tr`);
        let td1 = document.createElement(`td`);
        td1.textContent = item.firstName;
        let td2 = document.createElement(`td`);
        td2.textContent = item.lastName;
        let td3 = document.createElement(`td`);
        td3.textContent = item.facultyNumber;
        let td4 = document.createElement(`td`);
        td4.textContent = item.grade;
        tbody.appendChild(tr);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        }
    }

        btn.addEventListener(`click`, addStudent);

    async function addStudent(e){
        e.preventDefault();
        if (firstNameField.value != `` && lastNameField.value != `` && facNum.value != `` && gradeField.value != `` && !isNaN(Number(gradeField.value))){
        let response = await fetch (url,{
            method: `POST`,
            headers: {"Content-Type": `application/json`},
            body: JSON.stringify({firstName: firstNameField.value,lastName:lastNameField.value,facultyNumber:facNum.value,grade:gradeField.value}) 
        })
        firstNameField.value = ``
        lastNameField.value = ``
        facNum.value = ``
        gradeField.value = ``
        tbody.innerHTML = ``;
        innerFN();


    }
    }
}