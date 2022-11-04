function suppliesForSchool(input) {
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let tableCleannerL = Number(input[2]);
    let discount = Number(input[3]);

    let discountDecimal = discount / 100;

    let pensPrice = pens * 5.80;
    let markersPrice = markers * 7.20;
    let cleannerPrice = tableCleannerL * 1.20;

    let sumForAllSuplices = pensPrice + markersPrice + cleannerPrice;
    let sumWithDiscount = sumForAllSuplices - (sumForAllSuplices * discountDecimal);

    console.log(sumWithDiscount);
}

suppliesForSchool(["2","3","4","25"]);