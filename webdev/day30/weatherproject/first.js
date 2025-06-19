//weather app API learning
const button =document.querySelector("button");

button.addEventListener('click',(event)=>{
  const place = document.querySelector('input').value;

  function updatetemp(data){
   const element = document.getElementById('weatherInfo')
   element.innerHTML=`todays temperature: ${data.current.temp_c} °C`;
  }

  const promise= fetch(`http://api.weatherapi.com/v1/current.json?key=ffff21a3252a4edb922102008253001&q=${place}&aqi=no`);
  promise
  .then(response=>response.json())
  .then(data=>updatetemp(data));

})