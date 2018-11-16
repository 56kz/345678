// //clousure encapsulamiento de funciones
//
// var apellido="firefox";
// function clousure() {
//   var nombre = "Mozilla";
//
//   function muestraNombre() {
//     console.log(nombre + " " + apellido);
//   }
//   muestraNombre();
// }
// clousure();

//
// var numbers = [1, 5, 10, 15];
// var doubles = numbers.map(function (x) {
//   return x * 2;
// });
//
// console.log(numbers);
// console.log(doubles);
//
//  //
//
//
//  var words = ["spray", "limit","elite", "exuberant"];
//  var result = words.filter(word => word.length > 6);
// console.log(result)
//
//
// //sumatoria de array
// var array1 = ["a", "b", "c"];
// array1.forEach(function (element) {
//   console.log(element);
// });
//
//
//
// var euros = [30, 30, 30];
// var sum = euros.reduce((total, amount) => total + (amount*3));
// console.log(sum);
// //
// var posts = [
//   { id: 1, upVotes: 2};
//   { id: 2, upVotes: 89};
//   { id: 3, upVotes: 1}
// ]
//
//
// var totalUpvotes = posts.reduce((totalUpvotes, currentPost) => {
//  totalUpvotes + currentPost.upVotes;
// });

//Encontrar el id numero 2 y retornrlo
// var posts = [
//   {id: 1, title: "Titulo 1"},
//   {id: 2, title: "Titulo 2"},
//   {id: 3, title: "Titulo 3"}
// ]
//
// var postInQuestion = posts.find(p => p.id === 2); //sobr eel post encuentre el id 2 y retorne 1ra coincidencia
//
// console.log(postInQuestion.title);

//objeto literal agenda, escriba un fucnion para consultar telefono por el nombre

//Incompletaa



//funcion constructora(classes) atributos que tenga
// numbers(array)
// addNumber(funcion) : permite agregar contactos a numbers
// findNumber(funcoin) :buscar contact a partir del numbers
//
// function Agenda(){
// this.directory = [];
// this.addNumber = function(contact){
//        this.directory.push(contact);
//      };
// this.findNumber = function(name){
//   return this.directory.find(function(contact){
//      return contact.name === name;
//   });
// } ;
// }
//
// a1 = new Agenda();
// a1.addNumber({name: "juan", number: "3459"});
// a1.addNumber({name: "Eriberto", number: "4566"});
//
// console.log(a1.findNumber("juan"));
// console.log(a1.findNumber("jdhd"));


//funcion constructora e comercio  con
// productos ,    id, nomr, precio, categor, cantidad
// funcion q retorne productos de una categoria particulas Ufilter
// funcion q retorne valor total del inventario(reduce)

//
//
// function ECommerce(){
//   this.products = [];
//   this.addProduct = function(product) {
//     this.products.push(product);
//   };
//   this.showCategorie = function(category) {
//    return this.products.filter(function(product){
//     return product.category === category;
//   });
//  };
//   this.inventaryTotal = function(product) {
//     return this.products.reduce(function(price, quantity){
//       return product.price * product.quantity
//     });
//   }
// }
//
//
//
// a1 = new ECommerce();
// a1.addProduct({id: 1, name: "Peinilla", price: "3400", category: "aseo", quantity: "10"});
// a1.addProduct({id: 2, name: "Celular", price: "34000", category: "tecnologa", quantity: "3"});
// a1.addProduct({id: 3, name: "Peinilla", price: "3400", category: "aseo", quantity: "10"});
//
//
// console.log(a1.showCategorie("aseo"));
//



// Concatenar dos arrays, osea juntarlas
// var array1 = [1, 2, 3];
// var array2 = [4, 5, "six"];
// var result = array1.concat(array2);
//
// console.log(result)



//Carro q pueda acelerar , frenar, medir velocidades de dos carros, y otr aclase bus que herede de carroo todo y agregue la capacidad
var Carro = function (marca, modelo, cc) {
  this.marca = marca;
  this.modelo = modelo;
  this.cc = cc;
  this.velocidad = 0;
  this.acelerar = function() {
    this.velocidad += this.cc * 0.003;
  };
  this.frenar = function() {
    this.velocidad -= this.cc * 0035;
  };
};

function speedDifference(c1, c2) {
  if (c1.velocidad > c2.velocidad) {
    return "El " + c1.marca + " modelo " + c1.modelo
  } else {
    return "El " + c2.marca + " modelo " + c2.modelo
  };
};


c1 = new Carro("Renault", 2015, 1500);
c1.acelerar();
c1.acelerar();
c1.frenar();

c2 = new Carro("Chevrolet", 2017, 1600);
c2.acelerar();
c2.acelerar();
c2.frenar();

console.log(c1.velocidad);
console.log(c2.velocidad);

console.log(speedDifference(c1, c2));

Carro.prototype.temperatura = function() {
  var rand = Math.floor(Math.random()*100) + 1;
  return "La temperatura del motor es " + rand +" °C"
};

Carro.prototype.aceite = "full"
console.log(c1.temperatura());
console.log(c2.temperatura());
console.log(c2.aceite);



var Bus = function(marca, modelo, cc, capacidad) {
  Carro.call(this, marca, modelo, cc);
  this.capacidad = capacidad;
};

Bus.prototype = new Carro();
b1 = new Bus("Chevrolet", 2018, 3000, 200);
console.log(b1.modelo, b1.cc)
