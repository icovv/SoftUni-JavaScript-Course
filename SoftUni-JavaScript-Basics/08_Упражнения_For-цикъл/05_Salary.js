function salary(input) {
    let openTabs = Number(input[0]);
    let salary = Number(input[1]);

    for(let i = 0; i < openTabs; i +=1){
        
        switch (input[i+2]){
            case "Facebook":
                salary -= 150
                break;
            case "Instagram":
                salary -= 100
                break;
            case "Reddit":
                salary -= 50
                break;
        }
        if (salary <= 0) {
            break;
        }
    }

    if (salary <= 0) {
        console.log(`You have lost your salary.`)
    } else if (salary > 0) {
        console.log(salary)
    }

}
salary(["3","500","Facebook","Stackoverflow.com","softuni.bg"])


