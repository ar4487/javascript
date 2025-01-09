//Object literals 
const mysym= Symbol("key1");
const user ={
    name:"Arpit",
    "Full Name":"Arpit",
    [mysym]: "myKey1",
    age: 23,
    email:"arbhadoria@gmail.com",
    location: "ghaziabad",
    isLoggedin: false,
    lastLogedInDay:["monday","saturday"]
}
console.log(user.age);
console.log(user["email"]);
console.log(user["Full Name"]);
console.log(typeof user[mysym])
//change value 
user.email= "arpit@gmail.com";
console.log(user);
//frezze object
//Object.freeze(user);
user.name="arpit";
console.log(user);

user.greeting = function(){
    console.log("Hello JS user");

    
}
user.greeting2 = function(){
    console.log(`Hello JS user ${this.name}`);
    
    
}
console.log(user.greeting());
console.log(user.greeting2());



