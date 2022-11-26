//using bind
let multiply=function (x,y){
    console.log(x*y);
}
let mmultiplybyTwo=multiply.bind(this,2);
mmultiplybyTwo(5);

//using closures

let mul=function(a){
    return function(b){
        console.log(a*b);
    }
}
let multiby3=mul(2);
multiby3(5);


