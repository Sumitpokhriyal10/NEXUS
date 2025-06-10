//const red= document.getElementById('red');
//const green= document.getElementById('green');
//const purple= document.getElementById('purple');
//const orange= document.getElementById('orange');
//const blue= document.getElementById('blue');

//red.addEventListener('click',()=>{
//    document.body.style.backgroundColor="red";
//})

//green.addEventListener('click',()=>{
//   document.body.style.backgroundColor="green";
//})

//purple.addEventListener('click',()=>{
//   document.body.style.backgroundColor="purple";
//})

//orange.addEventListener('click',()=>{
//  document.body.style.backgroundColor="orange";
//})

//blue.addEventListener('click',()=>{
//  document.body.style.backgroundColor="blue";
//})

const buttons = document.querySelectorAll("button");
const body = document.body;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    body.style.backgroundColor = button.id;
  });
});
