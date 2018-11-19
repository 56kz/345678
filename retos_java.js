// function suma(num1, num2) {
//   return  num1 + num2 ;
// }
// console.log(suma(1,2));
// Una funcion q sume dos numeros



// function saluda(nombre) {
//   return "Hola " + nombre;
// }
// console.log(saluda("Zorro"));
// Unafuncion que retorne un string dentro de otro



// function longitud(array) {
//   return array.length;
// }
// console.log(longitud("Hola"));
//retorna la longitud de determinado string q netre como argumento



// function isAlive(playerName, points) {
//  if (playerName === "ikk" && points > 30) {
//    return true;
//  } else if (playerName === "gut" && points > 10) {
//    return true;
//   } else {
//   return false;
//  }
// }
// console.log(isAlive("ikk", 30));
// retorna true o false si se cumplen dos condiciones, que llegan comoa rgumnetos





// Facttorial using recursion
// var factorial = function (n) {
//   if (n == 0) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// };
// console.log(factorial(5));

// // Facttorial normal
// function factorial(num) {
//   if (num === 0 || num == 1) {
//   var fact = 1;
//   } else {
//   var fact = factorial(num-1)*num;
//   }
//   return fact;
// }
// retorna el facotrial





// function adjust_text(string, number) {
//   let empty_string = ' ';
//   let diference = number - string.length;
//
//   if (string.length == 0) {
//     return (empty_string.repeat(number));
//   } else if (string.length >= number) {
//     return (string.substring(0, number));
//   } else {
//     return (string + empty_string.repeat(diference));
//   }
// }
// console.log(adjust_text("Hola", 10));
// AJusta una cadena que ingresa como primer agurmento
// a una longitud que entra como segundo arg






// function promediame(array) {
//   if (array.length == 0) {
//     return 0;
//   } else if (array.length == 1) {
//     return array[0];
//   } else {
//     const add = (a, b) =>
//     a + b
//     return array.reduce(add) / array.length
//   }
// }
// console.log(promediame([]));
// console.log(promediame([1]));
// console.log(promediame([1,2,3,4]));
// retorna el promedio de la suma de un array q le entra como agurmento




// function sumame(arr) {
//   return arr.reduce(function(memo, i) {
//     return memo + i;
//   }, 0);
// }
// retorna la suma de llos elemtnos de u array
// function promediame(arr) {
//   if (arr.length == 0) {
//     return 0;
//   }
//   return sumame(arr) / arr.length;
// }
// retorna el promedio d e la suma





//transformando un array
// function transform(thing, fun) {
//   return thing.map(function(x){
//     return fun(x);
//   });
// }
// function transform(arr, func) {
//   var transformed = [];
//   for (var i=0; i < arr.length; i++) {
//      transformed[i] = func(arr[i]);
//   }
//   return transformed;
// }
// function transform(arr, func) {
//   return arr.map(func);
// }











// function funcOne(){
//   let str = funcOne();
//   return str;
// }
// function funcTwo(str){
//  return str.funcTwo();
// }
//
//
// function compose(funcOne, funcTwo) {
//   console.log(funcOne());
//   console.log(funcTwo());
// }
//
//
// function generate(){
//   return "Bienvenidos";
// }
// function square(str){
//   return str.toUpperCase() + "!";
// }
//
// console.log(compose(generate, square));



// function greet(){
//   return "Bienvenidos";
// }
// function yell(str){
//   return str.toUpperCase() + "!";
// }
// console.log(compose(greet, yell));
//
// //Filtando un array
// function filter(arr, func) {
//   var filtered = [];
//   for (var i=0; i < arr.length; i++) {
//     if (func(arr[i])) {
//       filtered.push(arr[i]);
//     }
//   }
//   console.log(filtered);
// }
//
// function even(i) {
//   return i % 2 === 0;
// };
// filter([1, 2, 3, 4], even)
// // var even = function(i) { return i % 2 === 0 }; filter([1, 2, 3, 4], even)
//
// function none(i) {
//   return false;
// }
// filter([1, 2, 3, 4], none)
// var none = function(i) { return false; }; filter([1, 2, 3, 4], none)




