const container = document.querySelector('.container');
container.addEventListener('click', function(e){
    if (e.target.className=='close'){
        e.target.parentElement.style.display='none';
        e.preventDefault();  //untuk mengantisipasi apabila ada link yang di click
    }
})