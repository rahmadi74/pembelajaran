$('.search-button').on('click', function(){
  $.ajax({
    url:'http://www.omdbapi.com/?apikey=f0203d7c&s=' + $('.search-input').val(),
    success: result => {
        const movies = result.Search;
        if (movies!=undefined){
          let cards = '';
          movies.forEach (m => {
              cards += showCard(m);
          });
          $('.movie-container').html(cards);
          $('.modal-detail-button').on('click', function(){
          $.ajax({
              url: 'http://www.omdbapi.com/?apikey=f0203d7c&i='+$(this).data('imdbid'),
              success: result => {
                  let modalDetailMovie = showDetailMovie(result);
                $('.modal-body').html(modalDetailMovie);
              }
          })
        }) 
        } else {
          $('.movie-container').html('<h5>Data Tidak Ditemukan</h5>');
        }
    },
    error: (e) => {
        $('.movie-container').html(e.responseText);
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