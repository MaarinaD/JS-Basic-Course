function graduation(input) {
    let index = 0;
    let name = input[index];
    index++;

    // let yearGrades = Number(input[index]);
    let schoolYear = 1;
    let failYear = 0;
    let sumGrades = 0;

    while(schoolYear <= 12) {
       let currentGrade = Number(input[index]);
        index++;
        sumGrades = sumGrades + currentGrade;

        if(currentGrade < 4) {
            failYear++;
            if(failYear === 2) {
                console.log(`${name} has been excluded at ${schoolYear - 1} grade`);
                return;
            }
        }
        schoolYear++;

    }
    let average = sumGrades / 12;
    console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
}

graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])
