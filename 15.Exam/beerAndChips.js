function solve(input) {
    let name = input[0];
    let budget = Number(input[1]);
    let beerCount = Number(input[2]);
    let chipsCount = Number(input[3]);

    let beerPrice = beerCount * 1.20;
    let chipsPriceFor1 = beerPrice * 0.45;

    let chipsPrice = Math.ceil(chipsCount * chipsPriceFor1);

    let totalPrice = beerPrice + chipsPrice;

    if(budget >= totalPrice) {
        let moneyLeft = budget - totalPrice;
        console.log(`${name} bought a snack and has ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let neededMoney = totalPrice - budget;
        console.log(`${name} needs ${neededMoney.toFixed(2)} more leva!`);
    }
}

solve(["George",
"10",
"2",
"3"])
