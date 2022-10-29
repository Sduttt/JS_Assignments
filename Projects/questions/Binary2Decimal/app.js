function biToDec(){
    let result = document.getElementsByClassName("result")
    let bi = document.getElementById("binary").value;
    for(i = 0; i < bi.length; i++){
        if (bi[i] != 1 || 0){
            result.textContent = "Please Enter a Binary Number";
        }
    
    }
}

// let button = document.getElementsByClassName("btn");
