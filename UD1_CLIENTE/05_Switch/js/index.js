//for
let numero, i;

for (i = 0; i < 20; i++) {
    console.log(`El número es ${i}.`);
}

//foreach
const numeros = [1,2,3,4,5];

numeros.forEach(function(numero) {
    console.log(numero);
});

//bucle do...while
total = 0;
do {
    numero = parseInt(prompt("Introduce un número, 0 para FIN"));
    if (numero != 0){
        total += numero; //total = total + numero;
    }
}while(numero != 0);

console.log (`El resultado de la operación es ${total}`);

//buble while
numero = parseInt(prompt("Introduce un número, 0 para FIN"));
while(numero!=0){
    total += numero;
    numero = parseInt(prompt("Introduce un número, 0 para FIN"));
}

console.log (`El resultado de la operación es ${total}`);