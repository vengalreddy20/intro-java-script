//java script is most popular language and it is light weight.
//java script is interpreted programming language.
//statically typed programming language
//eg; C,Python,Java etc;

//dynamically typed programming language
// eg; Java script

//data types
//1.primitive data type
//2.referential data type

// primitive data type

//1.number
//2.boolean
//3.string
//4.null
//5.undefined
//6.symbol

var x=7;
var y=true;
var name="vengalreddy";
var z=null;
var a;

console.log(x); //7
console.log(y); // true
console.log(name); //vengalreddy
console.log(z); //null
console.log(a); //undefined

console.log(typeof x); //number
console.log(typeof y); // boolean
console.log(typeof name); //string
console.log(typeof z); //object
console.log(typeof a); //undefined

//hoisting
console.log(e); // it shows undefined because hoisting can take variable top of the stack
var e;

console.log(e);  //undefined
var e=5;

var e;
console.log(e);  //5
e=5;

//functions

function hello(){

    return "functions in java script"
}
var y=console.log(hello());


function add(a,b){
    var sum=a+b;
    return sum;
}
 var res=add(7,6);
console.log(res);
//functional hoisting
var res=add(7,6);
console.log(res);
function add(a,b){
    var sum=a+b;
    return sum;
}

//functional expression
var rem=mul(9,8);
 console.log(rem);
 var mul=function(a,b){
     var x=a*b;
     return x;

 }
 var rem=mul(9,8);
 console.log(rem);