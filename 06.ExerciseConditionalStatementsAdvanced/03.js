function newHouse(input) {
    let typeFlower = input[0];
    let countFlower = Number(input[1]);
    let buget = Number(input[2]);

    let price = 0;

    switch(typeFlower) {
        case "Roses":
            price = countFlower * 5;
            if (countFlower > 80) {
                price = price - (price * 0.1);
            } 
            break;

        case "Dahlias":
            price = countFlower * 3.80;
            if (countFlower > 90) {
                price = price - (price * 0.15);
            }
            break;

        case "Tulips":
            price = countFlower * 2.80;
            if(countFlower > 80) {
                price = price - (price * 0.15);
            }
            break;

        case "Narcissus":
            price = countFlower * 3;
            if(countFlower < 120) {
                price = price + (price * 0.15);
            }
            break;

        case "Gladiolus":
            price = countFlower * 2.50;
            if(countFlower < 80) {
                price = price + (price * 0.20);
            }
            break;
    }

    if (buget >= price) {
        let moneyLeft = buget - price;
        console.log(`Hey, you have a great garden with ${countFlower} ${typeFlower} and ${moneyLeft.toFixed(2)} leva left.`);
    } else if (buget < price) {
        let moneyNeeded = price - buget;
        console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`);
    }

}

newHouse(["Narcissus", "119", "360"]);

