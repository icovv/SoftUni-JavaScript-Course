function tradeCommissions (input) {

    let town = input[0];
    let sales = Number(input[1]);

    switch (town) {
        case "Sofia":
            if (sales >= 0 && sales <= 500) {
                console.log((sales * (5.5/100)).toFixed(2))
            } else if (sales > 500 && sales <= 1000){
                console.log((sales * (7/100)).toFixed(2))
            } else if (sales > 1000 && sales <= 10000){
                console.log((sales * (8/100)).toFixed(2))
            } else if (sales > 10000){
                console.log((sales * (12/100)).toFixed(2))
            } else {
                console.log("error")
            }
            break;
        case "Varna":
            if (sales >= 0 && sales <= 500) {
                console.log((sales * (4.5/100)).toFixed(2))
            } else if (sales > 500 && sales <= 1000){
                console.log((sales * (7.5/100)).toFixed(2))
            } else if (sales > 1000 && sales <= 10000){
                console.log((sales * (10/100)).toFixed(2))
            } else if (sales > 10000){
                console.log((sales * (13/100)).toFixed(2))
            } else {
                console.log("error")
            }
            break;
        case "Plovdiv":
            if (sales >= 0 && sales <= 500) {
                console.log((sales * (5.5/100)).toFixed(2))
            } else if (sales > 500 && sales <= 1000){
                console.log((sales * (8/100)).toFixed(2))
            } else if (sales > 1000 && sales <= 10000){
                console.log((sales * (12/100)).toFixed(2))
            } else if (sales > 10000){
                console.log((sales * (14.5/100)).toFixed(2))
            } else {
                console.log("error")
            }
            break;
        default:
            console.log("error");
            break;     
    }
}
//tradeCommissions (["Sofia", "-50"])