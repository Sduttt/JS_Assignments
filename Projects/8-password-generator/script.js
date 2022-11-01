let generator = document.getElementById("generate")

let finalPassword = document.getElementById("result")

let uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let symbols = ["!", "@", "#", "$", "%", "&"];

let passwordarr = [uppercase, lowercase, numbers, symbols]



generator.addEventListener("click", () => {
    let pswlength = document.getElementById("length").value;
    let isIncludeUP = document.getElementById("uppercase");
    let isIncludeLow = document.getElementById("lowercase");
    let isIncludeNum = document.getElementById("numbers");
    let isIncludeSymbol = document.getElementById("symbols");



    let newPasswordType = [];
    let newPassword = [];
    
    
    if(isIncludeUP.checked ){
        newPasswordType.push(uppercase);        
    }
    if(isIncludeLow.checked){
        newPasswordType.push(lowercase);        
    }
    if(isIncludeNum.checked){
        newPasswordType.push(numbers);        
    }
    if(isIncludeSymbol.checked){
        newPasswordType.push(symbols);        
    }

    if(newPasswordType.length == 0){
        alert("Please check atleast one option")
    } 
    else {
        for(i = 0; i < pswlength; i++){
            let randomPassArr = Math.floor(Math.random()*newPasswordType.length);
            let randomType = Math.floor(Math.random()*newPasswordType[randomPassArr].length)
            newPassword.push(newPasswordType[randomPassArr][randomType]);
        }
    }

    let result = newPassword.join("");
    finalPassword.textContent = result;
})

let copybtn = document.getElementById("clipboard")
copybtn.addEventListener("click", () => {
    finalPassword.select;
    navigator.clipboard.writeText(finalPassword.textContent)
    // alert("Copied!")

    if(finalPassword.textContent != ""){
        alert("Copied!")
    }
    else alert("Password not generated!")
})