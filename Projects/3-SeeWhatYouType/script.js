function update(){
    let text = document.getElementById("input").value;
    if(text != ""){
      document.getElementById("output").textContent = text;
    }
    let val;

    val = text.split(" ");

    document.getElementById("w-count").textContent = val.length;
}
  