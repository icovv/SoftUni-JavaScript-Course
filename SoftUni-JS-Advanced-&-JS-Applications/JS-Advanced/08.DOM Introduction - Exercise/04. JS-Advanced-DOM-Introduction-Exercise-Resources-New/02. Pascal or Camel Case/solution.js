function solve() {
  let text = document.getElementById(`text`).value;
  text = text.toLowerCase()
  let convention = document.getElementById(`naming-convention`).value;
  let result = ``;
  //this is an example //Camel Case
  if (convention == `Camel Case`){
    let textArr = text.split(` `);
    result += textArr[0]
    for (let i = 1; i < textArr.length; i++){
      result += textArr[i][0].toUpperCase() + textArr[i].substring(1).toLowerCase()
    }
    document.getElementById(`result`).textContent = result
  } else if (convention == `Pascal Case`){
    let textArrPascal = text.split(` `);
    textArrPascal.forEach(word => result += word[0].toUpperCase() + word.substring(1).toLowerCase());
    document.getElementById(`result`).textContent = result
  } else {
    document.getElementById(`result`).textContent = `Error!`
  }

}