let x = Math.floor(Math.random()*100)+1;
  console.log (x);
let y = Math.floor(Math.random()*100)+1;
  console.log (y);

function moduloEx7 (num1, num2) { 
  const num3 = num1-num2;
  let response = "";
  if (num1 > num2) {
    response = `The number ${num1} is bigger than ${num2}`
    if (num3 > 0)
    response += `. But the modulo of ${num1} % ${num2} is ${num3}`;
  } else if (num1 === num2) {
    response = `The number ${num1} is equal to ${num2}`
  } else {
    response = `The number ${num1} is less than ${num2}`
  }
   console.log (response);
  return response;

}

document.getElementById('output').innerText = moduloEx7(x,y);



//In D01/EX07, create a website that runs the JS attached file. In that file, edit the function provided. Use as template your previous function. Add a new function that randomize the values of your two variables, using Math.random(), with the range of 1 - 100. Call to that function inside the other one instead of providing two parameters. This exercise does not have an automated test. Run it in your browser, and check the results.