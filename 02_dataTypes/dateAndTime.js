let now = new Date();
console.log(now);
console.log(now.toString());
console.log(now.toDateString());
console.log(now.toISOString());
console.log(now.toJSON());
console.log(now.toLocaleDateString());
console.log(now.toLocaleString());

let myCreatedDate = new Date(2024,0,17);
let myCreatedDateWithTime = new Date(2024,1,17,5,3);
let myCreatedDateWithFormat = new Date("2024-01-17");
console.log(myCreatedDate.toDateString());
console.log(myCreatedDateWithTime.toLocaleString());
console.log(myCreatedDateWithFormat.toLocaleString());

let timeStamp = Date.now();
console.log(timeStamp);
console.log(myCreatedDateWithFormat.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getMonth()+1);
function weekDay(date){
    let days = ['SU','MO','TU','WE','TH','FR','SA'];
    return days[date.getDay()];

}

//let date = new Date(2014, 0, 3); // 3 Jan 2014
//console.log( weekDay(date) ); // FR

function getLocalDay(date){
    let days = date.getDay();
    if(days==0){
        days =7;
    }
}
let date = new Date(2012, 0, 3);  // 3 Jan 2012
console.log( getLocalDay(date));
