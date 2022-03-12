const form = document.querySelector('#signup-form');

const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');


form.addEventListener('submit', function(e) {
  alert('submited');
  console.log('cc', creditCardInput.value)
  console.log('terms', termsCheckbox.checked)
  console.log('veggie', veggieSelect.value)
  e.preventDefault()
})