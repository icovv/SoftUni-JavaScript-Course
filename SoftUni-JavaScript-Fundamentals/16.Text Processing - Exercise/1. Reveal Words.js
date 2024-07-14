    function textProcessing(word,sentance){
        let wordsSplit = word.split(`, `)
        for (let words of wordsSplit){
            let template = `*`.repeat(words.length);
            sentance = sentance.replace(template,words)
        }  
        console.log(sentance)
        
    }
// textProcessing('great','softuni is ***** place for learning new programming languages')
textProcessing('great, learning', 'softuni is ***** place for ******** new programming languages')