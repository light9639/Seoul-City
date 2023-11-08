// 배너 1번째 
visualSlide1 = new Swiper('.visual-left .top-tab .swiper', {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: ".top-tab .btn-next",
        prevEl: ".top-tab .btn-prev"
    },
    pagination: {
        el: ".visual-left .top-tab .fraction",
        type: 'fraction',
    }
})

// 배너 2번째
visualSlide2 = new Swiper('.visual-left .bottom-tab .swiper', {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: ".bottom-tab .btn-next",
        prevEl: ".bottom-tab .btn-prev"
    },
    pagination: {
        el: ".visual-left .bottom-tab .fraction",
        type: 'fraction',
    }
})

// 탭 메뉴

$('.visual-left .tab').click(function (e) {
    e.preventDefault();
    $('.visual-left .tab').removeClass('current');
    $(this).addClass('current')

    if ($(this).parents('.tab').data('tab') == 'tab-1') {
        //주요뉴스
        visualSlide2.autoplay.stop();
        if ($('.visual-left .top-tab').find('.btn-autoplay').hasClass('on')) {
            visualSlide1.autoplay.stop();
        } else {
            visualSlide1.autoplay.start();
        }
    } else {
        //시민참여
        visualSlide1.autoplay.stop();
        if ($('.visual-left .bottom-tab').find('.btn-autoplay').hasClass('on')) {
            visualSlide2.autoplay.stop();
        } else {
            visualSlide2.autoplay.start();
        }
    }
})

$('.visual-left .tab').on('keydown', function () {
    var tab_id = $(this).attr('data-tab');

    $('.visual-left .tab').removeClass('current');

    $(this).addClass('current');
})

// 아래쪽 배너
bottomSlide = new Swiper('.inner8 .swiper', {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    slidesPerView: 3,
    loop: true,
    spaceBetween: 43,
    navigation: {
        nextEl: ".inner8 .btn-next",
        prevEl: ".inner8 .btn-prev"
    },
    pagination: {
        el: ".inner8 .fraction",
        type: 'fraction',
    }
})

slideArr = [visualSlide1, visualSlide2, bottomSlide]

$('.control .btn-autoplay').click(function (e) {
    e.preventDefault();
    idx = $(this).attr('data-id');

    if ($(this).hasClass('on')) {
        $(this).removeClass('on');
        slideArr[idx].autoplay.start();
    } else {
        $(this).addClass('on');
        slideArr[idx].autoplay.stop();
    }
});

// 상단 배너 제거
let btn = document.querySelector('.banner-close .btn-close');
let bgImg = document.querySelector('.top-banner');

btn.addEventListener('click', () => {
    bgImg.style.display = "none";
}
)

// 언어 선택후 이동시키기
let selectBtn = document.querySelector('.search-box .select-btn');

const changeValue = (target) => {
    selectBtn.addEventListener('click', () => {
        window.open(target.value)
    })
}

// 스크롤 내리면 상단 이동 버튼 나오게
const Top = document.querySelector('.sc-top');

function stickMenu() {
    let winYPos = window.pageYOffset;
    let TopElePos = Top.offsetTop;

    if (winYPos > TopElePos) {
        Top.classList.add('fixed');
    } else {
        Top.classList.remove('fixed');
    }
}

window.addEventListener('scroll', stickMenu);

// 버튼 클릭 시 맨 위로 이동
Top.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// 맨 아래쪽 하단리스트 나오게 하기
$('.inner9 .btn-related').on('click', function () {
    if ($(this).hasClass('on')) {
        $(this).focus().removeClass('on').find('em').text('펼치기');
        $('.menu-list').slideUp(200);
    } else {
        $('.bottom-item button').removeClass('on').find('em').text('펼치기');
        $(this).focus().addClass('on').find('em').text('접기');
        $('.menu-list').slideUp(200);
        $(this).closest('li').find('.menu-list').slideDown(200);
    }
});

// 하단리스트 이외에 다른 부분 클릭시 접히도록
$('body').on('click', function (e) {
    if ($(!e.target).is('.menu-list') || !$(e.target).is('.txt-related')) {
        if (!$(e.target).is('.btn-related')) {
            $('.bottom-item button').removeClass('on').find('em').text('펼치기');
            $('.btn-related').removeClass('on');
            $('.menu-list').slideUp(200);
        }
    }
});

// tab 메뉴로 이동시 하단 리스트 나오게
$('.inner9 .menu-list li:first-child').keydown(function (e) {
    if (e.keyCode === 9 && e.shiftKey) {
        $('.bottom-wrap .bottom-item button').removeClass('on').find('em').text('펼치기');
        $('.inner9 .menu-list').slideUp(200);
    }
})
$('.inner9 .menu-list li:last-child').keydown(function (e) {
    if (e.keyCode === 9 && !e.shiftKey) {
        $('.bottom-wrap .bottom-item button').removeClass('on').find('em').text('펼치기');
        $('.inner9 .menu-list').slideUp(200);
    }
})