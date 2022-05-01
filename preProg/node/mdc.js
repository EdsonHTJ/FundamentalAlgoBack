function mdc(num1, num2) {

    if (isNaN(num1) || isNaN(num2)) {
        return "entrada invalida"
    }

    //The rest of division 
    let rest = 0

    //Calculates the mdc
    do {
        rest = num1 % num2;

        num1 = num2;
        num2 = rest;
        
    } while (num2 !== 0);

    return num1
}

