function add15Min(input) {
    let hours = Number(input[0]);
    let mins = Number(input[1]);

    let totalTime = hours * 60 + mins + 15;

    let hour = Math.floor(totalTime / 60);
    let min = totalTime % 60;

    if(hour >= 24) {
        hour = hour -24;
    }
    
    if(min < 10) {
        console.log(`${hour}:0${min}`);
    } else {
        console.log(`${hour}:${min}`);
    }

    // if(hour === 24) {
    //     console.log(`0:${min}`);
    // } else {
    //     console.log(`${hour}:${min}`);
    // }
}

add15Min(["23", "59"]);