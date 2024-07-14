    import { html, render } from './node_modules/lit-html/lit-html.js'

    document.querySelector("body > form").addEventListener(`submit`,onSubmit);
    let root = document.querySelector("#root")
    function onSubmit(e){
        e.preventDefault();
        let formData = new FormData(e.target);
        let inputFIeld = formData.get(`towns`).split(`, `);

        renderFn(newStructure(inputFIeld));
    }

    function newStructure(data){
        return html `
        <ul>
            ${data.map(item => html`<li>${item}</li>`)};
        </ul>`
    }


    function renderFn(htmlScript){
        return render(htmlScript,root)
    }