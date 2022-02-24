const runner = {
    first: 'Hamilton',
    last: 'George',
    race: 'Brasil'
}

const print = (person) => {
    const {first, last, race} = person
    console.log(`${first}, ${last}, ${race}`)
}

print(runner);