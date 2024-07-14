window.addEventListener('load', solve);

function solve() {
    let firstName = document.querySelector("#first-name");
    let lastName = document.querySelector("#last-name");
    let checkIn = document.querySelector("#date-in");
    let checkOut = document.querySelector("#date-out");
    let guestsNum = document.querySelector("#people-count");
    let infoListUl = document.querySelector("#info-reservations > div > div > ul");
    let confirmReservationUl = document.querySelector("#confirm-reservations > div > div > ul")

    document.getElementById(`next-btn`).addEventListener(`click`,doSomething);

function doSomething(event){
    event.preventDefault();
    if (firstName.value ==`` || lastName.value == `` || checkIn.value == `` || checkOut.value==`` || guestsNum.value==``){
        return
    }
    
    if ((new Date(checkIn.value)).getTime() >= (new Date(checkOut.value)).getTime()){
        return;
    }
    let liClass = document.createElement(`li`);
    liClass.className = `reservation-content`;
    infoListUl.appendChild(liClass)
    let article = createElement(firstName.value,lastName.value,checkIn.value,checkOut.value,guestsNum.value);
    let btn1 = createBtn1(`edit-btn`,`Edit`); //,,
    let btn2 = createBtn2(`continue-btn`,`Continue`);
    liClass.appendChild(article);
    liClass.appendChild(btn1);
    liClass.appendChild(btn2);
    let firstNameForEnd = firstName.value;
    let lastNameForEnd = lastName.value;
    let checkInForEnd = checkIn.value;
    let checkOutForEnd = checkOut.value;
    let guestsNumForEnd = guestsNum.value;

    firstName.value = ``;
    lastName.value = ``;
    checkIn.value = ``;
    checkOut.value = ``;
    guestsNum.value = ``;

    document.getElementById(`next-btn`).disabled = true;

    document.querySelector("#info-reservations > div > div > ul > li > button.edit-btn").addEventListener(`click`,editBtn);
    document.querySelector("#info-reservations > div > div > ul > li > button.continue-btn").addEventListener(`click`,continueBtn);
    
    function editBtn(){
        document.getElementById(`next-btn`).disabled = false;
        firstName.value = firstNameForEnd
        lastName.value = lastNameForEnd
        checkIn.value = checkInForEnd
        checkOut.value = checkOutForEnd
        guestsNum.value = guestsNumForEnd
        liClass.remove();
    }
    function continueBtn(){
        liClass.remove();
        let liClassForLast = document.createElement(`li`);
        liClassForLast.className = `reservation-content`;
        confirmReservationUl.appendChild(liClassForLast)
        let article = createElement(firstNameForEnd,lastNameForEnd,checkInForEnd,checkOutForEnd,guestsNumForEnd);
        let btn1 = createBtn1(`confirm-btn`,`Confirm`);
        let btn2 = createBtn2(`cancel-btn`,`Cancel`);
        liClassForLast.appendChild(article);
        liClassForLast.appendChild(btn1);
        liClassForLast.appendChild(btn2);

        document.querySelector("#confirm-reservations > div > div > ul > li > button.confirm-btn").addEventListener(`click`,confirmBTN);
        document.querySelector("#confirm-reservations > div > div > ul > li > button.cancel-btn").addEventListener(`click`,cancelBTN)
        function confirmBTN(){
            document.getElementById(`next-btn`).disabled = false
            liClassForLast.remove();
            document.querySelector("#verification").className = `reservation-confirmed`;
            document.querySelector("#verification").textContent = `Confirmed.`;
        }
        function cancelBTN(){
            document.getElementById(`next-btn`).disabled = false
            liClassForLast.remove();
            document.querySelector("#verification").className = `reservation-cancelled`;
            document.querySelector("#verification").textContent = `Cancelled.`;
        }
    }

}


function createElement(firstName,lastName,checkIn,checkOut,guestsNum){
    let articleCreated = document.createElement(`article`);
    let h3ForName = document.createElement(`h3`,);
    h3ForName.textContent = `Name: ${firstName} ${lastName}`
    articleCreated.appendChild(h3ForName);
    let paragraphForDateIn = document.createElement(`p`);
    paragraphForDateIn.textContent = `From date: ${checkIn}`
    articleCreated.appendChild(paragraphForDateIn);
    let paragraphForDateOut = document.createElement(`p`);
    paragraphForDateOut.textContent = `To date: ${checkOut}`
    articleCreated.appendChild(paragraphForDateOut);
    let paragraphForGuests = document.createElement(`p`);
    paragraphForGuests.textContent = `For ${guestsNum} people`;
    articleCreated.appendChild(paragraphForGuests)


    return articleCreated;
}

function createBtn1(button1,button1Text){
    let createBtnOne = document.createElement(`button`);
    createBtnOne.className = button1;
    createBtnOne.textContent = button1Text;

    return createBtnOne
}
function createBtn2(button2,button2Text){
    let createBtnTwo = document.createElement(`button`);
    createBtnTwo.className = button2;
    createBtnTwo.textContent = button2Text
    return createBtnTwo
}
    }



    
    
