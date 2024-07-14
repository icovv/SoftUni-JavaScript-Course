function create(words) {
   let divContent = document.getElementById(`content`)

   for (let word of words){
      let div = document.createElement(`div`)
      let p = document.createElement(`p`)
      p.style.display = `none`
         p.textContent = word
         divContent.appendChild(div)
         div.appendChild(p)
   }
   let divs = Array.from(divContent.getElementsByTagName(`div`));
   console.log(divs)
   for (let div of divs){
      div.addEventListener(`click`, function one() {
         let p = div.getElementsByTagName(`p`)[0];
         p.style.display = ``;
      })
   }

}