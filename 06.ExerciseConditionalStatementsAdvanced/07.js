function hotelRoom(input) {
  let mouth = input[0]  ;
  let nightsCount = Number(input[1]);

  let studioPrice = 0;
  let appartmentPrice = 0;

  if(mouth === "May" || mouth === "October") {
    if (nightsCount <= 7) {
        studioPrice = 50;
        appartmentPrice = 65;

    } else if(nightsCount > 7 && nightsCount <= 14) {
        studioPrice = 50 * 0.95; // 50 - (50 * 0.05);
        appartmentPrice = 65;

    } else {
        studioPrice = 50 * 0.70; // 50 - (50 * 0.30);
        appartmentPrice = 65 * 0.90;
    }
 
  } else if(mouth === "June" || mouth === "September") {
    if ( nightsCount <= 14) {
        studioPrice = 75.20;
        appartmentPrice = 68.70;

    } else if(nightsCount > 14) {
        studioPrice = 75.20 * 0.8; // 75.20 - (75.20 * 0.20)
        appartmentPrice = 68.70 * 0.9;
    }

  } else if(mouth === "July" || mouth === "August") {
    if(nightsCount <= 14) {
        studioPrice = 76;
        appartmentPrice = 77;
    } else if(nightsCount > 14) {
        studioPrice = 76;
        appartmentPrice = 77 * 0.90;
    }

  }

  console.log(`Apartment: ${(appartmentPrice * nightsCount).toFixed(2)} lv.`);
  console.log(`Studio: ${(studioPrice * nightsCount).toFixed(2)} lv.`);
}

hotelRoom(["May",
"15"])
