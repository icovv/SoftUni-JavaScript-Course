function attachEvents() {
    let url = "http://localhost:3030/jsonstore/phonebook";
    let loadBTN = document.querySelector("#btnLoad");
    let ul = document.getElementById(`phonebook`);
    loadBTN.addEventListener(`click`, loadFn);
    let personField = document.getElementById(`person`);
    let phoneField = document.getElementById(`phone`)
    let createBtn = document.getElementById(`btnCreate`);

    createBtn.addEventListener(`click`,createEvent);

    async   function createEvent(){
        let postReq = await fetch (url,{
            method: `POST`,
            headers: {"Content-Type":`application/json`},
            body: JSON.stringify({person: personField.value, phone:phoneField.value})
        })
        personField.value = ``;
        phoneField.value = ``;
        loadFn();
    }

    async function loadFn(){
        let response = await fetch (url);
        let data = await response.json();
        let dataAsValue = Object.values(data);
        ul.innerHTML = ``;
        for (let item of dataAsValue){
            let li = document.createElement(`li`);
            li.textContent = `${item.person}: ${item.phone}`
            li.dataset.id = item._id;
            let btn = document.createElement(`button`);
            btn.textContent = `Delete`;

            btn.addEventListener(`click`,deleteSth)
            ul.appendChild(li)
            li.appendChild(btn)
        }

    async function deleteSth(e){
        let id = e.target.parentNode.dataset.id;
        let deleteReq = await fetch(url + `/` + id,{
            method: `Delete`,
            headers: {"Content-Type": `application/json`}
        })
        e.target.parentNode.remove();
    }
    }
}

attachEvents();