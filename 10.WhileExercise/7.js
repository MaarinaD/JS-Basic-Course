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
 
    while(transferredBoxes !== "Done") {
     transferredBoxes = Number(transferredBoxes);
     freeSpace -= transferredBoxes;
 
     if(freeSpace <= 0) {
         console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`);
         return;
     }
 
     transferredBoxes = input[index];
     index++;
    }
      console.log(`${freeSpace} Cubic meters left.`);
 }