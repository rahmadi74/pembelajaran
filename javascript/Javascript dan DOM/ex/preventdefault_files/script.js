const close = document.querySelectorAll('.close');

// for (let i=0; i<close.length; i++){
//     close[i].addEventListener('click',function(){
//         close[i].parentElement.style.display='none';
//     });
// }

// for (let i=0; i<close.length; i++){
//     close[i].addEventListener('click',function(e){
//         e.target.parentElement.style.display='none';
//     });
// }

// close.forEach((c) => {
//     c.addEventListener('click',function(){
//         c.parentElement.style.display='none';
//     });
// })

close.forEach((c) => {
    c.addEventListener('click',function(e){           //e adalah element yg menangkap aksi click    
        e.target.parentElement.style.display='none';  //e.target merujuk element yg di click
        e.preventDefault();             // ditambahkan untuk mencegah aksi default link <a href>
    });
})