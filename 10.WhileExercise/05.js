function coins(input) {
    let totalSum = Number(input[0]);
    let exchangedCoins = Math.round(totalSum * 100);

    let returnCoins = 0;

    while(exchangedCoins > 0) {
        if(exchangedCoins >= 200) {
            exchangedCoins -= 200
        } else if(exchangedCoins >= 100) {
            exchangedCoins -= 100;
        } else if(exchangedCoins >= 50) {
            exchangedCoins -= 50;
        } else if(exchangedCoins >= 20) {
            exchangedCoins -= 20;
        } else if(exchangedCoins >= 10) {
            exchangedCoins -= 10;
        } else if (exchangedCoins >= 5) {
            exchangedCoins -= 5;
        } else if(exchangedCoins >= 2) {
            exchangedCoins -= 2;
        } else if(exchangedCoins >= 1) {
            exchangedCoins -= 1;
        }

        returnCoins++;
    }
    console.log(returnCoins);
}  

coins(["0.56"]);


    // 1 lev = 100st.
    // 1.20 = 1.20 * 100 = 120st.
    // 120 - 100 => 20
    // 20 => 20