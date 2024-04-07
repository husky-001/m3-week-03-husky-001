const days = document.querySelector('.days');
const hour = document.querySelector('.hour');
const minutes = document.querySelector('.minutes');
const sec = document.querySelector('.sec');
const img = document.querySelector('.img1');
const box = document.querySelector('.box');


const targetDate = new Date('2024-12-31');
const currentDate = new Date();


function set() {
    //取得現在時間  設定倒數時間
    const targetDate = new Date('2025-1-1');
    const currentDate = new Date(); //現在時間
    const timeDiff = targetDate - currentDate;  
    d = Math.floor(timeDiff / (1000 * 60 * 60 * 24));   
    h = Math.floor(timeDiff / (1000 * 60 * 60) % 24);
    m = Math.floor(timeDiff / (1000 * 60) % 60);
    s = Math.floor(timeDiff / (1000) % 60);
    // console.log(d, h, m, s);
    //更改內文
    days.textContent = d;
    hour.textContent = h;
    minutes.textContent = m;
    sec.textContent = s; 
}
setInterval(set,1000);   //每秒執行
start();

//轉圈圈gif消失
function start(){
    box.style.display = 'none'
    setTimeout(() => {
        box.style.display = 'flex'
        img.style.display = 'none'
    }, 1000);
}