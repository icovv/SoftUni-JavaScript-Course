window.addEventListener('load', solve);

function solve() {
   let firstNameField = document.querySelector("#first-name");
   let lastNameField = document.querySelector("#last-name");
   let NumOfPeopleField = document.querySelector("#people-count");
   let fromDateField = document.querySelector("#from-date");
   let daysField = document.querySelector("#days-count");
    
   document.querySelector("#next-btn").addEventListener(`click`, nextStep);

   function nextStep(event){
        event.preventDefault();
        if (firstNameField.value == `` || lastNameField.value == `` || NumOfPeopleField.value == `` || fromDateField.value == `` || daysField.value == ``){
            return;
        }
        let firstNameForLater = firstNameField.value;
        let lastNameForLater = lastNameField.value;
        let numOfPeopleForLater = NumOfPeopleField.value;
        let fromDateForLater = fromDateField.value;
        let daysForLater = daysField.value;

        let ulList = document.querySelector("#info-ticket > div > div > ul");
        let list = createList(`ticket`,firstNameField.value,lastNameField.value,NumOfPeopleField.value,fromDateField.value,daysField.value )
        ulList.appendChild(list);
        let btn1 = createBtn1(`edit-btn`,`Edit`);
        let btn2 = createBtn2(`continue-btn`,`Continue`);
        list.appendChild(btn1)
        list.appendChild(btn2)

        document.querySelector("#next-btn").disabled = true;
        firstNameField.value = ``;
        lastNameField.value = ``;
        NumOfPeopleField.value = ``;
        fromDateField.value = ``;
        daysField.value = ``;
        document.querySelector("#info-ticket > div > div > ul > li > button.edit-btn").addEventListener(`click`,edit);
        document.querySelector("#info-ticket > div > div > ul > li > button.continue-btn").addEventListener(`click`,continueBtn)
        function edit(){
            firstNameField.value = firstNameForLater;
            lastNameField.value = lastNameForLater;
            NumOfPeopleField.value = numOfPeopleForLater;
            fromDateField.value = fromDateForLater;
            daysField.value = daysForLater;
            document.querySelector("#next-btn").disabled = false;
            list.remove()
        }
        function continueBtn(){
            let ulForFinal = document.querySelector("#confirm-ticket-section > div > div > ul");
            let listForFinal = createList(`ticket-content`,firstNameForLater,lastNameForLater,numOfPeopleForLater,fromDateForLater,daysForLater);
            let btnConfirm = createBtn1(`confirm-btn`,`Confirm`);
            let btnCancel = createBtn1(`cancel-btn`,`Cancel`);
            ulForFinal.appendChild(listForFinal);
            listForFinal.appendChild(btnConfirm);
            listForFinal.appendChild(btnCancel);
            list.remove()
            document.querySelector("#confirm-ticket-section > div > div > ul > li > button.cancel-btn").addEventListener(`click`,cancelBtn);
            document.querySelector("#confirm-ticket-section > div > div > ul > li > button.confirm-btn").addEventListener(`click`,confirmBtn)
            
            function cancelBtn(){
                document.querySelector("#next-btn").disabled = false;
                listForFinal.remove();
            }
            function confirmBtn(){
                let body = document.querySelector("#body");
                body.textContent = ``;
                let h1 = document.createElement(`h1`);
                h1.id = `thank-you`;
                h1.textContent = "Thank you, have a nice day! ";
                let backBtn = document.createElement(`button`);
                backBtn.id = `back-btn`;
                backBtn.textContent = `Back`;
                body.appendChild(h1);
                body.appendChild(backBtn)
                backBtn.addEventListener(`click`,reloadPage);
                function reloadPage(){
                    location.reload();
                }
            }
        }
    }
   function createList(listClass,firstName,lastName,people,date,days){
        let list = document.createElement(`li`);
        list.className = listClass;
        let article = document.createElement(`article`);
        list.appendChild(article);
        let h3 = document.createElement(`h3`);
        h3.textContent = `Name: ${firstName} ${lastName}`
        article.appendChild(h3);
        let p1 = document.createElement(`p`);
        p1.textContent = `From date: ${date}`;
        article.appendChild(p1);
        let p2 = document.createElement(`p`);
        p2.textContent = `For ${days} days`;
        article.appendChild(p2);
        let p3 =document.createElement(`p`);
        p3.textContent = `For ${people} people`
        article.appendChild(p3)
        return list 
   }
   function createBtn1(classText,text){
    let button = document.createElement(`button`);
    button.className = classText;
    button.textContent = text;
    return button;
   }
   function createBtn2(classText,text){
    let button = document.createElement(`button`);
    button.className = classText;
    button.textContent = text;
    return button;
   }
}


    
    
