$('.nav a').on('click', function () {
    $('html,body').animate({
        scrollTop: $($(this).attr('href')).offset().top + 'px'
    }, 500)
    return false
})
/*回到顶部*/
$(window).on('scroll', function () {
    if ($(this).scrollTop() >= $(this).height()) {
        $('.backTop span').fadeIn('slow')
    } else {
        $('.backTop span').fadeOut('slow')
    }
})
$('.backTop span').on('click', function () {
    $('html,body').animate({
        'scrollTop': 0
    }, 500)
})