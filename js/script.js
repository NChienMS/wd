
  document.addEventListener('DOMContentLoaded', () => {
    const snowflakeContainer = document.querySelector('.snowflakes');
    const numberOfSnowflakes = 20; // Số lượng hạt tuyết
    const symbols = ['❤️', '❅', '✨', '💖']; // Các biểu tượng

    for (let i = 0; i < numberOfSnowflakes; i++) {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');

      // 1. NGẪU NHIÊN BIỂU TƯỢNG
      const symbol = symbols[Math.floor(Math.random() * symbols.length)];
      snowflake.innerHTML = symbol;

      // 2. NGẪU NHIÊN KÍCH THƯỚC (8px đến 24px)
      const size = Math.random() * 16 + 8;
      snowflake.style.fontSize = `${size}px`;

      // 3. NGẪU NHIÊN VỊ TRÍ NGANG (0% đến 100%)
      snowflake.style.left = `${Math.random() * 100}%`;

      // 4. NGẪU NHIÊN THỜI GIAN RƠI (8s đến 18s)
      const fallDuration = Math.random() * 10 + 8;
      // 5. NGẪU NHIÊN THỜI GIAN LẮC LƯ (2s đến 5s)
      const shakeDuration = Math.random() * 3 + 2;

      // 6. NGẪU NHIÊN ĐỘ TRỄ KHỞI ĐỘNG (0s đến -18s, giá trị âm để bắt đầu ngay)
      const delay = Math.random() * -18;

      // ÁP DỤNG CÁC GIÁ TRỊ NGẪU NHIÊN VÀO STYLE
      snowflake.style.animationDuration = `${fallDuration}s, ${shakeDuration}s`;
      snowflake.style.animationDelay = `${delay}s, ${delay}s`;

      snowflakeContainer.appendChild(snowflake);
    }
  });


// đối tượng xuất hiện mượt maf
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll('.scroll-fade-up, .scroll-fade-right, .scroll-fade-down, .scroll-fade-left');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('show');
        }, 300); // delay 300ms trước khi hiện
      }
    });
  }, { threshold: 0.2 });

  items.forEach(item => observer.observe(item));
});




(function($) {

	"use strict";


    /*------------------------------------------
        = FUNCTIONS
    -------------------------------------------*/
    // Check ie and version
    function isIE () {
        var myNav = navigator.userAgent.toLowerCase();
        return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1], 10) : false;
    }


    // Toggle mobile navigation
    function toggleMobileNavigation() {
        var navbar = $(".navigation-holder");
        var openBtn = $(".navbar-header .open-btn");
        var closeBtn = $(".navigation-holder .close-navbar");
        var navLinks = $("#navbar > ul > li > a[href^='#']");

        openBtn.on("click", function() {
            if (!navbar.hasClass("slideInn")) {
                navbar.addClass("slideInn");
            }
            return false;
        })

        closeBtn.on("click", function() {
            if (navbar.hasClass("slideInn")) {
                navbar.removeClass("slideInn");
            }
            return false;
        })

        navLinks.on("click", function() {
            if (navbar.hasClass("slideInn")) {
                navbar.removeClass("slideInn");
            }
            return false;
        })
    }

    toggleMobileNavigation();


    // Function for toggle a class for small menu
    function toggleClassForSmallNav() {
        var windowWidth = window.innerWidth;
        var mainNav = $("#navbar > ul");

        if (windowWidth <= 991) {
            mainNav.addClass("small-nav");
        } else {
            mainNav.removeClass("small-nav");
        }
    }

    toggleClassForSmallNav();


    // Function for small menu
    function smallNavFunctionality() {
        var windowWidth = window.innerWidth;
        var mainNav = $(".navigation-holder");
        var smallNav = $(".navigation-holder > .small-nav");
        var subMenu = smallNav.find(".sub-menu");
        var megamenu = smallNav.find(".mega-menu");
        var menuItemWidthSubMenu = smallNav.find(".menu-item-has-children > a");

        if (windowWidth <= 991) {
            subMenu.hide();
            megamenu.hide();
            menuItemWidthSubMenu.on("click", function(e) {
                var $this = $(this);
                $this.siblings().slideToggle();
                 e.preventDefault();
                e.stopImmediatePropagation();
            })
        } else if (windowWidth > 991) {
            mainNav.find(".sub-menu").show();
            mainNav.find(".mega-menu").show();
        }
    }

    smallNavFunctionality();


    // function for active menuitem
    function activeMenuItem($links) {
        var top = $(window).scrollTop(),
            windowHeight = $(window).height(),
            documentHeight = $(document).height(),
            cur_pos = top + 2,
            sections = $("section"),
            nav = $links,
            nav_height = nav.outerHeight();


        sections.each(function() {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find("> ul > li > a").parent().removeClass("current-menu-item");
                nav.find("a[href='#" + $(this).attr('id') + "']").parent().addClass("current-menu-item");
            } else if (cur_pos === 2) {
                nav.find("> ul > li > a").parent().removeClass("current-menu-item");
            }

        });
    }


    // smooth-scrolling
    function smoothScrolling($scrollLinks, $topOffset) {
        var links = $scrollLinks;
        var topGap = $topOffset;

        links.on("click", function() {
            if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $("[name=" + this.hash.slice(1) +"]");
                if (target.length) {
                    $("html, body").animate({
                    scrollTop: target.offset().top - topGap
                }, 2000, "easeInOutExpo");
                    return false;
                }
            }
            return false;
        });
    }


    // Parallax background
    function bgParallax() {
         return; // Ngừng ngay lập tức 908218
        if ($(".parallax").length) {
            $(".parallax").each(function() {
                var height = $(this).position().top;
                var resize     = height - $(window).scrollTop();
                var parallaxSpeed = $(this).data("speed");
                var doParallax = -(resize / parallaxSpeed);
                var positionValue   = doParallax + "px";
                var img = $(this).data("bg-image");

                $(this).css({
                    backgroundImage: "url(" + img + ")",
                    backgroundPosition: "50%" + positionValue,
                    backgroundSize: "cover"
                });

                if ( window.innerWidth < 768) {
                    $(this).css({
                        backgroundPosition: "center center"
                    });
                }
            });
        }
    }

    bgParallax();


    // Hero slider background setting
    function sliderBgSetting() {
        if ($(".hero-slider .slide-item").length) {
            $(".hero-slider .slide-item").each(function() {
                var $this = $(this);
                var img = $this.find(".slider-bg").attr("src");

                $this.css({
                    backgroundImage: "url("+ img +")",
                    backgroundSize: "cover",
                    backgroundPosition: "center center"
                })
            });
        }
    }

    //Setting hero slider
