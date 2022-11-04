function petShop(input) {
    let dogsPrice = 2.50;
    let catsPrice= 4.00;
    let dogsFood = Number(input[0]);
    let catsFood = Number(input[1]);
    console.log(`${dogsPrice * dogsFood + catsPrice * catsFood} lv.`);
}

petShop(["5", "4"]);