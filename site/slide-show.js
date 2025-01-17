const listImg = document.querySelector('.list__img');
const imgs = document.querySelectorAll('.list__items-img');
const btnBack = document.querySelector('.list__items-icon-back');
const btnNext = document.querySelector('.list__items-icon-next');

const lengthImg = imgs.length;
let current = 0;

let handleChangeSlide = () => {
    if (current == lengthImg - 1) {
        current = 0;
        let width = imgs[0].offsetWidth;
            listImg.style.transform = `translateX(0px)`;
            document.querySelector('.active').classList.remove('active');
            document.querySelector(`.imdex__items-${current}`).classList.add('active');
    }else{
        current ++;
            // lay chieu rong cua khung anh
            let width = imgs[0].offsetWidth;
            listImg.style.transform = `translateX(${width * -1 * current}px)`;
            document.querySelector('.active').classList.remove('active');
            document.querySelector(`.imdex__items-${current}`).classList.add('active');
    }
}
let timeChangeSlide = setInterval( handleChangeSlide, 5000);

btnNext.addEventListener('click', () => {
    clearInterval(timeChangeSlide);
    handleChangeSlide();
    timeChangeSlide = setInterval( handleChangeSlide, 5000);
})

btnBack.addEventListener('click', () => {
    clearInterval(timeChangeSlide);
    if (current == 0) {
        current = lengthImg - 1;
        let width = imgs[0].offsetWidth;
            listImg.style.transform = `translateX(${width * -1 * current}px)`;
            document.querySelector('.active').classList.remove('active');
            document.querySelector(`.imdex__items-${current}`).classList.add('active');
    }else{
        current --;
            // lay chieu rong cua khung anh
            let width = imgs[0].offsetWidth;
            listImg.style.transform = `translateX(${width * -1 * current}px)`;
            document.querySelector('.active').classList.remove('active');
            document.querySelector(`.imdex__items-${current}`).classList.add('active');
    }
    timeChangeSlide = setInterval( handleChangeSlide, 5000);
})