function squareArea(input) {  //декларираме дункция squareArea, който има като вход някакъв input
    let a = Number(input[0]); //декларираме променлива с име а, която преобразува първата стойност, която получава от този input, от този масив В ТИПА ЧИСЛО
    let area = a * a;         //изпълняваме аритметична операция
    console.log(area);
}

squareArea([4]); 