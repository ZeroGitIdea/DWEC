//3. Escribe un programa que ponga en práctica la siguiente lógica:
//a) Mostrar el siguiente menú y el usuario deberá elegir una de las opciones
//Dpto. Informá#ca
//b) En función de la opción que elija el usuario se le pedirán los datos
//necesarios en cada caso.
//c) El programa calculará el resultado y lo mostrará en la consola.
//d) La lógica anterior se repetirá indefinidamente hasta que el usuario pulse la
//opción 4 para salir que mostrará un mensaje por consola, Fin del ejercicio.
//e) Si la opción no está entre el rango 1-4 se mostrará un error mediante la
//función alert() y se volverá a pedir otra opción
let opcion = 0;
//do...while para que se repita el bucle mientras que no elijamos la opcion de salir
do {
    //recogemos la opcion por pantalla
    opcion = parseInt(prompt("1.-Área de triángulo \n2.-Área de rectángulo \n3.-Media aritmética de dos números \n4.- Salir"));
    
    //condicionales dependiendo de la opcion recogida.
    switch (opcion) {
        case 1:
            alert(`El área del triángulo es: ${areaTriangulo()}`);
            break;
        case 2:
            alert(`El área del rectángulo es: ${areaRectangulo()}`);
            break;
        case 3:
            alert(`La media aritmética es: ${mediaAritmetica()}`);
            break;
        default:
            if(!Number.isInteger(opcion)){
                alert("La opción debe ser un número.");
            }
            //condicional para que no se salgan del rango establecido
            if(opcion<1 || opcion>4){
                alert("Error: la opción introducida no entra dentro del rango.");
                break;
            }
            break;
    }

}while(opcion != 4)

//funcion para calcular el area de un triangulo
function areaTriangulo () {
    let base = parseInt(prompt("Introduzca la base del triángulo."));
    let altura = parseInt(prompt("Introduzca la altura del triángulo."));

    return (base*altura)/2;
}

//funcion para calcular el area de un rectangulo
function areaRectangulo(){
    let base = parseInt(prompt("Introduzca la base del rectángulo."));
    let altura = parseInt(prompt("Introduzca la altura del rectángulo."));

    return base*altura;
}

//funcion para calcular la media aritmetica de dos numeros
function mediaAritmetica(){
    let numero1 = parseInt(prompt("Introduzca el primer número."));
    let numero2 = parseInt(prompt("Introduzca el segundo número."));

    return (numero1+numero2)/2;
}