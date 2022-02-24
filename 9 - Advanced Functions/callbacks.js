// Callback é uma função passada para outra função como argumento.
// Que é invocada dentro de outra função

function grumpus() {
    alert("GAHHH GO AWAY!")
  }
  
  // setTimeout(callback, delay)
  setTimeout(function () { // passamos uma anonymous callback function
    alert("WELCOME!");
  }, 5000);
  
  

  const btn = document.querySelector('button');
  btn.addEventListener('click', function () {
    alert("WHY DID YOU CLICK ME!!??")
  })