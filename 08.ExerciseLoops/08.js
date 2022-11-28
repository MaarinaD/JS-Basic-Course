function worldRangList(input) {
    let tournamentsCount = Number(input[0]);
    let startUpPoints = Number(input[1]);

    let finalScore = 0;
    let wonTournaments = 0;

    for(let i = 2; i < input.length; i++) {
        let tournamentsPoints = input[i];

        if(tournamentsPoints === "W") {
            finalScore += 2000;
            wonTournaments += 1;
        } else if (tournamentsPoints === "F") {
            finalScore += 1200;
        } else if (tournamentsPoints === "SF") {
            finalScore += 720;
        }
    }

    finalScore = finalScore + startUpPoints;

    let score = finalScore - startUpPoints;
    let average = score / tournamentsCount;
    let percent = (wonTournaments / tournamentsCount) * 100;

    console.log(`Final points: ${finalScore}`);
    console.log(`Average points: ${Math.floor(average)}`);
    console.log(`${percent.toFixed(2)}%`);
}

//worldRangList(["7", "1200", "SF", "F", "W", "F", "W","SF", "W"]);
worldRangList(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"]);