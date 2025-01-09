const marvel_heros =['thor','ironman','hulk'];
const dc_heros =['superman','batman','falsh'];
//marvel_heros.push(dc_heros);
//console.log(marvel_heros);
//const all_heros = marvel_heros.concat(dc_heros);
//console.log("B",all_heros);
const all_heros =[...marvel_heros,...dc_heros];
//console.log(all_heros);

const another_array =[1,2,3,4,[5,6,7],[8,9]];
const new_arr = another_array.flat(Infinity);
//console.log(new_arr);
//console.log(Array.isArray("Arpit"));
//console.log(Array.from("Arpit"));
console.log(Array.from({name: "Arpit"}));

let score_1 = 200;
let score_2 = 300;
let score_3 = 400;

//console.log(Array.of(score_1,score_2,score_3));
//console.log(Array.from('score_1','score_2','score_3'));



