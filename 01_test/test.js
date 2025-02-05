const randomcolor= function(){
    const hex = '0123456789abcdef'
    const color ='#'
    let newColor = color;
    [...Array(6)].forEach(()=>{
      newColor+= hex[Math.floor(Math.random()*16)]
    })
    return newColor
  };
  //console.log(randomcolor());
  
