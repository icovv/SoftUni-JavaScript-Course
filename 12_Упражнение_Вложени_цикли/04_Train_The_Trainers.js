function course (input) {
    let joury = Number(input[0]);
    let i = 1;
    let totalGrades = 0;
    let courseCounter = 0;

    while (input[i] !==`Finish` ){
        let courseName;
        let courseGrade = 0;
        for (let col = 0; col <= joury; col += 1){
            if (col === 0) {
                courseName = input[i]
            } else {
                i+= 1
                courseGrade += Number(input[i])
                courseCounter += 1;
            }

        }
        totalGrades += courseGrade
        console.log(`${courseName} - ${(courseGrade / joury ).toFixed(2)}.`)
        i += 1
    }
    console.log(`Student's final assessment is ${(totalGrades/courseCounter).toFixed(2)}.`)

    
}
course (["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"])
