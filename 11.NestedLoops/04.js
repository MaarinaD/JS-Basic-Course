function sumOfTwoNumbers(input) {
    let startingNumber = Number(input[0]);
    let finalNumber = Number(input[1]);
    let magicNumber = Number(input[2]);

    let combinations = 0;
    // let isFound = false;

    for (let i = startingNumber; i <= finalNumber; i++) {
        for (let j = startingNumber; j <= finalNumber; j++) {
            combinations++;

            let result = i + j;

            if (result === magicNumber) {
                console.log(`Combination N:${combinations} (${i} + ${j} = ${magicNumber})`);
                return;
            }
        }
    }
    console.log(`${combinations} combinations - neither equals ${magicNumber}`);
    return;
}

sumOfTwoNumbers(["23",
    "24",
    "20"])
