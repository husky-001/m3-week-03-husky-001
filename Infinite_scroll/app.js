const inside = document.querySelector('.inside');
const loading = document.querySelector('.loading');
const filterInput = document.getElementById('filter');

//隨機標題
const titles = [ 'i am a dog', 'i am a cat', 'i am lazy boy', 'ohohoh'];
//隨機段落文字
const texts = [
    '排版應該有進步了吧 排版應該有進步了吧 排版應該有進步了吧 排版應該有進步了吧 排版應該有進步了吧 排版應該有進步了吧 排版應該有進步了吧 排版應該有進步了吧',
    ' 心態炸裂 心態炸裂 心態炸裂 心態炸裂 心態炸裂 心態炸裂 心態炸裂 心態炸裂 心態炸裂 心態炸裂 心態炸裂 心態炸裂 心態炸裂 心態炸裂',
    '今天打羽球閃到腰 要屎了 今天打羽球閃到腰 要屎了 今天打羽球閃到腰 要屎了 今天打羽球閃到腰 要屎了 今天打羽球閃到腰 要屎了 今天打羽球閃到腰 要屎了 今天打羽球閃到腰 要屎了',
    '啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪啾咪'
];

//載入動畫+載入新div
function showload() {
    loading.classList.add('show');
    setTimeout(() => { loading.classList.remove('show'), setTimeout(() => { create() }, 300); }, 1000);
};

//隨機選取0-4 
function random() {
    return Math.floor(Math.random() * 4)
};

//計算左上角標題
let i = 0
function num() {
    i++;
    return i;
};

//載入的div格式
function create() {
    const newCircle = document.createElement('div');
    newCircle.classList.add('circle');
    newCircle.innerHTML = `
    <div class="number">${num()}</div>   
            <div class="info">
                 <!-- 隨機選取標題跟文字段落 -->
                 <h2 class="title">${titles[random()]}</h2>   
                 <p class="text">${texts[random()]}</p>
            </div>
            `;
    inside.appendChild(newCircle);
};

//搜尋功能
filterInput.addEventListener('input', function () {
    const inputValue = filterInput.value.toLowerCase();  
    const circles = document.querySelectorAll('.circle');

    circles.forEach(circle  => {
        const title = circle.querySelector('.title').textContent.toLowerCase();
        const text = circle.querySelector('.text').textContent.toLowerCase();
        const number1 = circle.querySelector('.number').textContent.toLowerCase();
        

        if (title.includes(inputValue) || text.includes(inputValue) || number1.includes(inputValue)) {
            circle.style.display = 'flex';
        } else {
            circle.style.display = 'none';
        }
    });
});



create();
create();
create();
create();
create();
create();
create();
create();
create();

window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight - 5) {
        showload();
    }
});

