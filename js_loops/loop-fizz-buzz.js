function fizzBuzz(max) {
    for (let i = 1 ; i < max + 1; i++) {
       if (i % 3 == 0 || i % 5 == 0) {
           console.log(i);
       }
    } 
}
 
console.log(fizzBuzz(18));
console.log(fizzBuzz(33));