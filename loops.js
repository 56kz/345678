// // for (let i=0;i<10;i++) {
// //   console.log(i);
// // };
// // //Imprime los numero del 1 al 9
// //
// // for (let counter = 10; counter >= 5; counter--){
// //   console.log(counter)
// // };
// // //Imprime al reves del 10 al 5
// //
// //
// //
// //
// //
// //
// // const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];
// // for (let i = 0; i < animals.length; i++){
// //   console.log(animals[i]);
// // };
// // // iterating an array
// // const vacationSpots = ['Bali', 'Paris', 'Tulum'];
// // for ( let i = 0; i < vacationSpots.length; i++ ){
// //   console.log('I would love to visit ' + vacationSpots[i]);
// // }
// //
// //
// //
// //
// //
// //
// //
// //
//
// const myArray = [6, 19, 20];
// const yourArray = [19, 81, 2];
// for (let i = 0; i < myArray.length; i++) {
//   for (let j = 0; j < yourArray.length; j++) {
//     if (myArray[i] === yourArray[j]) {
//       console.log('Both loops have the number: ' + yourArray[j])
//     }
//   }
// };





//
// const arrayOne = [2, 3, 56, 178];
// const arrayTwo = [3, 46, 56, 456];
//
// for (let i = 0; i < arrayOne.length; i++) {
//   for (let j = 0; j < arrayTwo.length; j++) {
//     if (arrayOne[i] > arrayTwo[j]) {
//       console.log('Es mayor ' + arrayOne[i] + ' Del array 1, que ' + arrayTwo[j]);
//     } else if (arrayOne[i] < arrayTwo[j]){
//       console.log('Es mayor ' + arrayTwo[j] + ' Del array 2, que ' + arrayOne[i]);
//     } else {
//       console.log('Ambos son iguales')
//     }
//   }
// }
// Es mayor 3 Del array 2, que 2
// Es mayor 46 Del array 2, que 2
// Es mayor 56 Del array 2, que 2
// Es mayor 456 Del array 2, que 2
// Ambos son iguales
// Es mayor 46 Del array 2, que 3
// Es mayor 56 Del array 2, que 3
// Es mayor 456 Del array 2, que 3
// Es mayor 56 Del array 1, que 3
// Es mayor 56 Del array 1, que 46
// Ambos son iguales
// Es mayor 456 Del array 2, que 56
// Es mayor 178 Del array 1, que 3
// Es mayor 178 Del array 1, que 46
// Es mayor 178 Del array 1, que 56
// Es mayor 456 Del array 2, que 178







let bobsFollowers = ['Joe', 'Marta', 'Sam', 'Erin'];
let tinasFollowers = ['Sam', 'Marta', 'Elle'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};
console.log(mutualFollowers);











// A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++){
  console.log(counterOne);
}
// A while loop that prints 1, 2, and 3
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
}








const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard;
while(currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}
// mientras la carta no sea spades, muetrs una carta








let countString = '';
let i = 0;
do {
  countString = countString + i;
  i++;
} while (i < 5);
console.log(countString);







const firstMessage = 'I will print!';
const secondMessage = 'I will not print!';

// A do while with a stopping condition that evaluates to false
do {
 console.log(firstMessage)
} while (true === false);

// A while loop with a stopping condition that evaluates to false
while (true === false){
  console.log(secondMessage)
};










// Write your code below
let cupsOfSugarNeeded = 56;
let cupsAdded = 0;

do {
  cupsAdded++;
} while (cupsAdded < cupsOfSugarNeeded);

console.log(cupsOfSugarNeeded);//incremenat las copas agregadas hasta q cumple lasq  nceista








for (let i = 0; i < 99; i++) {
 if (i > 2 ) {
   break;
  }
  console.log('Banana.');
}

console.log('Orange you glad I broke out the loop!');
//Imprime dos veces banana








const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write you code below
for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] ===  'Notorious B.I.G.'){
    break;
  }
}
console.log("And if you don't know, now you know.");
