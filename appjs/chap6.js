// .....................chapter 6 to onwards
// 1
document.write("Result:" + "<br>");
let a = +prompt("enter the num");
document.write("The value of a is: " + a + "<br>" + "................" + "<br>" + "<br>");
let b = a+1;
let c = b+1;
document.write("The value of ++a is: "+ b + "<br>" + "now the value of a is: " + b + "<br>" + "<br>");
document.write("The value of a++ is: " + b+ "<br>" + "now the value of a is: " + c + "<br>" + "<br>");
let d = c-1;
let e = d-1;
document.write("the value of --a is : " + d + "<br>"+ "Now the value of a is: " + d + "<br>"+  "<br>"+ "The value of a-- is: " + d + "<br>"+ "Now the value of a is: " + e );

// 2
let two =2;
let one = 1;
let r = --two- --one+ ++two + two--;
document.write("a is "+ two + "<br>"+ "b is "+ one +"<br>"+ "result is " + r);

//  3
let x = "welcome ";
let y = prompt("enter your name");
let z = x+y;
document.write(z + " to this website");

//  4
let g = +prompt("enter the number");
if (g == " ") {
    for (let i = 1; i <= 10; i++){
        document.write(5 * i + "<br>");
    }
    
}else {
    for (let i = 1; i <= 10; i++)
    {
document.write(g*i + "<br>");
    }
}

//  6
let sub1 = prompt("eter the first subject name ");
let sub2 = prompt("eter the second subject name ");
let sub3 = prompt("eter the third subject name ");
let enter_sub1= sub1;
let enter_sub2= sub2;
let enter_sub3= sub3;
let = total = 100;
let = all_total = 100*3;
let o_marks1= +prompt("Enter the obtain marks 1");
let o_marks2= +prompt("Enter the obtain marks 2");
let o_marks3= +prompt("Enter the obtai marks 3");
let enterObtainMarks1= o_marks1;
let enterObtainMarks2= o_marks2;
let enterObtainMarks3= o_marks3;
let total_obtainMarks= o_marks1+o_marks2+o_marks3;
let percentage1 = (o_marks1/total)*100;
let percentage2 = (o_marks2/total)*100;
let percentage3 = (o_marks3/total)*100;
document.write("Subject "+ "<br>" + sub1+"<br>"+sub2+"<br>"+sub3+"<br>");
document.write("Total "+ "<br>" + total+"<br>"+total+"<br>"+total+"<br>");
document.write("Obtain Marks" + "<br>" + o_marks1 + "<br>" + o_marks2 + "<br>"+ o_marks3 +"<br>");
document.write("Percentage "+ "<br>" + percentage1+ "% "+"<br>"+percentage2+ "%"+"<br>"+percentage3+ "%" + "<br>");
