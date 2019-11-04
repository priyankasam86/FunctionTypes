
// addition(); Run time exception - Use before declaration 

let addition=function(){
   
    
    let num1=2;
    let num2=2;
    let result=num1+num2;
    
    console.log(result);

}
addition()

// In function Expression, you can not call function before initialization of that function.
// It throws an exception(run time) in both var and let keywords.
// Run time exception - Use before declaration 
