function solve(input) {
    let index = 0;

    let catsCount = Number(input[index]);
    index++;

    let group1 = 0;
    let group2 = 0;
    let group3 = 0;

    let totalFood = 0;

    let currentEatenFood = Number(input[index]);
    index++;

    for(let currentCat = 1; currentCat <= catsCount; currentCat++) {
        // let currentEatenFood = Number(input[index]);
        // index++;

        totalFood += currentEatenFood;

        if(currentEatenFood < 200) {
            group1++;
        } else if(currentEatenFood < 300) {
            group2++;
        } else {
            group3++;
        }

        currentEatenFood = Number(input[index]);
        index++;
    }

    let kg = totalFood / 1000;
    let price = kg * 12.45;

    console.log(`Group 1: ${group1} cats.`);
    console.log(`Group 2: ${group2} cats.`);
    console.log(`Group 3: ${group3} cats.`);
    console.log(`Price for food per day: ${price.toFixed(2)} lv.`);
}

solve(["6",
"102",
"236",
"123",
"399",
"342", 
"222"])
