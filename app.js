const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a + b,
  multiply: (a, b) => a * b,
  divide: (a, b) => (b === 0 ? "Error: divide by zero" : a / b),
  modulo: (a, b) => a % b,
};

function calculate(a, b, op) {
  const fn = operations[op];
  if (!fn) return "Invalid operation";
  return fn(a, b);
}

document.getElementById("calc-btn").addEventListener("click", () => {
  const a = parseFloat(document.getElementById("num1").value);
  const b = parseFloat(document.getElementById("num2").value);
  const op = document.getElementById("operation").value;
  const resultEl = document.getElementById("result");

  if (isNaN(a) || isNaN(b)) {
    resultEl.textContent = "Result: please enter two numbers";
    return;
  }

  resultEl.textContent = "Result: " + calculate(a, b, op);
});
