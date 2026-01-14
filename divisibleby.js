function divisibleBy(x,divisor){
    return x.filter(num => num % divisor === 0);
}
console.log(divisibleBy([1,2,3,4,5,6], 2))