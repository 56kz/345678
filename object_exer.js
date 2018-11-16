console.log(Math.random());
 // Prints a random number between 0 and 1
console.log(Math.floor(Math.random() * 50));
// Prints nmero entero
console.log(Math.ceil(43.2));
//encuentra el entero de un decimal
console.log(Number.isInteger(2017.6));
//dice si un numero es entero








// crear un objeto alienship, asignarle metodos retreat  y takeoof e invocarlo sluego
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';
let alienShip = {
  retreat(){
    console.log(retreatMessage);
  },
  takeOff(){
    console.log('Spim... Borp... Glix... Blastoff!');
  }
}
alienShip.retreat();
alienShip.takeOff();












let spaceship = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032
  },
  crew: {
    captain: {
      name: 'Sandra',
      degree: 'Computer Engineering',
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    backup: {
      battery: "Lithium",
      terabytes: 50
    }
  }
};
let capFave = spaceship.crew.captain['favorite foods'][0];
console.log(capFave);
//capfave muesta la primera comida favorita del capitan
spaceship.passengers = [
  {name: 'Zorro'},
  {name: 'Rodrigo'}
];
console.log(spaceship.passengers);
//Modifica los pasajeros de null a un array de objetos
let firstPassenger = spaceship.passengers[1];
console.log(firstPassenger);
//Imprime el nombre del primer pasajero asignado
















const spaceship = {
  homePlanet : 'Earth',
  color : 'silver'
};
let paintIt = obj => {
  obj.color = 'glorious gold'
};
// paintIt es una funcion q coje la propiedad color y la modifica
paintIt(spaceship);
// se le aplica esta funcion a spaceship
spaceship.color // Returns 'glorious gold'









let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Una funcion q recibe objeto como paramentro para modificar info
let greenEnergy = object => {
  object['Fuel Type'] = 'avocado oil';
}
let remotelyDisable = object => {
  object['disabled'] = true;
}
greenEnergy(spaceship);
remotelyDisable(spaceship);
console.log(spaceship)
