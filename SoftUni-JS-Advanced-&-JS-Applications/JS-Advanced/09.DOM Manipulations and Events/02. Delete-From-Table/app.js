function deleteByEmail() {
    let inputField = document.querySelectorAll(`input[type = text]`)[0].value;
    let tableRows = document.querySelectorAll(`tbody > tr`);
    let tbody = document.getElementsByTagName(`tbody`)[0];
    let notification = document.getElementById(`result`);
    let success = 0;


    for (let i = 0; i < tableRows.length; i ++){
        let tableRowEmail = tableRows[i].getElementsByTagName(`td`)[1].textContent;
        if (tableRowEmail == inputField){
            tbody.removeChild(tableRows[i]);
            notification.textContent = `Deleted.`
            success += 1
        }

    }
    if(success == 0){
        document.querySelector("#result").textContent = `Not found.`
    }

}