
function moduloEx6(num1, num2) {
    const num3 = num1-num2
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

    return response;
}

document.getElementById('output').innerText = moduloEx6 (100,10);


