const axios = require('axios');
const fs = require('fs').promises;

// chamapa para api com axios, e retornando a resposta no console.

// axios.get('https://ghibliapi.herokuapp.com/films')
//     .then((response) => {
//         console.log('Successfully retrieved our list of movies');
//         response.data.forEach(movie => {
//             console.log(`${movie['title']}, ${movie['release_date']}`);
//         });
//     })



// chamada para api com axios, salvando a resposta em uma .csv

axios.get('https://ghibliapi.herokuapp.com/films')
    .then((response) => {
        console.log('Successfully retrieved our list of movies');
        let movieList = '';
        response.data.forEach(movie => {
            movieList += `${movie['title']}, ${movie['release_date']}\n`;
        });

        return fs.writeFile('promiseMovies.csv', movieList);
    })
    .then(() => {
        console.log('Saved our list of movies to promiseMovies.csv');
    })
    .catch((error) => {
        console.error(`Could not save the Ghibli movies to a file: ${error}`);
    });
