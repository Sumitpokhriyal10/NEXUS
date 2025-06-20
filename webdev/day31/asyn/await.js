// we can  use it with promises
let cart = ["pizz", "coke", "sandwich"]; //ab information bhi pass kare hai jese real world hojaye scenario

function placeorder(cart) {
  console.log("talking with dominos");

  const pr = new Promise(function (resolve, reject) {
    setTimeout(() => {
      const food_available = true;
      if (food_available) {
        console.log("order placed sucessfully");
        const order = {
          orderID: 221,
          food: cart,
          restraunt: "dominos",
          location: "haridwar",
        };
        resolve(order);
      } else {
        reject("there appears error maybe item out of stocks");
      }
    }, 2000);
  });

  return pr;
}

function preparingorder(order) {
  console.log("pizza preparation started");

  const pr1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("pizza prep done");
      const foodetail = {
        tokenn: 12,
        restaurent: order.location,
        location: order.location,
      };
      resolve(foodetail);
    }, 5000);
  });

  return pr1;
}

function pickuporder(foodetail) {
  console.log("reaching restraunt for picking order");

  const pr2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("picked up the order by delivery boy");
      const droplocation = foodetail.location;
      resolve(droplocation);
    }, 3000);
  });

  return pr2;
}

function deliverorder(droplocation) {
  console.log("delivery on the way");

  setTimeout(() => {
    console.log("order delivered successfully");
  }, 5000);
}

//placeorder(cart)    //MANY DONT LIKE THIS SYNTAX AS I IS BIT COMPLEX TO UNDERSTAND WE HAD MADE SOME CHANGES BELOW
// .then(order=> preparingorder(order))
// .then(foodetail => pickuporder(foodetail))
// .then(droplocation => deliverorder(droplocation))
// .catch(error => console.log(error));

//WHAT IF WE CAN WRITE LIKE THIS ITS BETTER TO UNDERSTAND
//const order= await placeorder(order); //[here await says yaha function baith k wait karo jab tk order me details na aye or value tb tk next line ko execute ni krna]
//const foodetail= await preparingorder(order);
//const droplocation= await pickuporder(foodetail);
// deliverorder(droplocation); //BUT WE CANNOT WRITE LIKE THIS DIRECTLY BEACAUSE THESE ARE ASYNC TASK WE REQUIRED TO WAIT BEFORE FOR EX.PLACEORDER(ORDER) REQUIRE SOMETIME TO PRINT WE CAN DIRECTLY GET IT AT INSTANT.

//SO TO MAINTAIN THE REQUIRED WAIT FOR FLOW WE CAN USE [AWAIT]






//== THERE IS A CATCH WE CANNOT NORMALLY USE AWAIT LIKE ABOVE WE HAVE TO KEEP IT INSIDE A ASYNCRONUS FUNCTION  LIKE BELOW

async function greet() {
  const order = await placeorder(cart); //[here await says yaha function baith k wait karo jab tk order me details na aye or value tb tk next line ko execute ni krna]
  const foodetail = await preparingorder(order);
  const droplocation = await pickuporder(foodetail);
  deliverorder(droplocation);
}

greet();