function solve(input) {
    let speed = Number(input[0]);
    let liters = Number(input[1]);

    let totalDistance = 384400 * 2;
    let time = Math.ceil(totalDistance / speed);

    let totalTime = time + 3;

    let neededLiters = (liters * totalDistance) / 100;

    console.log(totalTime);
    console.log(neededLiters);
}

solve(["10000",
"5"]);