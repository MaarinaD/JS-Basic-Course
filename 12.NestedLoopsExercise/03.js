function sumPrimeAndNonPrime(input) {
  let index = 0;
  
  let number = input[index];
  index++;

  let primeSum = 0;
  let nonPrimeSum = 0;

  while(number !== "stop") {
    let currentNum = Number(number);

    if(currentNum < 0) {
        console.log("Number is negative.");

        number = input[index];
        index++;

        continue;
    }

    let isPrime = true;

    for (let currentDivisor = 2; currentDivisor < currentNum; currentDivisor++) {
        if (currentNum % currentDivisor === 0) {
            isPrime = false;
            break;
        }
    }
    
    if(isPrime == true) {
        primeSum += currentNum;
    } else {
        nonPrimeSum += currentNum;
    }

    number = input[index];
    index++;
  }

  console.log(`Sum of all prime numbers is: ${primeSum}`);
  console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}

sumPrimeAndNonPrime(["3",
"9",
"0",
"7",
"19",
"4",
"stop"])
