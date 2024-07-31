
//function statement aka function declaration
function a(){
    console.log("a called");
}


//function expression
var b=function (){
    console.log("b called");
}

a();
b();

//anonymous function
// function(){

// }


//named function expression
var b=function xyz(){
    console.log("b called");
}


//first class functions:aka first class citizens
//the ability of functions to be used as values and passed as an argument to another function and can be returned from function is known as first class functions.
let c=function (param1){
    return function(){

    }
}

console.log(c());
