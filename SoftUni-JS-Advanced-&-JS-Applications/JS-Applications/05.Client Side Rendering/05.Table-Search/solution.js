import { html, render } from "./node_modules/lit-html/lit-html.js";
import { GetReq, PostReq } from "./RestReq.js";

let root = document.querySelector("body > table > tbody");
document.querySelector('#searchBtn').addEventListener('click', onClick);
solve()
async function solve(match){
      let data = await GetReq();
      let dataAsValues = Object.values(data);
      rendererFn(dataAsValues.map(x => htmlContext(x,match)))
   }

function classFn(data,match){
   console.log(data.email);
   let matchToLower = match?.toLowerCase()
   let emailToLower = data.email.toLowerCase();
   let firstNameToLower = data.firstName.toLowerCase();
   let lastNameToLower = data.lastName.toLowerCase();
   let courseToLower = data.course.toLowerCase();
   if (emailToLower.includes(matchToLower) || firstNameToLower.includes(matchToLower) || lastNameToLower.includes(matchToLower) || courseToLower.includes(matchToLower)){
      return true;
   } else {
      return false;
   }
}

function htmlContext(data,match){
   return html`
   <tr class=${classFn(data,match) ? `select` : ``}>
      <td>${data.firstName} ${data.lastName}</td>
      <td>${data.email}</td>
      <td>${data.course}</td>
   </tr>`
}

function onClick() {
   debugger
      let textField = document.querySelector("#searchField");
      if (textField.value == ``){
         return alert(`Search information is required`)
      }
      solve(textField.value);
      textField.value = ``;
   }

function rendererFn(data){
   return render(data,root)
}