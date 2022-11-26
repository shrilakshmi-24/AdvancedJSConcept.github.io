// function sum(name,...args){
//     let sum=0;
//     for(i in args)
//         sum+=args[i];
//     console.log(name,sum);
    
// }
var arr1=[12,23,34];
var arr2=[...arr1];

arr1.push(45);
console.log(arr2);
console.log(arr1);
console.log([...arr1,...arr2]);//concat
