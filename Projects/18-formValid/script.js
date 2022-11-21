//Declarations

let uname = document.getElementById("uname");
let email = document.getElementById("email");
let pswd = document.getElementById("password");
let psw2 = document.getElementById("password2");
let submit = document.getElementById("submit");
let warning = document.getElementById("warning");
let main = document.getElementById("signupbox")

//Email varification function
function isEmailValid(email) {
    const regularExpression = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,3}/;
    return regularExpression.test(email);
}

//Password varification function
function isPasswordValid(password){
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    return regex.test(password)
}

//Submit button action

submit.addEventListener("click", () => {
    if(uname.value == "" || email.value == "" || pswd.value == ""){
        warning.textContent = "*Please fill all informations"
    } else if(!isEmailValid(email.value)){
        warning.textContent = "*Please enter correct email"
    } else if(!isPasswordValid(pswd.value)){
        warning.textContent = "*Your password should contain atleast one uppercase letter, one lowecase letter, one digit, one special charecter and at-least 8 charecters"
    } else if (pswd.value !== psw2.value) {
        warning.textContent = "*Password didn't match!"
    } else if(uname.value.length < 6){
        warning.textContent = "*Your username must contain at least 6 charecters"
    } else {
        main.innerHTML = "<h1 class='text-center'>WELCOME!<h1>"
        document.querySelector("body").style.background = "#242B2E"
    }
})
