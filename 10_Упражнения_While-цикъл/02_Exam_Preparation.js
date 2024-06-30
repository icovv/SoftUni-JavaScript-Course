function exam (input) {
    let badGradesCount = Number(input[0]);
    let taskName = input[1];
    let taskGrade = input[2];

    let avgGrade = 0;
    let numTasks = 0;
    let lastTask = ``;
    let badGrades = 0;
    let index = 3;

    while (badGrades !== badGradesCount) {
        
        if (taskName === "Enough") {
            break;
        }

        if (taskGrade <= 4){
            badGrades += 1;
        }

        lastTask = taskName

        avgGrade += Number(taskGrade);
        
        taskName = input[index];
        taskGrade = input[index + 1];

        numTasks += 1

        index += 2
    }

    if (taskName === `Enough`) {
        console.log(`Average score: ${(avgGrade/numTasks).toFixed(2)}`)
        console.log(`Number of problems: ${numTasks}`)
        console.log(`Last problem: ${lastTask}`)
    } else if (badGrades = badGradesCount)
        console.log(`You need a break, ${badGrades} poor grades.`)
    }

exam (["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])

