const add2=(x)=>x+2;
const subtract=(x)=>x-1;
const mul=(x)=>x*5;

const res=mul(subtract(add2(4)));
console.log(res);


const compose=(...fns)=>val=>fns.reduceRight((prev,fn)=>fn(prev),val);

const compResult=compose(mul,subtract,add2)(4);
console.log(compResult);

const pipe=(...fns)=>(val)=>fns.reduce((prev,fn)=>fn(prev),val);


const piperes=pipe(
    add2,
    subtract,
    mul)(6);
console.log(piperes);

