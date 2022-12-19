function trainTheTrainers(input) {
    let index = 0; 

    let judgeCount = Number(input[index]);
    index++;

    let presentationTitle = input[index];
    index++;

    let currentTotalScore = 0;
    let currentAverageScore = 0;
    let averageScoreSum = 0;
    let presentationsCount = 0;

    while (presentationTitle !== "Finish") {
        presentationsCount++;

        for(let i = 1; i <= judgeCount; i++) {
            let score = Number(input[index]);
            index++;

            currentTotalScore += score;
        }

        currentAverageScore = currentTotalScore / judgeCount;
        console.log(`${presentationTitle} - ${currentAverageScore.toFixed(2)}.`);

        averageScoreSum += currentAverageScore;
        currentTotalScore = 0;

        presentationTitle = input[index];
        index++;
    }

    let averageScore = averageScoreSum / presentationsCount;
    console.log(`Student's final assessment is ${averageScore.toFixed(2)}.`);

}

trainTheTrainers([
    "2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"]);