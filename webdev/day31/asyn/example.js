function test1() {
  const pr1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("hello first promise resolved");
    }, 5000);
  });

  return pr1;
}

function test2() {
  const pr2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("hello second promise resolved");
    }, 5000);
  });
  return pr2;

}


async function greet() {
    console.log("hello i greet you")
    const data1 = await test1();
    console.log(data1);

     const data2 = await test2();
    console.log(data2);

}

//greet();
console.log("hello coder army");
console.log("kaise ho ap sab");


//WHAT WILL BE THE EXECUTION FLOW CHECKOUT KESE CHALEGA YE CODE

//OUTPUT
//hello i greet you
//hello coder army
//kaise ho ap sab

//HOW?
//[await test1() will wait for 5sec tab tk wo function k andar kuch execute ni hoga par waha itn der ni rukega ab code flow seedha main code pe 
//a jayega isleye last 2 statement execute hui]




















//== TO PROVE THAT ASYNC ALWAYS RETURN A  PROMISE


//async function sumit() {
   // return "sumit garud coder";
//}

//sumit().then((value)=>{console.log(value)})