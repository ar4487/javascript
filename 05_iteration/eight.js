const number = [1, 2, 3] 

// const myTotal = number.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc+currval;
// },0)
// console.log(myTotal);

// const myTotal = number.reduce((acc,currval)=> acc+currval)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const bill = shoppingCart.reduce((acc,currval)=> acc + currval.price,0)
console.log(bill);
