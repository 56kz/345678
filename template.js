// Mi solucion
function template(string, object){
  const capture = string.match(/\[(.*?)\]/gi);
  if (capture === null) {
    return string;
  } else {
    for (var i = 0; i < capture.length; i++) {
     const finalword = capture[i].slice(1,-1);
      if (object.hasOwnProperty(finalword) === false) {
        string = string.replace(capture[i], "undefined")
      } else {
         for(var key in object){
           if (key === finalword) {
            string = string.replace(capture[i], object[key]);
          }
         }
       }
    }
   return string;
  }
}
function template(str, data) {
  var regexp = /\[(.*?)\]/g;
  var vars = [];

  // obtenemos las variables del texto
  var matches = regexp.exec(str);
  while (matches) {
    vars.push(matches[1]);
    matches = regexp.exec(str);
  }

  // reemplazamos las variables con los valores que vienen en el objeto
  for (var i=0; i < vars.length; i++) {
    str = str.replace("[" + vars[i] + "]", data[vars[i]]);
  }

  return str;
}







// solcuion makeit
function template(str, data) {
  var regexp = /\[(.*?)\]/g;
  var vars = [];

  // obtenemos las variables del texto
  var matches = regexp.exec(str);
  while (matches) {
    vars.push(matches[1]);
    matches = regexp.exec(str);
  }

  // reemplazamos las variables con los valores que vienen en el objeto
  for (var i=0; i < vars.length; i++) {
    str = str.replace("[" + vars[i] + "]", data[vars[i]]);
  }

  return str;
}
// El primer while se puede reemplazar por un for:
//
//   // obtenemos las variables del texto
//   for (var m = regexp.exec(str); m; m = regexp.exec(str)) {
//     vars.push(m[1]);
//   }
// La idea del algoritmo es buscar todas las variables dentro del texto y almacenarlas en un arreglo que llamamos vars. Después iteramos sobre las variables y las reemplazamos en el texto con la llave correspondiente en el objeto data.
//
// Discutamos la expresión regular /\[(.*?)\]/g.
// El \[ va a intentar hacer coincidir el caracter [. Utilizamos \ antes (lo escapamos) porque [ significa algo para las expresiones regulares.
// El .*? va a intentar coincidir cualquier cosa (el . es cualquier caracter y el * es cero o más repeticiones). El ? hace que * sea no codicioso (non-greedy), es decir, que coincida el menor número de caracteres posible.
// Los paréntesis que envuelven .*? se utilizan para capturar el texto (este es el nombre de la variable)
// El \] va a intentar hacer coincidir el caracter ]. Utilizamos \ antes (lo escapamos) porque ] significa algo para las expresiones regulares.
// La g al final se utiliza para que haga una búsqueda global, no solo el primero.
// Para obtener el nombre de las variables utilizamos la función Regexp.exec que nos retorna un arreglo que contiene el texto que coincide en la primera posición y los textos capturados en las siguientes posiciones.
//
// Aceptamos que este ejemplo de expresiones regulares es más avanzado, pero lo resolvimos con el primer resultado de esta búsqueda: "regular expression match inside brackets javascript". Es importante conocer los conceptos, pero de ahí en adelante Internet es nuestra fuente de información.













// Otra solucion valida
// function template(str, obj) {
//     if (str){
//     arrstr = str.split(" ");
//     newstr = "";
//     arrstr.forEach ( function(valor) {
//         newstr = newstr + valor.replace(/\[.*?\]/g, obj[valor.match(/(?<=\[)(.*?)(?=\])/g)]);
//         newstr = newstr + " ";
//     });
//
//     return newstr;
// } else { return ""};
// };












// otra solucion valida
// function template(str, obj){
//    if(str.includes("[nombre]") && str.includes("[saldo]")){
//      str1 = str.replace("[nombre]", obj.nombre);
//      str2 = str1.replace("[saldo]", obj.saldo);
//      return str2;
//    } else if(str.includes("[nombre]")){
//      str2 = str.replace("[nombre]", obj.nombre);
//      return str2
//    } else if(str.includes("[saldo]")){
//      str2 = str.replace("[saldo]", obj.saldo);
//      return str2
//   } else {
//     return str
//   }
// }


















// otra solucion valida
// function template(cadena,objeto){
// var regex = /[(.*?)]/g;
// while(match = regex.exec(cadena)) {
// var x=match[0].replace('[','').replace(']','');
// cadena = cadena.replace(match[0], objeto[x])
// regex.lastIndex = 0;
// }
// return cadena;
// }










// Mis intentos



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
// const object = {
//   name: "German",
//   age: 23
// };
// const string = "Hola [name], tienes [age], y envianme un snapchat de esos, estoy camino a, bajarte, el queso";
// let capture = string.match(/\[(.*?)\]/gi);
// console.log(capture);
// iterar string hasta enocntrar []



