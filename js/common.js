$('#gnb > ul > li').on('mouseenter', function() {
    $(this).children('div').stop().animate({height: 350}).children('.depth2').stop().slideDown()
    // $(this).children('div').stop().toggle('blind')
    $('#header').css({borderBottom: '1px solid #000', borderRadius: '15px 15px 0 0'})
})
$('#gnb > ul > li').on('mouseleave', function() {
    $(this).children('div').stop().animate({height: 0}, 300).children('.depth2').stop().css({display: 'none'});
    // $(this).children('div').stop().toggle('blind')
    $('#header').css({borderBottom: 0, borderRadius: '15px'})
})
