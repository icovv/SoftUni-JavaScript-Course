import { html, render } from './node_modules/lit-html/lit-html.js'
import { cats} from "./catSeeder.js" ;

let root = document.querySelector("#allCats");
load();
function load(){
    renderFN(createOutterHtml(cats.map(cat => createInnerHtml(cat))))
}

function createOutterHtml(data){
    return html`
    <ul>
        ${data};
    </ul>`
}

function createInnerHtml(data){
    return html`
                <li>
                <img src="./images/${data.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
                <div class="info">
                    <button class="showBtn" @click = ${onClick}>Show status code</button>
                    <div class="status" style="display: none" id=${data.id}>
                        <h4>Status Code: ${data.statusCode}</h4>
                        <p>${data.statusMessage}</p>
                    </div>
                </div>
            </li> 
    `
}

function renderFN(data){
    return render(data, root)
}
function onClick(e){
    let parent = e.target.parentElement;
    let div = parent.querySelector(`div.status`);
    if(div.style.display == `none`){
        div.style.display = `block`
        e.target.textContent = `Hide status code`
    } else if (div.style.display == `block`){
        div.style.display = `none`
        e.target.textContent = `Show status code`
    }
}

