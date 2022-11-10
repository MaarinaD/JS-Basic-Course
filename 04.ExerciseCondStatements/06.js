function swimming(input) {
    let reccordInSec = Number(input[0]);
    let distanceInMetter = Number(input[1]);
    let timeForOneMetter = Number(input[2]);

    let timeIvan = distanceInMetter * timeForOneMetter;
    let addTime = Math.floor(distanceInMetter / 15) * 12.5;
    let totalTimeIvan = timeIvan + addTime;

    //100                110
    if(reccordInSec > totalTimeIvan) {
        console.log(`Yes, he succeeded! The new world record is ${(totalTimeIvan).toFixed(2)} seconds.`);
    } else if(reccordInSec <= totalTimeIvan) {
        let secNeeded = (totalTimeIvan - reccordInSec).toFixed(2);
        console.log(`No, he failed! He was ${secNeeded} seconds slower.`);
    }

}

swimming(["55555.67", "3017", "5.03"]);