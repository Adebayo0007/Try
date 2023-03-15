const API_KEY = '5d53682f42dd892812989c4c2ed92f26';
const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
// const Api = "http://localhost:5161/api/Student/GetByName/Ade";

fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        console.log(data.results);
        const movies = data.results;
        const movieList = document.getElementById('movie-list');
        movieList.innerHTML = '';

        movies.forEach(movie => {
            const movieItem = document.createElement('div');
            movieItem.classList.add('movie-item');

            const title = document.createElement('h2');
            title.textContent = movie.title;

            // const reviews = document.createElement('h2');
            // title.textContent = movie.;

            const poster = document.createElement('img');
            poster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            const link = document.createElement('a');
            link.href = `https://www.youtube.com/watch?v=_Z3QKkl1WyM`;
            // link.href = `${movie}`;
            link.textContent = "Click";

            // const discribe = document.createElement('h2');
            // discribe.textContent = `${movie.}`;
        

            movieItem.appendChild(title);
            movieItem.appendChild(poster);
            movieItem.appendChild(link);
            // movieItem.appendChild(media_title);
            movieList.appendChild(movieItem);
            // movieList.appendChild(media_title);
        });
    })
    .catch(error => console.error(error));
