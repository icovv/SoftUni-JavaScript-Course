function hardWords(arr){
    let [sentance,words] = arr;
    let newSentance = sentance.split(` `).filter(word => word.includes(`_`));

    for (let symbol of newSentance){
       if (!symbol.endsWith(`_`)){
        symbol = symbol.slice(0,symbol.length - 1)
       }
       let fill = words.find(word => word.length == symbol.length);
       sentance = sentance.replace(symbol,fill)
    }
    console.log(sentance)
}
hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.', ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])