function vacationBookList(input) {
    let pagesCount = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysCount = Number(input[2]);

    let totalHours = pagesCount / pagesPerHour;
    let hoursPerDay = totalHours / daysCount;

    console.log(hoursPerDay);
}

vacationBookList(["212","20","2"]);
