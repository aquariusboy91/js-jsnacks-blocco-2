// jsnack 1
// Generatore di “nomi cognomi” casuali: prendendo una
// lista di nomi e una lista di cognomi,
//  Gatsby vuole generare una falsa lista di invitati.

let nomi = ["Lindo",
"Lindora",
"Lindoro",
"Lineo",
"Linetta",
"Linneo",
"Lino",
"Linuccia",
"Linuccio",
"Malfa",
"Malina",
"Malio",
"Malvina",
"Malvino",
"Nella",
"Nellida",
"Nellina",
"Nellino",
"Nellio",
"Nello",
"Ricciardino",
"Sicciardo",
"Sigismonda",
"Sigismondo",
"Sigismunda",
"Sigismundo",
"Stellamaris"];

let cognomi = ["Rizzo",
"Greco", "Perrone", "Quarta",
"Romano", "Russo", "Longo", 
"De Giorgi", "Conte", "Caputo", 
"Russo","Rinaldi", "Lombardi", "Prencipe",
"Guerra", "Totaro",
"Palumbo", "Ciuffreda", 
"Santoro", "Ciavarella"];

let rand_nomi = [];
let rand_cognomi = [];

i = 0; 

while (i < 10) {
    rand_nomi.push(nomi[Math.floor(Math.random()*nomi.length)]);
    rand_cognomi.push(cognomi[Math.floor(Math.random()*cognomi.length)]);
    i++;
}

console.log(rand_nomi);
console.log(rand_cognomi);

// let lista_random = rand_nomi.concat(rand_cognomi);



// // for (i = 0; i < lista_random.length; i++){
// //     document.writeln(lista_random[Math.floor(Math.random()*lista_random.length)])
// // }

let lista_random = '';

// lista_random += rand_nomi[1] + " " + rand_cognomi[1];
// document.writeln(lista_random);

// console.log(lista_random);

let lista_gatsby = [rand_nomi[1] + " " + rand_cognomi[1] , 
rand_nomi[2] + " " + rand_cognomi[2], 
rand_nomi[3] + " " + rand_cognomi[3],
rand_nomi[4] + " " + rand_cognomi[4],
rand_nomi[5] + " " + rand_cognomi[5],
rand_nomi[6] + " " + rand_cognomi[6],
rand_nomi[7] + " " + rand_cognomi[7],
rand_nomi[8] + " " + rand_cognomi[8],
rand_nomi[9] + " " + rand_cognomi[9]];




document.writeln(lista_gatsby);




