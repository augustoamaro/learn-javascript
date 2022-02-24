function fora() {
    let song = 'Singing in the Rain';

    function dentro() {
        let song = 'Housewife';
        console.log(song.toUpperCase());
    }
    dentro()
}

function outer() {
    let movie = '60 Segundos';

    function inner() {
        let movie = 'Velozes e Furiosos'
        console.log(movie.toUpperCase());
        
        function extraInner() {
            console.log(movie.toUpperCase());
        }
        extraInner();
    }
    inner()
}