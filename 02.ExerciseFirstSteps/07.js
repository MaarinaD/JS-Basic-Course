function foodDelivery(input) {
    let chiken = Number(input[0]);
    let fish = Number(input[1]);
    let vegan = Number(input[2]);

    let chikenPrice = chiken * 10.35;
    let fishPrice = fish * 12.40;
    let veganPrice = vegan * 8.15;

    let sumForDishes = chikenPrice + fishPrice + veganPrice;
    let dessert = sumForDishes * 0.2;
    let Price = sumForDishes + dessert + 2.50;

    console.log(Price);
}

foodDelivery(["9","2","6"]);