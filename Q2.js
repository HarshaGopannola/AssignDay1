/*  var :
     var variables can be updated and re-declared within its scope.
     var variables are globally scoped.   */


function nodeSimplified() {
    var a = 10;
    console.log(a);   // output 10
    if(true){
        var  a = 20;
        console.log(a);  //output 20
    }
    console.log(a);   //output 20
}



/*  let statement declares a local variable in block scope. */


function nodeSimplified() {
    var a = 10;
    console.log(a);   // output 10
    if(true){
        var  a = 20;
        console.log(a);  //output 20
    }
    console.log(a);   //output 10
}


/*  const statement values can be assigned once and they can not be changed again. */


function nodeSimplified(){
    const MY_VARIABLE = 10;
    console.log(MY_VARIABLE);  // output 10
}
   