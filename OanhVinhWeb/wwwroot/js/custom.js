(function ($) {
    "use strict";

    $('#datepicker').datepicker();

    var review = $('.player_info_item');
    if (review.length) {
        review.owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            autoplay: true,
            margin: 40,
            autoplayHoverPause: true,
            autoplayTimeout: 5000,
            nav: true,
            navText: [
                '<img src="img/icon/left.svg" alt="">',
                '<img src="img/icon/right.svg" alt="">'

            ],
            responsive: {
                0: {
                    margin: 15,
                },
                600: {
                    margin: 10,
                },
                1000: {
                    margin: 10,
                }
            }
        });
    }
    $('.popup-youtube, .popup-vimeo').magnificPopup({
        // disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    if (document.getElementById('default-select')) {
        $('select').niceSelect();
    }


    var review = $('.client_review_part');
    if (review.length) {
        review.owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            autoplay: true,
            autoplayHoverPause: true,
            autoplayTimeout: 5000,
            nav: false,
        });
    }
    // // menu fixed js code

    // $(window).scroll(function () {
    //     var window_top = $(window).scrollTop() + 1;
    //     if (window_top > 50) {
    //         $('.main_menu').addClass('menu_fixed animated fadeInDown');
    //     } else {
    //         $('.main_menu').removeClass('menu_fixed animated fadeInDown');
    //     }
    // });

    //   $(document).ready(function(){

    //     var owl_1 = $('#owl-1');
    //     var owl_2 = $('#owl-2');

    //     owl_1.owlCarousel({
    //       loop:true,
    //       margin:10,
    //       nav:false,
    //       items: 1,
    //       dots: false,
    //       navText: false,
    //       autoplay: true,

    //     });
    //  owl_2.find(".item").click(function(){
    //     var slide_index = owl_2.find(".item").index(this);
    //     owl_1.trigger('to.owl.carousel',[slide_index,300]);
    //   });

    //     owl_2.owlCarousel({
    //       margin:50,
    //       nav: true,
    //       items: 3,
    //       dots: false,
    //       center: true,
    //       loop:true,
    //       navText: false,
    //       autoplay: true,
    //       center: true
    //     });

    //   });




    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        speed: 300,
        infinite: true,
        asNavFor: '.slider-nav-thumbnails',
        // autoplay:true,
        pauseOnFocus: true,
        dots: true,
    });

    $('.slider-nav-thumbnails').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider',
        focusOnSelect: true,
        infinite: true,
        prevArrow: false,
        nextArrow: false,
        centerMode: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    centerMode: false,
                }
            }
        ]
    });

    //remove active class from all thumbnail slides
    $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');

    //set active class to first thumbnail slides
    $('.slider-nav-thumbnails .slick-slide').eq(0).addClass('slick-active');

    // On before slide change match active thumbnail to current slide
    $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var mySlideNumber = nextSlide;
        $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
        $('.slider-nav-thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
    });

    //UPDATED 

    $('.slider').on('afterChange', function (event, slick, currentSlide) {
        $('.content').hide();
        $('.content[data-id=' + (currentSlide + 1) + ']').show();
    });

    $('.gallery_img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    let listProduct = $('.list-top-product');
    if (listProduct.length) {
        listProduct.owlCarousel({
            loop: true,
            autoplay: false,
            autoplayHoverPause: true,
            autoplayTimeout: 5000,
            nav: false,
            dots: true,
            margin: 10,
            responsive: {
                0: {
                    items: 2
                },
                575.98: {
                    items: 3,
                },
                767.98: {
                    items: 3
                },
                991.98: {
                    items: 4
                },
                1199.98: {
                    items: 5
                }
            }
        });
    }




    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#toTopBtn').fadeIn();
            $('#toTopBtn').css('bottom', '1vh');;
        } else {
            $('#toTopBtn').fadeOut();
            $('#toTopBtn').css('bottom', '-16vh');
        }
    });

    $('#toTopBtn').click(function () {
        $(this).addClass("hide");
        $('body,html').animate({
            scrollTop: 0,
        }, 900);
        return false;
    });

    let mainCarousel = $('.main-carousel');
    if (mainCarousel.length) {
        mainCarousel.owlCarousel({
            loop: true,
            autoplay: true,
            autoplayHoverPause: true,
            autoplayTimeout: 5000,
            nav: false,
            dots: false,
            margin: 10,
            items: 1,
            animateOut: 'fadeOutRight',
            animateIn: 'fadeInLeft',
        });
    }

}(jQuery));

// window.setInterval(function () {
//     var url = getCurrent();
//     //start animation
//     setTimeout(() => {
//         $('#banner_part_home').fadeTo(900, 0.2, function () {
//             $(this).css('background-image', 'url(' + url + ')');
//         }).fadeTo('slow', 1);
//     }, 4000)

// }, 2000);
// We start with index of 1 because we want to skip the first image, 
// Else we would be replacing it with the same image.
// var index = 1;
// var arrayOfPartenaires = [
//     "img/banner/trai-de-oanh-vinh-banner-2.png",
//     "img/banner/trai-de-oanh-vinh-banner-3.png",
//     "img/banner/trai-de-oanh-vinh-banner-1.png"
// ];

function getCurrent() {
    // We check if the index is higher than the ammount in the array.
    // If thats true set 0 (beginning of array)
    if (index > arrayOfPartenaires.length - 1) {
        index = 0;
    }
    var returnValue = index;
    index++;
    return arrayOfPartenaires[returnValue];
}

function SearchAPI() {
    var ele = $("#search");
    const keyword = encodeURIComponent(ele.val());
    console.log(keyword);
    if (keyword.length > 3) {
        $("#search-box").removeClass("d-none");
        $("#search-box").removeClass("bg-common");
        $("#search-box").html('<li><img id="search-gif" src="/img/animate_icon/search.gif" alt="search-gif"></li>');
        $.ajax({
            type: "GET",
            url: "https://localhost:7087/api/Post/GetAllPosts?PostName=" + keyword,
            dataType: "json",
            success: function (result, status, xhr) {
                setTimeout(function () {
                    $("#search-box").empty();
                    $("#search-box").addClass("bg-common");
                    console.log('result', result);
                    result.forEach(element => {
                        const item = '<li class="mb-2"><a href="/chi-tiet-bai-dang/' + element.postCategoryID + '/' + element.postID + '/' + encodeURIComponent(element.postTitle) + '">' + element.postTitle + ' <img src="' + element.postImages + '" /> </a></li>';
                        $("#search-box").append(item);
                    });
                }, 1000)
            },
            error: function (xhr, status, error) {
                console.log(error)
            }
        });
    }
}