//ambil semua element
const videos = Array.from(document.querySelectorAll('[data-duration]'));
//pilih hanya yang javascript lanjutan
let jslanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))
//ambil durasi masing-masing video
.map(item => item.dataset.duration)
//ubah durasi menjadi float, ubah menit menjadi detik
.map(waktu => {
    //10:30  -> [10,30] split
    const parts = waktu.split(':')
    //ubah string parts menjadi float
        .map(part => parseFloat(part));

    return ((parts[0]*60)+parts[1]);
})
//jumlahkan semua detik
.reduce((total,detik) => total+detik,0)

//ubah formatnya menjadi jam,menit dan detik
const jam = Math.floor(jslanjut/3600);
jslanjut = jslanjut-(jam*3600);
const menit = Math.floor(jslanjut/60);
const detik = jslanjut-(menit*60);

//simpan di DOM
const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pjmlVideo = document.querySelector('.jumlah-video');
pjmlVideo.textContent = `${jmlVideo} video`;
const ptotalDurasi = document.querySelector('.total-durasi');
ptotalDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik`;