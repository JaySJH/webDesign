function load() {
    var list = document.querySelector('.list');
    var box = document.querySelector('.box');
    list.innerHTML += list.innerHTML;
    list.innerHTML += list.innerHTML;
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

document.addEventListener('DOMContentLoaded', load);