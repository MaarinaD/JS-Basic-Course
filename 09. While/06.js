function maxNumber(input) {
    let number = Number(input[0]);
    let index = 1;
    let maxNum = Number.MIN_SAFE_INTEGER;

    while(number !== "Stop") {
        let num = Number(number);
        
        if(num > maxNum) {
            maxNum = num;
        }

        number = input[index];
        index++;
    }
    console.log(maxNum);
}

maxNumber(["-10",
"20",
"-30",
"Stop"]);