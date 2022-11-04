function repainting(input) {
    let nylonSMeters = Number(input[0]);
    let paintLitter = Number(input[1]);
    let thinnerLitter = Number(input[2]);
    let hours = Number(input[3]);

    //let paintLitterPrice = paintLitter / 100;

    let nylonPrice = (nylonSMeters + 2) * 1.50;  //10.50
    let paintPrice = (paintLitter * 1.1) * 14.50; //
    let thinnerPrice = thinnerLitter * 5.00;
    let bags = 0.40;

    let sumForSupplices = nylonPrice + paintPrice + thinnerPrice + bags;
    let sumForWorkers = (sumForSupplices * 0.3) * hours;
    let sumForAll = sumForSupplices + sumForWorkers

    console.log(sumForAll);
}

repainting(["10","11","4","8"])