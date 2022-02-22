// const API = "c41fbd5cfd39aa4a516bdefffae72a03"

async function fetchMovie() {
    
    url = "https://imdb-api.com/en/API/MostPopularMovies/k_sopto3ua";
    try {
        let response = await fetch(url);
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

// display the items in a card

async function renderMovie() {
    let movies = await fetchMovie();
    let html = "";
    console.log(typeof(movies));
    console.log(movies);
    
    let movieArray = movies.items;
    let shortMovieList = movieArray.slice(0, 10);


    shortMovieList.forEach(element => {
        // console.log(element);
        let card = `<div class="card">
            <h5>${element.title}</h5>
            <img class="images" src="${element.image}" />
        </div>
        `;
        html += card;
    });
    

    // Object.values(movies).forEach(movie => {
        

    //     console.log(movieArray);

        // let card = `<div class="card">
                        
        //                 <h5>${movie.title}</h5>
        //             </div>`;
        // html += card;
        // console.log(movie.image);
        

        
        
    // });

    let container = document.querySelector('.container');
    container.innerHTML = html;
    

}

renderMovie();


