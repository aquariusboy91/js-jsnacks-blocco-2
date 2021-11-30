// jsnack 2
// Crea un array di numeri interi e 
// fai la somma di tutti gli elementi che sono 
// in posizione dispari.




let numeri_interi = [];
i = 0;
while (i < 20) {
    numeri_interi.push(Math.floor(Math.random() * 21));
    i++;
}

console.log(numeri_interi);

let posizione_dispari = [];

let somma = 0;

for(i = 0; i < numeri_interi.length; i+=2) {
    posizione_dispari.push(numeri_interi[i]);
    somma += numeri_interi[i];
}
console.log(posizione_dispari);
console.log(somma);

document.writeln("Somma posizioni dispari: " + somma);