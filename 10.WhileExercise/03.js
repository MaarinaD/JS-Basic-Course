function vacantion(input) {
    let index = 0;

    let moneyNeeded = Number(input[index]);
    index++;

    let availableMoney = Number(input[index]);
    index++;

    let action = input[index];
    index++;

    let sum = Number(input[index]);
    index++;

    let daysSpendCount = 0;
    let totatlDays = 0;

    while(availableMoney < moneyNeeded) {
        totatlDays++;

        if(action === "spend") {
            if(sum > availableMoney) {
                availableMoney = 0;
            } else {
                availableMoney -= sum;
            }

            daysSpendCount ++;
        } else {
            availableMoney += sum;
            daysSpendCount = 0;
        }

        if(daysSpendCount === 5) {
            console.log("You can't save the money.");
            console.log(`${totatlDays}`);
            return;
        }

        action = input[index];
        index++;

        sum = Number(input[index]);
        index++;        
    }
    console.log(`You saved the money for ${totatlDays} days.`);
}

vacantion(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])