$(".hero-slider").slick({
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev">Previous</button>',
  nextArrow: '<button type="button" class="slick-next">Next</button>',
  dots: true,
  fade: true,                 // chuyển mờ dần mượt hơn trượt ngang
  speed: 800,                 // thời gian chuyển (ms)
  cssEase: 'ease-in-out',     // đường cong mượt hơn 'linear'
  autoplay: true,
  autoplaySpeed: 5000,
  infinite: true,
  pauseOnHover: true,
  pauseOnFocus: false,
  waitForAnimate: false,      // không bị “giật” nếu user bấm liên tục
  useTransform: true,
  useCSS: true,
  lazyLoad: 'progressive'     // tải dần ảnh để bớt khựng
});



    // set two coloumn height equial
    function setTwoColEqHeight($col1, $col2) {
        var firstCol = $col1,
            secondCol = $col2,
            firstColHeight = $col1.innerHeight(),
            secondColHeight = $col2.innerHeight();

        if (firstColHeight > secondColHeight) {
            secondCol.css({
                "height": firstColHeight + 1 + "px"
            })
        } else {
            firstCol.css({
                "height": secondColHeight + 1 + "px"
            })
        }
    }

    function popupSaveTheDateCircle() {
        var saveTheDateCircle = $(".save-the-date");
        saveTheDateCircle.addClass("popup-save-the-date");
    }



    /*------------------------------------------
        = HIDE PRELOADER
    -------------------------------------------*/
    function preloader() {
        if($('.preloader').length) {
            $('.preloader').delay(100).fadeOut(500, function() {

                //active wow
                wow.init();

                if($(".save-the-date").length) {
                    popupSaveTheDateCircle();
                }

                //Active heor slider
                heroSlider();

            });
        }
    }



    /*------------------------------------------
        = WOW ANIMATION SETTING
    -------------------------------------------*/
    var wow = new WOW({
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    });






    /*------------------------------------------
        = STICKY HEADER
    -------------------------------------------*/

    // Function for clone an element for sticky menu
    function cloneNavForSticyMenu($ele, $newElmClass) {
        $ele.addClass('original').clone().insertAfter($ele).addClass($newElmClass).removeClass('original');
    }

    // clone home style 1 navigation for sticky menu
    if ($('.header-style-1 .navigation').length) {
        cloneNavForSticyMenu($('.header-style-1 .navigation'), "sticky");
    }

    // clone home style 1 navigation for sticky menu
    if ($('.header-style-2 .navigation').length) {
        cloneNavForSticyMenu($('.header-style-2 .navigation'), "sticky-2");
    }

    // Function for sticky menu
