function attachEvents() {
    let btn = document.querySelector("#submit");
    let forecastDiv = document.querySelector("#forecast");
    let currentDiv = document.querySelector("#current");
    let upcomingDiv = document.querySelector("#upcoming");
    let inputField = document.querySelector("#location");

    let url = "http://localhost:3030/jsonstore/forecaster/locations"
    let urlForCurCon = "http://localhost:3030/jsonstore/forecaster/today/"
    let urlForThreeDays = "http://localhost:3030/jsonstore/forecaster/upcoming/"
    btn.addEventListener(`click`,doSth)

    async function doSth(){
        forecastDiv.style.display = `block`;
        if (document.querySelector("#current > div.forecasts")){
            document.querySelector("#current > div.forecasts").remove();
        }
        try {
            let response = await fetch(url);
            let data = await response.json();
            let result = checkData(data);
            if (result == false){
                forecastDiv.textContent = `Error`
            } else {
                currCon(result);
                threeDays(result);
            }
        } catch (error) {
            forecastDiv.textContent = `Error`
        }

    }

    function checkData (data){
        let arr = Object.entries(data);
        for ([num,item] of arr){
            if (item.name == inputField.value){
                return {code:item.code, location:item.name}
            }
        }
        return false;
    }

    async function currCon(data){
        let response = await fetch(urlForCurCon + data.code);
        let responseData = await response.json();
        let dataAsArr = Object.entries(responseData)
        let symbol = symbolToReturn(Object.entries(responseData)[0][1].condition);
        let div = document.createElement(`div`);
        div.className = `forecasts`;
        currentDiv.appendChild(div);
        let spanForSymbol = document.createElement(`span`);
        spanForSymbol.className = `condition symbol`;
        spanForSymbol.innerHTML = symbol;
        div.appendChild(spanForSymbol);
        let spanForCondition = document.createElement(`span`);
        spanForCondition.className = `condition`;
        div.appendChild(spanForCondition);
        let spanForName = document.createElement(`span`);
        spanForName.className = `forecast-data`
        spanForName.textContent = dataAsArr[1][1];
        spanForCondition.appendChild(spanForName)
        let spanForTemp = document.createElement(`span`);
        spanForTemp.className = `forecast-data`;
        spanForTemp.innerHTML = `${dataAsArr[0][1].low}&#176/${dataAsArr[0][1].high}&#176`
        spanForCondition.appendChild(spanForTemp)
        let spanForCond = document.createElement(`span`);
        spanForCond.className = `forecast-data`;
        spanForCond.textContent = dataAsArr[0][1].condition
        spanForCondition.appendChild(spanForCond)
    }
    async function threeDays(data){
        let response = await fetch(urlForThreeDays + data.code);
        let dataInfo = await response.json();
        if(document.querySelector("#upcoming > div.forecast-info")){
            document.querySelector("#upcoming > div.forecast-info").remove()
        }
        let div = document.createElement(`div`);
        div.className = `forecast-info`;
        upcomingDiv.appendChild(div);
        for (item of dataInfo.forecast){
            let spanUpcoming = document.createElement(`span`);
            spanUpcoming.className = `upcoming`;
            div.appendChild(spanUpcoming);
            let spanSymbol = document.createElement(`span`);
            spanSymbol.className = `symbol`;
            spanSymbol.innerHTML = `${symbolToReturn(item.condition)}`
            spanUpcoming.appendChild(spanSymbol);
            let spanTemp = document.createElement(`span`);
            spanTemp.className = `forecast-data`;
            spanTemp.innerHTML = `${item.low}&#176/${item.high}&#176` 
            spanUpcoming.appendChild(spanTemp);
            let spanCond = document.createElement(`span`);
            spanCond.className = `forecast-data`;
            spanCond.textContent = item.condition;
            spanUpcoming.appendChild(spanCond);
        }
    }

    function symbolToReturn(text){
        // · Sunny &#x2600; // ☀

        // · Partly sunny &#x26C5; // ⛅

        // · Overcast &#x2601; // ☁

        // · Rain &#x2614; // ☂

        // · Degrees &#176; // °
        if(text == `Sunny`){
            return `&#x2600`
        } else if (text == `Partly sunny`){
            return `&#x26C5`
        } else if (text == `Overcast`){
            return `&#x2601`
        } else if (text == `Rain`){
            return `&#x2614`
        }
    }
}

attachEvents();