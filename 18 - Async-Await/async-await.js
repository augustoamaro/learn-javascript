// Async - 
// Await - Podemos usar await somente dentro de funções. Irá pausar a execução da função, esperar por uma promessa ser resolvida.

const getData = async () => {
    const data = await axios.get('https://swapi.dev/api/planets')
    console.log(data)
}

getData()