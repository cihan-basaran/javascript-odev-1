let person = window.prompt("Please enter your name: ");
if (person != null){
    document.getElementById("myName").innerHTML = person;
}

let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
 ];

const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");
const daysEl = document.getElementById("days");

function updateClock(){
   let h = new Date().getHours();
   let m = new Date().getMinutes();
   let s = new Date().getSeconds();
   let d = days[today.getDay()];
   let ampm = "AM";


   if(h > 12){
       h = h - 12;
       ampm = "PM";
   }

   hourEl.innerText = h;
   minuteEl.innerText = m;
   secondEl.innerText = s;
   ampmEl.innerText = ampm;
   daysEl.innerText = d;
   setTimeout(()=>{
       updateClock()
   },1000)
}

updateClock()