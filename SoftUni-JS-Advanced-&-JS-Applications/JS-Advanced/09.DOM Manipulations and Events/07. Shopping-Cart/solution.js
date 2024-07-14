function solve() {
   let buttonsAdd = document.getElementsByClassName(`add-product`);
   let textArea = document.querySelector('body > div > textarea');
   let buttonsArr = Array.from(buttonsAdd)
   let arr = [];
   let totalPrice = 0;

   for (let i = 0 ; i < buttonsArr.length; i++){
      buttonsArr[i].addEventListener(`click`,function buttonClick(){
         let buttonParrent = buttonsArr[i].parentNode.parentNode;
         let name = buttonParrent.getElementsByClassName(`product-title`)[0].textContent;
         let price = Number(buttonParrent.getElementsByClassName(`product-line-price`)[0].textContent);
         if (!arr.includes(name)){
            arr.push(name)
         }
         let finalText  = `Added ${name} for ${price.toFixed(2)} to the cart.\n`
         textArea.value += finalText
         totalPrice += Number(price)
      });
   }

   let checkOut = document.querySelector('body > div > button');
   checkOut.addEventListener(`click`, function total(){
      let text = `You bought ${arr.join(`, `)} for ${totalPrice.toFixed(2)}.`
      textArea.value += text
      disableButtons()
   })

   function disableButtons(){
      let buttons = Array.from(document.getElementsByTagName(`button`)).forEach((btn) => btn.disabled = true);
   }

}