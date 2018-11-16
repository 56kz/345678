// function hola() {
//   console.log("Aullalo");
// }
// hola();

// function hello(name) {
//   console.log("Hola " + name);
// }
// hello("Zorro");

// function dime(name) {
//   return "Hola " + name;
// }
// var d1 = dime("Zorrito");
// console.log(d1);
// console.log(dime("Zorroide"))



// function bmi(weight, height) {
//   return weight / height**2;
// }
// console.log("Tu imc es: " + bmi(84,1.8));


// function sum(a1, a2) {
//   return a1 + a2;
// }
// console.log("La suma es "+ sum(23,12));



// function greet(name) {
//   return "Hola " + name;
// }
// console.log(greet("Chris"));




function greeting (name = 'stranger') {
  console.log(`Hello, ${name}!`)
}
greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!



function rectangleArea(width, height) {
  let area = width * height
  return area
}
console.log(rectangleArea(5, 7)) // Prints undefined



function rectangleArea(width, height) {
  if (width < 0 || height < 0) {
    return 'You need positive integers to calculate area!';
  }
  return width * height;
}


function monitorCount(rows, columns) {
  return rows * columns;
}
const numOfMonitors = monitorCount(5, 4);
console.log(numOfMonitors)



function multiplyByNineFifths(number) {
  return number * (9/5);
};
function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
};
getFahrenheit(15); // Returns 59




const plantNeedsWater = function(day) {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
}
console.log(plantNeedsWater('Tuesday'));
// en otra sintaxis
const plantNeedsWater = (day) => {
  return day === 'Wednesday' ? true : false;
};
// en otra sintaxis
const plantNeedsWater = day => day === 'Wednesday' ? true : false;





const rectangleArea = (width, height) => {
  let area = width * height;
  return area
}







const squareNum = (num) => {
  return num * num;
};
//EN otra sintaxis
const squareNum = num => num * num;



function monitorCount(rows, columns) {
  return rows * columns;
}
function costOfMonitors(rows, columns){
return monitorCount(rows, columns) * 200;
}




const logSkyColor = () => {
  let color = 'blue';
  console.log(color); // blue
};





const city = 'New York City';
function logCitySkyline() {
  let skyscraper = 'Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' +   city;
}
console.log(logCitySkyline());
//la funcion da el value d skyscraoer pero
// si lo llamas solo skyscraper no sale , se define dentro



const color = 'blue'
const returnSkyColor = () => {
  return color; // blue
};
console.log(returnSkyColor()); // blue







const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};
const residence = vampire.residence;
console.log(residence); // Prints 'Transylvania'
// en otra sintaxis
const { residence } = vampire;
console.log(residence); // Prints 'Transylvania'
const { day } = vampire.preferences;
console.log(day); // Prints 'stay inside'






const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};
const { functionality } = robot;
functionality.beep();






















// SCOPE
let satellite = 'The Moon';
let galaxy = 'The Milky Way';
let stars = 'North Star';
function callMyNightSky() {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}
console.log(callMyNightSky());



const logSkyColor = () => {
  let color = 'blue';
  console.log(color); // blue
};
console.log(logSkyColor()); // blue
console.log(color); // ReferenceError






let num = 50;
const logNum = () => {
  num = 100; // Take note of this line of code
  console.log(num);
};
logNum(); // Prints 100
console.log(num); // Prints 100






const logSkyColor = () => {
  const dusk = true;
  let color = 'blue';
  if (dusk) {
    let color = 'pink';
    console.log(color); // pink
  }
  console.log(color); // blue
};
console.log(color); // ReferenceError







const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  if (region === 'The Arctic') {
    let lightWaves = 'Northern Lights';
    console.log(lightWaves); // Northrn Lights
  }
  console.log(lightWaves); //Moonlight
};
logVisibleLightWaves();
