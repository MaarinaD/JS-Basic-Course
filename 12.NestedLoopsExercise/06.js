function cinemaTickets(input) {
    let index = 0;

    let movieTitle = input[index];
    index++;

    let studentTicketCount = 0;
    let standardTicketCount = 0;
    let kidTicketCount = 0;

    while(movieTitle !== "Finish") {
        let freeSeats = Number(input[index]);
        index++;

        let takenSeats = 0;

        let currentTicket = input[index];
        index++;

        while(currentTicket !== "End") {
            takenSeats++;

            if(currentTicket === "student") {
                studentTicketCount++;
            } else if(currentTicket === "standard") {
                standardTicketCount++;
            } else {
                kidTicketCount++;
            }

            if(takenSeats >= freeSeats) {
                break;
            }

            currentTicket = input[index];
            index++;
        }

        let percentFull = (takenSeats / freeSeats) * 100;
        console.log(`${movieTitle} - ${percentFull.toFixed(2)}% full.`);

        movieTitle = input[index];
        index++;
    }

    let totalTicketsCount = standardTicketCount + studentTicketCount + kidTicketCount;
    console.log(`Total tickets: ${totalTicketsCount}`);

    let percentStudentTickets = (studentTicketCount / totalTicketsCount) * 100;
    console.log(`${percentStudentTickets.toFixed(2)}% student tickets.`);

    let percentStandardTickets = (standardTicketCount / totalTicketsCount) * 100;
    console.log(`${percentStandardTickets.toFixed(2)}% standard tickets.`);

    let percentKidTickets = (kidTicketCount / totalTicketsCount) * 100;
    console.log(`${percentKidTickets.toFixed(2)}% kids tickets.`);
}

cinemaTickets([
    "Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"]);
