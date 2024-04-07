// const titles = document.querySelectorAll('.title');
const boxes = document.querySelectorAll('.box');  


boxes.forEach(box =>  
    box.addEventListener('click', function () {   //鼠表點擊後執行
        this.classList.toggle('active');   //對選中的物件更改HTML格式  box也可以用this代替
        boxes.forEach(otherbox => {
            // 移除沒被選擇的元素 
            if (otherbox !== this) {   //如果不是當下選取到的物件
                otherbox.classList.remove('active');
            }
        });
    })
    );