$.fn.animate2 = function (properties, duration, ease) {
    ease = ease || 'ease';
    var $this = this;
    var cssOrig = { transition: $this.css('transition') };
    return $this.queue(next => {
        properties['transition'] = 'all ' + duration + 'ms ' + ease;
        $this.css(properties);
        setTimeout(function () {
            $this.css(cssOrig);
            next();
        }, duration);
    });
};

$(function(){
    $(".header-top").click(function(){
        var position = $("#top").offset().top;
        $("html,body").animate({
            "scrollTop":position
        },500);
    });

    $(".header-profile").click(function(){
        var position = $("#profile").offset().top;
        $("html,body").animate({
            "scrollTop":position
        },500);
    });

    $(".header-skills").click(function(){
        var position = $("#skills").offset().top;
        $("html,body").animate({
            "scrollTop":position
        },500);
    })

    $(".header-works").click(function(){
        var position = $("#works").offset().top;
        $("html,body").animate({
            "scrollTop":position
        },500);
    });

    $(".header-contact").click(function(){
        var position = $("#contact").offset().top;
        $("html,body").animate({
            "scrollTop":position
        },500);
    });

    $(".machomate").click(function(){
        window.location.href = "https://github.com/tshuhei/Machomate";
        console.log("machomate clicked");
    });

    $(".emostack").click(function(){
        window.location.href = "https://github.com/tshuhei/EmoStack";
        console.log("emostack clicked");
    });

    $(".portfolio").click(function(){
        window.location.href = "https://github.com/tshuhei/MyPortfolio";
        console.log("portfolio clicked");
    });

    $(".suicide").click(function(){
        window.location.href = "https://github.com/tshuhei/Suicide-Analysis-System";
        console.log("suicide clicked");
    });

    $(".header-item").hover(function(){
        //getWindowSize();
        if(window.innerWidth>450){
            $(this).animate({
                "font-size":"23px",
                "font-weight":"bold",
                "backgroundColor":"#fcdfc8",
            },300);
        }else{
            $(this).animate({
                "font-size":"13px",
                "font-weight":"bold",
                "backgroundColor":"#fcdfc8",
            },300);
        }

    },
    function(){
        //getWindowSize();
        if(window.innerWidth>450){
            $(this).animate({
                "font-size":"16px",
                "backgroundColor":"#fae8d9",
            },300);   
        }else{
            $(this).animate({
                "font-size":"10px",
                "backgroundColor":"#fae8d9",
            },300);   
        }
    });

    $(".works-item").hover(function(){
        $(this).animate2({
            "transform":"scale(1.1,1.1)",
        },300);
    },
    function(){
        $(this).animate2({
            "transform":"scale(1.0,1.0)"
        },300);
    });

    $(".contact-image").hover(function(){
        $(this).animate2({
            "transform":"scale(1.17,1.17)"
        },300);
    },
    function(){
        $(this).animate2({
            "transform":"scale(1.0,1.0)"
        },300);
    });
});