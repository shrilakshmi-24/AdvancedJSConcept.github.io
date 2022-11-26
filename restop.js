function sum(name,...args){
    let sum=0;
    for(i in args)
        sum+=args[i];
    console.log(name,sum);
    
}
sum("sum is",12,23,34);
