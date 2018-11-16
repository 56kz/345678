// var str = "Aulllao zoror";
// for (var i = 0; i < str.length; i++) {
//   console.log(str[i])
// }
// Recorriendo un string

var str = "Hola Como vSs Mai DoggGy ";
console.log(str)
console.log(str.split(" "));
// separa la cadena por espacios y lo conierte en array
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.toLowerCase().startsWith("hola"));
console.log(str.endsWith(" "));

console.log(str.substr(5));
//substrae la cadena desd la pos 5
console.log(str.substr(5, 8));
//encuenta la cadena desde la posicion 5 , hasta 8 mas
console.log(str.substring(5, 8));
//desde la posicion 5 hasta la 8
console.log(str.replace(" ", "-"));
// Reemplazael primer elm que se encuentre por el segundo elemtnso
console.log('    Remove whitespace   '.trim());
//Reueve espacios en blanco al inicio y final

const myPet = 'armadillo';
console.log(`I own a pet ${myPet}.`);
// pilas q la comilla se llama backtick altgr y }

const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string
const unknown2 = 10;
console.log(typeof unknown2); // Output: number
const unknown3 = true;
console.log(typeof unknown3); // Output: boolean
