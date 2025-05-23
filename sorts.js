let arr = [4,5,7,3,2,4,5,8,9]


// bubble sort 
// for(let i=0 ; i< arr.length ; i++){
//     for(let j=i;j<arr.length ;j++){
//         if(arr[i]>arr[j]){
//             [arr[i],arr[j]]=[arr[j],arr[i]]
//         }
//     }
// }

// insertion sort 

// for(let i=1;i<arr.length;i++){
//     let j=i
//     while(arr[j]<arr[j-1]){
//         [arr[j],arr[j-1]]=[arr[j-1],arr[j]]
//         j--
//     }
// }

// selection sort 

// for(let i=0;i<arr.length;i++){
//     let min=i
//     for(let j=i;j<arr.length;j++){
//         if(arr[min]>arr[j]){
//             min=j
//         }
//     }
//     [arr[min],arr[i]]=[arr[i],arr[min]]
// }


// function quick(arr){
//     if(arr.length<=1){
//         return arr
//     }
//     let pivot = arr[0]
//     let left = []
//     let right = []
//     for(let i=1;i<arr.length;i++){
//         if(arr[i]>pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quick(left),pivot,...quick(right)]

// }
// const res=quick(arr)

// function merge(arr){
//     if(arr.length<=1){
//         return arr
//     }
//     let mid=Math.floor(arr.length/2)
//     let left= arr.slice(0,mid)
//     let right =arr.slice(mid)
//     return mergeSort(merge(left),merge(right))
// }

// function mergeSort(left,right){
//     let sort=[]
//     while(left.length && right.length){
//         if(left[0]<right[0]){
//             sort.push(right.shift())
//         }else{
//             sort.push(left.shift())
//         }
//     }
//     return[...sort,...left,...right]
// }

// const res=merge(arr)
// console.log(res);
