let x=1;
const increment=()=>x+=1;
console.log(increment());
console.log(x);
    
const arr=[1,2,3,4];
const add=(array,data)=>{
    array.push(data);
    return array;
}
console.log(add(arr,4));
console.log(arr);


//purefunction

const pureinc=(num)=>num+=1;
console.log(pureinc(x));
console.log(x);

//2
const pureaddarr=(array,data)=>[...array,data];
console.log(pureaddarr(arr,5));
console.log(arr);


const onefive=[1,2,3,4,5];
const odd=onefive.filter(elem=>elem%2!=0);
console.log(odd);

const double=onefive.map(elem=>elem*2);
console.log(double);


const summ=onefive.reduce((acc,elem)=>acc+elem);
console.log(summ);


