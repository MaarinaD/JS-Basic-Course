function solve(input) {
    let team = input[0];
    let souvenirType = input[1];
    let souvenirCount = Number(input[2]);

    let price = 0;

    switch (team) {
        case "Argentina":
            if(souvenirType === "flags") {
                price = 3.25;
            } else if(souvenirType === "caps") {
                price = 7.20;
            } else if(souvenirType === "posters") {
                price = 5.10;
            } else if (souvenirType === "stickers"){
                price = 1.25;
            } else {
                console.log("Invalid stock!");
                return;
            }

            break;

        case "Brazil":
            if(souvenirType === "flags") {
                price = 4.20;
            } else if(souvenirType === "caps") {
                price = 8.50;
            } else if(souvenirType === "posters") {
                price = 5.35;
            } else if (souvenirType === "stickers"){
                price = 1.20;
            } else {
                console.log("Invalid stock!");
                return;
            }

        break;

        case "Croatia":
            if(souvenirType === "flags") {
                price = 2.75;
            } else if(souvenirType === "caps") {
                price = 6.90;
            } else if(souvenirType === "posters") {
                price = 4.95;
            } else if (souvenirType === "stickers"){
                price = 1.10;
            } else {
                console.log("Invalid stock!");
                return;
            }

            break;

        case "Denmark":
            if(souvenirType === "flags") {
                price = 3.10;
            } else if(souvenirType === "caps") {
                price = 6.50;
            } else if(souvenirType === "posters") {
                price = 4.80;
            } else if (souvenirType === "stickers"){
                price = 0.90;
            } else {
                console.log("Invalid stock!");
                return;
            }

            break;

        default:
            console.log("Invalid country!");
        return;
    }

    let totalPrice = price * souvenirCount;
    console.log(`Pepi bought ${souvenirCount} ${souvenirType} of ${team} for ${totalPrice.toFixed(2)} lv.`);

}

solve(["Brazil", 
"stickers",
"5"]);


