//公告跑馬燈
function loadInformation() {
    var list = document.querySelector('.list');
    var box = document.querySelector('.box');

    if (!list || !box) return;

    list.innerHTML += list.innerHTML;
    list.innerHTML += list.innerHTML; //文字重跑一次有會有斷點，再多加一個.
    let left = 0;
    let timer;

    function move() {
        clearInterval(timer);
        timer = setInterval(() => {
            left = left - 2;
            let contentWidth = list.offsetWidth / 2;

            if (Math.abs(left) >= contentWidth) {
                left = 0;
            }
            list.style.left = left + 'px';
        }, 20);
    }
    move();
}

//圖片跑馬燈
function loadPraying() {
    var music = document.getElementById('bgMusic');
    var list = document.querySelector('.list-praying');
    var box = document.querySelector('.prayingbox');
    if (!list || !box) return;

    list.innerHTML += list.innerHTML; //避免圖片跑完有斷點多加一個loop

    let left = 0;
    let timer;

    function move() {
        clearInterval(timer);
        timer = setInterval(() => {
            left = left - 2;
            let contentWidth = list.offsetWidth / 2;

            if (Math.abs(left) >= contentWidth) {
                left = 0;
            }
            list.style.left = left + 'px';
        }, 20);
    }
    move();

    // 滑鼠移到圖片內要播放音樂
    box.onmouseover = function () {
        if (music.paused) {
            music.currentTime = 125.5; 
            music.play().catch(e => console.log(e));
        }
    };

    // 滑鼠移出要暫停音樂
    box.onmouseleave = function () {
        if (music) {
            music.pause();
        }
        move(); 
    };
}

document.addEventListener('DOMContentLoaded', () => {
    loadInformation();
    loadPraying();
}
);