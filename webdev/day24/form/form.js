//form
const form = document.querySelector("form");

//form.addEventListener("input",(event)=>{
// console.log(event.target.value);
//})

//form.addEventListener("change",(event)=>{
//console.log(event.target.value);
//})

//focus doesnt bubble
//form.addEventListener("focus",(event)=>{
// console.log(event.target.value);
//)

//form.addEventListener("focusin",(event)=>{
// console.log(event.target.value);
//})

//form.addEventListener("focusout",(event)=>{
//console.log(event.target.value);
//})

//form.addEventListener("click",(event)=>{
//console.log(event.target.value);
// console.log("single clicked")
//})

//form.addEventListener("submit",(event)=>{
//console.log(event.target.value);
// console.log('form submitted');
//})

//====reset bhi normally lagega but button hai jo submit wala html me uska type restkr dene

form.addEventListener("submit", (event) => {
  event.preventDefault();
  //const first = document.getElementById("first");
  //console.log(first.value);
 // const second = document.getElementById("second");
  //console.log(second.value);
  //const third = document.getElementById("third");
  //console.log(third.value);

 //const result = document.getElementById('result')
 //result.innerText=`${first.value}  ${second.value}  is a good boy`


 //form.appendChild(result);

const data =new FormData(form);


//for of
//for(let key of data.keys())
//{
  //  console.log(key);
//}

for(let [key,value] of data.entries())
{
    console.log(key,value);
}





//console.log(Array.from(data.keys()));
//console.log(Array.from(data.values()));



});


