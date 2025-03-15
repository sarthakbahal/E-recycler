const w1 = document.querySelector('.wrapper1');
const w2 = document.querySelector('.wrapper2');
const loglink = document.querySelector('.log-link');
const reglink = document.querySelector('.reg-link');
const login = document.querySelector('.login');
const reg = document.querySelector('.reg');

reglink.addEventListener('click', ()=>{
    login.classList.add('h-[520px]');
    w1.classList.add('hidden');
    w2.classList.remove('translate-y-[100px]');
    w2.classList.remove('hidden');
});

loglink.addEventListener('click', ()=>{
    login.classList.remove('h-[520px]');
    w1.classList.remove('hidden');
    w2.classList.add('hidden');
});