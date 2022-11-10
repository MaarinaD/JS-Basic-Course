function GodzillaVsKong(input) {
    let filmBudget = Number(input[0]);
    let peopleCount = Number(input[1]);
    let priceForClothingForOne = Number(input[2]);

    let decorPrice = filmBudget * 0.1;
    let clothingPrice = peopleCount * priceForClothingForOne;

    if(peopleCount > 150) {
        let discount = clothingPrice * 0.9;
        clothingPrice = discount;
    }

    let sumForMovie = decorPrice + clothingPrice;

    //  200            100
    if(filmBudget >= sumForMovie) {
        let moneyLeft = (filmBudget - sumForMovie).toFixed(2);
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${moneyLeft} leva left.`);
    } else {
        let moneyNeeded = (sumForMovie - filmBudget).toFixed(2);
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${moneyNeeded} leva more.`);
    }
}

GodzillaVsKong(["9587.88",
"222",
"55.68"])



;
