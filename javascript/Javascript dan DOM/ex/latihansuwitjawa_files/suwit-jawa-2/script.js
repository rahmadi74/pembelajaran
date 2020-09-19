const imgPilComp = document.querySelector('div.area-komputer img')
const liButton = document.querySelectorAll('ul li');
liButton.forEach(p => {
    p.addEventListener('click', function(){
        putar();
        setTimeout(() => {
            let pilComp = getPilihanComp();
            const imgPlayer = p.querySelector('img');
            let pilPlayer = imgPlayer.className;
            let hasil = getHasil(pilPlayer,pilComp);
            const info = document.querySelector('.info');
            const imgComp = document.querySelector('div.area-komputer img');
            imgComp.setAttribute('src','img/'+pilComp+'.png')
            info.innerHTML=hasil;
        },1000);           
    });

})

function putar(){
    const pilihan = ['gajah','orang','semut'];
    const imgComp = document.querySelector('div.area-komputer img');
    let i=0;
    const waktuMulai = new Date().getTime();
    setInterval(function(){
        if ((new Date().getTime()-waktuMulai)>=1000) {
            clearInterval();
            return;
        }
        imgComp.setAttribute('src','img/'+pilihan[i++]+'.png');
        if (i==pilihan.length) {i=0}
    },100); 
}

function getPilihanComp(){
    let pComp = '';
    let r = Math.random();
    if (r<0.34){
        pComp='gajah';
    } else if (r>=0.34 && r<0.67) {
        pComp='orang';
    } else {pComp = 'semut'}
    return pComp;
};
function getHasil (pilPlayer,pilComp){
    let hasil='';
    if (pilPlayer==pilComp){
        hasil='SERI';
    } else if (pilPlayer=='gajah'){
        if (pilComp=='orang'){hasil='MENANG'} else {hasil='KALAH'};
    } else if (pilPlayer=='orang'){
        if (pilComp=='gajah'){hasil='KALAH'} else {hasil='MENANG'};
    } else if (pilPlayer=='semut'){
        if (pilComp=='orang'){hasil='KALAH'} else (hasil='MENANG')
    }
    return hasil;
}

