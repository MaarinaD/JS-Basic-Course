function skiTrip(input) {
    let days = Number(input[0]);
    let room = input[1];
    let review = input[2];

    let price = 0;
    let nights = days - 1;

    switch(room) {
        case "room for one person":
            price = 18 * nights; 
            break;

        case "apartment": 
            price = 25 * nights;
            
            if(days < 10) {
                price = price - (price * 0.30);
            } else if (days <= 15) {
                price = price * 0.65;
            } else {
                price = price * 0.50;
            }
            break;

        case "president apartment":
            price = 35 * nights;

            if(days < 10) {
                price = price * 0.90;
            } else if(days <= 15) {
                price = price * 0.85;
            } else {
                price = price * 0.80;
            }
            break;
            
    }

    if(review === "positive") {
        price = price + (price * 0.25);
    } else if(review === "negative") {
        price = price - (price * 0.10);
    }

    console.log(`${price.toFixed(2)}`);

}

skiTrip(["30",
"president apartment",
"negative"])



