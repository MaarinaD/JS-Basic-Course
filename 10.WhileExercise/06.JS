function cake(input) {
    let index = 0;

    let width = Number(input[index]);
    index++;

    let length = Number(input[index]);
    index++;

    let cakeSize = width * length;

    let takenPieces = input[index];
    index++;

    while(takenPieces !== "STOP") {
        let pieces = Number(takenPieces);

        cakeSize = cakeSize - pieces;

        if(cakeSize < 0) {
            let missingPieces = Math.abs(cakeSize);
            console.log(`No more cake left! You need ${missingPieces} pieces more.`);
            return;
        }

        takenPieces = input[index];
        index++;

       
    }

    console.log(`${cakeSize} pieces are left.`);
}

// cake([
//     "10",
//     "10",
//     "20",
//     "20",
//     "20",
//     "20",
//     "21"]);

cake(["10",
"2",
"2",
"4",
"6",
"STOP"]);

