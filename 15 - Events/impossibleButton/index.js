const btn = document.querySelector('[btn]')

btn.addEventListener('mouseover', function() {
  console.log('passou')
  const heigth = Math.floor(Math.random() * window.innerHeight)
  const width = Math.floor(Math.random() * window.innerWidth)
  btn.style.left = `${width}px`;
  btn.style.top = `${heigth}px`;
});

btn.addEventListener('click', function() {
  btn.innerText = 'Clicou'
  document.body.style.backgroundColor = 'green';
})