function stickIt($stickyClass, $toggleClass, $topOffset) {
    if ($(window).scrollTop() >= $topOffset) {
        var orgElement = $(".original");
        var widthOrgElement = orgElement.outerWidth(); // outerWidth thay vì css("width")

        $stickyClass
            .addClass($toggleClass)
            .css({
                "width": widthOrgElement
            })
            .fadeIn(); // dùng fadeIn thay vì .show()

        orgElement.css({
            "visibility": "hidden"
        });
    } else {
        $(".original").css({
            "visibility": "visible"
        });

        $stickyClass
            .removeClass($toggleClass)
            .fadeOut(); // dùng fadeOut thay vì để nguyên
    }
}




    /*------------------------------------------
        = COUNTDOWN CLOCK
    -------------------------------------------*/
    if ($("#clock").length) {
        $('#clock').countdown('2025/11/10', function(event) {
            var $this = $(this).html(event.strftime(''
            + '<div class="box"><div>%D Ngày</div>  </div>'
            + '<div class="box"><div>%H Giờ</div> </div>'
            + '<div class="box"><div>%M Phút</div> </div>'
            + '<div class="box"><div>%S Giây</div> </div>'));
        });
    }





    /*------------------------------------------
        = BACK TO TOP
    -------------------------------------------*/
    if($(".back-to-top-btn").length) {
        $(".back-to-top-btn").on("click", function() {
            $("html,body").animate({
                scrollTop: 0
            }, 3000, "easeInOutExpo");
            return false;
        })
    }






     /*==========================================================================
        WHEN DOCUMENT LOADING
    ==========================================================================
        $(window).on('load', function() {

            preloader();

            sliderBgSetting();

            toggleMobileNavigation();

            smallNavFunctionality();



            smoothScrolling($("#navbar > ul > li > a[href^='#']"), $(".header-style-1 .navigation").innerHeight());

        });

*/
document.addEventListener("DOMContentLoaded", function() {
    preloader(); // tắt loader khi DOM + CSS + JS đã sẵn sàng
    sliderBgSetting();
    toggleMobileNavigation();
    smallNavFunctionality();
    smoothScrolling($("#navbar > ul > li > a[href^='#']"), $(".header-style-1 .navigation").innerHeight());
/*
    // Gọi nhappass() trễ 500ms để mượt hơn
    setTimeout(function() {
        if (!getQueryParam('to')) { 
            nhappass();
        }
    }, 500);*/
});
    

    /*==========================================================================
        WHEN WINDOW SCROLL
    ==========================================================================*/
    $(window).on("scroll", function() {

        bgParallax();

        activeMenuItem($(".navigation-holder"));

        if ($(".header-style-1").length) {
            stickIt($(".sticky"), "sticky-on", $(".header-style-1 .navigation").offset().top);
        }

        if ($(".header-style-2").length) {
            stickIt($(".sticky-2"), "sticky-on", 300);
        }
    });


    /*==========================================================================
        WHEN WINDOW RESIZE
    ==========================================================================*/
    $(window).on("resize", function() {
        toggleClassForSmallNav();
        //smallNavFunctionality();

        clearTimeout($.data(this, 'resizeTimer'));
        $.data(this, 'resizeTimer', setTimeout(function() {
            smallNavFunctionality();
        }, 200));
    });



})(window.jQuery);

/*==========================================================================
        js gửi thông tin form đăng ký tới gg trang tính
    ==========================================================================*/

// Popup open

function popupOpen() {

var regExp = /^(0[23589][0-9]{8})$/;
var inputsdt = document.getElementById("phone").value;
  

  
if ($("#name").val() == ""){
  $("#name").css('box-shadow', '3px 0px red');
} else 
 
if ($("#message").val() == ""){
  $("#message").css('box-shadow', '3px 0px red'); 
  
  $("#name").css('box-shadow', 'none');
} else

{

     var name = $("#name").val().trim() || "Ai Đó";

    // ✅ GÁN TÊN VÀO CÁC THÀNH PHẦN
    document.getElementById("namene").textContent = name;
    document.getElementById("namene2").textContent = name;
  $("#name").css('box-shadow', 'none');
 
  $("#message").css('box-shadow', 'none');
document.getElementById("popup").style.display = "flex";
document.getElementById("loader").style.display = "flex";
const rocks = who => {
  document.getElementById("loader").style.display = "none";
};
setTimeout(rocks, 2 * 1000, 'Node.js');
document.getElementById("overlay2").style.display = "block";

  }
}


  
// Popup Close
  
function popupClose() {
  
document.getElementById("popup").style.display = "none";
  
document.getElementById("overlay2").style.display = "none";

}


//var inputsdt = document.getElementById('Reason');

