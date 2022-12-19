function building(input) {
    let floorEntered = Number(input[0]);
    let appartmentEntered = Number(input[1]);
    let result = "";

    for (let floor = floorEntered; floor >= 1; floor--) {
        for (let appartment = 0; appartment < appartmentEntered; appartment++) {
            if(floor === floorEntered) {
                result = result + `L${floor}${appartment} `;
            } else if(floor % 2 === 0) {
                result += `O${floor}${appartment} `;
            } else {
                result += `A${floor}${appartment} `
            }  
        }       
        result += "\n";
    }
    console.log(result);
}

building(["6", "4"]);