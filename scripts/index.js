const formEl = document.querySelector('.js-form');
const billEl = document.querySelector('.js-bill-input');
const tipEl = document.querySelector('.js-custom-tip');
const peopleEl = document.querySelector('.js-people-input');
const tipButtonsContainer = document.querySelector('.js-tip-buttons');
const tipAmountByPersonEl = document.querySelector('.js-tip-amount-by-person');
const totalAmountByPersonEl = document.querySelector(
  '.js-total-amount-by-person'
);
const resetButton = document.querySelector('.js-form-reset-btn');

let selectedTip = null;

formEl.addEventListener('input', debounce(handleFormInput, 300));
tipButtonsContainer.addEventListener('click', handleTipButtonClick);
resetButton.addEventListener('click', resetForm);

function handleFormInput() {
  if (tipEl.value !== '') {
    selectedTip = null;
  }
  updateUI();
}

function debounce(func, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}

function handleTipButtonClick(event) {
  const button = event.target.closest('.js-tip-button');
  if (!button) return;

  selectedTip = parseFloat(button.dataset.tip);
  tipEl.value = '';
  updateUI();
}

function calculate() {
  const bill = parseFloat(billEl.value) || 0;
  const tip = selectedTip !== null ? selectedTip : parseFloat(tipEl.value) || 0;
  const people = parseFloat(peopleEl.value) || 1;

  return {
    totalByPerson: parseFloat(((bill * (1 + tip / 100)) / people).toFixed(2)),
    tipByPerson: parseFloat(((tip * bill) / 100 / people).toFixed(2)),
  };
}

function resetForm() {
  billEl.value = '';
  tipEl.value = '';
  peopleEl.value = '1';
  selectedTip = null;
  updateUI();
}

function updateUI() {
  const { totalByPerson, tipByPerson } = calculate();

  tipAmountByPersonEl.textContent = `$${tipByPerson}`;
  totalAmountByPersonEl.textContent = `$${totalByPerson}`;
}
