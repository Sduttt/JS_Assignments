let count=0;

function increment(){
    count += 1;
    document.getElementById("dist-count").textContent= count;

    if (count>5){
        alert("Dont get distracted that much! Please be focused!")
    }
}

function saving(){
    document.getElementById("total").textContent= "Last time you got distracted for " + count + " times!";
    count =0;
    document.getElementById("dist-count").textContent= 0;
    alert("Return Soon!");
}
