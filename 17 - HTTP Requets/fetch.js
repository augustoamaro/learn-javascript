const url = 'https://pokeapi.co/api/v2/pokemon/abra';



fetch(url)
    .then((response) => {
        if (!response.ok)
            throw new Error(`Status Code Error: ${response.status}`);

        return response.json()
    })
    .then((data) => {
        for (let skill of data.abilities) {
            console.log(skill)
            console.log(skill.ability.name);
        }
    }).catch((err) => {
        console.log('Something wrong with fetch');
        console.log(err);
    })

