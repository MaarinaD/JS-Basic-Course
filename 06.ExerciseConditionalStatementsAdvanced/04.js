function fishingBoat(input) {
    let budgetOfGroup = Number(input[0]);
    let season = input[1];
    let fisherCount = Number(input[2]);

    let boatPrice = 0;
    let discount = 0;

    switch(season) {
        case "Spring":
            boatPrice = 3000;
            if(fisherCount <= 6) {
                discount = boatPrice - (boatPrice * 0.10);
                if(fisherCount % 2 === 0) {
                    discount = discount - (discount * 0.05);
                }
            } else if (fisherCount <= 11) {
                discount = boatPrice - (boatPrice * 0.15);
                if(fisherCount % 2 === 0) {
                    discount = discount - (discount * 0.05);
                }  
            } else if (fisherCount > 12) {
                discount = boatPrice - (boatPrice * 0.25);
                if(fisherCount % 2 === 0) {
                    discount = discount - (discount * 0.05);
                }
            }
            break;
        
        case "Summer":
            boatPrice = 4200;
            if(fisherCount <= 6) {
                discount = boatPrice - (boatPrice * 0.10);
                if(fisherCount % 2 === 0) {
                    discount = discount - (discount * 0.05);
                }
            } else if (fisherCount <= 11) {
                discount = boatPrice - (boatPrice * 0.15);
                if(fisherCount % 2 === 0) {
                    discount = discount - (discount * 0.05);
                }  
            } else if (fisherCount > 12) {
                discount = boatPrice - (boatPrice * 0.25);
                if(fisherCount % 2 === 0) {
                    discount = discount - (discount * 0.05);
                }
            }
            break;

        case "Autumn":
            boatPrice = 4200;
            if(fisherCount <= 6) {
                discount = boatPrice - (boatPrice * 0.10);
            } else if (fisherCount >= 7 && fisherCount <= 11) {
                discount = boatPrice - (boatPrice * 0.15);
            } else if (fisherCount > 12) {
                discount = boatPrice - (boatPrice * 0.25);
            }
            break;

        case "Winter":
            boatPrice = 2600;
            if(fisherCount <= 6) {
                discount = boatPrice - (boatPrice * 0.10);
                if(fisherCount % 2 === 0) {
                    discount = discount - (discount * 0.05);
                }
            } else if (fisherCount <= 11) {
                discount = boatPrice - (boatPrice * 0.15);
                if(fisherCount % 2 === 0) {
                    discount = discount - (discount * 0.05);
                }  
            } else if (fisherCount > 12) {
                discount = boatPrice - (boatPrice * 0.25);
                if(fisherCount % 2 === 0) {
                    discount = discount - (discount * 0.05);
                }
            }
            break;
    }

    //    100               50
    if (budgetOfGroup >= discount) {
        let moneyLeft = budgetOfGroup - discount;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyNeeded = discount - budgetOfGroup;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
    }
}

fishingBoat(["3600",
"Autumn",
"6"])


