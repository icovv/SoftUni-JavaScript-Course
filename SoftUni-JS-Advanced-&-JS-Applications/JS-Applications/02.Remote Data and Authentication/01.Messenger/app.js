function attachEvents() {
    let url = "http://localhost:3030/jsonstore/messenger";
    let nameField = document.querySelector("#controls > input[type=text]:nth-child(2)");
    let messageField = document.querySelector("#controls > input[type=text]:nth-child(5)");
    let submitBtn = document.querySelector("#submit");
    let refreshBtn = document.querySelector("#refresh");
    let textArea = document.querySelector("#messages");
    submitBtn.addEventListener(`click`,submitInfo);
    refreshBtn.addEventListener(`click`,refreshSth);

    async function submitInfo(){
    try {
        if(nameField.value !==  `` && messageField.value !== ``){
        let sendInfo = await fetch(url, {
            method: `POST`,
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify({author: nameField.value, content: messageField.value}),
        });
        
        nameField.value = ``;
        messageField.value = ``
    }
    } catch (error) {
        alert(`Error: ${error.message}`)
    }

    }

    async function refreshSth(){
        let response = await fetch(url);
        let data = await response.json();
        let dataAsArr = Object.entries(data);
        textArea.textContent = ``;
        for (let item of dataAsArr){
            textArea.textContent += `${item[1].author}: ${item[1].content}\n`;
        }
        textArea.textContent= textArea.textContent.trim();
    }
}

attachEvents();