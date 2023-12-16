var productPage = document.querySelector('.admin__product');
var orderPage = document.querySelector('.admin__order');
var statisticsPage = document.querySelector('.admin__statis');
var userPage = document.querySelector('.admin__user');
var contentBtn = document.querySelectorAll('.side-bar__item');
var content = document.querySelector('.admin__content');

function showCurrentContent(name) {
    var index;
    for (var i = 0; i < contentBtn.length; i++) {
        contentBtn[i].classList.remove('active');
        if (contentBtn[i].getAttribute('value') == name) {
            index = i;
        }
    }
    contentBtn[index].classList.add('active');
}

function backHomePage() {
    window.location.href = 'index.html';
}