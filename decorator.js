let sum=(...arg)=>{
    return [...arg].reduce((acc,num)=>acc+num);

}
const callcounter=(fn)=>{
    let count=0;
    
    return (...arg)=>{
        console.log("sum is called" ,count+=1,"times");
        return fn(...arg);
}
}
sum=callcounter(sum);
console.log(sum(2,3,4));
console.log(sum(1,2));
