function solve() {
    let input = document.querySelector("#task")
    let descr = document.querySelector("#description");
    let date = document.querySelector("#date");
    let sectionDiv = document.querySelector("body > main > div > section:nth-child(2) > div:nth-child(2)");
    let sectionInProgDiv = document.querySelector("#in-progress");
    let sectionComplDiv = document.querySelector("body > main > div > section:nth-child(4) > div:nth-child(2)");
    let addBtn = document.querySelector("#add")
    let color1 = `green`;
    let color2 = `red`;
    let name1 = `Start`;
    let name2 = `Delete`
    addBtn.addEventListener(`click`,createEl)
    
    
    function createEl(e){
        e.preventDefault()

        if (input.value != `` && descr.value != `` && date.value != ``){
        el = document.createElement(`article`);
        el.innerHTML = `<h3>${input.value}</h3>` +
                        `<p>Description: ${descr.value}</p>` +
                        `<p>Due Date: ${date.value}</p>` +
                        `<div class=flex >` +   
                            `<button class = ${color1}>${name1}</button>` +
                            `<button class = ${color2}>${name2}</button>`+
                        `</div>` 
        sectionDiv.appendChild(el)
        el.querySelector("body > main > div > section:nth-child(2) > div:nth-child(2) > article > div > button.green").addEventListener(`click`,start);
        el.querySelector("body > main > div > section:nth-child(2) > div:nth-child(2) > article > div > button.red").addEventListener(`click`,delFn);
    }   
    
    }

    function start(e){
        let input = e.target.parentElement.parentElement.querySelector("body > main > div > section:nth-child(2) > div:nth-child(2) > article > h3")
        let descr = e.target.parentElement.parentElement.querySelector("body > main > div > section:nth-child(2) > div:nth-child(2) > article > p:nth-child(2)")
        let date = e.target.parentElement.parentElement.querySelector("body > main > div > section:nth-child(2) > div:nth-child(2) > article > p:nth-child(3)");
        let newEl = document.createElement(`article`);
        newEl.innerHTML = `<h3>${input.textContent}</h3>` +
                        `<p>Description: ${descr.textContent.split(` `)[1]}</p>` +
                        `<p>Due Date: ${date.textContent.split(` `)[2]}</p>` +
                        `<div class=flex >` +   
                            `<button class = red >Delete</button>` +
                            `<button class = orange >Finish</button>`+
                        `</div>` 
                        sectionInProgDiv.appendChild(newEl);
                        e.target.parentElement.parentElement.remove()
        newEl.querySelector("#in-progress > article > div > button.orange").addEventListener(`click`,finish);
        newEl.querySelector("#in-progress > article > div > button.red").addEventListener(`click`, delFn);
    }
    function delFn(e){
        let parent = e.target.parentElement.parentElement
        parent.remove()
    }
    function finish(e){
        let input = e.target.parentElement.parentElement.querySelector("#in-progress > article > h3")
        let descr = e.target.parentElement.parentElement.querySelector("#in-progress > article > p:nth-child(2)")
        let date = e.target.parentElement.parentElement.querySelector("#in-progress > article > p:nth-child(3)")
        let finalEl = document.createElement(`article`);
        finalEl.innerHTML = `<h3>${input.textContent}</h3>` +
                        `<p>Description: ${descr.textContent.split(` `)[1]}</p>` +
                        `<p>Due Date: ${date.textContent.split(` `)[2]}</p>`
        sectionComplDiv.appendChild(finalEl);
        e.target.parentElement.parentElement.remove()
    }
}