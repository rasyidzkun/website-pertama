//soft scroll

$('.page-scroll').on('click', function(e) {

    var tujuan = $(this).attr('href');
    var elemenTujuan = $(tujuan);

    $('html, body').animate({
        scrollTop:elemenTujuan.offset().top - 60
    }, 1250, 'easeInOutExpo');

    e.preventDefault();
});

//end soft scroll

//parallax

    //jumbotron
    $(window).on('load', function() {
        $('.hero-text').addClass('hero-text-show');
    });

    $(window).scroll(function() {
    var wScroll = $(this).scrollTop();


    //services

    if(wScroll > $('.services').offset().top - 550) {
        $('.services .section-title').addClass('section-title-show');
    }


    if(wScroll > $('.services').offset().top - 440 ) {
        $('.services .services-hidden').each(function(i) {
            setTimeout(function() {
                $('.services .services-hidden').eq(i).addClass('services-show');
            }, 500 * (i+1));
        });
    }

    //CTA

    if(wScroll > $('.cta').offset().top - 400) {
        $('.cta .cta-hidden').addClass('cta-show');
    }

    //portfolio

    if(wScroll > $('.portfolio').offset().top - 500) {
        $('.portfolio .portfolio-title').addClass('portfolio-title-show');
    }


    if(wScroll > $('.portfolio').offset().top - 440 ) {
        $('.portfolio .gallery').each(function(i) {
            setTimeout(function() {
                $('.portfolio .gallery').eq(i).addClass('show-gallery');
            }, 400 * (i+1));
        });
    }

    //about

    if(wScroll > $('.about').offset().top - 500) {
        $('.about .section-title-about').addClass('section-title-about-show');
    }

    if(wScroll > $('.about').offset().top - 360) {
        $('.about .imagebox').addClass('imagebox-show');
    }

    if(wScroll > $('.about').offset().top - 360) {
        $('.about .content').addClass('content-show');
    }


    //clients

    if(wScroll > $('.clients').offset().top - 400) {
        $('.clients .clients-title').addClass('clients-title-show');
    }

    
    if(wScroll > $('.clients').offset().top - 350) {
        $('.clients .contents-clients').addClass('contents-clients-show');
    }

    //contact

    if(wScroll > $('.contact').offset().top - 420) {
        $('.contact .section-title-contact').addClass('contact-show');
    }

    if(wScroll > $('.contact').offset().top - 350) {
        $('.contact .form-contact').addClass('form-contact-show');
    }

    //newslterr

    if(wScroll > $('.newsletter').offset().top - 590) {
        $('.newsletter .newsletter-hidden').addClass('newsletter-show');
    }

    //footer
    if(wScroll > $('.footer').offset().top - 630) {
        $('.footer .footer-parallax').addClass('footer-parallax-show');
    }

});

//parallax