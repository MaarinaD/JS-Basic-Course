function smallShop(input) {
    let product = input[0];
    let town = input[1];
    let count = input[2];
    let price = 0;

    if (town === "Sofia") {
        if (product === "coffee") {
            price = count * 0.50;
            console.log(price);
        } else if (product === "water") {
            price = count * 0.80;
            console.log(price);
        } else if (product === "beer") {
            price = count * 1.20;
            console.log(price);
        } else if (product === "sweets") {
            price = count * 1.45;
            console.log(price);
        } else if (product === "peanuts") {
            price = count * 1.60;
            console.log(price);
        }
    } else if (town === "Plovdiv") {
        if (product === "coffee") {
            price = count * 0.40;
            console.log(price);
        } else if (product === "water") {
            price = count * 0.70;
            console.log(price);
        } else if (product === "beer") {
            price = count * 1.15;
            console.log(price);
        } else if (product === "sweets") {
            price = count * 1.30;
            console.log(price);
        } else if (product === "peanuts") {
            price = count * 1.50;
            console.log(price);
        }
    } else if (town === "Varna") {
        if (product === "coffee") {
            price = count * 0.45;
            console.log(price);
        } else if (product === "water") {
            price = count * 0.70;
            console.log(price);
        } else if (product === "beer") {
            price = count * 1.10;
            console.log(price);
        } else if (product === "sweets") {
            price = count * 1.35;
            console.log(price);
        } else if (product === "peanuts") {
            price = count * 1.55;
            console.log(price);
        }
    }
}

smallShop(["sweets", "Sofia", "2.23"]);



