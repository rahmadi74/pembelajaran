const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function(){
  try {
    let searchInput = document.querySelector('.search-input');
    const movies = await getMovies(searchInput.value);
    updateUI (movies);
  } catch(err) {
    alert(err);
  }
 })

 //event binding
 document.addEventListener('click', async function(e){
  try {
    if (e.target.classList.contains('modal-detail-button')) {
      const imdbId = e.target.dataset.imdbid;
      const movieDetail = await getMovieDetail(imdbId);
      updateUIDetail(movieDetail);
    } 
  } catch (err) {
      alert (err);
  }
 });

 function updateUIDetail(movieDetail){
   const htmlMovieDetail = showDetailMovie(movieDetail);
   const modalBody = document.querySelector('.modal-body');
   modalBody.innerHTML = htmlMovieDetail;
 }

 function getMovieDetail(imdbId){
  return fetch('http://www.omdbapi.com/?apikey=f0203d7c&i='+imdbId)
  .then (m =>m.json())
  .then (m => m);  
 }

 function updateUI (movies){
    let card='';
    movies.forEach(m => card += showCard(m));
    const movieContainer=document.querySelector('.movie-container'); 
    movieContainer.innerHTML=card;
 }

function getMovies(searchInput){
  return fetch('http://www.omdbapi.com/?apikey=f0203d7c&s='+searchInput)
  .then (response => {
    if (!response.ok) {
      throw new Error (response.statusText);
    }
    else {
      return response.json();
    }
  })
  .then (response => response.Search);
}

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