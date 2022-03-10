const form = document.querySelector('#signup-form');

form.addEventListener('submit', function(e) {
  alert('submited');
  e.preventDefault()
})