//inputsdt.oninvalid = function(event) {
 //   event.target.setCustomValidity('SĐT là dãy số 9-10 số, không khoảng trắng và ký tự!');


let lastScrollTop = 0;

// Danh sách các phần tử cần thêm class shrink
const shrinkTargets = document.querySelectorAll(".header-style-1,.navigation,.site-header, .navigation-holder, .logone, .top-banner");

window.addEventListener("scroll", function () {
    let st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > lastScrollTop) {
        // Cuộn xuống → thêm class shrink
        shrinkTargets.forEach(el => el.classList.add("shrink"));

        // Đóng menu mobile nếu đang mở
        if ($(".navigation-holder").hasClass("slideInn")) {
            $(".navigation-holder").removeClass("slideInn");
        }

    } else {
        // Cuộn lên → gỡ class shrink
        shrinkTargets.forEach(el => el.classList.remove("shrink"));
    }

    lastScrollTop = st <= 0 ? 0 : st;
}, false);


   // nhạc
const music = document.getElementById("background-music");
let isPlaying = false;

// Chọn cả hai nút theo 2 ID
document.querySelectorAll("#music-player, #music-player-2").forEach(player => {
  player.addEventListener("click", () => {
    // hiệu ứng nhấn nút (nếu có CSS .pulsing)
    player.classList.add("pulsing");
    setTimeout(() => player.classList.remove("pulsing"), 500);

    // Toggle phát/tạm dừng
    if (isPlaying) {
      music.pause();
      isPlaying = false;
    } else {
      const p = music.play();
      if (p && typeof p.then === "function") {
        p.then(() => { isPlaying = true; }).catch(() => {});
      } else {
        isPlaying = true;
      }
    }

    // Cập nhật icon trên cả hai bản sao
    document.querySelectorAll("#music-icon, #music-icon-2").forEach(icon => {
      icon.className = isPlaying
        ? "fa-solid fa-volume-low"
        : "fa-solid fa-volume-xmark";
    });
  });
});

// Autoplay nhạc sau tương tác đầu tiên ở bất kỳ đâu trên trang
(function () {
  if (!music) return;

  // Tối ưu cho mobile/iOS
  music.autoplay = false;
  music.preload = "auto";
  music.setAttribute("playsinline", "");

  let triggered = false;

  const tryStart = () => {
    if (triggered || isPlaying) return;
    triggered = true;

    const p = music.play();
    if (p && typeof p.then === "function") {
      p.then(() => {
        isPlaying = true;
        // Đồng bộ icon của cả hai nút
        document.querySelectorAll("#music-icon, #music-icon-2").forEach(icon => {
          icon.className = "fa-solid fa-volume-low";
        });
      }).catch(() => {
        // Nếu vẫn bị chặn, cho phép thử lại ở tương tác kế tiếp
        triggered = false;
      });
    } else {
      isPlaying = true;
      document.querySelectorAll("#music-icon, #music-icon-2").forEach(icon => {
        icon.className = "fa-solid fa-volume-low";
      });
    }
  };

  // Bắt mọi cử chỉ đầu tiên
  window.addEventListener("pointerdown", tryStart, { once: true, passive: true });
  window.addEventListener("keydown", tryStart, { once: true });
})();



// Tạo overlay 1 lần khi trang tải
let overlay = document.createElement("div");
overlay.id = "floating-overlay";
document.body.appendChild(overlay);

const loveWords = [
  "💖 Yêu thương",
  "🎉 Hạnh phúc",
  "🎂 Ngọt ngào",
  "💌 Tình yêu",
  "🌸 Dịu dàng",
  "✨ Mãi bên nhau",
  "❤️ Forever"
];

function showFloatingText(x, y) {
  // Bật overlay
  overlay.style.opacity = "1";

  // Tạo chữ bay
  const text = document.createElement("div");
  text.className = "floating-text";
  text.textContent = loveWords[Math.floor(Math.random() * loveWords.length)];
  text.style.left = `${x}px`;
  text.style.top = `${y}px`;

  document.body.appendChild(text);

  setTimeout(() => {
    text.remove();
    overlay.style.opacity = "0"; // Tắt overlay sau chữ bay
  }, 1000);
}

document.querySelectorAll(".couple-logo").forEach(logo => {
  logo.style.cursor = "pointer";
  logo.addEventListener("click", (e) => {
    // Rung nhẹ logo
    logo.style.animation = "logoPulse 0.4s ease";
    setTimeout(() => logo.style.animation = "", 400);

    // Gọi chữ bay
    const x = e.clientX || window.innerWidth / 2;
    const y = e.clientY || window.innerHeight / 2;
    showFloatingText(x, y);
  });
});




