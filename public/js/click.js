const closer = document.querySelector('.close');
const navbar_close = document.querySelector('.app-download-nav');
closer.addEventListener('click', function() {
    navbar_close.classList.add('closer');
});

const home = document.querySelector('.van-index-item1');
const parity = document.querySelector('.van-index-item2');
const member = document.querySelector('.van-index-item3');
home.addEventListener('click', function() {
    window.location = 'index';
});
parity.addEventListener('click', function() {
    window.location = 'parity/tran';
});
member.addEventListener('click', function() {
    window.location = 'member/index';
});