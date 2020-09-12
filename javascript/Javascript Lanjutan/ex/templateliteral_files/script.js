// 1. LOOPING
// const mhs = [
//     {
//         nama: 'Sandhika Galih',
//         email: 'sandhikagalih@unpas.ac.id'
//     },
//     {
//         nama: 'Doddy Ferdiansyah',
//         email: 'doddy@unpas.ac.id'
//     }]
// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>`
//     ).join('') //untuk menghilangkan tanda kota
//     }
// </div>`;

// 2. CONDITIONAL TERNARY
// const lagu = {
//     judul: 'Tetap Dalam Jiwa',
//     penyanyi: 'Isyana Sarasvati'
//     //,feat: 'Muhammad Rahmadi'
// }
// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.judul}</li>
//         <li>${lagu.penyanyi} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//     </ul>
// </div>`

// 3. NESTED / HTML FRAGMEN BERSARANG
const mhs = {
    nama: 'Sandhika Galih',
    semester: 5,
    matakuliah: [
        'Rekayasa Web','Pemrograman Sistem Interatif','Perancangan Sistem Berorentasi Object'
]};
function cetakMatakuliah(matakuliah){
    return `
        <ol>
            ${matakuliah.map(mk => `<li>${mk}</li>`).join('')}
        </ol>
    `
}
const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester : ${mhs.semester}
    <h4>Matakuliah :</h4>
    ${cetakMatakuliah(mhs.matakuliah)}
</div>`
document.body.innerHTML=el;