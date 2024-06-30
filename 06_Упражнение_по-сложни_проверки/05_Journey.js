function journey (input) {

    let budget = Number(input[0]);
    let season = input[1];

    if (budget <= 100) {
        console.log("Somewhere in Bulgaria");
        switch(season){
            case "summer":
                budget = budget * (30/100);
                console.log(`Camp - ${(budget).toFixed(2)} `)
                break;
            case "winter":
                budget = budget * (70/100);
                console.log(`Hotel - ${(budget).toFixed(2)} `)
                break; 
        } 
        } else if (budget > 100 && budget <= 1000) {
            console.log("Somewhere in Balkans")
            switch(season){
                case "summer":
                    budget = budget * (40/100);
                    console.log(`Camp - ${(budget).toFixed(2)} `)
                    break;
                case "winter":
                    budget = budget * (80/100);
                    console.log(`Hotel - ${(budget).toFixed(2)} `)
                    break;
            }
        } else if (budget > 1000){
            console.log("Somewhere in Europe")
            switch (season) {
                case "summer":
                case "winter":
                    budget = budget * (90/100);
                    console.log(`Hotel - ${(budget).toFixed(2)} `)
                    break;
            }
        }
    }
//journey (["50", "summer"])