// function compose(string, object){
//   const newString = string.split(/[" "|"."|","]/); //divide el string entre .y espacio, y los pasa a un array de varias strings
//   // console.log(newString);
//   const result = []; // crea un array vacio para ir agregando los resultados de la iteracion
//   newString.forEach(word => { //iterar cada una de las palabras del array
//     if (word.match(/\[(.*?)\]/gi)) { // si encuentra palabras entre [] haga lo siguiente:
//       const finalword = word.slice(1, -1);// encuentra la palabra dentro del [],
//       // console.log(finalword);
//       // iterar el objeto y encontrar coincidencias entre la palabra encontrada
//       for(var key in object){ //iterar objeto
//         if(key === finalword){ //si la palabra q se filtro finalword, es igual a la llave del objeto,
//           result.push(object[key]);  // entoncs guardar en el arreglo el value del key identificado
//         }
//       }
//
//     } else if (word.length === 0){
//       // si encunetra un espacio vacio peguele una coma
//       result.push(",");
//     } else {
//       // si no encunetra nada de eso simplemeente pasele la palabra original
//       result.push(word);
//     };
//   });
//
//   const finalString = result.join(" ");
//   // console.log(finalString);
// };/

// compose(string, object);





















// intento 8 o algo asi!
// const object = {
//   name: "German",
//   age: 23
// };
// const string = "Hola [name], tienes [age], y envianme un snapchat de esos, estoy camino a, bajarte, el queso";
// // const capture = string.match(/\[(.*?)\]/gi);
// // console.log(capture);
//
//
//
// //iterar sobre el string hasta encontrar [], de ahiencontrar el indice  de ese elemento,
// function template(string, object){
//   const capture = string.match(/\[(.*?)\]/gi);
//   console.log(capture);
//   const index = capture.indexOf();
//   console.log(index)
// }
//
// template(string, object);












// var str = "this is a \"quoted\" string as you can 'read'";
//
// var patt = /'((?:\\.|[^'])*)'|"((?:\\.|[^"])*)"/igm;
//
// while (match = patt.exec(str)) {
//   console.log(match.index + ' ' + patt.lastIndex);
// }


// var string = "Hola [name], tu saldo es [cash], y tu cucha es [mom]";
// var object = {
//   name: "Zorro",
//   cash: 23500,
//   sirens: "sirens",
//   mom: "Diana"
// }

// function template(string, object){
//   const capture = string.match(/\[(.*?)\]/gi); // el array con todos los match []
//   // console.log(capture);
//   if (capture === null || object === {} ) { // si no hay nada entre [] en el string, imprima el string
//     console.log(string)
//   } else {
//     for (var i = 0; i < capture.length; i++) { // Itera el array con los objectos en maych []
//      // console.log(capture[i]);
//      const finalword = capture[i].slice(1,-1); // la palabra exacta dentro de []
//      // console.log(finalword);
//      for(var key in object){ // itera el objeto
//        if (key === finalword) { // si el string tiene la llave dentro entonces modifique
//         string = string.replace(capture[i], object[key]);
//       }
//      }
//     }
//    console.log(string)
//   }
// }
//
//
// template(string, object);
// template("Hola [nombre]", { nombre: "German" }); // => "Hola German"
// template("Hola [nombre], tu saldo es [saldo]", { nombre: "German", saldo: 12000 }); // => "Hola German, tu saldo es 12000"
// template("Hola mundo", {}) // => "Hola mundo"


















// esta funcionando a excepcion del undefined
// function template(string, object){
//   const capture = string.match(/\[(.*?)\]/gi);
//   console.log(capture); //es el array con los resultados
//
//   for (var i = 0; i < capture.length; i++) { //Iterando sobre el array de matches
//     const finalword = capture[i].slice(1, -1) // para poder comparar con el objeto
//     for(var key in object){  //itera el objeto
//       if (finalword === key) { // si la palabra match con el key enTonces reemplace
//         string = string.replace(capture[i], object[key]);
//       }
//     }
//   }
//   console.log(string)
// }

















//iterando prmero el capture y dsps el object
// function template(string, object){
//   const capture = string.match(/\[(.*?)\]/gi);
//   console.log(capture); //es el array con los resultados
//
//   for (var i = 0; i < capture.length; i++) { //Iterando sobre el array de matches
//     const finalword = capture[i].slice(1, -1) // para poder comparar con el objeto
//       for(var key in object){  //itera el objeto
//         if (finalword === key) { // si la palabra match con el key enTonces reemplace
//           string = string.replace(capture[i], object[key]);
//         }
//
//       }
//   }
//
//   console.log(string)
// }
//
// template(string, object);









// function template(string, object){
//   const result = string;
//   const capture = string.match(/\[(.*?)\]/gi);
//   console.log(capture); //es el array con los resultados
//   // const string = string;
//   for (var i = 0; i < capture.length; i++) { //Iterando sobre el array de matches
//
//     string = string.replace(capture[i], "nombre") // reemplaza el strign
//   }
//   console.log(string)
// }
//
// template(string, object);
