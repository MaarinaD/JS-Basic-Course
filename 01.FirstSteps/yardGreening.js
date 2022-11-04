function yardGreening(input) {
    let GreeningAreaCost = (input[0]) * 7.61;
    let discount = 0.18 * GreeningAreaCost;
    let TheFinalPrice = GreeningAreaCost - discount;

    console.log(`The final price is: ${TheFinalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yardGreening(["550"]);