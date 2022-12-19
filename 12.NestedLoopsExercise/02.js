function equalSumsEvenOddPosition(input) {
    let startingNumber = Number(input[0]);
    let endingNumber = Number(input[1]);

    let result = "";

    for(let currentNum = startingNumber; currentNum <= endingNumber; currentNum++) {
        let currentNumStr = currentNum.toString();

        let oddSum = 0;
        let evenSum = 0;

        for (let index = 0; index < currentNumStr.length; index++) {
            let currentDigit = Number(currentNumStr[index]);

            let position = index + 1;

            if(position % 2) {
                oddSum += currentDigit;
            } else {
                evenSum += currentDigit;
            }
            
        }
        if(oddSum === evenSum) {
            result += `${currentNumStr} `;
        }
    }

    console.log(result);

}

equalSumsEvenOddPosition([
    "100000",
    "100050"]);