const promiseOne = new Promise(function(resolve,reject){
    //
   setTimeout(function(){
    console.log("Async task completed");
   resolve()
   },1000)
   
    
});
promiseOne.then(function(){
    console.log('promise consumed');
    
})
 new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('task2 async');
        resolve()
    },1000)
 }).then(function(){
    console.log('task2 resolved');
    
})
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
       
    resolve({username:'arpit'})
    },1000)
    
})
promiseThree.then(function(user){
console.log(user);

})
const promiseFour = new Promise(function(resolve,reject){
   setTimeout(function(){
    let error= true;
    if(!error){
        resolve({username:'arpit'})
    }
    else {
        reject('error:something went wrong')
    }
   },1000)
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
    
}).catch((error)=>{
    console.log(error);
    
}).finally(()=>{
    console.log('failed')
})
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
     let error= true;
     if(!error){
         resolve({username:'arpit'})
     }
     else {
         reject('error:something went wrong')
     }
    },1000)
 })
 async function consumePromiseFive() {
    try{
   const response = await promiseFive
   console.log(response)
    }
   catch(error){
    console.log(error);
    
   }
 }
 consumePromiseFive()
 async function getAllUsers() {
    try{
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = response.json()
    console.log(data);}
    catch(error){
        console.log('E:error');
        
    }
    
 }
 getAllUsers()