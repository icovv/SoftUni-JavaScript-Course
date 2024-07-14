function validate() {
    let field = document.querySelector("#email");
    let validEmail = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/;
    field.addEventListener(`change`, doSth)

    function doSth(){
        if (!field.value.match(validEmail)){
            field.className = `error`
        } else {
            field.className = ``
        }
    }
}