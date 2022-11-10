function shopping(input) {
    let budget = Number(input[0]);
    let videocardsCount = Number(input[1]);
    let processorsCount = Number(input[2]);
    let ramMemmoryCount = Number(input[3]);

    let sumForVideocards = videocardsCount * 250;

    let processorPrice = sumForVideocards * 0.35;
    let sumForProcessor = processorsCount * processorPrice;

    let ramMemoryPrice = sumForVideocards * 0.10;
    let sumForRamMemory = ramMemmoryCount * ramMemoryPrice;

    let totalSum = sumForVideocards + sumForProcessor + sumForRamMemory;

    if(videocardsCount > processorsCount) {
        totalSum = totalSum - (totalSum * 0.15);
    } else {
        totalSum = totalSum
    }

    // 100         90
    if(budget >= totalSum) {
        let moneyAfter = (budget - totalSum).toFixed(2);
        console.log(`You have ${moneyAfter} leva left!`);
    } else{
        let moneyNeeded = (totalSum - budget).toFixed(2);
        console.log(`Not enough money! You need ${moneyNeeded} leva more!`);
    }
}

shopping(["920.45", "3", "1", "1"]);
