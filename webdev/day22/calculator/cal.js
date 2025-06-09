//calculator

const button = document.querySelector("button");

button.addEventListener("click", () => {
  const num1 = document.getElementById("first");
  const add1 = Number(num1.value);
  const num2 = document.getElementById("second");
  const add2 = Number(num2.value);

  const result = add1 + add2;

  const r = document.getElementById("result");
  r.innerHTML = "result:"+ result;
});
