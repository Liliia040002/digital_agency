window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})




var slide;
function startSlide() {
    slide = setInterval();
}

function slideR() {
    $('#menuu > ul > li').first().css('left', '300px').appendTo('#menuu > ul').animate({
        "left": "-=300px"
    }, 200);
}

function slideL() {
    $('#menuu > ul > li').last().animate({
        "left": "+=300px"
    }, 200, function () {
        $(this).prependTo('#menuu > ul').css('left', '0px');
    });
}

$('.arrow-right').click(function () {slideR();});
$('.arrow-left').click(function () {slideL();});