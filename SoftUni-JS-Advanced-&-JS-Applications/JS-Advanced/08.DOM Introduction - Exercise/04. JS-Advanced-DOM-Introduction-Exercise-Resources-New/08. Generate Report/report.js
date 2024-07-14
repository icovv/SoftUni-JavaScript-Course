function generateReport() {
    let checkboxes = document.querySelectorAll('table>thead>tr>th>input');
    let rows = document.querySelectorAll('tbody>tr');
    let output = [];
    for (let i = 0; i < rows.length; i++) {
        let obj = {};
        let values = returnValue(i);
        for (let j = 0; j < checkboxes.length; j++) {
            if (checkboxes[j].checked) {
                obj[checkboxes[j].name] = values[j];
            }
        }
        output.push(obj);
    }
    document.querySelector('#output').value = JSON.stringify(output, null, 2);

    function returnValue(rowNum){
        let rows = document.querySelectorAll('tbody>tr')[rowNum].getElementsByTagName('td');
        let arrToReturn = [];
        for (let i = 0; i < rows.length; i++){
            arrToReturn.push(rows[i].textContent)
        }
        return arrToReturn
    }
}