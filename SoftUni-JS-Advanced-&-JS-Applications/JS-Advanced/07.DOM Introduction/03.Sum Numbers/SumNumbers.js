function calc() {
    let number1 = document.getElementById(`num1`).value
    let number2 = document.getElementById(`num2`).value
    let PrintHere = document.getElementById(`sum`)

    PrintHere.value = Number(number1) + Number(number2) 
}
