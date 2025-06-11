const grandfather = document.getElementById("grandfather");
const parent = document.getElementById("parent");
const child = document.getElementById("child");


//event bubling capturing

//child.addEventListener('click',(event)=>{
   //console.log("child clicked");
 //  event.stopPropagation();
   //console.log(event.target);
//},false);

//parent.addEventListener('click',(event)=>{
  // console.log("parent clicked");
    //console.log(event.target);
//},false);

grandfather.addEventListener('click',(event)=>{
   // console.log("grandfather clicked");
    console.log(event.target);
 //   console.log(event.currentTarget);
},false);



//event delegation