const btn = document.querySelector('[btn]')

btn.addEventListener('mouseover', function() {
  console.log('passou')
  btn.style.left = '200px'
  btn.style.top = '100px'
})