//2. Realiza un script con if y otro con switch que permita introducir la edad de
//una persona, mediante la función prompt y muestre un mensaje de
//pendiendo la edad.

// IF

const edad = parseInt(prompt("Introduzca su edad"));

if (edad < 18) {
    console.log("Eres menor de edad.");
} else if (edad >= 18 && edad <= 30) {
    console.log("Eres muy joven.");
} else if(edad > 30 && edad <=60) {
    console.log("Eres una persona adulta.");
} else if (edad > 60) {
    console.log("Eres una persona adulta mayor.");
} else if (!Number.isInteger(edad)) {
    console.log("Error, debe ser un número.");
}

// SWITCH

switch(true) {
    case edad < 18:
        console.log("Eres menor de edad.");
        break;
    case edad >=18 && edad < 30:
        console.log("Eres muy joven.");
        break;
    case edad > 30 && edad <=60:
        console.log("Eres una persona adulta.")
        break;
    case edad > 60:
        console.log("Eres una persona adulta mayor");
        break;
    default:
        console.log("Error, debe ser un número.");
}