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

close.forEach((c) => {
    c.addEventListener('click',function(){
        c.parentElement.style.display='none';
    });
})