//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

export function getTopTenMovies() {
    fetch("/top10.json").then(function(res){
        if (res.ok) {
            return res.json()
        } else {
            throw Error("API call failed!!!!")
        }
    }).then(function(movies){
        for (let movie of movies) {
            let movieHTML = `
            <div class="card">
                <img src="${movie.poster}" alt="A Top 10 Movie" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${movie.title} (${movie.year})</h5>
                    <p class="card-text">
                        ${movie.plot}
                        <strong>${movie.genre}</strong>
                        ${movie.rating}
                        ${movie.votes}
                    </p>
                </div>
            </div>
            `

            let col = document.createElement("div")
            col.classList.add("col")
            col.innerHTML = movieHTML

            let grid = document.querySelector(".movies")
            grid.appendChild(col)
        }
    }).catch(function(err){
        document.querySelector('.movies').innerHTML = `
        <p>Failed to download the requested data.</p>
        `
    })
}

getTopTenMovies()