// // en otra sintaxis
// function filter(arr, func) {
//   return arr.filter(func);
// }
// función llamada filter que reciba como argumentos un arreglo y una función. Para cada elemento del arreglo, la función filter deberá invocar la función que llega como argumento (que recibe un número y devuelve true o false) y retornar un nuevo arreglo con los elementos para los que la función haya retornado true.
//
// Ejemplos:
// var even = function(i) { return i % 2 === 0 };
// filter([1, 2, 3, 4], even) // => [2, 4]
//
// var none = function(i) { return false; };
// filter([1, 2, 3, 4], none) // => []













//Ordenando el desorden , ordena array de mayor a menor y de menor a mayor
// function order(array, reverse = false) {
//   if (reverse) {
//     return(array.sort(function(a, b){return b-a}));
//   } else {
//     return(array.sort(function(a, b){return a-b}));
//   }
// }
// console.log(order([1, 2, 3, 5, 8, 2]));
// console.log(order([25, 10, 1, 1, 5, 14], true));
// //EN otra sintais:
// function order(arr, reverse) {
//   return arr.sort(function(a, b) {
//     return reverse ? b - a : a - b
//   });
// }














//Una funcion que coje un array de arrays y los convierte en un solo array con totos los elemtnso
// function flatten(array) {
//   if (array.length == 1) {
//     return array;
//   } else if (array.length == 2) {
//     return array[0].concat(array[1]);
//   } else if (array.length == 3) {
//     return array[0].concat(array[1]).concat(array[2]);
//   }
// }
// en otra SIntaxis
// function flatten(arr) {
//   return arr.reduce(function(memo, a) {
//     return memo.concat(a);
//   }, []);
// }
// console.log(flatten([[1], [2], [3, 4, 5]]));
// console.log(flatten([[1], [2]]));











//uNA FUNCION QUE RETORNE EL NUMERO DE VECES Q FUE llamada

// function counter() {
//   var count = 0;
//
//   return function() {
//     return ++count;
//   };
// }
// //EN otra sintaxis
// function counter() {
//     var count = 0;
//     return function() {
//         console.log(count++);
//     }
// }
// var count = counter();
// count();
// count();
// count();











// var maria = {
//   nombre: "Terah",
//   edad: 32,
//   altura: 1.70,
//   peso: 60,
//   colorPelo: "cafe",
//   hijos: "german",
//   bmi(){
//     return (this.peso / (this.altura * this.altura))
//   }
// }
// console.log(maria.bmi());










// entra un metodo como argumento
// function Square (width, height) {
//  this.width = width;
//  this.height = height;
//  this.calculateArea = function() {
//   return width * height;
//  }
// }
// // en otra sintaxis
// var Square = function(width, height) {
//   this.width = width;
//   this.height = height;
// };
// Square.prototype.calculateArea = function() {
//   return this.width * this.height;
// };
//
// // en otra sintais
// var Square = function(width, height) {
//   this.width = width;
//   this.height = height;
//   this.calculateArea = function() {
//     return this.width * this.height;
//   }
// };
//
// // Ejemplos:
// var square = new Square(50, 60);
// square.width; // => 50
// square.height; // => 60
// console.log(square.calculateArea()); // => 3000










//partiendo la cdena con split usando + - * como separadores
// let str = "partir-la+cadena";
// function split(str){
//   let separators = ['\\\+', '-', '\\*', '/'];
//   let newArray = str.split(new RegExp(separators.join('|'),'g'));
//   return newArray;
// }
// console.log(split(str));
// // EN otra SIntaxis
// function split(str) {
//   return str.split(/[\+\-\*]/);
// }









