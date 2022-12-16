function walking(input) {
    let index = 0;

    let currentSteps = input[index];
    index++;

    let totalSteps = 0;

    while(currentSteps !== "Going home") {
        currentSteps = Number(currentSteps);
        totalSteps += currentSteps;

        if(totalSteps >= 10000) {
            let moreSteps = totalSteps - 10000;
            console.log("Goal reached! Good job!");
            console.log(`${moreSteps} steps over the goal!`);
        }

        currentSteps = input[index];
        index++;
    }

    let goingHomeSteps = Number(input[index]);
    totalSteps += goingHomeSteps;

    if(totalSteps >= 10000) {
        let moreSteps = totalSteps - 10000;
        console.log("Goal reached! Good job!");
        console.log(`${moreSteps} steps over the goal!`);
    } else {
        let neededSteps = 10000 - totalSteps;
        console.log(`${neededSteps} more steps to reach goal.`);
    }
}

walking(["125",
"250",
"4000",
"30",
"2678",
"4682"])

