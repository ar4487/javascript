const user={
 username: "Arpit",
 price:199,
 WelcomeMessage: function(){
    console.log(`${this.username} Welcome to the Website`);    
    console.log(this);
}
 
}
// user.WelcomeMessage();
// user.username ="Ayush";
// user.WelcomeMessage();

// function chai(){
//     let username = "Arpit";
//     console.log(this.username);
//     console.log(this);
    
    
// }
// const chai= function(){
//     let username = "Arpit";
//     //console.log(this.username);
//     console.log(typeof this);
    
    
// }
// chai()
// const chai1 =()=>{
//     let username= "arpit";
//     // console.log((this.usernam));
//     console.log(typeof this);
    
// }
// chai1()

// const add = (a,b)=>{
// return a+b;
// } 
const add = (a,b) => a+b

console.log(add(3,4));