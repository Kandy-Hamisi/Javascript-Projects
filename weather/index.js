// const API = "c41fbd5cfd39aa4a516bdefffae72a03";

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
    console.log(movies);

    Object.values(movies).forEach(movie => {
        // let card = `<div class="card">
                        
        //                 <h5>${movie.title}</h5>
        //             </div>`;
        // html += card;
        // console.log(movie.image);
        
        
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
    

}

renderMovie();