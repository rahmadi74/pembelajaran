//const jumbo = document.querySelector('div.container .jumbo');
// tumbs = document.querySelectorAll('div.tumbnail .tumb');
// tumbs.forEach(function (tumb){
//     tumb.addEventListener('click',function(){
//         const img=this.getAttribute('src');  
//         jumbo.setAttribute('src',img);
//     });
// })

const container = document.querySelector('.container');
const jumbo=container.querySelector('.jumbo');
const tumbs=container.querySelectorAll('.tumb');
container.addEventListener('click',function(e){
    if (e.target.className='tumb'){
        //const img=e.target.getAttribute('src');        
        //jumbo.setAttribute('src',img);
        jumbo.src=e.target.src;
        jumbo.classList.add('fade');
        setTimeout(() => {
          jumbo.classList.remove('fade');  
        }, 500);
        tumbs.forEach(tumb => {
            //if (tumb.classList.contains('active')) tumb.classList.remove('active');
            tumb.className='tumb';
        });
        e.target.classList.add('active');
    }
});
