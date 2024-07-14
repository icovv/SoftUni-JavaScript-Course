function solve(text){
    let patterm = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/gm
    console.log(text.match(patterm).join(` `))
}  
solve("ivan ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Ivan IvAnov, Ivan Ivanov")