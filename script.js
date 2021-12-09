var button_ta = document.getElementsByTagName('button')[0];
var audio_ta = new Audio('sounds/TA.wav');

var button_te = document.getElementsByTagName('button')[1];
var audio_te = new Audio('sounds/TE.wav');

var button_teh = document.getElementsByTagName('button')[2];
var audio_teh = new Audio('sounds/TEH.wav');

var button_to = document.getElementsByTagName('button')[3];
var audio_to = new Audio('sounds/TO.wav');

var button_toh = document.getElementsByTagName('button')[4];
var audio_toh = new Audio('sounds/TOH.wav');

var button_tu = document.getElementsByTagName('button')[5];
var audio_tu = new Audio('sounds/TU.wav');

button_ta.addEventListener('click', function () {
    audio_ta.play();
});

button_te.addEventListener('click', function () {
    audio_te.play();
});

button_teh.addEventListener('click', function () {
    audio_teh.play();
});

button_to.addEventListener('click', function () {
    audio_to.play();
});

button_toh.addEventListener('click', function () {
    audio_toh.play();
});

button_tu.addEventListener('click', function () {
    audio_tu.play();
});

var button_pa = document.getElementsByTagName('button')[6];
var audio_pa = new Audio('sounds/PA.wav');

var button_pe = document.getElementsByTagName('button')[7];
var audio_pe = new Audio('sounds/PE.wav');

var button_peh = document.getElementsByTagName('button')[8];
var audio_peh = new Audio('sounds/PEH.wav');

var button_po = document.getElementsByTagName('button')[9];
var audio_po = new Audio('sounds/PO.wav');

var button_poh = document.getElementsByTagName('button')[10];
var audio_poh = new Audio('sounds/POH.wav');

var button_pu = document.getElementsByTagName('button')[11];
var audio_pu = new Audio('sounds/PU.wav');

button_pa.addEventListener('click', function () {
    audio_pa.play();
});

button_pe.addEventListener('click', function () {
    audio_pe.play();
});

button_peh.addEventListener('click', function () {
    audio_peh.play();
});

button_po.addEventListener('click', function () {
    audio_po.play();
});

button_poh.addEventListener('click', function () {
    audio_poh.play();
});

button_pu.addEventListener('click', function () {
    audio_pu.play();
});

var lista_audio = [audio_ta, audio_te, audio_teh, audio_to, audio_toh, audio_tu, audio_pa, audio_pe, audio_peh, audio_po, audio_poh, audio_pu];

var aleatorio = Math.floor(Math.random() * lista_audio.length);

console.log(aleatorio);