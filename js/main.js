
// main.js
window.addEventListener('load',()=>{
// main.js

/* 주메뉴 */
var gnbMenu = document.querySelectorAll(".gnb>ul>li");
var headerWrap = document.querySelector(".header_wrap");

for(var i=0; i<gnbMenu.length;i++){
    gnbMenu[i].addEventListener('mouseover',(e)=>{
        e.currentTarget.classList.add('on');
        var ht = e.currentTarget.children[1].offsetHeight;
        headerWrap.style.height = 70 + ht + 'px';
    });
    gnbMenu[i].addEventListener('mouseout', (e) =>{
        e.currentTarget.classList.remove('on');
        headerWrap.style.height = '70px';
    });

    gnbMenu[i].children[0].addEventListener('focus',(e) =>{
        e.currentTarget.parentElement.classList.add('on');
        var ht = e.currentTarget.nextElementSibling.offsetHeight;
        headerWrap.style.height = 70 + ht + 'px';
    });
    gnbMenu[i].children[0].addEventListener('blur', (e) =>{
        e.currentTarget.parentElement.classList.remove('on');
        headerWrap.style.height = '70px';
    });
}

/* 검색박스 */
var srchBtn = document.querySelector(".btn_srch");
var srchWrap = document.querySelector(".srch_wrap");
var closeBtn = document.querySelector(".btn_srch_close");

srchBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    srchWrap.classList.add('on')
});
closeBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    srchWrap.classList.remove('on')
});

/* 오토배너 */
const btnNext = document.querySelector('a.btn_next');
const btnPrev = document.querySelector('a.btn_prev');
const slide = document.querySelectorAll('li.slide');//0,1,2배너
const slideRoll = document.querySelectorAll('.slide_roll li');
const btnPlay = document.querySelector('.btn_play');

let bnnNum = 0;
let lastNum = document.querySelectorAll('.slide_wrap > li').length -1; //2번 배너

// next 버튼
btnNext.addEventListener('click',function(){
    bnnNum++;
    if(bnnNum>lastNum) bnnNum=0;

    slide.forEach(item => {
        item.classList.remove('active');
    });
    slide[bnnNum].classList.add('active');

    slideRoll.forEach(idx =>{
        idx.classList.remove('on');
    });
    slideRoll[bnnNum].classList.add('on');
});


btnPrev.addEventListener('click', () => {
    bnnNum--;
    if(bnnNum<0){
        bnnNum=2;
    }
    slide.forEach(item => {
        item.classList.remove('active');
    });
    slide[bnnNum].classList.add('active');

    slideRoll.forEach(idx => {
        idx.classList.remove('on');
    });
    slideRoll[bnnNum].classList.add('on');
});

// 오토배너
function autoBanner(){
    //next버튼 눌렀을때
    bnnNum++;
    if(bnnNum>lastNum) bnnNum=0;

    slide.forEach(item => {
        item.classList.remove('active');
    });
    slide[bnnNum].classList.add('active');

    slideRoll.forEach(idx =>{
        idx.classList.remove('on');
    });
    slideRoll[bnnNum].classList.add('on');
}
let autoBnn = setInterval(autoBanner,5000);

// 배너 재생 멈춤 버튼
let flag = true;

btnPlay.addEventListener('click', () => {
     if(flag){
         btnPlay.classList.add('on');
         clearTimeout(autoBnn);
         flag = false;
     }else{
         btnPlay.classList.remove('on');
         autoBnn=setTimeout(autoBanner,5000);
         flag = true;
     }
});

// 롤링버튼클릭
for(let i=0; i<slideRoll.length; i++){
    slideRoll[i].addEventListener('click', e =>{
        e.preventDefault();
        activation(i,slide);
        activation(i,slideRoll);
    });
};

function activation(index,list){
    for(let el of list){
        el.classList.remove("on","active");
    }
    list[index].classList.add("on","active");
}

// top 버튼
const btnTop = document.querySelector('a.btn_top');

window;addEventListener('scroll' , ()=>{
    let scroll = document.querySelector('html').scrollTop;
    console.log(scroll);
    if(scroll <= 0){
        btnTop.classList.remove("on","ab");
    }else if(scroll > 2700){
        btnTop.classList.add("ab");
    }else{
        btnTop.classList.remove("ab");
        btnTop.classList.add("on");
    }
})

btnTop.addEventListener('click' , e =>{
    e.preventDefault();
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});

});
