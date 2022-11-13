function tradeCommissions(input) {
    let town = input[0];
    let count = Number(input[1]);
    let commission = 0;

    switch (town) {
        case "Sofia":
            if(0 <= count && count <= 500) {
                commission = count * 0.05;
                console.log((commission).toFixed(2));
            } else if(500 < count && count <= 1000) {
                commission = count * 0.07;
                console.log((commission).toFixed(2));
            } else if (1000 < count && count <= 10000) {
                commission = count * 0.08;
                console.log((commission).toFixed(2));
            } else if (count > 10000) {
                commission = count * 0.12;
                console.log((commission).toFixed(2));
            } else {
                console.log("error");
            }
            break;

        case "Varna":
            if(0 <= count && count <= 500) {
                commission = count * 0.045;
                console.log((commission).toFixed(2));
            } else if (500 < count && count <= 1000) {
                commission = count * 0.075;
                console.log((commission).toFixed(2));
            } else if(1000 < count && count <= 10000) {
                commission = count * 0.1;
                console.log((commission).toFixed(2));
            } else if (count > 10000) {
                commission = count * 0.13;
                console.log((commission).toFixed(2));
            } else {
                console.log("error");
            }
            break;

        case "Plovdiv":
            if(0 <= count && count <= 500) {
                commission = count * 0.055;
                console.log((commission).toFixed(2));
            } else if (500 <= count && count <= 1000) {
                commission = count * 0.08;
                console.log((commission).toFixed(2));
            } else if(1000 <= count && count <= 10000) {
                commission = count * 0.12;
                console.log((commission).toFixed(2));
            } else if(count > 10000) {
                commission = count * 0.145;
                console.log((commission).toFixed(2));
            } else{
                console.log("error");
            }
            break;
    
        default:
            console.log("error");
            break;
    }
}

tradeCommissions(["Plovdiv", "499.99"]);



