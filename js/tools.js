$(document).ready(function() {

    $('.nav a').click(function(e) {
        var curBlock = $($(this).attr('href'));
        if (curBlock.length == 1) {
            $('html, body').animate({'scrollTop': curBlock.offset().top});
        }
        e.preventDefault();
    });

    $('.slider-list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // prevArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#arrow-prev"></use></svg></button>',
        // nextArrow: '<button type="button" class="slick-next"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#arrow-next"></use></svg></button>',
        dots: true,
        // customPaging: function(slider, i) {
        //     return '<button type="button"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#dot"></use></svg></button>';
        // },
        autoplay: true,
        fade: true,
        pauseOnHover: false,
        pauseOnFocus: false
    }).on('setPosition', function(event, slick) {
        var nextSlide = $('.slider-list').slick('slickCurrentSlide');
        var nextSliderItem = $('.slider-list .slick-slide').eq(nextSlide).find('.slider-item-inner');
        $('.slider-bg svg path').attr('fill', nextSliderItem.attr('data-bg'));
        $('.slider-bg-mobile svg path').attr('fill', nextSliderItem.attr('data-bg'));
        $('.slider-pref').eq(2).find('span').css({'background-color': nextSliderItem.attr('data-flavor')});
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        var curSliderItem = $('.slider-list .slick-slide').eq(currentSlide).find('.slider-item-inner');
        var nextSliderItem = $('.slider-list .slick-slide').eq(nextSlide).find('.slider-item-inner');
        $('.slider-bg svg path').attr('fill', nextSliderItem.attr('data-bg'));
        $('.slider-bg-mobile svg path').attr('fill', nextSliderItem.attr('data-bg'));
        $('.slider-pref').eq(2).find('span').css({'background-color': nextSliderItem.attr('data-flavor')});
        nextSliderItem.find('img').css({'margin-right': '-939px'});
        nextSliderItem.find('img').animate({'margin-right': '0'}, 500);
    });

    $('.flavors-slider-img-list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // prevArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#arrow-prev"></use></svg></button>',
        // nextArrow: '<button type="button" class="slick-next"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#arrow-next"></use></svg></button>',
        dots: true,
        asNavFor: '.flavors-slider-text-list',
        // customPaging: function(slider, i) {
        //     return '<button type="button"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#dot"></use></svg></button>';
        // },
        responsive: [
            {
                breakpoint: 1179,
                settings: {
                    dots: false
                }
            }
        ]
    }).on('setPosition', function(event, slick) {
        var nextSlide = $('.flavors-slider-img-list').slick('slickCurrentSlide');
        var nextSliderItem = $('.flavors-slider-img-list .slick-slide:not(.slick-cloned)').eq(nextSlide).find('.flavors-slider-img-item-inner');
        if (nextSlide > 5) {
            $('.flavors-slider-swap-item').eq(0).removeClass('active');
            $('.flavors-slider-swap-item').eq(1).addClass('active');
            $('.flavors-slider-img-list').addClass('half-2');
        } else {
            $('.flavors-slider-swap-item').eq(0).addClass('active');
            $('.flavors-slider-swap-item').eq(1).removeClass('active');
            $('.flavors-slider-img-list').removeClass('half-2');
        }
        $('.flavors-slider-bg svg path').attr('fill', nextSliderItem.attr('data-bg'));
        $('.flavors-slider-bg-mobile svg path').attr('fill', nextSliderItem.attr('data-bg'));
        $('.flavors-slider-swap').removeClass('color-1 color-2 color-3 color-4 color-5 color-6 color-7 color-8 color-9 color-10 color-11 color-12');
        $('.flavors-slider-swap').addClass('color-' + (nextSlide + 1));
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        var nextSliderItem = $('.flavors-slider-img-list .slick-slide:not(.slick-cloned)').eq(nextSlide).find('.flavors-slider-img-item-inner');
        if (nextSlide > 5) {
            $('.flavors-slider-swap-item').eq(0).removeClass('active');
            $('.flavors-slider-swap-item').eq(1).addClass('active');
            $('.flavors-slider-img-list').addClass('half-2');
        } else {
            $('.flavors-slider-swap-item').eq(0).addClass('active');
            $('.flavors-slider-swap-item').eq(1).removeClass('active');
            $('.flavors-slider-img-list').removeClass('half-2');
        }
        $('.flavors-slider-swap').removeClass('color-1 color-2 color-3 color-4 color-5 color-6 color-7 color-8 color-9 color-10 color-11 color-12');
        $('.flavors-slider-swap').addClass('color-' + (nextSlide + 1));
        $('.flavors-slider-bg svg path').attr('fill', nextSliderItem.attr('data-bg'));
        $('.flavors-slider-bg-mobile svg path').attr('fill', nextSliderItem.attr('data-bg'));
    });

    $('.flavors-slider-text-list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        arrows: false,
        dots: false,
        asNavFor: '.flavors-slider-img-list'
    });

    $('.flavors-slider-swap-item').click(function() {
        var curItem = $(this);
        if (!curItem.hasClass('active')) {
            var curIndex = $('.flavors-slider-swap-item').index(curItem);
            $('.flavors-slider-img-list').slick('slickGoTo', curIndex * 6)
            $('.flavors-slider-swap-item.active').removeClass('active');
            curItem.addClass('active');
        }
    });

    $('.faq-item-title a').click(function(e) {
        $(this).parent().parent().toggleClass('open');
        e.preventDefault();
    });

});

$(window).on('load resize', function() {

    if ($(window).width() > 1179) {
        $('.indications-list').each(function() {
            $(this).mCustomScrollbar('destroy');
        });

        // $('.prefs-list').each(function() {
        //     $(this).mCustomScrollbar('destroy');
        // });
    } else {
        $('.indications-list').each(function() {
            $(this).mCustomScrollbar({
                axis: 'x'
            });
        });

        // $('.prefs-list').each(function() {
        //     $(this).mCustomScrollbar({
        //         axis: 'x'
        //     });
        // });
    }

    $('.submenu-mobile').remove();
    $('.nav ul li.open').removeClass('open');

});