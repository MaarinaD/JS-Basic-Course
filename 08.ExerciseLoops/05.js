function salary(input) {
    let openTabs = Number(input[0]);
    let salary = Number(input[1]);

    for(let i = 2; i <= input.length; i++) {
       openTabs = input[i];

        switch(openTabs) {
            case "Facebook":
                salary = salary - 150;
                break;

            case "Instagram":
                salary = salary - 100;
                break;

            case "Reddit":
                salary = salary - 50;
        }

        if (salary <= 0) {
            console.log("You have lost your salary.");
            return;
        }

    }

    if(salary > 0) {
        console.log(salary);
    }
}

salary(["10",
        "750",
        "Facebook",
        "Dev.bg",
        "Instagram",
        "Facebook",
        "Reddit",
        "Facebook",
        "Facebook"]);
