// count the digits 

// let n=7789
// while(n>0.99999){
//     lastDigit=n%10
//     n=n/10
//     console.log(Math.floor(lastDigit))
// }


// reverse the digits 

// let n=123
// let reverse=0
// while (n!=0)
// {
//     let digit=n%10
//     reverse=reverse*10+Math.floor(digit)
//     n=Math.floor(n/10)
// }
// console.log(reverse)

// Amstrong number 

// let x =1634
// let num=x
// let sum=0
// let digits = x.toString().length;
// while(x>0){
//     let digit=x%10
//     sum += Math.pow(digit, digits);
//     x=Math.floor(x/10)
// }
// if(num===sum)console.log("its amstrong number");
// else console.log("isn't amstrong number");
// console.log(sum,num)

// find all divisible 

// let x=36

// let arr=[]
// for(i=1;i<=36;i++){
//     if(36%i===0){
//         arr.push(i)
//     }
// }
// console.log(arr);

// prime number 

// for(let i=2;i<20;i++){
//     let isPrime=true
//     for(let j=2;j<=Math.sqrt(i);j++){
//         if(i%j===0){
//             isPrime=false
//             break
//         }
//     }
//     if(isPrime){
//         console.log(i)
//     }
// }

// remove duplicates  
let arr =[2,2,1,1,3,4,3,3,2,5,6,7,70,8,9]
// let array=new Set(arr).keys()
// console.log(array);

// one element left rotate 


// let temp=arr[0]
// for(let i=1 ;i<arr.length;i++){
//     arr[i-1]=arr[i]
// }
// arr[arr.length-1]=temp
// console.log(arr);
var i =0

const interval=setInterval(()=>{
    console.log(i)
    i++
},1000)
setTimeout(()=>{
    clearInterval(interval)
},10000)