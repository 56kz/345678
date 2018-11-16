alert ("Hola zorro")





// console.log("hola mundo from app.js");
// var name = prompt("Hey there, whats your name");
// console.log("El nuevo estado es 'pendiente'");
// alert("hola " + name);
// console.log(name);
// console.log("Hola " + "Zorro " + "Bien?");

//
// function hello(name){
//   console.log("Hola " + name);
// }
// hello("German");
//
// function hello2(name){
//   return "Hola " + name;
// }
//
// var g1 = hello2("Christian");
// console.log(g1);
// console.log(hello2("Christian"))
// Objetos en Javascript

// var personaLiteral = {
//   nombre: "Juan literal",
//   apellido: "Caro",
//   saluda: function () {
//     return "hola soy " + this.nombre;
//   }
// };
//
// console.log(personaLiteral.nombre)
// console.log(personaLiteral.saluda());



// var Persona = function(nombre, apellido) {
//   this.nombre = nombre;
//   this.apellido = apellido;
//   this.saluda = function(nombre2){
//    console.log("Hola " + nombre2 + "soy" + this.nombre);
//   }
// };
// p1 = new Persona("Pepito", "Perez");
// p1.saluda("Pedro");
//
// function printObject(obj) {
//   for (var key in obj){
//     console.log(key + ": " + obj[key]);
//   }
// }
// printObject(p1);
//
// console.log(p1.nombre);


// funcion constructora car propds
// permite acelerar  0.3%
// frenar 0.35% de sus cc
// funcion q recbiendo dos objeto tipo carro
// permita decir cual va mas rapido
// var Car = function(marca, modelo, cc) {
//   this.marca = marca;
//   this.modelo = modelo;
//   this.cc = cc;
//   // this.velocidad = velocidad;
//   this.info = function(velocidad) {
//     console.log("Vas en un " + marca + "del año " + modelo + "con" + cc + "cc, a una velocidad de " + velocidad);
//   }
//   this.acelerar = function(aceleration){
//     console.log("Aumentaste tu velocidad" + aceleration +"km, tu vel actual es " + velocidad)
//   }
// }
//
// m1 = new Car("Mercedez", 1964, 1800, 100);
// m1.info(50);
// m1.acelerar(5)


// objetos    funcion age, funcion growup
// var Persona = function(nombre, apellido, edad) {
//   this.nombre = nombre;
//   this.apellido = apellido;
//   this.edad = edad;
//
// };
//
//
// Persona.prototype.saluda = function() {
//   return "hola " + this.nombre +" tienes " + (this.edad + 2)+ " años" ;
// };
//
//
// var pedro = new Persona("Pedro", "Perez", 20);
// console.log(pedro.saluda())
//
//
// //Object.
//
//
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
// console.log(a1.findNumber("jdhd"));
