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
    const data1 = await test1();
    console.log(data1);

     const data2 = await test2();
    console.log(data2);

}

greet();


//IMPORTANT

//[NOW BOTH ARE TAKING 5SEC TO BE PRINTED FIRST TEST1() WILL BE PRINTED AFTER THAT TEST2() EACH WILL TAKE 5SEC ONE AFTER ANOTHER 
// AND THOSE SPREADING MISCONSEPTION THAT AWAIT OPERATION OR INDEPENDENT RUN PARALLELY BASHED BY THIS EXAMPLE]