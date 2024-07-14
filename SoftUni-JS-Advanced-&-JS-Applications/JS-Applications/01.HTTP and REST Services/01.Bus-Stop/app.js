async function getInfo() {
    let url = "http://localhost:3030/jsonstore/bus/businfo/";
    let inputField = document.querySelector("#stopId").value
    let divForInfo = document.getElementById(`stopName`);
    let busesDiv = document.querySelector("#buses");
    divForInfo.textContent = ``;
    busesDiv.textContent = ``;
    try {
        let response = await fetch(url + inputField);
        let data = await response.json();
        divForInfo.textContent = data.name;
        busesList(data.buses)        
    } catch (error) {
        divForInfo.textContent = `Error`
    }

    function busesList(buses){
        let arr = Object.entries(buses);
        for ([bus,time] of arr){
            let li = document.createElement(`li`);
            li.textContent = `Bus ${bus} arrives in ${time} minutes`;
            busesDiv.appendChild(li);
        }
    }
}