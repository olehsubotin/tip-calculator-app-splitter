import Inputmask from 'inputmask';

const billEl = document.querySelector('.js-bill-input');
const tipEl = document.querySelector('.js-custom-tip');
const peopleEl = document.querySelector('.js-people-input');

Inputmask({
  alias: 'decimal',
  radixPoint: '.',
  digits: 2,
  allowMinus: false,
  rightAlign: false,
  autoUnmask: true,
}).mask(billEl);

Inputmask({
  alias: 'decimal',
  radixPoint: '.',
  digits: 2,
  allowMinus: false,
  rightAlign: false,
  autoUnmask: true,
}).mask(tipEl);

Inputmask({
  alias: 'integer',
  allowMinus: false,
  rightAlign: false,
  min: 1, // Prevent 0
}).mask(peopleEl);
