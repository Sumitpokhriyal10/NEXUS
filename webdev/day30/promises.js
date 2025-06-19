//async task(weather)
//const promise =fetch(`http://api.weatherapi.com/v1/current.json?key=ffff21a3252a4edb922102008253001&q=London&aqi=no`);

//set timeout method to solve out this problem
//setTimeout(()=>{
//console.log(obj);

//},2000)

//better approach to solve this problem beacuse we dont know how much time it takes to bring out the result
//so we use promises here

//we should know how to handle error there would be 2 option whether request is resolve or reject the reject one would go to the error argument
//promise.then((response)=>{
//console.log(response);
//}).catch((error)=>{
//   console.log(error);
//})

//JSON:  JAVASCRIPT OBJECT NOTATION

//states in promises
//1.pending
//2.resolve
//3.reject
const promise = fetch(`http://api.weatherapi.com/v1/current.json?key=ffff21a3252a4edb922102008253001&q=London&aqi=no`);

//const prom2 = promise.then((response) => {
//console.log(response);//by printing we would get response header but we want to get the reponse body part
//covert the response to json format by
//const pro2 =response.json();// now respnse body will be printed but output PROMISE PENDING
//pro2.then((data)=>{
// console.log(data);
//})

//another way to write this promise people use

// return response.json(); //ab is pure ki jagah jo yaha se return hoga wo yaha ayega[JO BHI YAHA SE RETURN WO PRO2 WALE K ANDAR JAYEGA]
//});

//prom2.then((data) => {
//console.log(data);
//});

//+MOST CURRENTLY USED METHOD TO SHOWCASE PROMISES

//PROMISE CHAINING

promise
.then(response=> response.json())
.then(data => console.log(data.location.name))
.catch(error=>console.log(error));
// can use arrow  for more optimizarion see above code
