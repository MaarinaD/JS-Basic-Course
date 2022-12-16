function moving(input) {
   let index = 0;

   let width =  Number(input[index]);
   index++;

   let length = Number(input[index]);
   index++;

   let height = Number(input[index]);
   index++;

   let freeSpace = width * length * height;

   let transferredBoxes = input[index];
   index++;

   let takenSpace = 0;

   while(transferredBoxes !== "Done") {
    transferredBoxes = Number(transferredBoxes);
    takenSpace += transferredBoxes;

    if(takenSpace >= freeSpace) {
        let neededSpace = takenSpace - freeSpace;
        console.log(`No more free space! You need ${neededSpace} Cubic meters more.`);
        return;
    }

    transferredBoxes = input[index];
    index++;
   }

   if(takenSpace >= freeSpace) {
    let neededSpace = takenSpace - freeSpace;
    console.log(`No more free space! You need ${neededSpace} Cubic meters more.`);
}

    let spaceLeft = freeSpace - takenSpace; 
    console.log(`${spaceLeft} Cubic meters left.`);
}

// moving([
//     "10", 
//     "10",
//     "2",
//     "20",
//     "20",
//     "20",
//     "20",
//     "122"])

moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])

