let time=document.getElementById("current-time");
let date=document.getElementById("current-date");

setInterval(() =>{
    let d=new Date();
    time.innerHTML=d.toLocaleTimeString();
    date.innerHTML=d.toLocaleDateString();
},1000)