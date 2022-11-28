function minNumber(input) {
    let number = Number(input[0]);
    
    let index = 1;
    let minNum = Number.MAX_SAFE_INTEGER;

    while(number !== "Stop") {
        let num = Number(number);

        if(num < minNum) {
            minNum = num;
        }

        number = input[index];
        index++;
    }
    
    console.log(minNum);
}

minNumber(["100",
"99",
"80",
"70",
"Stop"]);