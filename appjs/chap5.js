// ..............................chapter5...........................................................
// 1
let sum1 = 3;
let sum2 = 5;
let sum3 = sum1 + sum2;
document.write(
  "<p> sum of" + sum1 + "and sum of" + sum2 + "is" + sum3 + "</p>"
);
// 2
let sub1 = 3;
let sub2 = 5;
let sub3 = sub1 - sub2;
document.write(
  "<p> sub of" + sub1 + "and sub of" + sub2 + "is" + sub3 + "</p>"
);
// 3
let multi1 = 3;
let multi2 = 5;
let multi3 = multi1 * multi2;
document.write(
  "<p> multpl of" + multi1 + "and multiple of" + multi2 + "is" + multi3 + "</p>"
);
// 4
let div1 = 3;
let div2 = 5;
let div3 = div1 / div2;
document.write(
  "<p> division of" + div1 + "and division of" + div2 + "is" + div3 + "</p>"
);

// 3
let value;
document.write(" “Value after variable declaration is: ??: <br>");
value = 5;
document.write("initilize value:  " + value + "<br>");
value = 5 + 1;
document.write(" value after increment is: " + value + "<br>");
value = value + 7;
document.write("after addition is : " + value + "<br>");
value = value - 1;
document.write("value after decrementis: " + value + "<br>");
value = value % 3;
document.write("the reminder is: " + value + "<br>");
// 4
let ticket = 600;
document.write(
  "<p>price of a ticket is 600pkr<br>total cost of buying 5 ticket of a movie is: </p> " +
  ticket * 5 + " PKR"
);
// 5
let num = 4;

for (let i = 1; i <= 10; ++i)
  document.write(num + " * " + i +
    " = " + num * i + "<br>");
// 6
let cel = 24;
let fah = 34;
// 7
function cToF(celsius) {
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp + '\xB0C is ' + cToFahr + ' \xB0F.';
  document.write(message);
}

function fToC(fahrenheit) {
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp + '\xB0F is ' + fToCel + '\xB0C.';
  document.write(message);
}
cToF(60);
fToC(45);
// 8

// 9
let totalMarks = 980;
let obtainMarks = 804;
let percentage = 100 * obtainMarks % totalMarks;
console.log("Total marks " + totalMarks + "Marks obtained :" + obtainMarks + "percentage:" + percentage);
// 10

let dollar = 104.80;
let Riyal = 28;
let pakiVsDollar= dollar*10;
let pakiVsRial= Riyal*25;
let curr = pakiVsDollar+pakiVsRial;
document.write("Total Currency in PKR: " + curr);

// 11 
let add = 3 + 2 * 10 / 2;
console.log(add);
// 12
let yourAge = +prompt("enter the current year");
let dob = +prompt("enter the birth year");
let result = yourAge-dob;
document.write("current year: " + yourAge + "<br>" + "birth year: " + dob + "<br>" + "your age is: " + result);

// 13
document.write("The lifetime supply calculator" + "<br>" + "<br>")
let snack= prompt("Enter your favorite snack");
let currentAge = +prompt("enter your current age");
let maxAge = 65;
let estimate = +prompt("enter the estimate amount per day");
let final= currentAge*estimate;
document.write("favourite snack: "+ snack + "<br>"+ 
"current age: "+ currentAge + " <br>"+ "estimate maximum age: "+ maxAge+"<br>"+"amount of snacks per day: " + estimated_amount_per_day + "<br>");
document.write("you will need " +final+ snack +" to last you untill the ripe old age of "+maxAge);
