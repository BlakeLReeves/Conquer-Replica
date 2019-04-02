$('.scroll').click(function(e) {
    e.preventDefault();
    $('body,html').animate({
        scrollTop: $(this.hash).offset().top
    }, 1500);
});

$(document).on('click', 'ul li', function () {
    $(this).addClass('active').siblings().removeClass('active');
});