const request = require('request');
const fs = require('fs');

// fazendo requisição para api, retornando no console.


// request('https://ghibliapi.herokuapp.com/films', (error, response, body) => {
//     if (error) {
//         console.error(`Could not send request to API: ${error.message}`);
//         return;
//     }

//     if (response.statusCode != 200) {
//         console.error(`Expected status code 200 but received ${response.statusCode}.`);
//         return;
//     }

//     console.log('Processing our list of movies');
//     movies = JSON.parse(body);
//     movies.forEach(movie => {
//         console.log(`${movie['title']}, ${movie['release_date']}`);
//     });
// });



// fazendo requisição para api, e retornando em um .csv

request('https://ghibliapi.herokuapp.com/films', (error, response, body) => {
    if (error) {
        console.error(`Could not send request to API: ${error.message}`);
        return;
    }

    if (response.statusCode != 200) {
        console.error(`Expected status code 200 but received ${response.statusCode}.`);
        return;
    }

    console.log('Processing our list of movies');
    movies = JSON.parse(body);
    let movieList = '';
    movies.forEach(movie => {
        movieList += `${movie['title']}, ${movie['release_date']}\n`;
    });

    fs.writeFile('callbackMovies.csv', movieList, (error) => {
        if (error) {
            console.error(`Could not save the Ghibli movies to a file: ${error}`);
            return;
        }

        console.log('Saved our list of movies to callbackMovies.csv');;
    });
});
