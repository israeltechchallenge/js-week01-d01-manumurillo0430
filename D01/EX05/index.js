function moduloEx5(num1,num2) {
  const num3 = num1%num2
  let response = "";
  if (num1 > num2) {
    response = `The number ${num1} is bigger than ${num2}`
    if (num3 >0)
    response += `. But the modulo of ${num1} % ${num2} is ${num3}`;
  } else if (num1 === num2) {
    response = `The number ${num1} is equal to ${num2}`
  } else {
    response = `The number ${num1} is less than ${num2}`
  }
  console.log(response);
}

// Do not remove or change this line, or the tests won't work
export { moduloEx5 };
