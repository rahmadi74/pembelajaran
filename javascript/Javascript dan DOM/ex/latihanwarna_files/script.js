const bUbahWarna = document.getElementById('ubahWarna');
bUbahWarna.onclick = function(){
	bUbahWarna.removeAttribute('style');
    document.body.classList.toggle('biru-muda');
}
const bAcakWarna = document.createElement('button');
const textbAcakWarna = document.createTextNode('Acak Warna');
bAcakWarna.appendChild(textbAcakWarna);
//document.body.appendChild(bAcakWarna);
bUbahWarna.after(bAcakWarna);
bAcakWarna.setAttribute('type','button');
bAcakWarna.setAttribute('id','acakWarna');

bAcakWarna.addEventListener('click',function(){
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    document.body.style.backgroundColor='rgb('+r+','+g+','+b+')';
});
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');
sMerah.addEventListener('input',function(){
    let r = sMerah.value;
    let g = sHijau.value;
    let b = sBiru.value;
    document.body.style.backgroundColor='rgb('+r+','+g+','+b+')';
});
sHijau.addEventListener('input',function(){
    let r = sMerah.value;
    let g = sHijau.value;
    let b = sBiru.value;
    document.body.style.backgroundColor='rgb('+r+','+g+','+b+')';
});
sBiru.addEventListener('input',function(){
    let r = sMerah.value;
    let g = sHijau.value;
    let b = sBiru.value;
    document.body.style.backgroundColor='rgb('+r+','+g+','+b+')';
});
/*
  document.body.addEventListener('mousemove',function(event){
  let r = Math.round((event.clientX/window.innerWidth)*255);
  let g = Math.round((event.clientY/window.innerHeight)*255);
  document.body.style.backgroundColor='rgb('+r+','+g+',100)';
  
})*/
