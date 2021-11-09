const home = document.querySelector('.van-member-item1');
const parity = document.querySelector('.van-member-item2');
const member = document.querySelector('.van-member-item3');
const nv = document.querySelector('.nv');
const lx = document.querySelector('.lx');
const qc = document.querySelector('.qc');
const my = document.querySelector('.my');
const mySent = document.querySelector('.mySent');
const setting = document.querySelector('.van-goods-icon');
const settings = document.querySelector('.settings');
const address = document.querySelector('.address');
const banking = document.querySelector('.banking');
const detailBank = document.querySelector('.detailBank');
const about = document.querySelector('.about');
const ContactUs = document.querySelector('.ContactUs');
const complaint = document.querySelector('.complaint');

home.addEventListener('click', function() {
    window.location = '../index';
});
parity.addEventListener('click', function() {
    window.location = '../parity/tran';
});
member.addEventListener('click', function() {
    window.location = 'index';
});
nv.addEventListener('click', function() {
    window.location = 'myTask/taskCenter';
});
lx.addEventListener('click', function() {
    window.location = 'redenvelope/manage';
});
qc.addEventListener('click', function() {
    window.location = 'promotion/index';
});
my.addEventListener('click', function() {
    window.location = 'MyWallet';
});
mySent.addEventListener('click', function() {
    window.location = 'MyWallet';
});
settings.addEventListener('click', function() {
    window.location = 'Security';
});
setting.addEventListener('click', function() {
    window.location = 'Security';
});
address.addEventListener('click', function() {
    window.location = 'myaddress';
});
banking.addEventListener('click', function() {
    window.location = 'MyBank';
});
detailBank.addEventListener('click', function() {
    window.location = 'financial/index';
});
about.addEventListener('click', function() {
    window.location = 'about/index';
});
ContactUs.addEventListener('click', function() {
    window.location = 'ContactUs';
});
complaint.addEventListener('click', function() {
    window.location = 'complaint/index';
});
const cache = document.querySelector('.cache');
const showCache = document.querySelector('.showCache');
const body = document.querySelector('.body');
const van = document.querySelector('.van-overlay');
const dialog__cancel = document.querySelector('.van-dialog__cancel');
const left = document.querySelector('.van-hairline--left');
cache.addEventListener('click', function() {
    van.style = 'z-index: 2013;display: block;';
    showCache.style = 'z-index: 2014;display: block;';
    body.classList.add('van-overflow-hidden');
});
van.addEventListener('click', function() {
    van.style = 'z-index: 2013;display: none;';
    showCache.style = 'z-index: 2014;display: none;';
    body.classList.remove('van-overflow-hidden');
});
dialog__cancel.addEventListener('click', function() {
    van.style = 'z-index: 2013;display: none;';
    showCache.style = 'z-index: 2014;display: none;';
    body.classList.remove('van-overflow-hidden');
});
left.addEventListener('click', function() {
    window.location.reload();
});