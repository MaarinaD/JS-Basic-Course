function cinema(input) {
    let movieType = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);

    let totalPlaces = rows * cols;
    let income = 0;

    switch (movieType) {
        case "Premiere":
            income = totalPlaces * 12;
            break;

        case "Normal":
            income = totalPlaces * 7.50;
            break;

        case "Discount":
            income = totalPlaces * 5.00;
            break;
    }

    console.log(`${income.toFixed(2)} leva`);
}

cinema(["Discount", "12", "30"]);