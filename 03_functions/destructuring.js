// let arr = ["Arpit","Bhadoria"]

// let[FirstName,surname]=arr;
// console.log(FirstName);
// console.log(surname);

// let options ={
//     title:"Menu",
//     width: 200,
//     height:100
// }
// let{title,width,height}=options;
// console.log(title);
// console.log(width);
// console.log(height);

let options = {
    size: {
      width: 100,
      height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
  };
  let{
    size:{
        width,height
    },
        items:[item1,item2],
        title ="Menu"
    }
  =options;
  console.log(width, height, item1, item2, title);
  

