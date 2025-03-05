// factorial

// function fact(n){
//     if(n==1)return n
//     console.log(n)
//     return fact(n-1) * n
// }

// console.log(fact(5))

// sum of a digits

// function sumOfDigits(n,digit){
//     if(n==0)return digit
//     return sumOfDigits(Math.floor(n/10),n%10)+digit
// }

// console.log(sumOfDigits(1234,0));

// reverse a string 

// function reverseAString(str,i){
//     if(i==str.length)return ''
//     return  reverseAString(str,i+1)+str[i]
// }

// console.log(reverseAString("hello",0));


// palindrome 

function isPalindrome(str,i,j)
{
    if(i>=(str.length/2))return true
    if(str[i]!=str[j])return false;
    return isPalindrome(str,i+1,j-1)
}

console.log(isPalindrome('radar',0,4));
