function validate() {
    let forValidField = []
    let usernameField = document.querySelector("#username");
   let usernameReg = /^[A-Za-z0-9]{3,20}$/;
    let emailField = document.querySelector("#email");
    let emailReg = /^[^@.]+@[^@]*\.[^@]*$/;
    let pwField = document.querySelector("#password");
    let confirmPwField = document.querySelector("#confirm-password");
    let pwReg = /^[\w]{5,15}$/;
    let button = document.querySelector("#submit");
    let companyCheckbox = document.querySelector("#company");
    let hiddenCompanyField = document.querySelector("#companyInfo");
    let companyField = document.querySelector("#companyNumber");
    companyCheckbox.addEventListener(`change`, ()=>{
        if (companyCheckbox.checked){
            hiddenCompanyField.style.display = `block`
        } else {
            hiddenCompanyField.style.display = `none`
        }
    })


    button.addEventListener(`click`, btnClick);

    function btnClick(e){
        e.preventDefault()
        if (!usernameField.value.match(usernameReg)){
            usernameField.style.borderColor = "red"
            forValidField.push(false)
        } else {
            usernameField.style.borderColor = `none`
            forValidField.push(true)
        }
        if(!emailField.value.match(emailReg)){
            emailField.style.borderColor = `red`
            forValidField.push(false)
        } else{
            emailField.style.borderColor = `none`
            forValidField.push(true)
        }

        if (!pwField.value.match(pwReg) || pwField.value != confirmPwField.value){
            pwField.style.borderColor = `red`
            forValidField.push(false)
        } else {
            pwField.style.borderColor = `none`
            forValidField.push(true)
        }

        if (!confirmPwField.value.match(pwReg) || confirmPwField.value != pwField.value ){
            confirmPwField.style.borderColor = `red`
            forValidField.push(false)
        } else {
            confirmPwField.style.borderColor = `none`
            forValidField.push(true)
        }
        if (companyCheckbox.checked && !(companyField.value >= 1000 && companyField.value <= 9999)){
            companyField.style.borderColor = `red`;
            forValidField.push(false)
        } else if (companyCheckbox.checked && companyField.value >= 1000 && companyField.value <= 9999) {
            companyField.style.borderColor = `none`
            forValidField.push(true)
        }

        if (forValidField.includes(false)){
            document.querySelector("#valid").style.display = "none"
        } else {
            document.querySelector("#valid").style.display = "block"
        }

    }
}
