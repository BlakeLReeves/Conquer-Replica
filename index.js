$('.scroll').click(function(e) {
    e.preventDefault();
    $('body,html').animate({
        scrollTop: $(this.hash).offset().top
    }, 1500);
});

$(window).scroll(function() {
    let scrollbarLocation = $(this).scrollTop();

    $('.scroll').each(function() {
        
        let sectionOffset = $(this.hash).offset().top - 20;

        if ( sectionOffset <= scrollbarLocation ) {
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
        }
    })
})

$(document).on('click', 'ul li', function () {
    $(this).addClass('active').siblings().removeClass('active');
});