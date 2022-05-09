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

let isHighRegister = false;
let isRuLang = false;
let flag = true;
let checkCtrl = false;

keykey.forEach((el, i) => {
  el.classList.add(codes[i]);
});

document.addEventListener('keyup', (event) => {
  if (codes) {
    document.querySelector(`.${event.code}.act`).classList.remove('active');
  }
});

const caseDownRu = document.querySelectorAll('.keyK.ru.keyDown');
const caseUPEn = document.querySelectorAll('.keyK.en.keyUp');
const caseDownEn = document.querySelectorAll('.keyK.en.keyDown');
const caseUPRu = document.querySelectorAll('.keyK.ru.keyUp');

function isCapslock() {
  if (isRuLang) {
    if (isHighRegister === false) {
      caseDownRu.forEach((e) => e.classList.add('hidden'));
      caseDownRu.forEach((e) => e.classList.remove('act'));
      caseUPRu.forEach((e) => e.classList.remove('hidden'));
      caseUPRu.forEach((e) => e.classList.add('act'));
      isHighRegister = true;
    } else {
      caseDownRu.forEach((e) => e.classList.remove('hidden'));
      caseDownRu.forEach((e) => e.classList.add('act'));
      caseUPRu.forEach((e) => e.classList.add('hidden'));
      caseUPRu.forEach((e) => e.classList.remove('act'));
      isHighRegister = false;
    }
  } else if (isHighRegister === false) {
    caseDownEn.forEach((e) => e.classList.add('hidden'));
    caseDownEn.forEach((e) => e.classList.remove('act'));
    caseUPEn.forEach((e) => e.classList.remove('hidden'));
    caseUPEn.forEach((e) => e.classList.add('act'));
    isHighRegister = true;
  } else {
    caseDownEn.forEach((e) => e.classList.remove('hidden'));
    caseDownEn.forEach((e) => e.classList.add('act'));
    caseUPEn.forEach((e) => e.classList.add('hidden'));
    caseUPEn.forEach((e) => e.classList.remove('act'));
    isHighRegister = false;
  }
}

function isShift() {
  isCapslock();
}

const ruBtns = document.querySelectorAll('.keyK.ru');
const enBtns = document.querySelectorAll('.keyK.en');

function change() {
  const language = JSON.parse(isRuLang);
  localStorage.setItem('isRuLang', language);
  localStorage.getItem('isRuLang');
}

const changeLang = () => {
  if (isRuLang) {
    ruBtns.forEach((e) => {
      e.classList.add('hidden');
    });
    enBtns.forEach((e) => {
      e.classList.remove('hidden');
    });

    isRuLang = false;
    if (isHighRegister) {
      caseDownEn.forEach((e) => e.classList.add('hidden'));
      caseDownEn.forEach((e) => e.classList.remove('act'));
      caseUPEn.forEach((e) => e.classList.remove('hidden'));
      caseUPEn.forEach((e) => e.classList.add('act'));

      isHighRegister = true;
    } else {
      caseDownEn.forEach((e) => e.classList.remove('hidden'));
      caseDownEn.forEach((e) => e.classList.add('act'));
      caseUPEn.forEach((e) => e.classList.add('hidden'));
      caseUPEn.forEach((e) => e.classList.remove('act'));
      isHighRegister = false;
    }
  } else {
    ruBtns.forEach((e) => {
      e.classList.remove('hidden');
    });
    enBtns.forEach((e) => {
      e.classList.add('hidden');
    });

    caseUPEn.forEach((e) => {
      e.classList.add('hidden');
      e.classList.remove('act');
    });
    caseDownEn.forEach((e) => {
      e.classList.add('hidden');
      e.classList.remove('act');
    });

    isRuLang = true;
    if (isHighRegister) {
      caseDownRu.forEach((e) => e.classList.add('hidden'));
      caseDownRu.forEach((e) => e.classList.remove('act'));
      caseUPRu.forEach((e) => e.classList.remove('hidden'));
      caseUPRu.forEach((e) => e.classList.add('act'));
      isHighRegister = true;
    } else {
      caseDownRu.forEach((e) => e.classList.remove('hidden'));
      caseDownRu.forEach((e) => e.classList.add('act'));
      caseUPRu.forEach((e) => e.classList.add('hidden'));
      caseUPRu.forEach((e) => e.classList.remove('act'));
      isHighRegister = false;
    }
  }
};
changeLang();

function input(letter) {
  const arr = textArea.value.split('');
  const position = textArea.selectionStart;
  arr.splice(position, 0, letter);
  textArea.value = arr.join('');
  textArea.selectionStart = position + 1;
  textArea.selectionEnd = position + 1;
}

textArea.focus();
textArea.addEventListener('blur', () => textArea.focus());

const footer = document.createElement('footer');
footer.innerHTML = '<p>Для переключения языка комбинация: левые Ctrl + Alt Left <br >OS Windows</p>';
document.body.appendChild(footer);
