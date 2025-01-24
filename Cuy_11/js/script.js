// selector to body
const body = document.getElementsByTagName('body')[0];

const merah = document.querySelector('.merah');
const kuning = document.querySelector('.kuning');
const hijau = document.querySelector('.hijau');
const biru = document.querySelector('.biru');

// merah
merah.addEventListener('click', () => {
    body.style.backgroundColor = "rgb(253, 64, 64";
})

// kuning
kuning.addEventListener('click', () => {
    body.style.backgroundColor = "rgb(238, 238, 49)";
})

// hijau
hijau.addEventListener('click', () => {
    body.style.backgroundColor = "rgb(58, 254, 58)";
})

// biru
biru.addEventListener('click', () => {
    body.style.backgroundColor = "rgb(43, 43, 253)";
})