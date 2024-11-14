function pow(x, y) {           

if (x === 0 && y === 0) {
  return;
}

if (y === 0)
{
  return 1;
}

let result = 1;
let positiveY = Math.abs(y);

    for (let i = 1; i <= positiveY; i++) {            
      result *= x;                          
    }
                             
  if (y < 0) {
    return 1 / result;
  }

  return result;
}


  console.log(pow(2, 3));                     // выводим в консоль результаты
  console.log(pow(5, -2));  
  console.log(pow(7, 0));  
  console.log(pow(0, 0));  
  console.log(pow(2, -3));
  console.log(pow(10, -1));  
    