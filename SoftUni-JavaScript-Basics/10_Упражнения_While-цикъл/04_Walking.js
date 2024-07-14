function walking (input) {

    let stepsGoal = 10000;
    let command = input[0];

    let steps = 0
    let i = 1;

    while (steps < stepsGoal) {

        if (command === `Going home`) {
            steps += Number(input[i])
            break;
        }

        steps += Number(command);

        command = input[i]

        i += 1;
    }

    if (steps >= stepsGoal) {
        console.log(`Goal reached! Good job!`);
        console.log(`${Math.abs(steps - stepsGoal)} steps over the goal!`)
    }else if (command === `Going home` ) {
        console.log (`${Math.abs(stepsGoal - steps)} more steps to reach goal.`)
    }
}
walking (["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"])


