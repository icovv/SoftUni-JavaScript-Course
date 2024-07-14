window.addEventListener(`load`,solution);
async function solution() {
    let url = `http://localhost:3030/jsonstore/advanced/articles/list`;
    let divToAppend = document.getElementById(`main`);
    let contentUrl = `http://localhost:3030/jsonstore/advanced/articles/details/`

    let response = await fetch(url);
    let data = await response.json();
    createElements(data);

    function createElements(data){
        //ee9823ab-c3e8-4a14-b998-8c22ec246bd3
        for(let i = 0; i < data.length; i++){
        let div1 = document.createElement(`div`);
        div1.classList = `accordion`;
        divToAppend.appendChild(div1);
        let div2 = document.createElement(`div`);
        div2.classList = `head`;
        div1.appendChild(div2);
        let span = document.createElement(`span`);
        span.innerHTML = data[i].title;
        div2.appendChild(span);
        let button = document.createElement(`button`);
        button.classList = `button`;
        button.id = data[i]._id;
        button.textContent = `More`;
        div2.appendChild(button)
        
        let anotherDiv = document.createElement(`div`);
        anotherDiv.classList = `extra`;
        div1.appendChild(anotherDiv);
        addContent(data[i]._id)
        button.addEventListener(`click`,buttonEvent)


        async function addContent(id){
            let responseServer = await fetch(contentUrl + id);
            let responseData = await responseServer.json();
    
            let p = document.createElement(`p`);
            p.textContent = responseData.content;
            anotherDiv.appendChild(p)
        }
        function buttonEvent(e){
            const button = e.target;
            button.textContent = button.textContent == 'More' ? 'Less' : 'More';
            anotherDiv.style.display = button.textContent == 'More' ? 'none' : 'block';
    
        }

        }
    }



}