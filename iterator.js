//F O R E A C H
// let groceries = ["Brownie", "Cookies"];
// groceries.forEach(groceryItem => console.log(groceryItem));


// const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
// fruits.forEach(fruit => {
//   console.log(`I want to eat a ${fruit}`);
// })

// otra forma de iterar
// let groceries = ["Brownie", "Cookies", "MJ"];
// function printGrocery(element){
//   console.log(element);
// }
// groceries.forEach(printGrocery);


// const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];
// artists.forEach(artist => {
//  console.log(artist + ' is one of my favorite artists.');
// });









// M A P  crea un nuevo array
// const numbers = [1, 2, 3, 4, 5];
// const squareNumbers = numbers.map(number => {
//   return number * number;
// });
//console.log(squareNumbers);
//

// let numbers = [1, 2, 3];
// let double_numbers = numbers.map(number => {
//   return number * 2;
// })
// console.log(double_numbers);

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
const secretMessage = animals.map( animal => {
  return animal[0];
})
console.log(secretMessage.join(''));



const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map( number => {
  return number / 100;
});
console.log(bigNumbers);






// F I L T E R retorne nuevo array de elemnts existents
// const numbers = [1, 2, 3, 4, 5];
// const bigNumbers = numbers.map(number => {
//   return number * 10;
// });
// console.log(bigNumbers)



// const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door'];
// const shortWords = words.filter(word => {
//   return word.length < 6;
// });



// let numbers = [1, 2, 3, 4];
// let even = numbers.filter(number => {
//   return number % 2 === 0;
// });
//
// console.log(even)


// const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];
// const onlyNumbers = things.filter(thing => {
//   return typeof thing === 'number';
// });
// console.log(onlyNumbers);



// const randomNumbers = [375, 200, 3.14, 7, 13, 852];
// const smallNumbers = randomNumbers.filter( number => {
//   return number < 250;
// });
// console.log(smallNumbers);
//
//
// const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
// const longFavoriteWords = favoriteWords.filter( word => {
//   return word.length > 7;
// });
// console.log(longFavoriteWords);







//REDUCE el array
const numbers = [1, 2, 4, 10];
const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})
console.log(summedNums) // Output: 17



const numbers = [1, 2, 4, 10];
const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100)  // <- Second argument for .reduce()
console.log(summedNums); // Output: 117



const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
   console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
},10);

console.log(newSum);






const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
console.log(words.some(word => {
  return word.length < 6;
}));
const interestingWords = words.filter((word) => {return word.length > 5});
console.log(interestingWords.every((word) => {return word.length > 5}));











const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];
//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));
// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);
console.log(longCities);
// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");
console.log(word)
// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);
// Choose a method that will return a boolean value
nums.some(num => num < 0);





















let spaceship = {
    crew: {
    captain: {
        name: 'Lily',
        degree: 'Computer Engineering',
        cheerTeam() { console.log('You got this!') }
        },
    'chief officer': {
        name: 'Dan',
        degree: 'Aerospace Engineering',
        agree() { console.log('I agree, captain!') }
        },
    medic: {
        name: 'Clementine',
        degree: 'Physics',
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna',
        degree: 'Conservation Science',
        powerFuel() { console.log('The tank is full!') }
        }
    }
};
for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
};
//Itera entre los miembros del crew y sus nombres

for (let crewMember in spaceship.crew) {
  console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`);
}
//Itera entre el nobre y el degree
