! function(e) {
    var t = {};

    function a(o) {
        if (t[o]) return t[o].exports;
        var s = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(s.exports, s, s.exports, a), s.l = !0, s.exports
    }
    a.m = e, a.c = t, a.d = function(e, t, o) {
        a.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
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
        var o = Object.create(null);
        if (a.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var s in e) a.d(o, s, function(t) {
                return e[t]
            }.bind(null, s));
        return o
    }, a.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return a.d(t, "a", t), t
    }, a.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, a.p = "/", a(a.s = 7)
}({
    7: function(e, t, a) {
        e.exports = a("kSzc")
    },
    kSzc: function(e, t) {
        $.on("/wheel", function() {
            var e, t, a, o = 15,
                s = !1,
                l = 0;
            victory = 0, stopped = 0, auto = 0, inprocess = 0, r = ["green", "red", "black", "red", "black", "red", "black", "red", "black", "red", "black", "red", "black", "red", "black"], betAudio = new Audio, winAudio = new Audio, loseAudio = new Audio, window.setMode = function(e, t) {
                0 == inprocess && ($("*[data-tab]").toggleClass("active", !1), $("*[data-tab=" + e + "]").toggleClass("active", !0)), "default" === e && 0 == inprocess && (auto = 0, $("#auto").fadeOut(0), $("#gamestext").fadeOut(0), $("#gamesvalue").fadeOut(0), $("#gamesvictory").fadeOut(0), $("#gamesvictoryvalue").fadeOut(0), $("#play").fadeIn(0)), "auto" === e && (auto = 1, $("#play").fadeOut(0), $("#gamestext").fadeIn(0), $("#gamesvalue").fadeIn(0), $("#gamesvictory").fadeIn(0), $("#gamesvictoryvalue").fadeIn(0), $("#auto").fadeIn(0))
            }, window.selected_color = null, rdp(), e = !1, a = new Winwheel({
                canvasId: "canvas",
                lineWidth: 0,
                numSegments: r.length,
                segments: [{
                    fillStyle: "#37b546",
                    strokeStyle: "#070707"
                }, {
                    fillStyle: "#e86376",
                    strokeStyle: "#070707"
                }, {
                    fillStyle: "#1c2028",
                    strokeStyle: "#070707"
                }, {
                    fillStyle: "#e86376",
                    strokeStyle: "#070707"
                }, {
                    fillStyle: "#1c2028",
                    strokeStyle: "#070707"
                }, {
                    fillStyle: "#e86376",
                    strokeStyle: "#070707"
                }, {
                    fillStyle: "#1c2028",
                    strokeStyle: "#070707"
                }, {
                    fillStyle: "#e86376",
                    strokeStyle: "#070707"
                }, {
                    fillStyle: "#1c2028",
                    strokeStyle: "#070707"
                }, {
                    fillStyle: "#e86376",
                    strokeStyle: "#070707"
                }, {
                    fillStyle: "#1c2028",
                    strokeStyle: "#070707"
                }, {
                    fillStyle: "#e86376",
                    strokeStyle: "#070707"
                }, {
                    fillStyle: "#1c2028",
                    strokeStyle: "#070707"
                }, {
                    fillStyle: "#e86376",
                    strokeStyle: "#070707"
                }, {
                    fillStyle: "#1c2028",
                    strokeStyle: "#070707"
                }],
                animation: {
                    type: "spinToStop",
                    duration: 5,
                    spins: r.length,
                    callbackFinished: "stop()"
                },
                innerRadius: 270
            }), window.stop = function() {
                e = !1;
                var a = !1 === t.result ? "x0.00" : "green" === t.result ? "x14.00" : "x2.00",
                    s = !1 === t.result ? "You lose" : "You win";
                1 == t.demo && ($(".tip_badge").fadeIn(200), $(".tip_text").fadeIn(200)), 0 == t.demo && ($(".tip_badge").fadeOut(200), $(".tip_text").fadeOut(200)), s += " " + t.profit.substr(1) + '&nbsp;<i class="fad fa-coins"></i>', -1 === t.id || isDemo || sendDrop(t.id), !0 === t.result && isDemo && isGuest() && showDemoTooltip(), setTimeout(function() {
                    !0 === t.result ? (1 == t.demo && $(".wheel_game_result").toggleClass("wg_win-demo", !0), 0 == t.demo && $(".wheel_game_result").toggleClass("wg_win", !0), winAudio.src = isAudioGame ? "/assets/media/win.mp3" : "", winAudio.play()) : (1 == t.demo && $(".wheel_game_result").toggleClass("wg_lose-demo", !0), 0 == t.demo && $(".wheel_game_result").toggleClass("wg_lose", !0), loseAudio.src = isAudioGame ? "/assets/media/lose.mp3" : "", loseAudio.play())
                }, 200), $(".wheel_game_result .mul").html(a), $(".wheel_game_result .te").html(s), $(".wheel_game_result").fadeIn("fast"), updateBalanceN(), 1 == auto && (inprocess = 1, o -= 1, 1 == stopped && (setAutoText("Запустить"), stopauto()), 0 == stopped && (0 == victory && (0 == t.result && o > 0 && retrygame(), 1 == t.result && (setAutoText("Запустить"), stopauto(), o = parseInt($("*[data-games]").attr("data-games")))), 1 == victory && (0 == stopped && (o > 0 ? retrygame() : (stopauto(), o = parseInt($("*[data-games]").attr("data-games")))), 1 == stopped && stopauto()), 2 == victory && (0 == t.result ? o > 0 ? retrygame() : (stopauto(), l = 0, o = parseInt($("*[data-games]").attr("data-games"))) : (o > 0 && (l < 4 ? (l += 1, retrygame()) : (stopauto(), l = 0, o = parseInt($("*[data-games]").attr("data-games"))), o = parseInt($("*[data-games]").attr("data-games"))), 0 == o && (stopauto(), l = 0, o = parseInt($("*[data-games]").attr("data-games")))))))
            }, window.wheel = function() {
                null != window.selected_color ? !0 !== e && $.get("/game/wheel/" + $("#bet").val() + "/" + window.selected_color + (isDemo ? "?demo" : ""), function(o) {
                    var s = JSON.parse(o);
                    if (t = s, null != s.error) return "$" === s.error && load("/"), -1 === s.error && $("#b_si").click(), 0 === s.error && iziToast.error({
                        message: "Select color.",
                        icon: "fa fa-times"
                    }), 1 === s.error && iziToast.error({
                        message: 'Minimum bet: 0.01&nbsp;<i class="fad fa-coins"></i>',
                        icon: "fa fa-times"
                    }), void(2 === s.error && $("#_payin").click());
                    betAudio.src = isAudioGame ? "/assets/media/bet.mp3" : "", betAudio.play(), isDemo || updateBalanceN(void 0, -parseFloat($("#bet").val())), $(".wheel_game_result").fadeOut("fast", function() {
                        $(this).toggleClass("wg_win", !1).toggleClass("wg_lose", !1).toggleClass("wg_win-demo", !1).toggleClass("wg_lose-demo", !1)
                    }), e = !0, a.stopAnimation(!1), a.rotationAngle = 0, a.draw(), a.animation.duration = isQuick ? .15 : 5, a.animation.stopAngle = a.segments[s.segment + 1].startAngle + (a.segments[s.segment + 1].endAngle - a.segments[s.segment + 1].startAngle) / 2, a.startAnimation()
                }) : iziToast.error({
                    message: "Select color.",
                    icon: "fa fa-times"
                })
            }, window.wheelauto = function() {
                if (!(o > 0)) return iziToast.info({
                    message: "The minimum number of games is 5",
                    icon: "fa fa-info"
                }), setTimeout(function() {}, 100);
                null != window.selected_color ? !0 !== e && $.get("/game/wheel/" + $("#bet").val() + "/" + window.selected_color + (isDemo ? "?demo" : ""), function(o) {
                    var s = JSON.parse(o);
                    if (t = s, null != s.error) return "$" === s.error && load("/"), -1 === s.error && $("#b_si").click(), 0 === s.error && iziToast.error({
                        message: "Select color.",
                        icon: "fa fa-times"
                    }), 1 === s.error && iziToast.error({
                        message: 'Minimum bet: 0.01&nbsp;<i class="fad fa-coins"></i>',
                        icon: "fa fa-times"
                    }), void(2 === s.error && $("#_payin").click());
                    betAudio.src = isAudioGame ? "/assets/media/bet.mp3" : "", betAudio.play(), isDemo || updateBalanceN(void 0, -parseFloat($("#bet").val())), $(".wheel_game_result").fadeOut("fast", function() {
                        $(this).toggleClass("wg_win", !1).toggleClass("wg_lose", !1).toggleClass("wg_win-demo", !1).toggleClass("wg_lose-demo", !1)
                    }), e = !0, a.stopAnimation(!1), a.rotationAngle = 0, a.draw(), a.animation.duration = isQuick ? .15 : 5, a.animation.stopAngle = a.segments[s.segment + 1].startAngle + (a.segments[s.segment + 1].endAngle - a.segments[s.segment + 1].startAngle) / 2, a.startAnimation()
                }) : iziToast.error({
                    message: "Select color.",
                    icon: "fa fa-times"
                })
            }, window.retrygame = function() {
                0 == stopped && ($("#auto").fadeIn(0).attr("onclick", "stopauto()"), setAutoText("Остановить"), setTimeout(function() {
                    wheelauto()
                }, 200)), 1 == stopped && (stopauto(), setAutoText("Запустить"))
            }, window.wheelautotry = function() {
                stopped = 0, inprocess = 1, wheelauto()
            }, window.stopauto = function() {
                stopped = 1, inprocess = 0, $("#auto").fadeIn(0).attr("onclick", "wheelautotry()"), setAutoText("Запустить"), o = parseInt($("*[data-games]").attr("data-games"))
            }, window.pickColor = function(e) {
                window.selected_color = e, __profit(), $("#w_color").removeClass("bet_profit-error"), $("#w_color").html("green" === e ? "Зеленый" : "red" === e ? "Красный" : "Черный"), $("*[data-wheel-color]").toggleClass("w_b_active", !1), $('*[data-wheel-color="' + e + '"]').toggleClass("w_b_active", !0)
            }, $("*[data-games]").on("click", function() {
                $("*[data-games]").toggleClass("bc_active", !1), $(this).toggleClass("bc_active", !0), o = parseInt($(this).attr("data-games")), $(".games_input").val(o)
            }), $("#change_games").on("click", function() {
                s || (s = !0, $("#change_games span").toggleClass("dn", !0), $("#change_games input").toggleClass("dn", !1), $(".bomb_input").on("input", function() {
                    var e = parseInt($(this).val());
                    if (isNaN(e) || e < 1 || e > 240) return $(this).toggleClass("bad", !0), void(i = !0);
                    $(this).toggleClass("bad", !1), i = !1, o = e, $("*[data-games]").toggleClass("bc_active", !1), $('*[data-games="' + o + '"]').toggleClass("bc_active", !0)
                }).focus())
            }), $("*[data-victory]").on("click", function() {
                $(this).attr("*[data-victory]"), $(".buttons-3-selected").removeClass("buttons-3-selected"), $(this).addClass("buttons-3-selected"), victory = parseInt($(this).attr("data-victory"))
            })
        })
    }
});