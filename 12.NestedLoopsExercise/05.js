function specialNumber(input) {
    let num = Number(input[0]);

    let result = "";

    for(let currentNum = 1111; currentNum <= 9999; currentNum++) {
        let currentNumStr = currentNum.toString();

        let isMagic = true;

        for(let index = 0; index < currentNumStr.length; index++) {
            let currentDigit = Number(currentNumStr[index]);

            //  3  %    3     === 0    => числото е магическо и НЕ влизаме в цикъла
            //  2  %    3     !== 0    => влизаме в цикъла, защото 2 не се дели на 3 без остатък

            // aко нъм не се дели на цифрата без остатък => влез
            // ако нъм модулно разделено на цифрата НЕ е нула(различно е от 0) => влез
            if(num % currentDigit !== 0) {
                isMagic = false;
                break;
            }
        }

        if(isMagic == true) {
            result += `${currentNumStr} `;
        }
    }

    console.log(result);
}

specialNumber(["16"]);