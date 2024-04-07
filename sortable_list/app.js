//檢查語音設備
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const newSpeechRecognition = new window.SpeechRecognition();
//
const speak = document.querySelector('.say');
const said = document.querySelector('.said');
const number = document.querySelector('.number');
const hilow = document.querySelector('.hilow');
const end = document.querySelector('.end');
const container = document.querySelector('.container');
const restart = document.querySelector('.restart');
let answer
let word

function start() {
  newSpeechRecognition.onresult = function (e) {
    word = e.results[0][0].transcript;
    answer = Number(e.results[0][0].transcript);
    console.log(answer);
    //檢查是否為數字
    if (isNaN(answer)) {
      notNumber();
      return;
    }
    //各類情況判斷
    else if (answer > 100 || answer < 1) {
      numberOver();
      return;
    }
    else if (answer < num) {
      high();
    }
    else if (answer > num) {
      low();
    }
    else {
      right();
    }
  }
  newSpeechRecognition.start();
  newSpeechRecognition.addEventListener("end", () => newSpeechRecognition.start());
}


//低於答案
function high() {
  speak.style.display = 'flex';
  said.innerHTML = '你的答案是';
  number.innerHTML = answer;
  hilow.innerHTML = '高一點';
}
//高於答案
function low() {
  speak.style.display = 'flex';
  said.innerHTML = '你的答案是';
  number.innerHTML = answer;
  hilow.innerHTML = '低一點';
}
//非數字
function notNumber() {
  speak.style.display = 'flex';
  said.innerHTML = '你的答案是';
  number.innerHTML = word;
  hilow.innerHTML = '請輸入1至100之間的數字';
}
//數字超過範圍
function numberOver() {
  speak.style.display = 'flex';
  said.innerHTML = '你的答案是';
  number.innerHTML = answer;
  hilow.innerHTML = '請輸入1至100之間的數字';
}
//答對
function right() {
  end.style.display = 'flex';
  container.style.display = 'none';
  restart.addEventListener('click', () => {
    location.reload();
  });
}

// 隨機1-100亂數
function random() {
  return (Math.floor((Math.random() * 100) + 1));
}
const num = random();
console.log(num);
start();
