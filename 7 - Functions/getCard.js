function randomPick(arr) {
    const random = Math.floor(Math.random() * arr.length);
    return arr[random];
}

function getCard() {
    const values = [ 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const suits = ['Clubs', 'Spades', 'Hearts', 'Diamonds'];

    console.log(
        {
            value: randomPick(values), 
            suit: randomPick(suits)
        });
}

getCard();