//de un num variable de argumentos hallar el menor y el mayor
// function minimo(){
//   let array = []
//   for (var i = 0; i < arguments.length; i++) {
//     array.push(arguments[i]);
//   }
//   let newArray = array.sort(function(a, b){return b-a});
//   return newArray.slice(-1).pop();
// }
// console.log(minimo(2, 3, 5, 9 , 52, 1));
//
// function maximo(){
//   let array = []
//   for (var i = 0; i < arguments.length; i++) {
//     array.push(arguments[i]);
//   }
//   let newArray = array.sort(function(a, b){return a-b});
//   return newArray.slice(-1).pop();
// }
// console.log(maximo(2, 3, 5, 9 , 52, 1));
// // enotra SIntaxis
// function maximo() {
//   var args = Array.prototype.slice.call(arguments);
//   args = args.sort(function(a, b) {
//     return b - a;
//   });
//   return args[0];
// }
//
// function minimo() {
//   var args = Array.prototype.slice.call(arguments);
//   args = args.sort(function(a, b) {
//     return a - b;
//   });
//   return args[0];
// }


















//Herencia de funciones
// function Car() {
//   this.velocity = 0;
// }
// Car.prototype.accelerate = function(amount) {
//   this.velocity += amount || 1;
//   return this;
// }
// Car.prototype.break = function(amount) {
//   this.velocity -= amount || 1;
//   return this;
// }
//
//
// // function Bus












// identifica si las posiciones d un areglo coninciden con una placa
// function isPlate(str) {
//   return /[A-Z]{3}\d{3}/.test(str);
// }
// isPlate("") //=> false
// isPlate("MVV387") //=> true
// isPlate("mvv387") //=> false









// Metodo para encontrar placas dentro de un string
// function plate(string) {
//  if(string.match(/[A-Z]{3}\d{3}/g) === null) {
//    return [];
//  } else {
//    return string.match(/[A-Z]{3}\d{3}/g);
//  }
// }
// // en otra sintais
// function isPlate(str) {
//   return /[A-Z]{3}\d{3}/.test(str);
// }
//
// console.log(plate(""));
// plates("AAA123"); // => ["AAA123"]
// plates("Iba en un AAA123 y después en un BBB987"); //=> ["AAA123", "BBB987"]
// plates("no coincide"); // => []














// Recibe un string y un objeto, y retorna un string nuevo reemplazando valores
// function template(string, object){
//   return
// };
// template("Hola [nombre]", { nombre: "German" }); // => "Hola German"
// template("Hola [nombre], tu saldo es [saldo]", { nombre: "German", saldo: 12000 }); // => "Hola German, tu saldo es 12000"
// template("Hola mundo", {}) // => "Hola mundo"



// let string = "Hola [nombre]";
// for (var i = 0; i < string.length; i++) {
//   if (i == "[") {
//   console.log(string[i]);
//   }
// }

// let string = "Hola [nombre] como [estas]";
// // console.log(string.match(/\[(.*?)\]/));
//
// let capture = string.match(/\[(.*?)\]/gi);
// console.log(capture[0]);
//
// let captureTwo = capture[0].slice(1, -1)
// console.log(captureTwo);







// function compose(string, object){
//   let capture = string.match(/\[(.*?)\]/gi);
//   // console.log(capture);//el match de los elemntos en []
//   let match = [];
//   capture.forEach(item => {
//     match.push(item.slice(1, -1));
//   });
//   // console.log(match); //array con los keys del substring
//
//   match.forEach(item => {
//     let result = "";
//   for(key in object){
//      // console.log(key);
//      // console.log(object[key]);
//      if (key === item) {
//        // console.log(key)
//        // console.log(string.replace(key, "oli"));
//        result += string.replace(key, "oli")
//      }
//   }
//   console.log(result);
//   });
//
//
//   // let captureTwo = capture[0].slice(1, -1);
//   // console.log(captureTwo); // el elemtn sin las []
//   // let captureThree = string.split(/\[(.*?)\]/);
//   // console.log(captureThree); // el array final listo para modificar
//
//
// }
// let arrayOne = "Hola [name], tienes [age] y estas [status].";
// let objectOne = {
//   name: "Zorro",
//   age: 28,
//   status: "Zorriando"
// };
//
// compose(arrayOne, objectOne);


