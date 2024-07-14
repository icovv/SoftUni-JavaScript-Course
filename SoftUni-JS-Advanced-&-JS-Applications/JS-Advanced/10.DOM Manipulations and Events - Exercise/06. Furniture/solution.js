  function solve() {
    let generateButton = document.querySelector("#exercise > button:nth-child(3)");
    let generatedText = document.querySelector("#exercise > textarea:nth-child(2)");
    let tbody = document.querySelector("#exercise > div > div > div > div > table > tbody");
    let buyButton = document.querySelector("#exercise > button:nth-child(6)");
    let printHere = document.querySelector("#exercise > textarea:nth-child(5)");
    generateButton.addEventListener(`click`, function solve(){
      let arr = JSON.parse(generatedText.value);
        for (let obj of arr){
          let tr = document.createElement(`tr`);
          tbody.appendChild(tr);
          
          let tdForpic = document.createElement(`td`);
          tr.appendChild(tdForpic)
          let img = document.createElement(`img`);
          img.src = obj.img
          tdForpic.appendChild(img)
          
          let tdForName = document.createElement(`td`);
          let name = document.createElement(`p`);
          name.textContent = obj.name;
          tdForName.appendChild(name);
          tr.appendChild(tdForName)
          
          let tdForPrice = document.createElement(`td`);
          tr.appendChild(tdForPrice);
          let price = document.createElement(`p`);
          price.textContent = Number(obj.price)
          tdForPrice.appendChild(price)

          let tdForDec = document.createElement(`td`);
          tr.appendChild(tdForDec)
          let dec = document.createElement(`p`);
          dec.textContent = Number(obj.decFactor)
          tdForDec.appendChild(dec);

          let checkBox = document.createElement(`td`);
          tr.appendChild(checkBox);
          let checkbox = document.createElement(`input`);
          checkbox.type = `checkbox`
          checkBox.appendChild(checkbox)
          
          
        }
    })
    let arrForNames = [];
    let totalPrice = 0;
    let decorationFactor = 0;
    let print = false;
    buyButton.addEventListener(`click`, function buy(){
      let trs = document.querySelectorAll("#exercise > div > div > div > div > table > tbody > tr");
        for (let i = 1; i < trs.length ; i ++){
            let checkbox = trs[i].querySelectorAll(`input[type = checkbox]`)[0]
            let name = trs[i].getElementsByTagName(`td`)[1].textContent;
            let price = Number(trs[i].getElementsByTagName(`td`)[2].textContent);
            let decor = Number(trs[i].getElementsByTagName(`td`)[3].textContent);
            if (checkbox.checked){
              arrForNames.push(name);
              totalPrice += price;
              decorationFactor += decor
              print = true;
            }
        }
        if(print){
        printHere.value = `Bought furniture: ${arrForNames.join(`, `)}\n`
        printHere.value += `Total price: ${totalPrice.toFixed(2)}\n`;
        printHere.value += `Average decoration factor: ${decorationFactor/arrForNames.length}`
        buyButton.disabled = true;
        }
      })
  }