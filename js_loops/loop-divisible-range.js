function divisibleRange(min, max, num){
    for (let i = min ; i < max ; i++) {
    if (i % num == 0) {
    console.log(i);
    }
    }
}
console.log(divisibleRange(17, 40, 9));
console.log(divisibleRange(10, 24, 4));