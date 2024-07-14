function solve() {
  let text = document.getElementById(`input`).value.split(`.`).filter((x) => x.length > 0 );
  let output = document.getElementById(`output`)
  //Hello.How.Are.You
  let arr = []
  for (let i = 0; i < text.length ; i += 3){
    let result = ``
    if (typeof text[i] != `undefined`){
    console.log(typeof text[i])
    result += text[i] + `.`
    }
    if(typeof text[i + 1] != `undefined`){
    console.log(typeof text[i+1])
    result += text[i+1] + `.`
    }
    if(typeof text[i + 2] != `undefined`){
    console.log(typeof text[i+ 2])
    result += text[i+2] + `.`
    }
    arr.push(`<p>${result}</p>`)
  }
  output.innerHTML = arr.join(``)
}