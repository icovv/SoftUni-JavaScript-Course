function attachEventsListeners() {
    let buttons = document.querySelectorAll(`input[type=button]`);

    for (let button of buttons){
        button.addEventListener(`click`,function doSth(){
            let currentUnit = button.parentNode.children[1];
            let value = Number(currentUnit.value);
            let type = button.parentNode.children[0].textContent;

            switch(type){
                case `Days: `: final(value);break;
                case `Hours: `: final(value/24);break;
                case `Minutes: `: final(value/24/60);break;
                case `Seconds: `: final(value/24/60/60);break;
            }
        })
    }
    function final(day){
        let inputs = document.querySelectorAll(`input[type=text]`);
        inputs[0].value = day;
        inputs[1].value = day*24;
        inputs[2].value = day * 24 * 60;
        inputs[3].value = day * 24 * 60 * 60
    }
}