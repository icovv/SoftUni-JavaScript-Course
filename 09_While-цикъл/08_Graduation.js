function graduation (input) {
    let name = input[0];
    let grade = Number(input[1]);

    let classYear = 1;
    let totalGrades = 0;
    let timesFailed = 0;

    let i = 2;

    while (classYear <= 12){

        if (grade >= 4){
            classYear += 1
        }

        if (grade < 4 ){
            timesFailed += 1
            classYear += 1
        }

        if (timesFailed >= 1) {
            console.log(`${name} has been excluded at ${classYear - 1} grade`)
            break;
        } 

        totalGrades += Number(grade)

        
        grade = input[i];
        i += 1
    }

    if (classYear >= 12) {
        console.log(`${name} graduated. Average grade: ${(totalGrades / (classYear - 1)).toFixed(2)}`)
    }
    
}
graduation (["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])

