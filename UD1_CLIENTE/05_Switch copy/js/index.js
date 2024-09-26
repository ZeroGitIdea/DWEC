let nota = prompt("Introduce nota [1-10]","5"); //el 5 sirve para que el input lo tenga por defecto
let resultado;
let error = false;

switch(nota) {
    case "1":
    case "2":
    case "3":
    case "4":
        resultado = "Insuficiente";
        break;
    case "5":
        resultado = "Suficiente";
        break;
    case "6":
        resultado = "Bien";
        break;
    case "7":
    case "8":
        resultado = "Notable";
        break;
    case "9":
    case "10":
        resultado = "Sobresaliente";
        break;
    default:
        resultado = "Dato incorrecto. Debe estar entre el 1 y el 10."
        error = true;
        break;
}

if (error) {
    console.log("Dato incorrecto. Debe estar entre el 1 y el 10.");
} else {
    console.log(`la nota ${nota} corresponde con un ${resultado}.`);
}

//Usando el switch con rangos

switch(true) {
    case nota >=1 && nota <=4:
        resultado = "Insuficiente"
        break;
    case nota >=5 && nota <=6:
        resultado = "Suficiente";
        break;
    case nota >=7 && nota <=8:
        resultado = "Notable";
        break;
    case nota >=9 && nota <=10:
        resultado = "Sobresaliente";
        break;
    default:
        resultado = "Dato incorrecto. Debe estar entre el 1 y el 10.";
        break;
}