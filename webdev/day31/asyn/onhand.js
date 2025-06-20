//practise
const pr = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("hello everyone");
  }, 5000);
});


//pr.then((response)=>console.log(response))


// BY USING AWAIT
//async function greet() {
   // const data1 = await pr;
  //  console.log(data1);

   //  const data2 = await pr;
   // console.log(data2);

    //THEY BOTH WILL BE PRINTED AFTER 5 SEC .FOR DATA1 IT WILL WAIT FOR 5SEC BUT FOR DATA2 IT WONT WAIT 
    // BECAUSE PROMISE IS RESOLVED VALUE MIL GAYI HAI TO WHY IT WILL WAIT.

//}

//greet();



//one more 

const pr1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("hello first promise resolved");
  }, 8000);
});


const pr2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("hello second promise resolved");
  }, 5000);
});

//if i use promise after varying time changes THESE TWO ARE INDEPENDENT TASK ALSO
//pr1.then((value)=>console.log(value));
//pr2.then((value)=>console.log(value));




async function greet() {
    const data1 = await pr1;
    console.log(data1);

     const data2 = await pr2;   //THE REASON PR1 AND PR2 ARE PRINTED AT SAME TIME BEACAUSE OF THE WAY CODE IS WRITTEN AS SOON CODE run from top COMES
                                //ON PR1 ITS TIME START AND SAME FOR PR2 AS IT SEES GREET(); CALL IT SEES AWAIT PR1 CHECKITS TIME IS COMPLETED THEN YES 
                              //THEN IT IS PRINTED SAME PR2 TIME IS ALSO COPLETED AS PARALLELY
    console.log(data2);

}

greet();



//MYTH ON AWAIT

//THOSE WHO ARE AWAIT OPERATIONS AND THOSE WHO ARE NOT DEPENDENT ON EACH OTHER WO PARRELEME CHLNA KHUD BA KHUD START NAHI EESA NI HAI BILKUL
//YOU HAVE TO SEE APNE CODE LIKHA KAHA HAI BAHAR LIKHA HAI UNKE ANDAR TIME ANA SURU.