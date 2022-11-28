function sumOfNumbers(input) {
    let number = Number(input[0]);

    let sum = 0;
    let index = 1;

    while(sum < number) {
        let currentNumber = Number(input[index]);
        sum = sum + currentNumber;
        index++
    }
    console.log(sum);
}

sumOfNumbers(["100",
"10",
"20",
"30",
"40"]);