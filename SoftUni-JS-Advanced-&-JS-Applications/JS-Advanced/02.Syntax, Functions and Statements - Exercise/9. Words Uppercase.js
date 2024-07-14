function solve(text){
     return text.split(/[^a-zA-z0-9]+/)
                .join(` `).
                trim().
                split(` `).
                map(x => x.toUpperCase())
                .join(`, `)
}
solve("Hi, how are you?")