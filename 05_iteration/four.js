// const myObject ={
//     js: 'Javascript',
//     cpp: 'c++',
//     rb: "ruby",
//     swift:"Swift by apple"

// }
// for (const key in myObject) {
//    //console.log(`${key} is shortcut for ${myObject[key]}`);
   
// }
const programming = ['js','cpp','rb','swift'];
for (const key in programming) {
    //console.log(programming[key]);
}

//Maps
const map = new Map()
map.set('In','India');
map.set('Aus','Australia');
map.set('Fr','France');
for (const key in map) {
    console.log(key);
    
}