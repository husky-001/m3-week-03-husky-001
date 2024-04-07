const list = [
    'Apple Inc',
    'Amazon.com Inc.',
    'Microsoft',
    'Google',
    'Samsung',
    'Coca - Cola',
    'Toyota',
    'Mercedes - Benz',
    'McDonald',
    'Disney'
];
let dragStartIndex;
//將原本數列重新排列
const boxs = document.querySelectorAll('.item.box');
let newList = [...list];
const sort = newList.map((e, sorts) => ({name:e, sorts: Math.random()}));
sort.sort((a, b) => a.sorts - b.sorts);
newList = sort.map(e => e.name);

// let a = newList.sort(() => Math.random()-0.5);

//載入新數列
function reload(){
for (let i = 0; i < 10; i++) {
    const h2 = document.createElement('h2');
    h2.innerHTML = newList[i];
    h2.draggable = true;
    h2.className = "num";
    boxs[i].appendChild(h2);
}};

//拖曳起始
function startDrag(a) {
    a.target.classList.add('dragstart');   
    dragStartIndex = this.closest('div').getAttribute('data-index');
    // console.log(dragStartIndex);
}
//拖曳經過   預防默認行為
function dragover(a) {
    a.preventDefault();
}
//拖曳放下
function drop(a) {
    const dragEndIndex = +this.getAttribute('data-index')
    a.target.classList.remove('dragstart');
    swapItems(dragStartIndex,dragEndIndex);
}
function dragEnter(a) {
    a.target.classList.add('dragstart');
}
function dragLeave(a) {
    a.target.classList.remove('dragstart');
}
//轉換拖曳目標資料
function swapItems(a,b){
    const itemOne = boxs[a].querySelector('.num');
    const itemTwo = boxs[b].querySelector('.num');
    boxs[a].appendChild(itemTwo);
    boxs[b].appendChild(itemOne);
}
//監視所有數列拖曳功能
boxs.forEach((e) => {
    e.addEventListener('dragover', dragover);
    e.addEventListener('dragstart', startDrag);
    e.addEventListener('dragenter', dragEnter);
    e.addEventListener('dragleave', dragLeave);
    e.addEventListener('drop', drop);
});
//檢查排序
function checkOrder(){
    boxs.forEach(function(box, index){
        const name = box.querySelector('.num').innerText.trim();
         if(name !== list[index]){
            box.classList.add('wrong');
            box.classList.remove('right');
        }else {
            box.classList.remove('wrong');
            box.classList.add('right');
        }
    })
}
reload();
document.getElementById('check').addEventListener('click', checkOrder);

