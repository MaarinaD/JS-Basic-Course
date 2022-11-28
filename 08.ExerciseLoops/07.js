function trekkingMania(input) {
    let groupNumer = Number(input.shift());
    let Musala = 0;
    let Montblanc = 0;
    let Kilimanjaro = 0;
    let K2 = 0;
    let Everest = 0;
    for (let i = 0; i < groupNumer; i++) {
        let alpinists  = Number(input.shift());
        if (alpinists <= 5) {
            Musala += alpinists;
        } else if(alpinists >= 6 && alpinists <=12){
            Montblanc += alpinists;
        } else if(alpinists >= 13 && alpinists <=25){
            Kilimanjaro += alpinists;
        } else if(alpinists >= 26 && alpinists <=40){
            K2 += alpinists;
        } else if(alpinists >= 41){
            Everest += alpinists;
        }
    }
    let allAlpinists = Musala + Montblanc + Kilimanjaro + K2 + Everest;
    let parcentMusala = Musala / allAlpinists * 100;
    let parcentMontblanc = Montblanc / allAlpinists * 100;
    let parcentKilimanjaro = Kilimanjaro / allAlpinists * 100;
    let parcentK2 = K2 / allAlpinists * 100;
    let parcentEverest = Everest / allAlpinists * 100;
    console.log(`${parcentMusala.toFixed(2)}%`);
    console.log(`${parcentMontblanc.toFixed(2)}%`);
    console.log(`${parcentKilimanjaro.toFixed(2)}%`);
    console.log(`${parcentK2.toFixed(2)}%`);
    console.log(`${parcentEverest.toFixed(2)}%`);
}

trekkingMania(["10",
                "10",
                "5",
                "1",
                "100",
                "12",
                "26",
                "17",
                "37",
                "40",
                "78"]);
