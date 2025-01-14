// for of

["","",""]//string allocated in array

[{},{},{}]// object allocated in array

const arr =[1,2,3,4,5];
for (const num of arr) {
  //  console.log(num);
}
const greetings ="Hello world";
for (const greet of greetings) {
   // console.log(greet);
    
}

//Map
const map = new Map()
map.set('In','India');
map.set('Aus','Australia');
map.set('Fr','France');
//console.log(map);
for (const [key,value] of map) {
    console.log(key,value);
    
}
