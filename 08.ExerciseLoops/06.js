function oscars(input) {
    let nameActor = input[0];
    let academyPoints = Number(input[1]);
    let judgeCount = Number(input[2]);

    for(let i = 3; i < input.length; i+=2) {
        let judgeName = input[i];
        let judgePoints = Number(input[i + 1]);
        
        let result = judgeName.length * judgePoints / 2;
        academyPoints = academyPoints + result;

        if(academyPoints > 1250.5) {
            console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
            return;
        }

    }

    let pointsNeeded = 1250.5 - academyPoints;
    console.log(`Sorry, ${nameActor} you need ${pointsNeeded.toFixed(1)} more!`);
}

oscars(["Zahari Baharov",
        "205",
        "4",
        "Johnny Depp",
        "45",
        "Will Smith",
        "29",
        "Jet Lee",
        "10",
        "Matthew Mcconaughey",
        "39"])
