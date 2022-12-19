function solve(input) {
    let index = 0;

    let locationCount = Number(input[index]);
    index++;


    for(let currentLocation = 0; currentLocation < locationCount; currentLocation++) {
        let expectedAverageGold = Number(input[index]);
        index++;

        let daysCount = Number(input[index]);
        index++;

        let sumGold = 0;

        for(let currentDay = 0; currentDay < daysCount; currentDay++) {
            let gold = Number(input[index]);
            index++;

            sumGold += gold;
        }
        let averageGold = sumGold / daysCount;

        let diff = Math.abs(averageGold - expectedAverageGold);

            if(averageGold >= expectedAverageGold) {
                console.log(`Good job! Average gold per day: ${averageGold.toFixed(2)}.`);
                sumGold = 0;
            } else {
                console.log(`You need ${diff.toFixed(2)} gold.`);
            }      
    }    
}

solve(["1",
"5",
"3",
"10",
"1",
"3"])
