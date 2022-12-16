function examPreparation(input) {
    let index = 0;

    let maxBadGrades = Number(input[index]);
    index++;

    let problemName = input[index];
    index++;

    let problrmGrade = Number(input[index]);
    index++;

    let badGrades = 0;
    let sumGrades = 0;
    let gradesCount = 0;
    let lastName = "";

    while(problemName !== "Enough") {
       lastName = problemName;

        if(problrmGrade <= 4) {
            badGrades++;
        }

        if(badGrades === maxBadGrades) {
            console.log(`You need a break, ${badGrades} poor grades.`);
            return;
        }

        sumGrades += problrmGrade;
        gradesCount++;

        problemName = input[index];
        index++;

        problrmGrade = Number(input[index]);
        index++;
    }

    let averageGrade = sumGrades / gradesCount;

    console.log(`Average score: ${averageGrade.toFixed(2)}`);
    console.log(`Number of problems: ${gradesCount}`);
    console.log(`Last problem: ${lastName}`);
}

examPreparation([
    "3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"]);
