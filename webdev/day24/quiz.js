//cricket form
//const original_arr=['Sachin Tendulkar', 'West Indies','Sachin Tendulkar','264','Muttiah Muralitharan'];//for handling a error that a user might left the option to be answer so whatever amount of
//of answer you submit becomes your default length and if your length comes for example 3 and you are comparing it with original array of length 5 answer will be inaccurate

//=== to solve now implemnting original_arr as object

const original_arr = {
  q1: "Sachin Tendulkar",
  q2: "West Indies",
  q3: "Sachin Tendulkar",
  q4: "264",
  q5: "Muttiah Muralitharan"
};
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);

  ///const answersheet = Array.from(data.values());
  //console.log(answersheet);

  let result = 0;
  for(let [key,value] of data.entries())
  {
    if(value===original_arr[key])
        result++; 
  }
  //for (let i = 0; i < answersheet.length; i++) {
    //if (answersheet[i] === original_arr[i]) result++;
 // }
 // console.log(result);
  const out = document.getElementById("out");
  out.innerText = `${result} are correct out of 5`;

  form.appendChild(out);
});
