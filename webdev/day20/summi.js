
function timering(){
const timer= document.getElementById("root");
const date=new Date();
const indiantime=date.toLocaleTimeString();
timer.innerHTML=indiantime;

}


setInterval(timering,1000);

const timer= document.getElementById("root");
timer.style.display = "flex";
timer.style.justifyContent = "center"; // optional
timer.style.alignItems = "center"
timer.style.backgroundColor="orange";
timer.style.fontSize="100px";
timer.style.height="100vh";

