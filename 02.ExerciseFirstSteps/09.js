function acva(input) {
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);

    let volume = lenght * width * height;
    let volumInLiters = volume * 0.001;
    let occupiedSpace = percent / 100;

    let neededLiters = volumInLiters * (1- occupiedSpace);

    console.log(neededLiters);
}

acva(["105","77","89","18.5"]);
