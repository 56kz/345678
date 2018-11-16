let tool = 'marker' ;
let writingUtensil = tool || 'pen';
console.log(`The ${writingUtensil} is mightier than the sword.`);
// Use short circuit evaluation to assign  writingUtensil variable below:



let isNightTime = true;
if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}
//En otta sintaxis :
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');



//SIntaxis breve
let favoritePhrase = 'Love That!';
favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");


let season = 'summer';
if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else if (season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
} else if (season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!');
} else {
  console.log('Invalid season.');
}



let groceryItem = 'papaya';
switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}
