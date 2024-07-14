function attachEventsListeners() {
    let input = document.querySelector("#inputDistance");
    let dropdownForInput = document.querySelector("#inputUnits");
    let button = document.querySelector("#convert");
    let dropdownForOutput = document.querySelector("#outputUnits");
    let output = document.querySelector("#outputDistance")

    button.addEventListener(`click`, function solve(){
        let currVal = dropdownForInput.value;
        let number = Number(input.value)
        let numToM = 0;
        if (currVal == `km`){
            numToM = number * 1000
        } else if (currVal == `m`) {
            numToM = number
        } else if (currVal == `cm`) {
            numToM = number / 100

        } else if (currVal == `mm`) {
            numToM = number / 1000

        } else if (currVal == `mi`){
            numToM = number * 1609.34

        } else if (currVal == `yrd`) {
            numToM = number * 0.9144

        } else if (currVal == `ft`){
            numToM = number * 0.3048
        } else if (currVal == `in`){
            numToM = number * 0.0254
        }
        convert(numToM);
    })

    function convert(NumToM){
        let currVal = dropdownForOutput.value;
        let newNum = 0;
        if (currVal == `km`){
            newNum = NumToM / 1000
        } else if (currVal == `m`) {
            newNum = NumToM
        } else if (currVal == `cm`) {
            newNum = NumToM * 100

        } else if (currVal == `mm`) {
            newNum = NumToM * 1000

        } else if (currVal == `mi`){
            newNum = NumToM / 1609.34

        } else if (currVal == `yrd`) {
            newNum = NumToM / 0.9144

        } else if (currVal == `ft`){
            newNum = NumToM / 0.3048
        } else if (currVal == `in`){
            newNum = NumToM / 0.0254
        }
        output.value = newNum
    }
}