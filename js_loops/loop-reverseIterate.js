function reverseIterate(mych){

    for (let i = mych.length; i >= 0; i -= 1) {
     console.log(mych[i])
    }
}
console.log(reverseIterate("carrot"));
console.log(reverseIterate("box"));