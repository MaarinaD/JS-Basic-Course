function toyShop(input) {
    let excursionPrice = Number(input[0]);
    let puzzelCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let puzzelPrice = puzzelCount * 2.60;
    let dollPrice = dollsCount * 3;
    let bearPrice = bearsCount * 4.10;
    let minionPrice = minionsCount * 8.20;
    let truckPrice = trucksCount * 2;

    let sum = puzzelPrice + dollPrice + bearPrice + minionPrice + truckPrice;

    let toysCount = puzzelCount + dollsCount + bearsCount + minionsCount + trucksCount;

    if(toysCount >= 50) {
        sum = sum * 0.75;
        // !OR sum =  sum - (sum * 0.25)
    } 

    let moneyAfterRent = sum * 0.90;
    // !OR sum = sum - (sum * 0.1); 

    //   120                  100   =>  120 - 100 = 20
    if(moneyAfterRent >= excursionPrice) {
        let moneyLeft = moneyAfterRent - excursionPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let moneyNeeded = excursionPrice - moneyAfterRent;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }

   // console.log(toysCount);
}

toyShop(["40.8", "20", "25", "30", "50", "10"]);
