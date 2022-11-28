function password(input) {
    let name = input[0];
    let password = input[1];

    let enteredPassword = input[2];
    let counter = 3;

    while(enteredPassword !== password) {
        enteredPassword = input[counter];
        counter++;
    }
    console.log(`Welcome ${name}!`);
}

password(["Gosho",
"secret",
"secret"]);