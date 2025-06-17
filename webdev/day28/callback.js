//call back 

function fetchuser(callback) {
  console.log("fetching the user detail.....");
  setTimeout(() => {
    console.log("data fetched succesfully");

    const obj = {
      name: "sumit",
      age: 23,
      city: "uttrakhand",
    };
    callback(obj);
  }, 2000);
}

function greet(obj) {
  console.log(`hello ${obj.name}`);
}

function meet(obj) {
  console.log(` hi  ${obj.name}  i will meet you in delhi `);
}

function age(obj) {
  console.log(`the age is ${obj.age}`);
}

fetchuser(greet);
//fetchuser(age);
