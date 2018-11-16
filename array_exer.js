// var array = ["Zorro", 56, "Justin QUiles"];
// array[2] = "Justin Quiles";
// array.push("Zorroide", 567);
// array.splice(1,0,"Es: ");
// // Reemplaza posicion 1, el 0 siempre se coloca
// // array.splice(2,2);
// //elimina desde la poscion 2 , las 2 sgtes
// array.splice(3)
// // elimina todo desde la pcn 3

// for (var i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// var array = ["Hola", "mundo", 3 , "veces"];
// for (var i = 0; i < array.length; i++) {
//   console.log("El valor en la posicion "+ [i] +" es " + array[i]);
// }
// Recorre el array con posicion y valor

// var array = ["Haullalo", "mi ", "zorro"];
// console.log(array.join(" "));
// une la cadna usando espacios
// console.log(array.length);


const jumbledNums = [123, 25, 78, 5, 9];
const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});
console.log(lessThanTen); //ENcuentra la posicion en el array






let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];
console.log(newYearsResolutions);
// saving an array in a variable




let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
condiments[0] = 'Mayo';
console.log(condiments);
condiments = ['Mayo'];
console.log(condiments);
utensils[3] = 'Spoon';
console.log(utensils);
//let can be reaasigned to a new array
// const just can change elements  not array






const newYearsResolutions = ['Keep a journal', 'Take a falconry class'];
console.log(newYearsResolutions.length);
// Output: 2



const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length)


2




const itemTracker = ['item 0', 'item 1', 'item 2'];
itemTracker.push('item 3', 'item 4');
console.log(itemTracker);
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];








const newItemTracker = ['item 0', 'item 1', 'item 2'];
const removed = newItemTracker.pop();
console.log(newItemTracker);
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2





const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift();
//elimina el primer elemento de un array
groceryList.unshift('popcorn');
//ingresa un elemento a la primera posicion
groceryList.slice(2);
//saca elementos de la posicion  3 hasta la el final, no modifica
groceryList.slice(2, 4);
//saca elementos de la posicion  3 hasta la 4, no modifick
groceryList.pop();
// elimina el ultimo elm de un array
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);
// indexOf encuentra el indice de determinado elemento
console.log(groceryList);







const flowers = ['peony', 'daffodil', 'marigold'];
function addFlower(arr) {
  arr.push('lily');
}
addFlower(flowers);
console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']







const concept = ['arrays', 'can', 'be', 'mutated'];
function changeArr(arr){
  arr[3] = 'MUTATED';
}
changeArr(concept);
console.log(concept);
function removeElement(newArr){
  newArr.pop();
}
removeElement(concept);
console.log(concept);






const nestedArr = [[1], [2, 3]];
console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2

let numberClusters = [[1, 2], [3, 4], [5, 6]];
const target = numberClusters[2][1];
console.log(target);






let array = [[1 , 2 ,3], "ay ombe", ["Jesus", "Ala", "God"], "quien dijo miedo"];
console.log(array[array.length - 1]);
//find last element with lentg property
let string = array.join('-');
console.log(string);





const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animals.findIndex( animal => {
  return animal === 'elephant';
});
const startsWithS = animals.findIndex( animal => {
  return animal[0] === 's';
})
console.log(foundAnimal);
console.log(startsWithS);
