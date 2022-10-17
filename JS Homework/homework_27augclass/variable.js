// //1. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types, Display all the value with there type.
// let myString= "subham dutta";
// let myBoolean = false;
// let myNickname = undefined;
// let myMoney = null;

// console.log("1.");

// console.log(typeof myString);
// console.log(typeof myBoolean);
// console.log(typeof myNickname);
// console.log(typeof myMoney);

// //2. Declare variables to store your first name, last name, marital status, country and age and display them using interploation method.
// let firstName= "Subham"
// let lastName = "Dutta"
// let Mstatus = "Unmarried"
// let country = "India"
// let age = 24

// console.log(`2. My name is ${firstName} ${lastName}. I am a ${Mstatus} boy of age ${age} from ${country}`);

// //3. Decalre a varibale and assign value to it and change all the string characters to capital letters using toUpperCase() method.


// let village = "3. Payradanga is my village. It is a string."
// console.log(village.toUpperCase());

// // 4. Check if the string contains a word Script using includes() method.
// console.log(village.includes("string"));

// // 5. Split the string into an array using split() method
// let Arr = village.split("")
// console.log(Arr);

// //6. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
// let tech = '6, Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
// let tArr = tech.split(",")
// console.log(tArr);

// // 7. Use lastIndexOf to determine the position of the last occurrence of a script.
// console.log(tech.lastIndexOf("book"));

// // 8. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'.  
// let text = "You cannot end a sentence with because because because is a conjunction";
// console.log(8);

// console.log(text.indexOf("because"));



// // 9. Use trim() to remove any trailing whitespace at the beginning and the end of a string.

// let trimString = "  10. Trim this string  "
// console.log(trimString.trim());

// //10. Boolean value is either true or false.
// // - Write three JavaScript statement which provide truthy value.
// let t1 = "0";
// let t2 = [];
// let t3 = {};
// if (t1){
//     console.log("truthy");
    
// }
// else console.log("falsy");
// if (t2){
//     console.log("truthy");
    
// }
// else console.log("falsy");
// if (t3){
//     console.log("truthy");
    
// }
// else console.log("falsy");
// // - Write three JavaScript statement which provide falsy value.
// let f1 = "";
// let f2 = 0;
// let f3 = NaN;
// if (f1){
//     console.log("truthy");
    
// }
// else console.log("falsy");
// if (f2){
//     console.log("truthy");
    
// }
// else console.log("falsy");
// if (f3){
//     console.log("truthy");
    
// }
// else console.log("falsy");

// // 11. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// console.log(4 < 3);
// console.log(4 <= 3);
// console.log(4 == 4);
// console.log(4 === 4);
// console.log(4 != 4);
// console.log(4 !== 4);
// console.log(4 != '4'); 
// console.log(4 == '4');
// console.log(4 === '4');

// // Find the length of python and jargon and make a falsy comparison statement.
// let text1 = "python";
// let text2 = "jargon";
// console.log(`Length of ${text1} is ${text1.length} and ${text2} is ${text2.length}`);




// // 12. Use the Date object to do the following activities
// let now = new Date()
// // - What is the year today?
// console.log(now.getFullYear(), "year");

// // - What is the month today as a number?
// console.log(now.getMonth() +1, "month");

// // - What is the date today?
// console.log(now.getDate(), "date");

// // - What is the day today as a number?
// console.log(now.getDay(), "day");

// // - What is the hours now?
// console.log(now.getHours(), "hour");

// // - What is the minutes now?
// console.log(now.getMinutes(), "min");

// // - Find out the numbers of seconds elapsed from January 1, 1970 to now.
// console.log("Date", Date.parse(now));


// //13. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// // let psb = require("prompt-sync");
// // let promptBase = psb();

// // let psh = require("prompt-sync")
// // let promptHeight = psh();

// // let Base = promptBase("Enter The length of base of the triangle ")
// // let Height = promptHeight("Enter the Height of the triangle ")

// // let area = (Base * Height)/2;

// // console.log(`Area of the triangle is ${area}`);

// //14. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

// let m; 
// function Slope(x1,y1,x2,y2){
//     m = (y2-y1)/(x2-x1);
// }
// Slope(2,2,6,10)
// console.log(m);

//15. Calculate the slope, x-intercept and y-intercept of y = 2x -2

let ps = require("prompt-sync");
let promptValue = ps();

console.log("Available equation: y = 2*x - 2");
let i = promptValue("To get y-intercept enter 0, to get x-intercept enter 1: ")

x = 1
y = 2*x - 2

if (i == 0){
    x = i
    y = 2*x - 2
    console.log(`Value of y-intercept is (0, ${y})`)
}
else if (i == 1){
    y = 0
    x = y+2/2
    console.log(`Value of x-intercept is (${x}, 0)`)
}
else {
    console.log("Invalid input.")
}



// //16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

// // let pr = require("prompt-sync")

// // let radius = pr()

// // let r = radius("Enter the Radius of the circle - ")
// // let pi = 3.14

// // function area(){
// //     A = pi * r * r;
// // }
// // function circumference(){
// //     C = 2 * pi * r;
// // }
// // area();
// // circumference();
// // console.log(`Area of the circle is ${Math.round(A)} and Circumference is ${Math.round(C)}`);

