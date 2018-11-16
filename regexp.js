
  // let string = "mat";
  // let flags = "i";
  //
  // let reConstructor = new RegExp(string, flags);
  // console.log(reConstructor.test(/[a-z]/));
  // console.log(/^[A-Z]/.test("m"))
  // console.log(/^[0-9]/.test("1"))





//Funcion que encunetra si es una placa el string
  let string = "MVV389";
  function isPlate(string){
    if (string.length != 6) {
      return false;
    } else if ( (/^[A-Z]/.test(string[0])) && (/^[A-Z]/.test(string[1])) && (/^[A-Z]/.test(string[2])) && (/^[0-9]/.test(string[3])) && (/^[0-9]/.test(string[4])) && (/^[0-9]/.test(string[5])) ) {
      return true;
    } else {
      return false;
    }
  }

  console.log(isPlate(string))
  // EN otra SIntaxis
  function isPlate(str) {
  return /[A-Z]{3}\d{3}/.test(str);
  }
