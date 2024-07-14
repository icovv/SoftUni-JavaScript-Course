import { towns } from './towns.js';
import { html, render } from './node_modules/lit-html/lit-html.js'

let root = document.querySelector("#towns");
let searchField = document.querySelector("#searchText");
document.querySelector(`button`).addEventListener(`click`,onClick);
let resultField = document.querySelector("#result")
search();

function search(match) {
   renderFn(townsDivOutterHTML(towns,match));
   if (match != null){
   resultField.textContent = `${match?.length} matches found`
   }
}
function doSth(town,matches){
   if (typeof matches == `object`)
   for (let match of matches){
         if (town.includes(match)){
            return true
         }
   } else {
      if (town.includes(matches)){
         return true
      }
   }
   return false
}
function townsDivOutterHTML(data,match){
   return html `
   <ul>
      ${data.map(x => html`<li class = ${ doSth(x,match) ? `active` : ``} > ${x} </li>`)}
   </ul>`
}


function renderFn(data){
   return render(data,root)
}

function onClick(e){
   let input = searchField.value;
   let match = towns.filter(town => town.includes(input));
   
   search(match)
}