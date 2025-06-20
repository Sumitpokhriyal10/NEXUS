//callback hell by dominos example

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

//older way to handle without promise
//placeorder(cart ,(order) => {
// preparingorder(order,(foodetail) => {
//  pickuporder(foodetail ,(droplocation) => {
//   deliverorder(droplocation);
// });
// });
//});

//WAY TO HANDLE WITH PROMISE
placeorder(cart)
.then(order => preparingorder(order))
.then(foodetail => pickuporder(foodetail))
.then(droplocation => deliverorder(droplocation))
.catch(error=> console.log(error));

//how to create promise

//const pr = new promise(function(resolve,reject){

///})

//return pr;
