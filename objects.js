let spaceship = {}; //Define an empty object

let spaceship = {
  'Fuel Type': 'diesel',
  color: 'silver'
};






let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};

let crewCount = spaceship.numCrew;
let planetArray = spaceship.flightPath






let spaceship = {
  'Fuel Type': 'Turbo Fuel',
  'Active Duty': true,
  homePlanet: 'Earth',
  numCrew: 5
};
spaceship['Active Duty'];   // Returns true
spaceship['Fuel Type'];   // Returns  'Turbo Fuel'
spaceship['numCrew'];   // Returns 5
spaceship['!!!!!!!!!!!!!!!'];   // Returns undefined








let returnAnyProp = (objectName, propName) => objectName[propName];
returnAnyProp(spaceship, 'homePlanet'); // Returns 'Earth'


let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth',
  numCrew: 5
 };

let propName =  'Active Mission';
let isActive = spaceship['Active Mission'];
console.log(spaceship[propName]);










const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
  }
};

console.log(robot.provideInfo());










const robot = {
  energyLevel: 100,
  checkEnergy: function() {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}
robot.checkEnergy();













const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};
const robotKeys = Object.keys(robot);
console.log(robotKeys); //almacena las llaves de robot enun array

const robotEntries = Object.entries(robot);
console.log(robotEntries); //almacena el par key value de todo el objeto en un array

const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);
console.log(newRobot); //crea un nuevo objeto y le asigna las propiedades nuevas y las de robot
