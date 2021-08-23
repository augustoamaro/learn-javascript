// function outer() {
//     let movie = 'Amadeus';

//     function inner() {
//         let movie = 'The Shining'
//         console.log(movie.toUpperCase());
//     }
//     inner()
// }

function outer() {
    let movie = 'Amadeus';

    function inner() {
        let movie = 'The Shining'
        console.log(movie.toUpperCase());
        function extraInner() {
            console.log(movie.toUpperCase());
        }
        extraInner();
    }
    inner()
}