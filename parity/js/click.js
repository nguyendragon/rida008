const home = document.querySelector('.van-parity-item1');
const parity = document.querySelector('.van-parity-item2');
const member = document.querySelector('.van-parity-item3');
home.addEventListener('click', function() {
    window.location = '../index';
});
parity.addEventListener('click', function() {
    window.location = 'tran';
});
member.addEventListener('click', function() {
    window.location = '../member/index';
});