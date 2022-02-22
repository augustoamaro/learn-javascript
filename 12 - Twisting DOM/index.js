const p_tag = document.querySelector('p')
const h1_tag = document.querySelector('h1')
const h2_tag = document.querySelector('h2')
const input = document.querySelectorAll('input')
const lis = document.querySelectorAll('li')
console.log(input)

p_tag.innerText = 'OH YEAH'
h1_tag.textContent = 'XABLIsCO'
h2_tag.innerHTML = 'VAI FICAR DE EXEMPRO'

input[0].checked = true
input[1].setAttribute('min', '0')

for (let i = 0; i < lis.length; i++) {
  lis[i].innerText = 'APERTA A BRABA'
}