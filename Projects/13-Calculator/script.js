var disp = document.querySelector(".textview")

let val = ""

function insert(x){
    val = val + x;
    disp.value = val;
}

function clean(){
    val = ""
    disp.value= val;
}

function equals(){
    let calc = eval(val)
    disp.value = calc;
    val = ""
}

function back(){
    val = val.slice(0, -1);
    disp.value = val;
    
}