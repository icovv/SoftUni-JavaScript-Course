function calculator() {

    let row1 = ``;
    let row2 = ``;
    let row3 = ``;
    function init(item1,item2,item3){
        row1 = document.querySelectorAll(item1)[0];
        row2 = document.querySelectorAll(item2)[0];
        row3 = document.querySelectorAll(item3)[0]
    }
    function add(){
        return row3.value = Number(row1.value) + Number(row2.value);
    }
    function subtract(){
        return row3.value = row1.value - row2.value;}

    return {
        init,
        add,
        subtract
    }

}

const calculate = calculator ();

calculate.init ('#num1', '#num2', '#result');


