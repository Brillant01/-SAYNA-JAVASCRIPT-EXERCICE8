function removeCapitals(mych) {
            
    let rem = mych.match(/[a-z]/g)
    console.log(rem);

}

console.log(removeCapitals("fOrEver")) ; // 'frver'.
console.log(removeCapitals("raiNCoat")) ; // "raioat"
console.log(removeCapitals("clr Door")) ; // "clr oor