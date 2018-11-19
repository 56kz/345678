let Menu = {}; // creates the object that represents the module Menu
Menu.specialty = "Roasted Beet Burger with Mint Sauce"; // We add data to the Menu object by setting properties on that object and giving the properties a value
// "Roasted Beet Burger with Mint Sauce"; is the value stored in the Menu.specialty property
module.exports = Menu; //exports the Menu object as a module. module is a variable that represents the module, and exports exposes the module as an object.
// la primera se crea en un archivo menu.js, y la de abajo en otra

const Menu = require('./menu.js');
function placeOrder() {
  console.log('My order is: ' + Menu.specialty);
}
placeOrder();
