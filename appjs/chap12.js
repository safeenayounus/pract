// 1
let num1 = +prompt("enter the first number");
let num2 = +prompt("enter the second number");
if (num1 == num2) {
    document.write(num1 + " and "+ num2 + " : is equal" );
}

else if (num1 >= num2) {
    document.write(num1 + " : is greater then " + num2 );
}
else if(num1 <= num2){
    document.write(num1 + " : is smaller then "+ num2 );
}
else{
    document.write("Enter the correct input " );
}
// 2
let = num1, num2;
num1 = +prompt("Input the First integer", "0");
num2 = +prompt("Input the second integer", "0");
                                                 
if(parseInt(num1, 10) > parseInt(num2, 10)) 
  { 
  console.log("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
  }   
else
  if(parseInt(num2, 10) > parseInt(num1, 10)) 
  {
  console.log("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
  }                  
else
  {
   console.log("The values "+ num1+ " and "+num2+ " are equal.");
    }
//   3
let number = -5;

if (number < 0) 
    document.write (number + ' is negetive');
else
    document.write (number + ' is positive');