window.addEventListener(`load`,solve);

function solve(){
    let tbody = document.querySelector("body > table > tbody");
    let url = "http://localhost:3030/jsonstore/collections/books";
    let loadBtn = document.querySelector("#loadBooks");
    let submitBtn = document.querySelector("body > form > button");
    let tittleField = document.querySelector("body > form > input[type=text]:nth-child(3)");
    let authorField = document.querySelector("body > form > input[type=text]:nth-child(5)");
    loadBooks();
    loadBtn.addEventListener(`click`, loadBooks);
    submitBtn.addEventListener(`click`,submit);
    let formText = document.querySelector("body > form > h3")

    
    async function loadBooks(){
        tbody.innerHTML = ``;
        let response = await fetch(url);
        let data = await response.json();
        let dataAsValue = Object.entries(data);
        for(let item of dataAsValue){
            let tr = document.createElement(`tr`);
            tr.dataset.id = item[0];
            let td1 = document.createElement(`td`);
            td1.textContent = item[1].title
            let td2 = document.createElement(`td`);
            td2.textContent = item[1].author
            let td3 = document.createElement(`td`);
            let btn1 = document.createElement(`button`);
            btn1.textContent = `Edit`;
            btn1.addEventListener(`click`,editFN);
            let btn2 = document.createElement(`button`);
            btn2.textContent = `Delete`;
            btn2.addEventListener(`click`,deleteFN)
            tbody.appendChild(tr);
            tr.appendChild(td1)
            tr.appendChild(td2)
            tr.appendChild(td3)
            td3.appendChild(btn1)
            td3.appendChild(btn2)


        }

        function editFN(e){
            let parentTr = e.target.parentNode.parentNode.children;
            formText.textContent = `Edit FORM`;
            submitBtn.textContent = `Save`;
            tittleField.value = parentTr[0].textContent;
            authorField.value = parentTr[1].textContent
            authorField.dataset.id = e.target.parentNode.parentNode.dataset.id;
            submitBtn.addEventListener(`click`,submit);
        }
        async function deleteFN(e){
            let id = e.target.parentNode.parentNode.dataset.id;
            let deleteUrl = "http://localhost:3030/jsonstore/collections/books/"
            let deleteRequest = await fetch(deleteUrl + id,{
                method: `delete`,
                headers: {"Content-Type": `application/json`},
            }) 
            e.target.parentNode.parentNode.remove();
        }
    }
    async function submit(e){
        e.preventDefault();
        if(e.target.textContent == `Submit`){
        if(authorField.value != `` && tittleField.value != ``){
        let response = await fetch(url,{
            method: `POST`,
            headers: {"Content-Type": `application/json`},
            body: JSON.stringify({author:authorField.value,title:tittleField.value})
        })
        authorField.value = ``;
        tittleField.value = ``;
        }
        } else {
            if(authorField.value != `` && tittleField.value != ``){
            let putUrl = `http://localhost:3030/jsonstore/collections/books/`
            let put= await fetch (putUrl+authorField.dataset.id,{
                method: `PUT`,
                headers: {"Content-Type": `application/json`},
                body: JSON.stringify({author:authorField.value,title:tittleField.value})
            })
            
            authorField.value = ``;
            tittleField.value = ``;
            formText.textContent = `FORM`;
            submitBtn.textContent = `Submit`;
        }
        }
    }
}