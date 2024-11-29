const array = ['hello Jo', 'fish', 'birmingham', 'periodic table', 'phone'];

function checkStringLengths(arr) {
  
  const moreThanSix = arr.filter(item => item.length > 6);
  

  return moreThanSix.every(item => item.length < 10);
}


console.log(checkStringLengths(array)); 
