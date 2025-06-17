//callback hell by dominos example

function placeorder(callback) {
  console.log("talking with dominos");
  setTimeout(() => {
    console.log("order placed sucessfully");
    callback();
  }, 2000);
}

function preparingorder(callback) {
  console.log("pizza preparation started");
  setTimeout(() => {
    console.log("pizza prep done");
    callback();
  }, 5000);
}

function pickuporder(callback) {
  console.log("reaching restraunt for picking order");
  setTimeout(() => {
    console.log("picked up the order by delivery boy");
    callback();
  }, 3000);
}

function deliverorder() {
  console.log("delivery on the way");

  setTimeout(() => {
    console.log("order delivered successfully");
  }, 5000);
}

placeorder(() => {
  preparingorder(() => {
    pickuporder(() => {
      deliverorder();
    });
  });
});
