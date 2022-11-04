function basketballEquipment(input) {
    let priceForTren = Number(input[0]);

    let shoesPrice = priceForTren - (priceForTren * 0.4);
    let equipmentPrice = shoesPrice - (shoesPrice * 0.2);
    let ballPrice = equipmentPrice * 0.25;
    let accessories = ballPrice * 0.2;

    let expenses = priceForTren + shoesPrice + equipmentPrice + ballPrice + accessories;

    console.log(expenses);
}

basketballEquipment(["550"]);
