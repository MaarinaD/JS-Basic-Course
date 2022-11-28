function smartLili(input) {
    let age = Number(input[0]);
    let washerPrece = Number(input[1]);
    let toyPrice = Number(input[2]);

    let totalMoney = 0;
    let evenBirthdayMoney = 10;

    for(let i = 1; i <= age; i++) {

        if(i % 2 === 0) {
           totalMoney = totalMoney + (evenBirthdayMoney - 1);
           evenBirthdayMoney += 10;
        } else {
            totalMoney = totalMoney + toyPrice;
        }
    }

    if(totalMoney >= washerPrece) {
        let moneyLeft = totalMoney - washerPrece;
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    } else {
        let moneyNeeded = washerPrece - totalMoney;
        console.log(`No! ${moneyNeeded.toFixed(2)}`);
    }
}

//smartLili(["10", "170.00", "6"]);
smartLili(["21", "1570.98", "3"]);