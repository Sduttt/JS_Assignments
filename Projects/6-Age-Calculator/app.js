let dob = document.getElementById("dob");
let errAge = document.querySelector(".age");

const ageDisplay = errAge.innerHTML;
const ageStyle = errAge.style;

dob.addEventListener("input", ()=>{
    let bd = new Date (dob.value).getTime();
    let today = Date.now();
    if(bd >= today){
        errAge.innerText = "Please Enter proper Date of Birth!!"
        errAge.style.color = "red"
        return false;
    } 
    else{
        errAge.innerHTML = ageDisplay;
        errAge.style = ageStyle;
        let dateDiff = (today - bd);
        let dayDif = Math.floor(dateDiff/(1000*60*60*24))
        let year = Math.floor(dayDif/365)
        let yday = dayDif%365;
        let month = Math.floor(yday/30);
        let day = yday%30;

    document.getElementById("years").innerText = year;
    document.getElementById("months").innerText = month;
    document.getElementById("days").innerText = day;  
    }  
})