//Intento 3
// let arrayOne = "Hola [name], tienes [age].";
// let objectOne = {
//   name: "Zorro",
//   age: 28
// };
//
// function compose(string, object){
//   for(key in object){
//     // console.log(key + object[key]);
//     key
//   }
//   console.log(keys) //variable con todos los key
//
//
// }
//
// compose(arrayOne, objectOne);

// como sacar el key y value del objeto
// function object(object){
//   for(key in object){
//    console.log(key);
//    console.log(object[key]);
//   }
// }
//
// object(properties);
//
// // comparar el objeto con el substrin
// let string = "Hola [name], eres [status], y tienes [age].";
// let properties = {
//   name:  "German",
//   status: "Soltero",
//   age: 23
// }
//
// function compare(string, properties){
//   for(key in properties){
//    console.log(key);
//    console.log(properties[key]);
//    if (true) {
//
//    }
//   }
// }



// intento 4

// let object = {
//   name: "German",
//   age: 23
// }
// let string = "Hola [name], tienes [age].";
// let newArray = string.split(/[","|" "|"."]/);
// // console.log(string[0]);
// // console.log(newArray);
// let result = [];
// for (var i = 0; i <newArray.length; i++) {
//   for(key in object){
//     if (newArray[i] === key) {
//      result.push(object[key])
//      }
//   }
//
// }
// console.log(result)




















// iterar string hasta enocntrar []
// function compose(string, object){
//   const newString = string.split(/[" "|"."|","]/); //divide el string entre .y espacio, y los pasa a un array de varias strings
//   console.log(newString);
//   const result = []; // crea un array vacio para ir agregando los resultados de la iteracion
//   newString.forEach(word => { //iterar cada una de las palabras del array
//     if (word.match(/\[(.*?)\]/gi)) { // si encuentra palabras entre [] reemplacelas por
//       const listo = word.replace(word, "listo");
//       result.push(listo); //Agreguele a el array result la palabra modificada
//     } else if (word.length === 0){ // si encunetra un espacio vacio peguele una coma
//       result.push(",");
//     } else { // si no encunetra nada de eso simplemeente pasele la palabra original
//       result.push(word);
//     };
//   });
//   console.log(result);
// };
//
// compose(string, properties);















// intento 6
// iterar el string hasta encontrar match[] y reemplazarlos
// coger string y dividirlo en un array de palabras
// iterar ese array
// si encontrar [] para reemplazarlas por los value del object
// sino dejar igual
// imprimir resultado
const object = {
  name: "German",
  age: 23
};
const string = "Hola [name], tienes [age]";
let capture = string.match(/\[(.*?)\]/gi);
// iterar string hasta enocntrar []
function compose(string, object){
  const newString = string.split(/[" "|"."|","]/); //divide el string entre .y espacio, y los pasa a un array de varias strings
  // console.log(newString);
  const result = []; // crea un array vacio para ir agregando los resultados de la iteracion
  newString.forEach(word => { //iterar cada una de las palabras del array
    if (word.match(/\[(.*?)\]/gi)) { // si encuentra palabras entre [] haga lo siguiente:
      const finalword = word.slice(1, -1);// encuentra la palabra dentro del [],
      // iterar el objeto y encontrar coincidencias entre la palabra encontrada
      for(var key in object){
        if(key === finalword){
          result.push(object[key]);
        }
      }


      // const listo = word.replace(word, "listo");
      // result.push(listo); //Agreguele a el array result la palabra modificada
    } else if (word.length === 0){
      // si encunetra un espacio vacio peguele una coma
      result.push(",");
    } else {
      // si no encunetra nada de eso simplemeente pasele la palabra original
      result.push(word);
    };
  });

  const finalString = result.join();
  console.log(finalString);
};

compose(string, object);
