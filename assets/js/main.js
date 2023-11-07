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
        el: ".visual-left .top-tab .index_count",
        type: 'fraction',
    }
})

var sw = 0;
$('.visual-left .top-tab .btn-pause').click(function () {
    if (sw == 0) {
        $('.top-tab .control .btn-pause').addClass('on');
        visualSlide1.autoplay.stop();
        sw = 1;
    } else {
        $('.top-tab .control .btn-pause').removeClass('on');
        visualSlide1.autoplay.start();
        sw = 0;
    }
});

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
        el: ".visual-left .bottom-tab .index_count",
        type: 'fraction',
    }
})

var bw = 0;
$('.visual-left .bottom-tab .btn-pause').click(function () {
    if (sw == 0) {
        $('.bottom-tab .control .btn-pause').addClass('on');
        visualSlide2.autoplay.stop();
        sw = 1;
    } else {
        $('.bottom-tab .control .btn-pause').removeClass('on');
        visualSlide2.autoplay.start();
        sw = 0;
    }
});

// 탭 메뉴
$('.visual-left .tab').on("click", function () {
    var tab_id = $(this).attr('data-tab');

    $('.visual-left .tab').removeClass('current');

    $(this).addClass('current');
})

$('.visual-left .tab').on('keydown', function () {
    var tab_id = $(this).attr('data-tab');

    $('.visual-left .tab').removeClass('current');

    $(this).addClass('current');
})

// 아래쪽 배너
bottomSlide = new Swiper('.sc-popupBanner .swiper', {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    slidesPerView: 3,
    loop: true,
    spaceBetween: 43,
    navigation: {
        nextEl: ".sc-popupBanner .btn-next",
        prevEl: ".sc-popupBanner .btn-prev"
    },
    pagination: {
        el: ".sc-popupBanner .index_count",
        type: 'fraction',
    }
})

var bs = 0;
$('.sc-popupBanner .btn-pause').click(function () {
    if (bs == 0) {
        $('.sc-popupBanner .btn-pause').addClass('on');
        bottomSlide.autoplay.stop();
        bs = 1;
    } else {
        $('.sc-popupBanner .btn-pause').removeClass('on');
        bottomSlide.autoplay.start();
        bs = 0;
    }
});

// 상단 배너 제거
let btn = document.querySelector('.banner-close .btn_close');
let bgImg = document.querySelector('.top-banner');

btn.addEventListener('click', () => {
    bgImg.style.display = "none";
}
)

// 언어 선택후 이동시키기
let selectBtn = document.querySelector('.search-box .select-btn');

const changeValue = (target) => {
    selectBtn.addEventListener('click', () => {
        location.href = target.value
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
$('.bottom-list .bottom-item .btn-related').on('click', function () {
    if ($(this).hasClass('on')) {
        $(this).focus().removeClass('on').find('em').text('펼치기');
        $('.menu-list').slideUp(200);
    } else {
        $('.bottom-wrap .bottom-item button').removeClass('on').find('em').text('펼치기');
        $(this).focus().addClass('on').find('em').text('접기');
        $('.menu-list').slideUp(200);
        $(this).closest('li').find('.menu-list').slideDown(200);
    }
});