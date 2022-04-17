// Async - 
// Await - Podemos usar await somente dentro de funções. Irá pausar a execução da função, esperar por uma promessa ser resolvida.

const getData = async () => {
    const data = await axios.get('https://swapi.dev/api/planets');
    console.log(data);
}

getData();


async function get3Pokemon() {
    const promise1 = axios.get('http://pokeapi.co/api/v2/pokemon/1');
    const promise2 = axios.get('http://pokeapi.co/api/v2/pokemon/2');
    const promise3 = axios.get('http://pokeapi.co/api/v2/pokemon/3 ');

    const results = await Promise.all([promise1, promise2, promise3]);
    console.log(results);
}

get3Pokemon();