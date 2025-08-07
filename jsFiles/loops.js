// //Afisam patratele numerelor de la 1 la 10
// for (let i = 1; i <= 10; i++){
//     console.log(`${i} + ${i} = ${i*i}`);
// }
//
// // Iteram prin array
// let cats = ["Fifilik", "Kitty", "Cozmin"];
// //
//
// //Variant cu for...of
// for (let cat of cats){
//     console.log(cat);
// }
// //
//
// //Varianta cu for
// for (let i = 0; i < cats.length; i++){
//     console.log(cats[i]);
// }
// //
//

let cats = ["Fifilik", "Kitty", "Cozmin"];

//Vrem sa avem "My cats are x, y and z

let myCatsare = "My love, my cats: ";

for (i = 0; i < cats.length; i++){
    if (i < cats.length - 1) {
        myCatsare += `${cats[i]}, `;
    } else {
        myCatsare += `and ${cats[i]}!`
    }
}

console.log(myCatsare);