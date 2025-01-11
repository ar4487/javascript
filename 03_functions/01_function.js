function user(){
    console.log('a');
    console.log('r');
    console.log('p');
    console.log('i');
    console.log('t');
    
}
//user();
function addTwoNumers(Number1,Number2){
    console.log(Number1+Number2);
     
}
//addTwoNumers(3,4);
function useLoggedIn(userName){
    if(!userName){
        console.log("please enter a name");
        return
    }
    return`${userName} just logged in!`
}
//console.log(useLoggedIn());

function calcValueCart(val1,val2,...num1){
    return num1;
}
//console.log(calcValueCart(2,3,4,5));

const obj ={
    username: "Arpit",
    price: 199
}

function objectHandler(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
objectHandler({
    username:"A",
    price:199
});
const newArr=[1000,200,300,400,1000]

function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(newArr));

