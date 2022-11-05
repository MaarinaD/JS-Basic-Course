function password(input) {
    let string = input[0];

    if(string === "s3cr3t!P@ssw0rd") {
        console.log("Welcome");
    }
    else {
        console.log("Wrong password!");
    }
}

password(["s3cr3t!p@ss"]);