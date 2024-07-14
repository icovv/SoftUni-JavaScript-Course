function sumTable() {
    let rows = document.getElementsByTagName(`tr`);
    let total = 0;
    for (let i = 1; i < rows.length - 1; i ++){
        
        total += Number(rows[i].getElementsByTagName(`td`)[1].textContent)
    }
    document.getElementById(`sum`).textContent = total
}