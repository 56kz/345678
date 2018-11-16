// class Animal {
//   constructor(name) {
//     this._name = name;
//     this._behavior = 0;
//   }
//
//   get name() {
//     return this._name;
//   }
//
//   get behavior() {
//     return this._behavior;
//   }
//
//   incrementBehavior() {
//     this._behavior++;
//   }
// }
//
// class Cat {
//   constructor(name, usesLitter) {
//     this._name = name;
//     this._usesLitter = usesLitter;
//     this._behavior = 0;
//   }
//
//   get name() {
//     return this._name;
//   }
//
//   get behavior() {
//     return this._behavior;
//   }
//
//   get usesLitter() {
//     return this._usesLitter;
//   }
//
//   incrementBehavior() {
//     this._behavior++;
//   }
// };
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// class HospitalEmployee {
//   constructor(name){
//     this._name = name;
//     this._remainingVacationDays = 20;
//   }
//   get name(){
//    return this._name;
//   }
//   get remainingVacationDays(){
//     return this._remainingVacationDays;
//   }
//   takeVacationDays(daysOff){
//     return this._remainingVacationDays -= daysOff;
//   }
// };
//
// class Doctor {
//   constructor(){
//     this._name = name;
//     this._remainingVacationDays = 20;
//     this._insurance = insurance;
//   }
//   takeVacationDays(){
//
//   }
// }
// class Nurse {
//   constructor(){
//     this._name = name;
//     this._remainingVacationDays = 20;
//     this._certifications = certifications;
//   }
//    takeVacationDays(){
//
//   }
//   addCertification(){
//
//   }
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// class Animal {
//   constructor(name) {
//     this._name = name;
//     this._behavior = 0;
//   }
//   get name() {
//     return this._name;
//   }
//   get behavior() {
//     return this._behavior;
//   }
//   incrementBehavior() {
//     this._behavior++;
//   }
// };
//
// class Cat extends Animal {
//   constructor(name, usesLitter) {
//     super(name);
//     this._usesLitter = usesLitter;
//   }
// };
// const bryceCat = new Cat('Bryce', false);
// console.log(bryceCat._name); // output: Bryce
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// class HospitalEmployee {
//   constructor(name) {
//     this._name = name;
//     this._remainingVacationDays = 20;
//   }
//   get name() {
//     return this._name;
//   }
//   get remainingVacationDays() {
//     return this._remainingVacationDays;
//   }
//   takeVacationDays(daysOff) {
//     this._remainingVacationDays -= daysOff;
//   }
// }
//
// class Nurse extends HospitalEmployee {
//   constructor(name, certifications) {
//     super(name);
//     this._certifications = certifications;
//   }
// };
//
// const nurseOlynyk = new Nurse('Olynyk',['Trauma', 'Pediatrics']);
// console.log(nurseOlynyk);
// // Nurse {
// //   _name: 'Olynyk',
// //   _remainingVacationDays: 20,
// //   _certifications: [ 'Trauma', 'Pediatrics' ] }
//
// nurseOlynyk.takeVacationDays(5);
// console.log(nurseOlynyk.remainingVacationDays);
//














//
//
// class HospitalEmployee {
//   constructor(name) {
//     this._name = name;
//     this._remainingVacationDays = 20;
//   }
//   get name() {
//     return this._name;
//   }
//   get remainingVacationDays() {
//     return this._remainingVacationDays;
//   }
//   takeVacationDays(daysOff) {
//     this._remainingVacationDays -= daysOff;
//   }
//   static generatePassword() {
//     const random = Math.floor(Math.rand() * 10000) + 0;
//     return random;
//   }
// }
//
// class Nurse extends HospitalEmployee {
//   constructor(name, certifications) {
//     super(name);
//     this._certifications = certifications;
//   }
//   get certifications() {
//     return this._certifications;
//   }
//   addCertification(newCertification) {
//     this._certifications.push(newCertification);
//   }
// }
//
// const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
// nurseOlynyk.takeVacationDays(5);
// console.log(nurseOlynyk.remainingVacationDays);
// nurseOlynyk.addCertification('Genetics');
// console.log(nurseOlynyk.certifications);
//
// class Doctor extends HospitalEmployee {
//   constructor(name, insurance) {
//     super(name);
//     this._insurance = insurance;
//   }
// }
// DoctorOne  = new Doctor('Manuel Uribe', 'Sura');
// DoctorOne.takeVacationDays(12);
// console.log(DoctorOne.remainingVacationDays);
// console.log(DoctorOne._insurance);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// class Animal {
//   constructor(name) {
//     this._name = name;
//     this._behavior = 0;
//   }
//   get name() {
//     return this._name;
//   }
//   get behavior() {
//     return this._behavior;
//   }
//   incrementBehavior() {
//     this._behavior++;
//   }
//   static generateName() {
//     const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
//     const randomNumber = Math.floor(Math.random()*5);
//     return names[randomNumber];
//   }
// }
// console.log(Animal.generateName()); // returns a name
// const tyson = new Animal('Tyson');
// tyson.generateName(); // TypeError
//
// class Cat extends Animal {
//   constructor(name, usesLitter) {
//     super(name);
//     this._usesLitter = usesLitter;
//   }
//   get usesLitter() {
//     return this._usesLitter;
//   }
// }
//
// const bryceCat = new Cat('Bryce', false);
// console.log(bryceCat.name);
//
// bryceCat.incrementBehavior(); // Call .incrementBehavior() on Cat instance
// console.log(bryceCat.behavior); // Log value saved to behavior

















function Car() {
  this.velocity = 0;
}
Car.prototype.accelerate = function(amount) {
  this.velocity += amount || 1;
  return this;
}
Car.prototype.break = function(amount) {
  this.velocity -= amount || 1;
  return this;
}

function Bus() {
 Car.call(this);
}
 Bus.prototype.beep = function() {
   return "BEEP!"
 }

 var bus = new Bus();
console.log(bus.velocity); // => 0

bus.accelerate();
console.log(bus.velocity); // => 1

bus.accelerate(2);
console.log(bus.velocity); // => 3

bus.break();
console.log(bus.velocity); // => 2

bus.break(2);
console.log(bus.velocity); // => 0

console.log(bus.beep()); // => "BEEP!"
