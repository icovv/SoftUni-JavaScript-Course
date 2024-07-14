function getArticleGenerator(articles) {
    let newArr = Array.from(articles)
    let div = document.querySelector("#content");
    return solve

    function solve(){
        if (!newArr.length){
            return
        }
        let el = newArr[0]
        newArr.shift()
        createElement(el);
    }

    function createElement(el){
        let article = document.createElement(`article`);
        div.appendChild(article);
        article.textContent = el
    }
}
