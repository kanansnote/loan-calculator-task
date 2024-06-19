const button = document.querySelector('button');
const amount = document.getElementById('amount');

const result = document.getElementById('result');

const interestByTerm = document.getElementById('interestByTerm').value;

let monthlyInterestRate = (interestByTerm / 100) / 12;

let x = Math.pow(1 + monthlyInterestRate, interestByTerm);
let monthlyPayment = (amount * monthlyInterestRate * x) / (x - 1);

button.addEventListener('click', function () {
    result.innerHTML = `Your monthly payment is: ${monthlyPayment.toFixed(2)}`;
})