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
    }, a.p = "/", a(a.s = 11)
}({
    11: function(e, t, a) {
        e.exports = a("YHe5")
    },
    YHe5: function(e, a) {
        $.on("/dice", function() {
            var e, a, o = 15,
                s = !1,
                i = 0;
            victory = 0, stopped = 0, inprocess = 0, clicked = !1, t = "lower", betAudio = new Audio, winAudio = new Audio, loseAudio = new Audio, rollAudio = new Audio, window.setMode = function(e, t) {
                0 == inprocess && ($("*[data-tab]").toggleClass("active", !1), $("*[data-tab=" + e + "]").toggleClass("active", !0)), "default" === e && 0 == inprocess && ($("#auto").fadeOut(0), $("#gamestext").fadeOut(0), $("#gamesvalue").fadeOut(0), $("#gamesvictory").fadeOut(0), $("#gamesvictoryvalue").fadeOut(0), $("#play").fadeIn(0)), "auto" === e && ($("#play").fadeOut(0), $("#gamestext").fadeIn(0), $("#gamesvalue").fadeIn(0), $("#gamesvictory").fadeIn(0), $("#gamesvictoryvalue").fadeIn(0), $("#auto").fadeIn(0))
            }, window.cur = t;
            var r = $('<div class="d_slider-tooltip_container"><div class="d_slider-tooltip"><span id="tooltip-value">50</span></div></div>').hide(),
                n = function(e, t) {
                    var a = 2 === e.toString().length ? 7 : 11;
                    return $("<div>" + e + "</div>").css({
                        position: "absolute",
                        top: -30,
                        color: "#565656",
                        "text-align": "center",
                        "font-size": "13px",
                        left: 0 === e ? "-3px" : "calc(" + t + " - " + a + "px)"
                    })
                };
            (e = $("#slider-range").slider({
                range: "min",
                min: 0,
                max: 100,
                value: 50,
                slide: function(e, a) {
                    return !(a.value < 1 || a.value > 99) && !("lower" === t && a.value > 94) && !("higher" === t && a.value < 6) && (__profit(a.value), $("#tooltip-value").text(a.value), void updateHeader(a.value))
                }
            })).append($('<div id="circle" class="d_slider-circle" style="display: none" />')).append($('<div id="result" class="d_slider-result" style="opacity: 0">0</div>')).append(n(100, "100%")).append(n(75, "75%")).append(n(50, "50%")).append(n(25, "25%")).append(n(0, "0")), e.find(".ui-slider-handle").append(r).hover(function() {
                r.stop(!0).fadeIn("fast")
            }, function() {
                r.stop(!0).fadeOut("fast")
            }), $("#i_value").on("input", function() {
                $(this).val() < 6 && "higher" === t && $(this).val(94), $(this).val() < 94 && "lower" === t && $(this).val(6), $("#slider-range").slider("value", $("#i_value").val()), $("#i_chance").val(("higher" === t ? 100 - $("#i_value").val() : $("#i_value").val()) + "%")
            }), $("*[data-games]").on("click", function() {
                $("*[data-games]").toggleClass("bc_active", !1), $(this).toggleClass("bc_active", !0), o = parseInt($(this).attr("data-games")), $(".games_input").val(o)
            }), $("#change_games").on("click", function() {
                s || (s = !0, $("#change_games span").toggleClass("dn", !0), $("#change_games input").toggleClass("dn", !1), $(".bomb_input").on("input", function() {
                    var e = parseInt($(this).val());
                    if (isNaN(e) || e < 1 || e > 240) return $(this).toggleClass("bad", !0), void(r = !0);
                    $(this).toggleClass("bad", !1), r = !1, o = e, $("*[data-games]").toggleClass("bc_active", !1), $('*[data-games="' + o + '"]').toggleClass("bc_active", !0)
                }).focus())
            }), $("*[data-victory]").on("click", function() {
                $(this).attr("*[data-victory]"), $(".buttons-3-selected").removeClass("buttons-3-selected"), $(this).addClass("buttons-3-selected"), victory = parseInt($(this).attr("data-victory"))
            }), window.sw = function() {
                t = "lower" === t ? "higher" : "lower", $("#slider-range").slider("option", {
                    range: "lower" === t ? "min" : "max"
                }), $("#sw_text").html("lower" === t ? "Less" : "More");
                var e = 100 - $("#slider-range").slider("value");
                "higher" === t && e < 6 && (e = 6), "lower" === t && e > 94 && (e = 94), e < 1 && (e = 1), e > 99 && (e = 99), $("#tooltip-value").html(e), $("#slider-range").slider("value", e), updateHeader(e)
            }, window.updateHeader = function(e) {
                var a = null == e ? $("#slider-range").slider("value") : e;
                $("#i_value").val(a), $("#i_chance").val(("lower" === t ? a : 100 - a) + "%")
            }, window.getDiceProfit = function(e, t, a) {
                var o;
                return t === a ? o = 100 : (range = a - t, o = (100 - range) / range), (o * e).toFixed(2)
            }, window.diceauto = function() {
                if (!(o > 0)) return iziToast.info({
                    message: "Минимальное количество игр равно 5",
                    icon: "fa fa-info"
                }), setTimeout(function() {}, 100);
                parseFloat($("#bet_profit").html()) <= 0 ? iziToast.error({
                    message: "The winning amount must be higher than 0.<br>Adjust the bet and chance.",
                    icon: "fa fa-times",
                    position: "bottomCenter"
                }) : $.get("/game/dice/" + $("#bet").val() + "/" + t + "/" + $("#slider-range").slider("value") + (isDemo ? "?demo" : ""), function(e) {
                    var t = JSON.parse(e);
                    if (null != t.error) return "$" === t.error && load("/"), -1 === t.error && $("#b_si").click(), stopauto(), 0 === t.error && iziToast.error({
                        message: "Допустимое значение: 1% - 94%",
                        icon: "fa fa-times"
                    }), clicked = !1, stopauto(), 1 === t.error && iziToast.error({
                        message: 'Минимальная ставка: 0.01&nbsp;<i class="fad fa-coins"></i>',
                        icon: "fa fa-times"
                    }), clicked = !1, stopauto(), 2 === t.error && $("#_payin").click(), clicked = !1, void stopauto();
                    rollAudio.src = isAudioGame ? "/assets/media/roll.mp3" : "", rollAudio.play();
                    var s = !1 !== t.response.result;
                    $("#circle").fadeIn("fast"), $("#circle").css({
                        left: "calc(" + t.response.number + "% - 3px)",
                        color: s ? "green" : "red"
                    }), $("#result").toggleClass("lose", !s), $("#result").toggleClass("win", s), setTimeout(function() {
                        1 == s && (winAudio.src = isAudioGame ? "/assets/media/win.mp3" : "", winAudio.play()), 0 == s && (loseAudio.src = isAudioGame ? "/assets/media/lose.mp3" : "", loseAudio.play())
                    }, 300), $("#result").text(t.response.number), $("#result").css({
                        opacity: 1
                    }), $("#result").css({
                        left: "calc(" + t.response.number + "% - 16px)"
                    }), clearTimeout(a), a = setTimeout(function() {
                        $("#result").css({
                            opacity: 0
                        }), $("#circle").fadeOut("fast")
                    }, 7e3), setTimeout(function() {
                        clicked = !1
                    }, 100), s && isDemo && isGuest() && showDemoTooltip(), -1 === t.response.id || isDemo || sendDrop(t.response.id), validateTask(t.response.id), updateBalanceN(), o -= 1, inprocess = 1, 1 == stopped && stopauto(), 0 == stopped && (0 == victory && (0 == s ? o > 0 && retrygame() : (stopauto(), o = parseInt($("*[data-games]").attr("data-games")))), 1 == victory && (0 == stopped && (o > 0 ? retrygame() : (stopauto(), o = parseInt($("*[data-games]").attr("data-games")))), 1 == stopped && stopauto()), 2 == victory && (0 == s ? o > 0 ? retrygame() : (stopauto(), i = 0, o = parseInt($("*[data-games]").attr("data-games"))) : (o > 0 && (i < 4 ? (i += 1, retrygame()) : (stopauto(), i = 0, o = parseInt($("*[data-games]").attr("data-games"))), o = parseInt($("*[data-games]").attr("data-games"))), 0 == o && (stopauto(), i = 0, o = parseInt($("*[data-games]").attr("data-games"))))))
                })
            }, window.retrygame = function() {
                0 == stopped && ($("#auto").fadeIn(0).attr("onclick", "stopauto()"), setAutoText("Stop"), setTimeout(function() {
                    diceauto()
                }, 350)), 1 == stopped && stopauto()
            }, window.diceautotry = function() {
                stopped = 0, inprocess = 1, diceauto()
            }, window.stopauto = function() {
                stopped = 1, inprocess = 0, $("#auto").fadeIn(0).attr("onclick", "diceautotry()"), setAutoText("Запустить"), o = parseInt($("*[data-games]").attr("data-games"))
            }, window.dice = function() {
                if (!1 !== clicked) return iziToast.info({
                    message: "You bet too often!",
                    icon: "fa fa-info"
                }), setTimeout(function() {
                    clicked = !1
                }, 100);
                clicked = !0, parseFloat($("#bet_profit").html()) <= 0 ? iziToast.error({
                    message: "The winning amount should be higher 0.<br>Adjust your bet and chance.",
                    icon: "fa fa-times",
                    position: "bottomCenter"
                }) : $.get("/game/dice/" + $("#bet").val() + "/" + t + "/" + $("#slider-range").slider("value") + (isDemo ? "?demo" : ""), function(e) {
                    var t = JSON.parse(e);
                    if (null != t.error) return "$" === t.error && load("/"), -1 === t.error && $("#b_si").click(), 0 === t.error && iziToast.error({
                        message: "Допустимое значение: 1% - 94%",
                        icon: "fa fa-times"
                    }), clicked = !1, 1 === t.error && iziToast.error({
                        message: 'Минимальная ставка: 0.01&nbsp;<i class="fad fa-coins"></i>',
                        icon: "fa fa-times"
                    }), clicked = !1, 2 === t.error && $("#_payin").click(), void(clicked = !1);
                    rollAudio.src = isAudioGame ? "/assets/media/roll.mp3" : "", rollAudio.play();
                    var o = !1 !== t.response.result;
                    $("#circle").fadeIn("fast"), $("#circle").css({
                        left: "calc(" + t.response.number + "% - 3px)",
                        color: o ? "green" : "red"
                    }), $("#result").toggleClass("lose", !o), $("#result").toggleClass("win", o), setTimeout(function() {
                        1 == o && (winAudio.src = isAudioGame ? "/assets/media/win.mp3" : "", winAudio.play()), 0 == o && (loseAudio.src = isAudioGame ? "/assets/media/lose.mp3" : "", loseAudio.play())
                    }, 300), $("#result").text(t.response.number), $("#result").css({
                        opacity: 1
                    }), $("#result").css({
                        left: "calc(" + t.response.number + "% - 16px)"
                    }), clearTimeout(a), a = setTimeout(function() {
                        $("#result").css({
                            opacity: 0
                        }), $("#circle").fadeOut("fast")
                    }, 7e3), setTimeout(function() {
                        clicked = !1
                    }, 100), o && isDemo && isGuest() && showDemoTooltip(), -1 === t.response.id || isDemo || sendDrop(t.response.id), validateTask(t.response.id), updateBalanceN()
                })
            }
        })
    }
});