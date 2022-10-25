let bg = document.getElementById("canvas");
function colors(){
    let dig = "0123456789ABCDEF";
    let hex = "#";
    for(i = 0; i < 6; i++){
        hex = hex + dig[Math.floor(Math.random() * 16)]
    }
    bg.style.backgroundColor = hex;
    
}
colors()