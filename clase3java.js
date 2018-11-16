// var factorial = function (n) {
//   if (n == 0) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// };




//funcion de forma recursiva d iga si el numer es par o impar
// function is_even_recursion(number) {
//   if (number < 0) {
//     number.Math.abs(number);
//   }
//   if (number === 0) {
//     return true;
//   }
//   if (number === 1) {
//     return false;
//   }
//   else {
//     number = number - 2;
//     return is_even_recursion(number);
//   }
// }
// console.log(is_even_recursion(234));


//suma array denumeros

// var array_sum = function (my_array) {
//   if (my_array.length === 1){
//     return my_array[0];
//   }
//   else {
//     return my_array.pop() + array_sum(my_array); //.pop retira el ultimo numero del array
//   }
// };
// console.log(array_sum([1, 2, 3, 4, 5, 6]))

//Otra forma de sumar un arra d numer
function sumame(arr) {
  var suma = 0;
  for (var i=0; i < arr.length; i++) {
    suma += arr[i];
  }
  return suma;
}

// otra forma suma array

function sumame(my_array) {
  if (my_array.length === 0){
     return 0;
   }
  else if (my_array.length === 1){
   return my_array[0];
  }
   else {
     return my_array.pop() + sumame(my_array);
   }
 };
// otra forma de sumar un array , si no tiene da 0
function sumame(arr) {
  return arr.reduce(function(memo, i) {
    return memo + i;
  }, 0);
}



// programa q retorna tru dependiendo de 2 condiciones
// function isAlive(playerName, points) {
//   return (playerName === "ikk" && points > 30) || (playerName === "gut" && points > 10)
// }
//
// console.log isAlive("ikk",40) no estoy seguro q seasi


// si es multiplo d 3 retrnar fizz
// multiplo de 5  buzz
// si es multiplo d 3 y 5  fizzbuzz
// si nada entonc retorne el mismo numero

// function fizzBuzz(number) {
//   if ((number%3 === 0)  && (number%5 != 0)) {
//     return("fizz");
//   }
//   else if ((number%3 != 0)  && (number%5 === 0)) {
//     return("buzz");
//   }
//   else if ((number%3 === 0)  && (number%5 === 0)) {
//     return("fizzbuzz");
//   }
//   else {
//     return(number);
//   }
// }


// Javascript reto Ajustando Texto
// ajuste el texto de un cadena a una longitud
// recibe 2 argumentos , string y un numero  que ajusta
// si es menos, copiar la cantidad pedida
// si es igual escibir igual
// si es mas , rellenar con  espacios


//ejemplo con call de forma inmediata
// var person = {
//   name: "james smith",
//   hello: function(thing) {
//     console.log(this.name + "Says hello" + thing);
//   }
// }
// person.hello("(stuff)")
// person.hello.call({name: "Juan smey"}, "world"); //cambiarle el nombre


//bind  asignar varible
// person.hello("world");
// var helloFunc = person.hello.bind({name: "Jey emmm"});
// helloFunc("world");



//scope
// var name = "Richard";
// function showName(){
//   var name ="Jackie chan";
//   console.log(name);
// }
// console.log(name);   //muestra variable en scope global
// console.log(showName());  //variable en local ,recomendado

//hoisting
//javascript declara variables y desos corre sin orden
// var x = 1;
// console.log(x + " " + y);
// var y =2;

//
// nombreDelGato("Dumas");
// function nombreDelGato(nombre) {
// console.log("El nombre del gato es: " + nombre)
// }
