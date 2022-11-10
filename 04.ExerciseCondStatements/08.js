function lunchBreak(input) {
    let movieName = input[0];
    let episodeDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let lunchTime = (1 / 8) * breakDuration;
    let freeTime = (1 / 4) * breakDuration;

    let leftTime = breakDuration - lunchTime - freeTime;

    if(leftTime >= episodeDuration) {
        let afterMovieTime = Math.ceil(leftTime - episodeDuration);
        console.log(`You have enough time to watch ${movieName} and left with ${afterMovieTime} minutes free time.`);
    } else {
        let timeNeeded = Math.ceil(episodeDuration - leftTime);
        console.log(`You don't have enough time to watch ${movieName}, you need ${timeNeeded} more minutes.`);
    }
}

lunchBreak(["Teen Wolf", "48", "60"]);
