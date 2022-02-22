const p_tag = document.querySelector('p')
const h1_tag = document.querySelector('h1')
const h2_tag = document.querySelector('h2')
const input = document.querySelectorAll('input')
const lis = document.querySelectorAll('li')
const section = document.querySelector('section')
console.log(input)

p_tag.innerText = 'OH YEAH'
h1_tag.textContent = 'XABLIsCO'
h2_tag.innerHTML = 'VAI FICAR DE EXEMPRO'

input[0].checked = true
input[1].setAttribute('min', '0')

for (let i = 0; i < lis.length; i++) {
  lis[i].innerText = 'APERTA A BRABA'
}

h1_tag.style.color = 'yellow';
h1_tag.style.fontWeight = 'bold'
h1_tag.style.backgroundColor = 'red';

const novo_h1 = document.createElement('h1')

novo_h1.innerText = 'H1 criado'
section.appendChild(novo_h1)

//removeChild, remove
