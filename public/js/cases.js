!function(e){var t={};function a(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a(a.s=14)}({14:function(e,t,a){e.exports=a("iZWI")},iZWI:function(e,t){$.on("/cases",(function(){var e,t=!1;$(".case-purchase").on("click",(function(){if(!$(this).hasClass("case-btn-disabled")){$(".case-purchase").addClass("case-btn-disabled");var e=$(this).attr("data-case"),a="#"+e+" ";$('.case-container:not([data-case-id="'+e+'"])').css({opacity:"0.1"}),$(a+".lid-t").parent().removeClass("spinner-p").addClass("spinner"),setTimeout((function(){$(a+" .t-glow-sel").addClass("t-glow")}),1200),setTimeout((function(){$(a+".lid-t").parent().addClass("spinner-p").removeClass("spinner"),$(a+".lid-t").addClass("lid-open"),$("#modal-1-header").html($('*[data-case-id="'+e+'"] .case-header').html()),$("#modal-1-content").html('\n                <div class="profile-loader" style="top: 0; left: 0">\n                    <div></div>\n                </div>'),setTimeout((function(){setTimeout((function(){$.get("/case",(function(a){$(".profile-loader").fadeOut("fast",(function(){$("#modal-1-content").hide(),$("#modal-1-content").html(a);for(var n=JSON.parse($('*[data-data-id="'+e+'"]').attr("data-json").replace(/'/g,'"')),o=0;o<n.length;o++){var s=n[o],i={1:s.value+"" + '&nbsp;<i class="fad fa-coins"></i>',2:"10"===$("#chat_send").attr("data-user-level")?s.value/20+"" + '&nbsp;<i class="fad fa-coins"></i>':s.value+"% "+declOfNum(s.value,["опыт ","опыта ","опыта "])}[s.type];$(".case-modal-items").append('\n                                    <div class="case-modal-item">\n                                        <div class="case-modal-item-content case-'+s.rarity+'">\n                                            '+i+"\n                                        </div>\n                                    </div>\n                                "),$("#caseWheel").append('<div class="wheel-item wheel-black case-'+s.rarity+'"><div>'+i+"</div></div>")}clone();var r=$('*[data-price-id="'+e+'"]').html();$("#price").html("Бесплатно"===r?"Открыть":"Открыть за "+r),$("#modal-1-content").fadeIn("fast"),$(".case-modal-purchase").on("click",(function(){if(!$(this).hasClass("case-btn-disabled")&&!t){t=!0;var a=$(this);$.get("/case/"+e,(function(e){var o=JSON.parse(e);if(null!=o.error)return-1===o.error&&($(".md-close").click(),$("#b_si").click()),0===o.error&&iziToast.error({position:"bottomCenter",icon:"fal fa-times",message:"Произошла серверная ошибка"}),1===o.error&&($(".md-close").click(),$("#_payin").click(),iziToast.error({position:"bottomCenter",icon:"fal fa-times",message:"Недостаточно баланса на счете."})),void(2===o.error&&iziToast.error({position:"bottomCenter",icon:"fal fa-times",message:"Бесплатный кейс доступен для открытия только раз в 24 часа."}));o.send&&sendDrop(o.id);var s=a.html();$(".md-close").fadeOut("fast"),a.addClass("case-btn-disabled"),a.find("span").fadeOut("fast",(function(){$(this).html("Открываем...").fadeIn("fast")})),spin(parseInt(o.item),n.length),setTimeout((function(){$(".md-close").fadeIn("fast"),a.find("span").fadeOut("fast",(function(){a.html(o.free?"Следующее открытие будет доступно через 24 часа":s).fadeIn("fast")})),o.free?(load("/cases",void 0,!0),$(".gg_sidebar-notification").fadeOut("fast"),$(".gg_sidebar-notification-side").fadeOut("fast")):a.removeClass("case-btn-disabled"),t=!1,updateBalanceN()}),11e3)}))}}))}))}))}),150),$("#modal-1").addClass("md-show")}),300)}),1400)}})),$("#md-close").on("click",(function(){$('.case-purchase:not([data-disabled="true"])').removeClass("case-btn-disabled"),$(".case-container").css({opacity:1}),$("#modal-1").removeClass("md-show"),$(".t-glow-sel").removeClass("t-glow"),$(".lid-t").removeClass("lid-open")})),window.countdown=function(t){var a;e=1e3*t,a=setInterval((function(){function t(e){return e>9?e:"0"+e}if(0!==$("#countdown").length){var n=Math.floor(e/864e5),o=Math.floor(e/36e5),s=Math.floor(e/6e4),i=o-24*n,r=s-60*o,l=Math.floor(e/1e3)-60*s;if(0===i&&0===r&&0===l)return load("/cases"),void clearInterval(a);$("#countdown").html(t(i)+":"+t(r)+":"+t(l)),e-=1e3}else clearInterval(a)}),1e3)}}))}});
! function(e) {
    var t = {};

    function a(n) {
        if (t[n]) return t[n].exports;
        var o = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, a), o.l = !0, o.exports
    }
    a.m = e, a.c = t, a.d = function(e, t, n) {
        a.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, a.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, a.t = function(e, t) {
        if (1 & t && (e = a(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (a.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) a.d(n, o, function(t) {
                return e[t]
            }.bind(null, o));
        return n
    }, a.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return a.d(t, "a", t), t
    }, a.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, a.p = "/", a(a.s = 14)
}({
    14: function(e, t, a) {
        e.exports = a("iZWI")
    },
    iZWI: function(e, t) {
        $.on("/cases", (function() {
            var e, t = !1;
            $(".case-purchase").on("click", (function() {
                if (!$(this).hasClass("case-btn-disabled")) {
                    $(".case-purchase").addClass("case-btn-disabled");
                    var e = $(this).attr("data-case"),
                        a = "#" + e + " ";
                    $('.case-container:not([data-case-id="' + e + '"])').css({
                        opacity: "0.1"
                    }), $(a + ".lid-t").parent().removeClass("spinner-p").addClass("spinner"), setTimeout((function() {
                        $(a + " .t-glow-sel").addClass("t-glow")
                    }), 1200), setTimeout((function() {
                        $(a + ".lid-t").parent().addClass("spinner-p").removeClass("spinner"), $(a + ".lid-t").addClass("lid-open"), $("#modal-1-header").html($('*[data-case-id="' + e + '"] .case-header').html()), $("#modal-1-content").html('\n                <div class="profile-loader" style="top: 0; left: 0">\n                    <div></div>\n                </div>'), setTimeout((function() {
                            setTimeout((function() {
                                $.get("/case", (function(a) {
                                    $(".profile-loader").fadeOut("fast", (function() {
                                        $("#modal-1-content").hide(), $("#modal-1-content").html(a);
                                        for (var n = JSON.parse($('*[data-data-id="' + e + '"]').attr("data-json").replace(/'/g, '"')), o = 0; o < n.length; o++) {
                                            var s = n[o],
                                                i = {
                                                    1: s.value + "" + '&nbsp;<i class="fad fa-coins"></i>',
                                                    2: "10" === $("#chat_send").attr("data-user-level") ? s.value / 20 + "" + '&nbsp;<i class="fad fa-coins"></i>' : s.value + "% " + declOfNum(s.value, ["experience ", "experience ", "experience "])
                                                } [s.type];
                                            $(".case-modal-items").append('\n                                    <div class="case-modal-item">\n                                        <div class="case-modal-item-content case-' + s.rarity + '">\n                                            ' + i + "\n                                        </div>\n                                    </div>\n                                "), $("#caseWheel").append('<div class="wheel-item wheel-black case-' + s.rarity + '"><div>' + i + "</div></div>")
                                        }
                                        clone();
                                        var r = $('*[data-price-id="' + e + '"]').html();
                                        $("#price").html("For free" === r ? "Open" : "Open for " + r), $("#modal-1-content").fadeIn("fast"), $(".case-modal-purchase").on("click", (function() {
                                            if (!$(this).hasClass("case-btn-disabled") && !t) {
                                                t = !0;
                                                var a = $(this);
                                                $.get("/case/" + e, (function(e) {
                                                    var o = JSON.parse(e);
                                                    if (null != o.error) return -1 === o.error && ($(".md-close").click(), $("#b_si").click()), 0 === o.error && iziToast.error({
                                                        position: "bottomCenter",
                                                        icon: "fal fa-times",
                                                        message: "A server error has occurred"
                                                    }), 1 === o.error && ($(".md-close").click(), $("#_payin").click(), iziToast.error({
                                                        position: "bottomCenter",
                                                        icon: "fal fa-times",
                                                        message: "Insufficient account balance."
                                                    })), void(2 === o.error && iziToast.error({
                                                        position: "bottomCenter",
                                                        icon: "fal fa-times",
                                                        message: "Free case can only be opened once every 24 hours."
                                                    }));
                                                    o.send && sendDrop(o.id);
                                                    var s = a.html();
                                                    $(".md-close").fadeOut("fast"), a.addClass("case-btn-disabled"), a.find("span").fadeOut("fast", (function() {
                                                        $(this).html("Let's open it...").fadeIn("fast")
                                                    })), spin(parseInt(o.item), n.length), setTimeout((function() {
                                                        $(".md-close").fadeIn("fast"), a.find("span").fadeOut("fast", (function() {
                                                            a.html(o.free ? "The next opening will be available in 24 hours" : s).fadeIn("fast")
                                                        })), o.free ? (load("/cases", void 0, !0), $(".gg_sidebar-notification").fadeOut("fast"), $(".gg_sidebar-notification-side").fadeOut("fast")) : a.removeClass("case-btn-disabled"), t = !1, updateBalanceN()
                                                    }), 11e3)
                                                }))
                                            }
                                        }))
                                    }))
                                }))
                            }), 150), $("#modal-1").addClass("md-show")
                        }), 300)
                    }), 1400)
                }
            })), $("#md-close").on("click", (function() {
                $('.case-purchase:not([data-disabled="true"])').removeClass("case-btn-disabled"), $(".case-container").css({
                    opacity: 1
                }), $("#modal-1").removeClass("md-show"), $(".t-glow-sel").removeClass("t-glow"), $(".lid-t").removeClass("lid-open")
            })), window.countdown = function(t) {
                var a;
                e = 1e3 * t, a = setInterval((function() {
                    function t(e) {
                        return e > 9 ? e : "0" + e
                    }
                    if (0 !== $("#countdown").length) {
                        var n = Math.floor(e / 864e5),
                            o = Math.floor(e / 36e5),
                            s = Math.floor(e / 6e4),
                            i = o - 24 * n,
                            r = s - 60 * o,
                            l = Math.floor(e / 1e3) - 60 * s;
                        if (0 === i && 0 === r && 0 === l) return load("/cases"), void clearInterval(a);
                        $("#countdown").html(t(i) + ":" + t(r) + ":" + t(l)), e -= 1e3
                    } else clearInterval(a)
                }), 1e3)
            }
        }))
    }
});