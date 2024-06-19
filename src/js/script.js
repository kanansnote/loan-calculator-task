const calculate = document.getElementById('calculate');
const result = document.getElementById('result');

calculate.addEventListener('click', function() {
    // Accessing needed values
    let amount = parseFloat(document.getElementById('amount').value);
    let interest = parseFloat(document.getElementById('interest').value);
    let term = parseInt(document.getElementById('term').value);

    if (isNaN(amount) || isNaN(interest) || isNaN(term)) {
        result.textContent = "Please, fill out the all info";
        result.style.color = 'red';
        return;
    }

    // Calculating annual interest rate
    let monthlyInterestRate = (interest / 100) / 12;

    // Calculating monthly payment
    let x = Math.pow(1 + monthlyInterestRate, term);
    let monthlyPayment = (amount * monthlyInterestRate * x) / (x - 1);

    // Showing the result
    result.textContent = `Monthy Payment: ${monthlyPayment.toFixed(2)} AZN`;
});

const interestSelect = document.getElementById('interest');
const termSelect = document.getElementById('term');

function updateTerm() {
  const selectedInterestValue = interestSelect.value;
  let selectedTermValue;

  switch (selectedInterestValue) {
    case '6':
      selectedTermValue = '12';
      break;
    case '12':
      selectedTermValue = '15';
      break;
    case '24':
      selectedTermValue = '20';
      break;
    default:
      // Handling unexpected values (optional)
      console.warn('Unexpected interest value:', selectedInterestValue);
      break;
  }

  termSelect.value = selectedTermValue;
  // Disabling term selection after updating the value
  termSelect.disabled = true;
}

// Updating term on initial page load
updateTerm();

// Updating term whenever the interest selection changes
interestSelect.addEventListener('change', updateTerm);


