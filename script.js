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
        console.log("top clicked");
    });

    $(".header-profile").click(function(){
        console.log("profile clicked");
    });

    $(".header-skills").click(function(){
        console.log("skills clicked");
    })

    $(".header-works").click(function(){
        console.log("works clicked");
    });

    $(".header-contact").click(function(){
        console.log("contact clicked");
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
        $(this).animate({
            "font-size":"23px",
            "font-weight":"bold",
            "backgroundColor":"#fcdfc8"
        },300);
        //console.log("hover in");
        //$(this).css("background-color","#F6D8C0");
    },
    function(){
        $(this).animate({
            "font-size":"16px",
            "backgroundColor":"#fae8d9"
        },300);
        //console.log("hover off");
        //$(this).css("background-color","#fae8d9")
    });

    $(".works-item").hover(function(){
        $(this).animate2({
            "transform":"scale(1.1,1.1)",
        },300);
        //console.log("hover in");
    },
    function(){
        $(this).animate2({
            "transform":"scale(1.0,1.0)"
        },300);
        //console.log("hover off");
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