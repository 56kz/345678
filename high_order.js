// const announceThatIAmDoingImportantWork = () => {
//     console.log("I’m doing very important work!");
// };
// const busy = announceThatIAmDoingImportantWork;
// busy(); // This function call barely takes any space!
//
//
//
//
//
//
//
//
// const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
//   for(let i = 1; i <= 1000000; i++) {
//     if ( (2 + 2) != 4) {
//       console.log('Something has gone very wrong :( ');
//     }
//   }
// }
// const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
// is2p2();
// console.log(is2p2.name);//Eesta dnado el nombre dela funcion d primer orden q la creo
//
//





const timeFuncRuntime = funcParameter => {
   let t1 = Date.now();
   funcParameter();
   let t2 = Date.now();
   return t2 - t1;
}
const addOneToOne = () => 1 + 1;
console.log(timeFuncRuntime(addOneToOne));








timeFuncRuntime(() => {
  for (let i = 10; i>0; i--){
    console.log(i);
  }
});
 // Anonymous functions can be arguments too!











const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};
const addTwo = num => num + 2;
const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};
const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);
const checkConsistentOutput = (func, val) => {
    let firstTry = func(val);
    let secondTry = func(val);
    if (firstTry === secondTry) {
        return firstTry
    } else {
        return 'This function returned inconsistent results'
    }
};
checkConsistentOutput(addTwo, 10);
