

/*function reverse(str){
    if(!str || typeof str != 'string' || str.length < 2 ) return str;
    
    const backwards = [];
    const totalItems = str.length - 1;
    for(let i = totalItems; i >= 0; i--){
      backwards.push(str[i]);
    }
    console.log(backwards);
    return backwards.join('');
  }
  

  console.log(reverse('Hi my name is Jassmin'));*/

  function mixedNumbers(arr) {
    // Only change code below this line
  arr.unshift('I', 2, 'three');//begging of array
  arr.push(7, 'VIII', 9); //push at the end of array 
  // Only change code above this line
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));
