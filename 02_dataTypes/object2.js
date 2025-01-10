
const tinderUser={
    
}
tinderUser.id = "123abc";
tinderUser.name= "Arpit";
tinderUser.isLoggedin=false;
const regularUser={
    email:"some@123gmail.com",
    fullName:{
        userFullName:{
            FirstName: "Arpit",
            LastName: "Bhadoria"
        }
    }
}
const obj1 ={1:"a",2:"b"};
const obj2 ={3:"a",4:"b"};
const obj3 ={5:"a",6:"b"};

//const obj4 ={obj1,obj2}
//const obj4= Object.assign({},obj1,obj2,obj3)

const obj4={...obj1,...obj2,...obj3}
//console.log(obj4);
//users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isloggedin"));



