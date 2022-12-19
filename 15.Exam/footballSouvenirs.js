function solve(input) {
    let team = input[0];
    let souvenirType = input[1];
    let souvenirCount = Number(input[2]);

    let price = 0;

    if(team === "Argentina" && souvenirType === "flags") {
        price = 3.25;
    } else if(team === "Argentina" && souvenirType === "caps") {
        price = 7.20;
    } else if(team === "Argentina" && souvenirType === "posters") {
        price = 5.10;
    } else if(team === "Argentina" && souvenirType === "stickers") {
        price = 1.25;
    } else if(team === "Brazil" && souvenirType === "flags") {
        price = 4.20;
    } else if(team === "Brazil" && souvenirType === "caps") {
        price = 8.50;
    } else if(team === "Brazil" && souvenirType === "posters") {
        price = 5.35;
    } else if(team === "Brazil" && souvenirType === "stickers") {
        price = 1.20
    } else if(team === "Croatia" && souvenirType === "flags") {
        price = 2.75;
    } else if(team === "Croatia" && souvenirType === "caps") {
        price = 6.90;
    } else if(team === "Croatia" && souvenirType === "posters") {
        price = 4.95;
    } else if(team === "Croatia" && souvenirType === "stickers") {
        price = 1.10;
    } else if (team === "Denmark" && souvenirType === "flags") {
        price = 3.10;
    } else if (team === "Denmark" && souvenirType === "caps") {
        price = 6.50;
    } else if (team === "Denmark" && souvenirType === "posters") {
        price = 4.80;
    } else if (team === "Denmark" && souvenirType === "stickers") {
        price = 0.90
    }

    // if()

    let totalPrice = price * souvenirCount;
     console.log(`Pepi bought ${souvenirCount} ${souvenirType} of ${team} for ${totalPrice} lv.`);
}

solve(["Brazil", 
"stickers",
"5"]);