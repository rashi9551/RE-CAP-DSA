// factorial

// function fact(n){
//     if(n==1)return n
//     console.log(n)
//     return fact(n-1) * n
// }

// console.log(fact(5))

// sum of a digits

function sumOfDigits(n,digit){
    if(n==0)return digit
    return sumOfDigits(Math.floor(n/10),n%10)+digit
}

console.log(sumOfDigits(1234,0));
