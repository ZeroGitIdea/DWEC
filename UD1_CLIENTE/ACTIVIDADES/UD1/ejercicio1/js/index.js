// 1. Números: Crea un script que muestre los números impares que no sean múltiplo de
// 3 ni de 7 que se encuentren entre el 100 al 1. Realizar versiones del programa
// usando bucles while, do while y for.

// FOR

console.log("-------------Script con For-------------")
console.log("----------------------------------------")
for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0 && i % 3 !== 0 && i % 7 !== 0) {
        console.log(`El número ${i} no es múltiplo de 3 ni de 7`);
    }
}

// Do...WHILE

let i = 0;
console.log("---------Script con Do...while----------")
console.log("----------------------------------------")

do {
    if(i % 2 !== 0 && i % 3 !== 0 && i % 7 !== 0) {
        console.log(`El número ${i} no es múltiplo de 3 ni de 7`);    
    }
    i++;
}while(i <=100);

// WHILE

let iw = 0;
console.log("------------Script con While------------")
console.log("----------------------------------------")

while(iw <=100) {
    if(iw % 2 !== 0 && iw % 3 !== 0 && iw % 7 !== 0) {
        console.log(`El número ${iw} no es múltiplo de 3 ni de 7`);    
    }
    iw++;
}

