// const API = "c41fbd5cfd39aa4a516bdefffae72a03"

// getting elements from the page
let hamburgerBtn = document.querySelector(".hamburger-menu .hamburger-btn");
let sidebar = document.querySelector(".sidebar-section");


let showSidebar = false;

// when hamburgerBtn is clicked
hamburgerBtn.onclick = (e) => {
    
    if(!showSidebar) {
        sidebar.classList.add("showSidebar");
        showSidebar = true;
    } else {
        sidebar.classList.remove("showSidebar");
        showSidebar = false;
    }
    e.preventDefault();
}


// async function fetchMovie() {
    
//     url = "https://imdb-api.com/en/API/MostPopularMovies/k_sopto3ua";
//     try {
//         let response = await fetch(url);
//         let data = await response.json();
//         return data;
//     } catch (error) {
//         console.log(error)
//     }
// }

// // display the items in a card

// async function renderMovie() {
//     let movies = await fetchMovie();
//     let html = "";
//     console.log(typeof(movies));
//     console.log(movies);
    
//     let movieArray = movies.items;
//     let shortMovieList = movieArray.slice(0, 10);


//     shortMovieList.forEach(element => {
//         // console.log(element);
//         let card = 
//         `<div class="card">
//             <img class="images" src="${element.image}" />
//             <h5 class="title title-font">${element.title}</h5>
//         </div>
//         `;
//         html += card;
//     });
    

//     let container = document.querySelector('.container');
//     container.innerHTML = html;
    

// }

// renderMovie();


