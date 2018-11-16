const monsterFactory = (name, age, energySource, catchPhrase) => {
  return {
    name: name,
    age: age,
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    } 
  }
};














const robotFactory = (model, mobile) => {
 return{
  model: model,
  mobile: mobile,
  beep() {
    console.log('Beep Boop');
  }
 }
}
//En otra sintacis
function robotFactory(model, mobile){
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

const tinCan = robotFactory('P-500', true);
tinCan.beep();
