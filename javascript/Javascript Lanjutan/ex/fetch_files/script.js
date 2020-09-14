const searchButton = document.querySelector('.search-button');
let searchInput = document.querySelector('.search-input');
searchButton.addEventListener('click',function(){
  fetch('http://www.omdbapi.com/?apikey=f0203d7c&s='+searchInput.value)
   .then (response => response.json())
   .then (response => {
      const movies = response.Search;
      let card = '';
      movieContainer = document.querySelector('.movie-container');
      if (movies != undefined) {
        movies.forEach( m => {
         card += showCard(m);
        });
        movieContainer.innerHTML=card;
        const detailMovieButton = document.querySelectorAll('.modal-detail-button');
        detailMovieButton.forEach(btn => {
          btn.addEventListener('click', function(){
            const imdbId = this.dataset.imdbid;
            fetch('http://www.omdbapi.com/?apikey=f0203d7c&i='+imdbId)
             .then (result =>result.json())
             .then (result => {
               const dataMovieDetail = showDetailMovie(result);
               modalBody = document.querySelector('.modal-body');
               modalBody.innerHTML=dataMovieDetail;
             });
          })
        })
      } else {
        movieContainer.innerHTML='<h5>Data Tidak Ditemukan!..</h5>';
      }
    });
});

function showCard(m){
  return `
  <div class="col-md-4 my-3">
    <div class="card" style="width: 18rem;">
      <img src="${m.Poster}" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">${m.Title}</h5>
        <h5 class="card-subtitle mb-2 text-muted">${m.Year}</h5>
        <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
      </div>
    </div>
  </div>
      `
}
function showDetailMovie(result){
  return `
<div class="container-fluid">
  <div class="row">
    <div class="col-md-3">
      <img src="${result.Poster}" class="img-fluid">
    </div>
    <div class="col">
      <ul class="list-group">
        <li class="list-group-item"><h4>${result.Title} (${result.Year})</h4></li>
        <li class="list-group-item"><strong>Director:</strong> ${result.Director}</li>
        <li class="list-group-item"><strong>Actor:</strong> ${result.Actors}</li>
        <li class="list-group-item"><strong>Writer:</strong> ${result.Writer}</li>
        <li class="list-group-item"><strong>Plot:</strong><br>${result.Plot}</li>
      </ul>
    </div>
  </div>
</div>         
  `
}