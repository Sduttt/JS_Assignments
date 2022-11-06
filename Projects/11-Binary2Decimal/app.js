
let result = document.querySelector(".result")
let button = document.getElementsByClassName("btn")
let val = ""    


document.querySelector(".btn").addEventListener("click", (e) => {
        e.preventDefault()
        let val = document.getElementById("binary").value;
        function biToDec(num){
            let dec = 0; 
            for(let i = 0; i < num.length; i++) {
                if(num[num.length - (i + 1)] === '1') {
                    dec += 2 ** i;
                }
            }
        result.innerText =  dec;
        }
        let bi  = true;
        for(i=0; i<val.length; i++){
            if(val[i] != 0 && val[i] != 1){
                bi = false;
                
                break;
            }
            
        }
        if(bi){
            biToDec(val)
        }
        else{
            result.innerText = "Please input a binary number"
        }
})









// [In reply to SUBHAM 🎇]
// let result = document.querySelector(".result");
// let button = document.getElementsByClassName("btn");
// let val = "";

// document.querySelector(".btn").addEventListener("click", (e) => {
//     e.preventDefault();
//     let val = document.getElementById("binary").value;
//     function biToDec(num) {
//         let dec = 0;
//         for (let i = 0; i < num.length; i++) {
//             if (num[num.length - (i + 1)] === "1") {
//                 dec += 2 ** i;
//             }
//         }
//         result.innerText = dec;
//     }
//     let isValidBinary = true;
//     for (i = 0; i < val.length; i++) {
//         if (val[i] !== "0" && val[i] !== "1") {
//             console.log("ERROR");
//             isValidBinary = false;
//             break;
//         }
//     }
//     if (isValidBinary) {
//         biToDec(val);
//     } else {
//       result.innerText = "INVALID INPUT"
//     }
// });