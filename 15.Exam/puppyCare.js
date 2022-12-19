function solve(input) {
    let index = 0;

    let foodKg = Number(input[index]);
    index++;

    let foodGr = foodKg * 1000;

    let eatenFood = input[index];
    index++;

    let totalEatenFood = 0;

    while(eatenFood !== "Adopted") {
       let currentEatenFood = Number(eatenFood);
       
       totalEatenFood += currentEatenFood;

       eatenFood = input[index];
       index++;
    }

    if(totalEatenFood <= foodGr) {
        let leftFood = foodGr - totalEatenFood;
        console.log(`Food is enough! Leftovers: ${leftFood} grams.`);
    } else {
        let neededFood = totalEatenFood - foodGr;
        console.log(`Food is not enough. You need ${neededFood} grams more.`);
    }
}

solve(["3",
"1000",
"1000",
"1000",
"Adopted"])


