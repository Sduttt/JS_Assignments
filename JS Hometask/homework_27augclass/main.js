//24. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

const countryList = require("./countries.js");
// console.log(countryList[5]);

const webTechs = require("./web_techs.js");
// console.log(webTechs[3]);

// 25. In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of you shopping cart if it has not been already added
//     - remove 'Honey' if you are allergic to honey
//     - modify Tea to 'Green Tea'
// shoppingCart.unshift("Meat");
// shoppingCart.push("Sugar");
// shoppingCart.splice(shoppingCart.indexOf("Honey"),1)
// shoppingCart.splice(shoppingCart.indexOf("Tea"),1,"Green Tea")
// console.log(shoppingCart);

// 26. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
// let Eth = countryList.includes("Ethiopia");
// if (Eth){
//     console.log("ETHIOPIA");
// }
// else countryList.push("Ethiopia")
// console.log(countryList.length);


//27. The following is an array of 10 students ages:

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// - Sort the array and find the min and max age
// - Find the median age(one middle item or two middle items divided by two)
// - Find the average age(all items divided by number of items)
// - Find the range of the ages(max minus min)
// - Compare the value of (min - average) and (max - average), use abs() method
// console.log(`Sorted Ages: ${ages.sort()}`);
// console.log(`Minimum age is: ${ages[0]} and maximum age is: ${ages[ages.length - 1]}`);
// let l = ages.length;
// if(l % 2 == 0){
//     console.log(`Median is ${(ages[l/2]+ages[(l/2)+1])/2}`);
    
// }
// else console.log(`Median is ${ages[Math.round(l/2)]}`);

// let sum = 0;
// for(let i=0; i<ages.length; i++){
//     sum = sum + ages[i];
// }
// let avg = Math.round(sum/l);
// console.log(`Average of age is ${avg}`);
// console.log(`range is ${ages[ages.length - 1] - ages[0]}`);
// console.log(`min - average difference: ${Math.abs(avg - ages[0])}`);
// console.log(`max - average difference: ${Math.abs(avg - ages[l - 1])}`);

//28. Use for loop to iterate from 0 to 100 and print only prime numbers

// for(let i = 2; i <= 100; i++){
//     for(let j = 2; j < i; j++){
//         if(i % j == 0){
//             break;
//         }
//         if(j == i-1){
//             console.log(i);
            
//         }
//     }
// }

// let p = [];
// for(let i = 2; i <= 100; i++){
//     for(let j = 2; j <= i; j++){
//         if(i % j == 0){
//             break;
//         }
//         if(j == i-1){
//             p.push(i)
            
//         }
//     }
// }
// console.log(p);


//29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

// let Esum = 0;
// let Osum = 0;

// for (let i = 0; i <= 10; i++){
//     if(i % 2 != 0){
//         Osum = Osum + i;
//     }
//     else Esum  = Esum + i;
// }
// console.log(`Sum of Even numbers: ${Esum}`);
// console.log(`Sum of Odd numbers: ${Osum}`);

// TODO: 30. Write a script which generates a random hexadecimal number.

//31. Sort the webTechs array and mernStack array
// console.log(webTechs.sort());

// 32. Array Questions
//     - Extract all the countries contain the word 'land' from the countries array and print it as array
//     - Find the country containing the hightest number of characters in the countries array
//     - Extract all the countries containing only four characters from the countries array and print it as array
//     - Extract all the countries containing two or more words from the countries array and print it as array
//     - Reverse the countries array and capitalize each country and stored it as an array

let arr = [];
for(let i = 0; i < countryList.length; i++){
    if(countryList[i].match("land")){
        arr.push(countryList[i])
    }
    else continue;
}
// console.log(arr);

let h="";
for(let i =0; i < countryList.length; i++){
    if(h.length < countryList[i].length){
        h = countryList[i];
    }
    else continue;
}
// console.log(h);
// console.log(countryList.indexOf("United Kingdom of Great Britain and Northern Ireland (the)"));

let arr4 = [];
for(let i = 0; i < countryList.length; i++){
    if(countryList[i].length == 4){
        arr4.push(countryList[i])
    }
    else continue;
}
// console.log(arr4);

let Rarr = countryList.reverse();
let Uarr = [];
for(let i =0; i < Rarr.length; i++){
    Uarr.push(Rarr[i].toUpperCase())
}
// console.log(Uarr);

// 33. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
//     - The same groups apply to both men and women.
//     - Underweight: BMI is less than 18.5
//     - Normal weight: BMI is 18.5 to 24.9
//     - Overweight: BMI is 25 to 29.9
//     - Obese: BMI is 30 or more
// function bmi(height, weight){
//     let BMIndex = weight / (height * height);
//     return BMIndex;
// }
// let ph = require("prompt-sync");
// let pw = require("prompt-sync");

// let promptH = ph();
// let promptW = pw();

// let H = promptH("Enter the heihght(m): ")
// let W = promptW("Enter the weight(kg): ")

// if(bmi(H, W) <= 18.5){
//     console.log("Underweight");
    
// }
// else if(bmi(H, W) <= 24.9 && bmi(H, W) > 18.5 ){
//     console.log("Normal");
    
// }
// else if(bmi(H, W) >= 25 && bmi(H, W) <= 29.9 ){
//     console.log("Over-Weight");
    
// }
// else console.log("Obese");

// TODO: 34. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.


//35. TODO: Write a functions which checks if all items are unique in the array.

let myArr = [65, 56, 58, 6, 88, 662]

function UniqArr(){
    for(let i = 0; i < myArr.length; i++){
        for(let j = i+1; j < myArr.length; j++){
            if(myArr[i] == myArr[j]) {
                console.log("Not unique");
                return;
            }
            
        }
    }
    console.log("Unique");   
}
UniqArr()