// //17.Create a human readable time format using the Date time object
// // - YYYY-MM-DD HH:mm
// // - DD-MM-YYYY HH:mm
// // - DD/MM/YYYY HH:mm
// let date = require("date-and-time")

// today = new Date();

// console.log(date.format(today, "DD-MM-YYYY HH:mm"));
// console.log(date.format(today, "YYYY-MM-DD HH:mm"));
// console.log(date.format(today, "DD/MM/YYYY HH:mm"));


// // 18. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
// // let pa = require("prompt-sync")

// // let UAge = pa();
// // let userAge = UAge("Enter your age: ");

// // let yearsLeft = 18 - userAge

// // if(userAge >= 18){
// //     console.log("You are old enough to drive");
    
// // }
// // else console.log(`Please wait for ${yearsLeft} years to be abel to drive.`);

// //19. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

// // let ep = require("prompt-sync")
// // let eprompt = ep();
// // let isEven = eprompt("Enter a number: ")

// // if(isEven%2 == 0){
// //     console.log("The number is Even");
    
// // }
// // else console.log("The number is odd.");

// // 20. Write a code which can give grades to students according to theirs scores:
// //     - 80-100, A
// //     - 70-89, B
// //     - 60-69, C
// //     - 50-59, D
// //     - 0-49, F

// // let gp = require("prompt-sync")
// // let grade = gp();

// // let g = grade("Enter your number: ")

// // if(g > 100){
// //     console.log("Please Check your number properly.");
    
// // }
// // else if(g >= 80){
// //     console.log("Grade: A");
    
// // }
// // else if(g >= 70){
// //     console.log("Grade: B");
    
// // }
// // else if(g >= 60){
// //     console.log("Grade: C");
    
// // }
// // else if(g >= 50){
// //     console.log("Grade: D");
    
// // }
// // else{
// //     console.log("Grade: F");
    
// // }

// //Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// // - September, October or November, the season is Autumn.
// // - December, January or February, the season is Winter.
// // - March, April or May, the season is Spring
// // - June, July or August, the season is Summer

// // let pm = require("prompt-sync")
// // let month = pm();
// // let M = month("Enter the month: ")

// // let upM = M.toUpperCase();
// // if(upM == "SEPTEMBER" || "OCTOBER" || "NOVEMBER"){
// //     console.log("Autumn");
    
// // }
// // else if(upM == "DECEMBER" || "JANUARY" || "FEBRUARY"){
// //     console.log("Winter");
    
// // }
// // else if(upM == "MARCH" || "APRIL" || "MAY"){
// //     console.log("Spring");
    
// // }
// // else if(upM == "JUNE" || "JULY" || "AUGUST"){
// //     console.log("Summer");
    
// // }
// // else{
// //     console.log("Enter a valid month.");
    
// // }

// //22. Write a program which tells the number of days in a month.

// // let pMonth = require("prompt-sync");
// // let thisMonth = pMonth()
// // let givenMonth = thisMonth("Enter a month ");
// // let month = givenMonth.toUpperCase();

// // if (month == "JANUARY" || month == "MARCH" || month == "MAY" || month == "JULY" || month == "AUGUST" || month == "OCTOBER" || month == "DECEMBER"){
// //     console.log(`${givenMonth} has 31 days`);
    
// // }
// // else if (month == "FEBRUARY"){
// //     console.log(`${givenMonth} has 28 days`);
    
// // }
// // else if (month == "APRIL" || month == "JUNE" || month == "SEPTEMBER" || month == "NOVEMBER"){
// //     console.log(`${givenMonth} has 30 days`);
    
// // }
// // else console.log("Enter a valid month.");


// // 23. Write a program which tells the number of days in a month, now consider leap year.


// // let pMonth = require("prompt-sync");
// // let pYear = require("prompt-sync")
// // let thisMonth = pMonth();
// // let thisYear = pYear();
// // let givenMonth = thisMonth("Enter a month: ");
// // let giveYear = thisYear("Enter the year: ");
// // let month = givenMonth.toUpperCase();
// // let febDay;
// // function leap(){
// //     if(giveYear % 4 == 0){
// //         if(giveYear % 100 == 0){
// //             if(giveYear % 400 == 0){
// //                 return true;
// //             }
// //             else return false;
// //         }
// //         else return true;
// //     }
// //     else return false;
// // }

// // if(leap()){
// //     febDay = 29;
// // }
// // else febDay = 28;

// // if (month == "JANUARY" || month == "MARCH" || month == "MAY" || month == "JULY" || month == "AUGUST" || month == "OCTOBER" || month == "DECEMBER"){
// //     console.log(`${givenMonth} has 31 days`);
    
// // }
// // else if (month == "FEBRUARY"){
// //     console.log(`${givenMonth} has ${febDay} days`);
    
// // }
// // else if (month == "APRIL" || month == "JUNE" || month == "SEPTEMBER" || month == "NOVEMBER"){
// //     console.log(`${givenMonth} has 30 days`);
    
// // }
// // else console.log("Enter a valid month.");


