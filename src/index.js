import './styles/styles.css';
import {
  keyNumberEn, keyNumberRu, keyNumberUpRu, keyNumberUpEn,
  keyEngLow, keyRuLow, keyEngUp, keyRuUp,
  keyEngLow1, keyEngUp1, keyRuLow1, keyRuUp1,
  keyEngLow2, keyEngUp2, keyRuLow2, keyRuUp2, codes,
} from './Key';

const textArea = document.createElement('textarea');
textArea.className = 'textarea';
document.body.appendChild(textArea);

const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
document.body.appendChild(keyboard);

let out = [];

// const lang = localStorage.getItem('ruBtns');

for (let i = 0; i < keyNumberEn.length; i += 1) {
  out += `<div class="keyK act en keyDown" >${String.fromCharCode(keyNumberEn[i])}</div>`;
  out += `<div class="keyK en hidden keyUp" >${String.fromCharCode(keyNumberUpEn[i])}</div>`;
  out += `<div class="keyK hidden ru keyDown" >${String.fromCharCode(keyNumberRu[i])}</div>`;
  out += `<div class="keyK hidden ru keyUp">${String.fromCharCode(keyNumberUpRu[i])}</div>`;
}

out += '<div class="keyK BackSpace act"> BackSpace </div>';
out += '<div class="keyK Tab act "> Tab </div>';

for (let i = 0; i < keyEngLow.length; i += 1) {
  out += `<div class="keyK act en keyDown">${String.fromCharCode(keyEngLow[i])}</div>`;
  out += `<div class="keyK en hidden keyUp">${String.fromCharCode(keyEngUp[i])}</div>`;
  out += `<div class="keyK hidden ru keyDown">${String.fromCharCode(keyRuLow[i])}</div>`;
  out += `<div class="keyK hidden ru keyUp">${String.fromCharCode(keyRuUp[i])}</div>`;
}
out += '<div class="keyK Del act "> Del </div>';
out += '<div class="keyK CapsLock act">CapsLock </div>';

for (let i = 0; i < keyEngLow1.length; i += 1) {
  out += `<div class="keyK en keyDown act ">${String.fromCharCode(keyEngLow1[i])}</div>`;
  out += `<div class="keyK en hidden keyUp">${String.fromCharCode(keyEngUp1[i])}</div>`;
  out += `<div class="keyK hidden ru keyDown">${String.fromCharCode(keyRuLow1[i])}</div>`;
  out += `<div class="keyK hidden ru keyUp">${String.fromCharCode(keyRuUp1[i])}</div>`;
}

out += '<div class="Enter keyK act"> Enter </div>';
out += '<div class=" Shift ShiftLeft keyK act"> Shift </div>';

for (let i = 0; i < keyEngLow2.length; i += 1) {
  out += `<div class="keyK act en keyDown">${String.fromCharCode(keyEngLow2[i])}</div>`;
  out += `<div class="keyK en hidden keyUp">${String.fromCharCode(keyEngUp2[i])}</div>`;
  out += `<div class="keyK hidden ru keyDown">${String.fromCharCode(keyRuLow2[i])}</div>`;
  out += `<div class="keyK hidden ru keyUp">${String.fromCharCode(keyRuUp2[i])}</div>`;
}
out += '<div class="keyK act ArrowUp"> ▲ </div>';
out += '<div class="ShiftRight keyK act "> Shift </div>';
out += '<div class="keyK CtrlLeft act">Ctrl</div>';
out += '<div class="keyK Win act ">Win</div>';
out += '<div class="keyK Alt act ">Alt</div>';
out += '<div class="Space keyK act "> </div>';
out += '<div class="keyK Alt act ">Alt</div>';
out += '<div class="keyK ArrowLeft act ">◄</div>';
out += '<div class="keyK ArrowDown act ">▼</div>';
out += '<div class="keyK ArrowRight act ">►</div>';
out += '<div class="keyK CtrlRight act">Ctrl</div>';

document.querySelector('.keyboard').innerHTML = out;

const keykey = document.querySelectorAll('.keyK');

const footer = document.createElement('footer');
footer.innerHTML = '<p>Для переключения языка комбинация: левые Ctrl + Alt Left <br >OS Windows</p>';
document.body.appendChild(footer);
