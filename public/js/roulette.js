! function(e) {
    var t = {};

    function a(o) {
        if (t[o]) return t[o].exports;
        var i = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(i.exports, i, i.exports, a), i.l = !0, i.exports
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
            for (var i in e) a.d(o, i, function(t) {
                return e[t]
            }.bind(null, i));
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
    }, a.p = "/", a(a.s = 8)
}({
    8: function(e, t, a) {
        e.exports = a("kqEK")
    },
    kqEK: function(e, t) {
        $.on("/roulette", function() {
            var e = .1,
                t = [0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26],
                a = [32, 19, 21, 25, 34, 27, 36, 30, 23, 5, 16, 1, 14, 9, 18, 7, 12, 3],
                o = [15, 4, 2, 17, 6, 13, 11, 8, 10, 24, 33, 20, 31, 22, 29, 28, 35, 26],
                i = [0],
                n = [],
                s = {},
                r = [],
                d = 0,
                c = 15,
                u = !1,
                p = 0;
            victory = 0, stopped = 0, gamemode = 0, winstatus = 0, clicked = !1, l = null, betAudio = new Audio, spinAudio = new Audio, clickAudio = new Audio, winAudio = new Audio, loseAudio = new Audio, $("*[data-games]").on("click", function() {
                $("*[data-games]").toggleClass("bc_active", !1), $(this).toggleClass("bc_active", !0), c = parseInt($(this).attr("data-games")), $(".games_input").val(c)
            }), $("#change_games").on("click", function() {
                u || (u = !0, $("#change_games span").toggleClass("dn", !0), $("#change_games input").toggleClass("dn", !1), $(".bomb_input").on("input", function() {
                    var e = parseInt($(this).val());
                    if (isNaN(e) || e < 1 || e > 240) return $(this).toggleClass("bad", !0), void(n = !0);
                    $(this).toggleClass("bad", !1), n = !1, c = e, $("*[data-games]").toggleClass("bc_active", !1), $('*[data-games="' + c + '"]').toggleClass("bc_active", !0)
                }).focus())
            }), $("*[data-victory]").on("click", function() {
                $(this).attr("*[data-victory]"), $(".buttons-3-selected").removeClass("buttons-3-selected"), $(this).addClass("buttons-3-selected"), victory = parseInt($(this).attr("data-victory"))
            }), window.setMode = function(e, t) {
                0 == d && ($("*[data-tab]").toggleClass("active", !1), $("*[data-tab=" + e + "]").toggleClass("active", !0)), "default" === e && 0 == d && ($("#auto").fadeOut(0), $("#gamestext").fadeOut(0), $("#gamesvalue").fadeOut(0), $("#gamesvictory").fadeOut(0), $("#gamesvictoryvalue").fadeOut(0), $("#play").fadeIn(0)), "auto" === e && ($("#play").fadeOut(0), $("#gamestext").fadeIn(0), $("#gamesvalue").fadeIn(0), $("#gamesvictory").fadeIn(0), $("#gamesvictoryvalue").fadeIn(0), $("#auto").fadeIn(0))
            }, window.createWheel = function() {
                for (var e = 360 / t.length, s = 0; s < t.length; s++) n[t[s]] = [], n[t[s]][0] = s * e, n[t[s]][1] = s * e + e, newSlice = document.createElement("div"), $(newSlice).addClass("r-hold"), newHold = document.createElement("div"), $(newHold).addClass("r-pie"), newNumber = document.createElement("div"), $(newNumber).addClass("r-num"), newNumber.innerHTML = t[s], $(newSlice).attr("id", "rSlice" + s), $(newSlice).css("transform", "rotate(" + n[t[s]][0] + "deg)"), $(newHold).css("transform", "rotate(9.73deg)"), $(newHold).css("-webkit-transform", "rotate(9.73deg)"), $.inArray(t[s], i) > -1 ? $(newHold).addClass("r-greenbg") : $.inArray(t[s], a) > -1 ? $(newHold).addClass("r-redbg") : $.inArray(t[s], o) > -1 && $(newHold).addClass("r-greybg"), $(newNumber).appendTo(newSlice), $(newHold).appendTo(newSlice), $(newSlice).appendTo($("#rcircle"))
            }, window.resetAni = function() {
                var e = $.keyframe.getVendorPrefix();
                animationPlayState = "animation-play-state", playStateRunning = "running", $(".r-ball").css(e + animationPlayState, playStateRunning).css(e + "animation", "none"), $(".r-pieContainer").css(e + animationPlayState, playStateRunning).css(e + "animation", "none"), $("#toppart").css(e + animationPlayState, playStateRunning).css(e + "animation", "none"), $("#rotate2").html(""), $("#rotate").html("")
            }, window.spinTo = function(e) {
                var t = n[e][0] + 4,
                    a = Math.floor(360 * Math.random() + 1);
                resetAni(), setTimeout(function() {
                    bgrotateTo(a), ballrotateTo(a + t)
                }, 300)
            }, window.ballrotateTo = function(e) {
                var t = -1800 - (360 - e);
                $.keyframe.define({
                    name: "rotate2",
                    from: {
                        transform: "rotate(0deg)"
                    },
                    to: {
                        transform: "rotate(" + t + "deg)"
                    }
                }), $(".r-ball").playKeyframe({
                    name: "rotate2",
                    duration: isQuick ? "1.2s" : "8s",
                    timingFunction: "ease-in-out",
                    complete: function() {
                        0 == gamemode && finishSpin(), 1 == gamemode && finishSpinAuto()
                    }
                })
            }, window.bgrotateTo = function(e) {
                var t = (isQuick, 2160 + e);
                $.keyframe.define({
                    name: "rotate",
                    from: {
                        transform: "rotate(0deg)"
                    },
                    to: {
                        transform: "rotate(" + t + "deg)"
                    }
                }), $(".r-pieContainer").playKeyframe({
                    name: "rotate",
                    duration: isQuick ? "1s" : "7s",
                    timingFunction: "ease-in-out",
                    complete: function() {}
                }), $("#toppart").playKeyframe({
                    name: "rotate",
                    duration: isQuick ? "1s" : "7s",
                    timingFunction: "ease-in-out",
                    complete: function() {}
                })
            }, window.roulette = function() {
                if (!1 !== clicked) return iziToast.info({
                    message: "You bet too often!",
                    icon: "fa fa-info"
                }), setTimeout(function() {
                    clicked = !1
                }, 100);
                clicked = !0, null == l && $.get("/game/roulette/" + JSON.stringify(s) + (isDemo ? "?demo" : ""), function(e) {
                    var t = JSON.parse(e);
                    if (null != t.error) return "$" === t.error && load("/"), -1 === t.error && $("#b_si").click(), 1 === t.error && iziToast.error({
                        message: 'Минимальная ставка: 0.01&nbsp;<i class="fad fa-coins"></i>',
                        icon: "fa fa-times"
                    }), clicked = !1, 2 === t.error && $("#_payin").click(), void(clicked = !1);
                    betAudio.src = isAudioGame ? "/assets/media/bet.mp3" : "", betAudio.play(), gamemode = 0, $(".roulette-result").fadeOut(250, function() {
                        $(this).delay(250).toggleClass("roulette-result-lose", !1).toggleClass("roulette-result-win", !1), $("#toppart").fadeIn(250, function() {
                            l = t, spinTo(parseInt(l.response.number)), spinAudio.src = isQuick ? isAudioGame ? "/assets/media/spinfast.mp3" : "" : isAudioGame ? "/assets/media/spin.mp3" : "", spinAudio.play(), setTimeout(function() {
                                clicked = !1
                            }, 350)
                        })
                    })
                })
            }, window.rouletteauto = function() {
                !1 === clicked && (clicked = !0, null == l && $.get("/game/roulette/" + JSON.stringify(s) + (isDemo ? "?demo" : ""), function(e) {
                    var t = JSON.parse(e);
                    if (null != t.error) return "$" === t.error && load("/"), -1 === t.error && $("#b_si").click(), 1 === t.error && iziToast.error({
                        message: 'Minimum bet: 0.01&nbsp;<i class="fad fa-coins"></i>',
                        icon: "fa fa-times"
                    }), clicked = !1, 2 === t.error && $("#_payin").click(), void(clicked = !1);
                    betAudio.src = isAudioGame ? "/assets/media/bet.mp3" : "", betAudio.play(), $(".roulette-result").fadeOut(250, function() {
                        $(this).delay(250).toggleClass("roulette-result-lose", !1).toggleClass("roulette-result-win", !1), $("#toppart").fadeIn(250, function() {
                            l = t, spinTo(parseInt(l.response.number)), spinAudio.src = isQuick ? isAudioGame ? "/assets/media/spinfast.mp3" : "" : isAudioGame ? "/assets/media/spin.mp3" : "", spinAudio.play(), d = 1, gamemode = 1, winstatus = 0, retrygame(), setTimeout(function() {
                                clicked = !1
                            }, 350)
                        })
                    })
                }))
            }, window.finishSpin = function() {
                $("#toppart").fadeOut("fast", function() {
                    $(".roulette-result").html(l.response.number).fadeIn("fast").toggleClass(!1 === l.response.win ? "roulette-result-lose" : "roulette-result-win", !0), !1 === l.response.win ? (loseAudio.src = isAudioGame ? "/assets/media/lose.mp3" : "", loseAudio.play()) : (winAudio.src = isAudioGame ? "/assets/media/win.mp3" : "", winAudio.play()), l.response.win && isDemo && isGuest() && showDemoTooltip(), -1 === l.response.id || isDemo || sendDrop(l.response.id), l = null, updateBalanceN()
                })
            }, window.finishSpinAuto = function() {
                $("#toppart").fadeOut("fast", function() {
                    $(".roulette-result").html(l.response.number).fadeIn("fast").toggleClass(!1 === l.response.win ? "roulette-result-lose" : "roulette-result-win", !0), !1 === l.response.win ? (loseAudio.src = isAudioGame ? "/assets/media/lose.mp3" : "", loseAudio.play(), winstatus = 0) : (winAudio.src = isAudioGame ? "/assets/media/win.mp3" : "", winAudio.play(), winstatus = 1), l.response.win && isDemo && isGuest() && showDemoTooltip(), -1 === l.response.id || isDemo || sendDrop(l.response.id), l = null, updateBalanceN(), c -= 1, d = 1, 1 == stopped && stopauto(), 0 == stopped && (0 == victory && (0 == winstatus ? c > 0 && retrygame() : (stopauto(), c = parseInt($("*[data-games]").attr("data-games")))), 1 == victory && (0 == stopped && (c > 0 ? retrygame() : (stopauto(), c = parseInt($("*[data-games]").attr("data-games")))), 1 == stopped && stopauto()), 2 == victory && (0 == winstatus ? c > 0 ? retrygame() : (stopauto(), p = 0, c = parseInt($("*[data-games]").attr("data-games"))) : (c > 0 && (p < 4 ? (p += 1, retrygame()) : (stopauto(), p = 0, c = parseInt($("*[data-games]").attr("data-games"))), c = parseInt($("*[data-games]").attr("data-games"))), 0 == c && (stopauto(), p = 0, c = parseInt($("*[data-games]").attr("data-games"))))))
                })
            }, window.retrygame = function() {
                0 == stopped && ($("#auto").fadeIn(0).attr("onclick", "stopauto()"), setAutoText("Остановить"), setTimeout(function() {
                    rouletteauto()
                }, 350)), 1 == stopped && stopauto()
            }, window.rouletteautotry = function() {
                stopped = 0, d = 1, rouletteauto()
            }, window.stopauto = function() {
                stopped = 1, d = 0, $("#auto").fadeIn(0).attr("onclick", "rouletteautotry()"), setAutoText("Запустить"), c = parseInt($("*[data-games]").attr("data-games"))
            }, $(".token").on("click", function() {
                e = parseFloat($(this).attr("data-value")), $(".token-active").removeClass("token-active"), $(this).addClass("token-active")
            }), $(".tokens").slick({
                dots: !1,
                infinite: !1,
                speed: 300,
                slidesToShow: 4,
                arrows: !0,
                variableWidth: !0,
                responsive: [{
                    breakpoint: 991,
                    settings: {
                        slidesToScroll: 13,
                        slidesToShow: 13,
                        infinite: !0
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToScroll: 4,
                        slidesToShow: 4,
                        infinite: !1
                    }
                }],
                slidesToScroll: 4
            });
            var m = function(e, t) {
                    $(e).on("mouseover", function() {
                        $.each($(".chip"), function(e, a) {
                            t.includes($(this).attr("data-chip")) && $(this).addClass("chip-disabled")
                        })
                    }), $(e).on("mouseleave", function() {
                        $(".chip").removeClass("chip-disabled")
                    })
                },
                f = {
                    first: ["3", "6", "9", "12", "15", "18", "21", "24", "27", "30", "33", "36"],
                    second: ["2", "5", "8", "11", "14", "17", "20", "23", "26", "29", "32", "35"],
                    third: ["1", "4", "7", "10", "13", "16", "19", "22", "25", "28", "31", "34"],
                    red: ["3", "9", "12", "18", "21", "27", "30", "36", "5", "14", "23", "32", "1", "7", "16", "19", "25", "34"],
                    black: ["6", "15", "24", "33", "2", "8", "11", "17", "20", "26", "29", "35", "4", "10", "13", "22", "28", "31"],
                    numeric: {
                        first: ["3", "6", "9", "12", "2", "5", "8", "11", "1", "4", "7", "10"],
                        second: ["15", "18", "21", "24", "14", "17", "20", "23", "13", "16", "19", "22"],
                        third: ["27", "30", "33", "36", "26", "29", "32", "35", "25", "28", "31", "34"]
                    },
                    half: {
                        first: ["3", "6", "9", "12", "15", "18", "2", "5", "8", "11", "14", "17", "1", "4", "7", "10", "13", "16"],
                        second: ["21", "24", "27", "30", "33", "36", "20", "23", "26", "29", "32", "35", "19", "22", "25", "28", "31", "34"]
                    },
                    e: {
                        even: ["6", "12", "18", "24", "30", "36", "2", "8", "14", "20", "26", "32", "4", "10", "16", "22", "28", "34"],
                        opposite: ["3", "9", "15", "21", "27", "33", "5", "11", "17", "23", "29", "35", "1", "7", "13", "19", "25", "31"]
                    }
                };
            m("#row1", f.second.concat(f.third)), m("#row2", f.first.concat(f.third)), m("#row3", f.first.concat(f.second)), m("#red", f.black), m("#black", f.red), m("#1-12", f.numeric.second.concat(f.numeric.third)), m("#13-24", f.numeric.first.concat(f.numeric.third)), m("#25-36", f.numeric.first.concat(f.numeric.second)), m("#1-18", f.half.second), m("#19-36", f.half.first), m("#e", f.e.opposite), m("#eo", f.e.even), $(".chip").on("click", function() {
                clickAudio.src = isAudioGame ? "/assets/media/click.mp3" : "", clickAudio.play();
                var t = $(this).find(".bet-stack");
                0 === t.length && ((t = $('<div class="bet-stack"></div>')).hide().fadeIn("fast"), $(this).append(t));
                var a = $('<div class="token bet-token" data-token-value="' + e + '" style="margin-top: -' + 2 * t.children().length + 'px">' + abbreviateNumber(e) + "</div>");
                t.append(a), r.push(a);
                var o = $(this).attr("data-chip");
                setBetFor(o, getBetFor(o) + e)
            }), createWheel(), setTimeout(function() {
                $.getScript("/js/vendor/jquery.keyframes.min.js")
            }, 1e3), window.getBetFor = function(e) {
                return null == s[e] ? 0 : s[e]
            }, window.setBetFor = function(e, t) {
                s[e] = t;
                for (var a = 0, o = 0; o < Object.keys(s).length; o++) a += s[Object.keys(s)[o]];
                $("#token_bet").html(a.toFixed(2) + '&nbsp;<i class="fad fa-coins"></i>')
            }, window.r_history_back = function() {
                if (0 !== r.length) {
                    var e = r[r.length - 1];
                    setBetFor(e.parent().parent().attr("data-chip"), getBetFor(e.parent().parent().attr("data-chip")) - parseFloat(e.attr("data-token-value"))), 1 === e.parent().children().length ? e.parent().fadeOut("fast", function() {
                        $(this).remove()
                    }) : e.remove(), r.splice(r.length - 1, 1), clickAudio.src = isAudioGame ? "/assets/media/click.mp3" : "", clickAudio.play()
                }
            }, window.r_history_clear = function() {
                r = [], s = {}, $(".bet-stack").fadeOut("fast", function() {
                    $(this).remove()
                }), $("#token_bet").html('0.00&nbsp;<i class="fad fa-coins"></i>'), clickAudio.src = isAudioGame ? "/assets/media/click.mp3" : "", clickAudio.play()
            }
        })
    }
});