$.on("/keno", function() {
    let e = {
            1: [0, 3.8],
            2: [0, 1.7, 5.2],
            3: [0, 0, 2.7, 48],
            4: [0, 0, 1.7, 10, 84],
            5: [0, 0, 1.4, 4, 14, 290],
            6: [0, 0, 0, 3, 9, 160, 720],
            7: [0, 0, 0, 2, 7, 30, 280, 800],
            8: [0, 0, 0, 2, 4, 10, 50, 300, 850],
            9: [0, 0, 0, 2, 2.5, 4.5, 12, 60, 320, 900],
            10: [0, 0, 0, 1.5, 2, 4, 6, 22, 80, 400, 1e3]
        },
        o = [],
        t = !1,
        i = 15,
        a = !1,
        s = 0,
        n = 0,
        d = 0,
        c = 0,
        u = !1,
        r = !1;
    win5 = 0, betAudio = new Audio, winAudio = new Audio, openAudio = new Audio, clickAudio = new Audio, emptyAudio = new Audio, loseAudio = new Audio, window.setMode = function(e, o) {
        0 == c && ($("*[data-tab]").toggleClass("active", !1), $("*[data-tab=" + e + "]").toggleClass("active", !0)), "default" === e && 0 == c && (auto = 0, $("#auto").fadeOut(0), $("#gamestext").fadeOut(0), $("#gamesvalue").fadeOut(0), $("#gamesvictory").fadeOut(0), $("#gamesvictoryvalue").fadeOut(0), $("#play").fadeIn(0)), "auto" === e && (auto = 1, $("#play").fadeOut(0), $("#gamestext").fadeIn(0), $("#gamesvalue").fadeIn(0), $("#gamesvictory").fadeIn(0), $("#gamesvictoryvalue").fadeIn(0), $("#auto").fadeIn(0))
    }, window.keno = function() {
        r || (0 !== o.length ? ($(".keno-picked").removeClass("keno-picked"), $(".keno-correct").removeClass("keno-correct"), r = !0, $.get("/game/keno/" + JSON.stringify(o) + "/" + $("#bet").val() + (isDemo ? "?demo" : ""), function(e) {
            let o = JSON.parse(e);
            if (null != o.error) return "$" === o.error && load("/"), -1 === o.error && $("#b_si").click(), 0 === o.error && iziToast.error({
                message: "Maximum number of cells - 10",
                icon: "fa fa-times",
                position: "bottomCenter"
            }), 1 === o.error && iziToast.error({
                message: "Minimum bet: 0.01 .",
                icon: "fa fa-times",
                position: "bottomCenter"
            }), 2 === o.error && $("#_payin").click(), void(r = !1);
            betAudio.src = isAudioGame ? "/assets/media/bet.mp3" : "", betAudio.play(), $(".outcome-window").fadeOut(200), $(".outcome-window-demo").fadeOut(200), 0 == o.demo && updateBalanceN(void 0, -parseFloat($("#bet").val()));
            let t = function(e, o) {
                setTimeout(function() {
                    o(1), setTimeout(function() {
                        o(2), setTimeout(function() {
                            o(3), setTimeout(function() {
                                o(4), setTimeout(function() {
                                    o(5), setTimeout(function() {
                                        o(6), setTimeout(function() {
                                            o(7), setTimeout(function() {
                                                o(8), setTimeout(function() {
                                                    o(9), setTimeout(function() {
                                                        o(10)
                                                    }, e)
                                                }, e)
                                            }, e)
                                        }, e)
                                    }, e)
                                }, e)
                            }, e)
                        }, e)
                    }, e)
                }, e)
            };
            t(isQuick ? 20 : 100, function(e) {
                $('[data-keno-id="' + o.grid[e - 1] + '"]').addClass("keno-picked"), emptyAudio.src = isAudioGame ? "/assets/media/empty.mp3" : "", emptyAudio.play(), 10 === e && (updateBalanceN(), r = !1, isDemo && isGuest() && showDemoTooltip(), parseFloat(o.win).toFixed(2) > 0 && (1 == o.demo && ($(".outcome-window__coeff-demo").text("x" + o.multiplier), $(".outcome-window_won__sum").text(parseFloat(o.win).toFixed(2)), $(".outcome-window-demo").fadeIn(200)), winAudio.src = isAudioGame ? "/assets/media/win.mp3" : "", winAudio.play(), 1 == o.demo || (sendDrop(o.id), validateTask(o.id), $(".outcome-window__coeff").text("x" + o.multiplier), $(".outcome-window_won__sum").text(parseFloat(o.win).toFixed(2)), $(".outcome-window").fadeIn(200))))
            }), t(110, function(e) {
                void 0 !== o.correct[e - 1] && $('[data-keno-id="' + o.correct[e - 1] + '"]').addClass("keno-correct"), void 0 !== o.correct[e - 1] && (openAudio.src = isAudioGame ? "/assets/media/open.mp3" : "", openAudio.play())
            })
        })) : iziToast.error({
            message: "Select from 1 to 10 cells.",
            icon: "fa fa-times",
            position: "bottomCenter"
        }))
    }, window.kenoauto = function() {
        if (!(i > 0)) return iziToast.info({
            message: "The minimum number of games is5",
            icon: "fa fa-info"
        }), setTimeout(function() {}, 100);
        r || (0 !== o.length ? ($(".keno-picked").removeClass("keno-picked"), $(".keno-correct").removeClass("keno-correct"), r = !0, $.get("/game/keno/" + JSON.stringify(o) + "/" + $("#bet").val() + (isDemo ? "?demo" : ""), function(e) {
            let o = JSON.parse(e);
            if (null != o.error) return "$" === o.error && load("/"), -1 === o.error && $("#b_si").click(), 0 === o.error && iziToast.error({
                message: "Maximum number of cells- 10",
                icon: "fa fa-times",
                position: "bottomCenter"
            }), 1 === o.error && iziToast.error({
                message: "Minimum bet: .",
                icon: "fa fa-times",
                position: "bottomCenter"
            }), 2 === o.error && $("#_payin").click(), void(r = !1);
            betAudio.src = isAudioGame ? "/assets/media/bet.mp3" : "", betAudio.play(), $(".outcome-window").fadeOut(200), $(".outcome-window-demo").fadeOut(200), 0 == o.demo && updateBalanceN(void 0, -parseFloat($("#bet").val()));
            let t = function(e, o) {
                setTimeout(function() {
                    o(1), setTimeout(function() {
                        o(2), setTimeout(function() {
                            o(3), setTimeout(function() {
                                o(4), setTimeout(function() {
                                    o(5), setTimeout(function() {
                                        o(6), setTimeout(function() {
                                            o(7), setTimeout(function() {
                                                o(8), setTimeout(function() {
                                                    o(9), setTimeout(function() {
                                                        o(10)
                                                    }, e)
                                                }, e)
                                            }, e)
                                        }, e)
                                    }, e)
                                }, e)
                            }, e)
                        }, e)
                    }, e)
                }, e)
            };
            i -= 1, c = 1, 1 == n && stopauto(), 0 == n && (0 == s && (o.win <= 0 ? i > 0 && retrygame() : (stopauto(), i = parseInt($("*[data-games]").attr("data-games")))), 1 == s && (0 == n && (i > 0 ? retrygame() : (stopauto(), i = parseInt($("*[data-games]").attr("data-games")))), 1 == n && stopauto()), 2 == s && (o.win <= 0 ? i > 0 ? retrygame() : (stopauto(), win5 = 0, i = parseInt($("*[data-games]").attr("data-games"))) : (i > 0 && (win5 < 4 ? (win5 += 1, retrygame()) : (stopauto(), win5 = 0, i = parseInt($("*[data-games]").attr("data-games"))), i = parseInt($("*[data-games]").attr("data-games"))), 0 == i && (stopauto(), win5 = 0, i = parseInt($("*[data-games]").attr("data-games")))))), t(isQuick ? 20 : 100, function(e) {
                $('[data-keno-id="' + o.grid[e - 1] + '"]').addClass("keno-picked"), emptyAudio.src = isAudioGame ? "/assets/media/empty.mp3" : "", emptyAudio.play(), 10 === e && (updateBalanceN(), r = !1, isDemo && isGuest() && showDemoTooltip(), parseFloat(o.win).toFixed(2) > 0 && (1 == o.demo && ($(".outcome-window__coeff-demo").text("x" + o.multiplier), $(".outcome-window_won__sum").text(parseFloat(o.win).toFixed(2)), $(".outcome-window-demo").fadeIn(200)), winAudio.src = isAudioGame ? "/assets/media/win.mp3" : "", winAudio.play(), 1 == o.demo || (sendDrop(o.id), validateTask(o.id), $(".outcome-window__coeff").text("x" + o.multiplier), $(".outcome-window_won__sum").text(parseFloat(o.win).toFixed(2)), $(".outcome-window").fadeIn(200))))
            }), t(110, function(e) {
                void 0 !== o.correct[e - 1] && $('[data-keno-id="' + o.correct[e - 1] + '"]').addClass("keno-correct"), void 0 !== o.correct[e - 1] && (openAudio.src = isAudioGame ? "/assets/media/open.mp3" : "", openAudio.play())
            })
        })) : iziToast.error({
            message: "Select from 1 to 10 cells.",
            icon: "fa fa-times",
            position: "bottomCenter"
        }))
    }, window.retrygame = function() {
        0 == n && ($("#auto").fadeIn("fast").attr("onclick", "stopauto()"), setAutoText("Stop"), setTimeout(function() {
            r = !1, kenoauto()
        }, isQuick ? 500 : 1300)), 1 == n && stopauto()
    }, window.kenoautotry = function() {
        n = 0, c = 1, kenoauto()
    }, window.stopauto = function() {
        n = 1, c = 0, $("#auto").fadeIn(0).attr("onclick", "kenoautotry()"), setAutoText("Launch"), i = parseInt($("*[data-games]").attr("data-games"))
    }, window.autopick = function() {
        if (!1 !== t) return iziToast.info({
            message: "Подождите...",
            icon: "fa fa-info"
        }), setTimeout(function() {
            t = !1
        }, 100);
        t = !0;
        for (var e = []; e.length <= 10;) {
            var o = Math.floor(40 * Math.random()) + 1;
            $('[data-keno-id="' + o + '"]').click(), console.log("setting " + o + " keno now"), e.includes(o) || e.push(o), d = 1
        }
        displayMultiplier(), d = 0, setTimeout(function() {
            t = !1
        }, 250)
    }, window.clearkeno = function() {
        for (let e = 1; e < 41; e++) {
            let t = $('[data-keno-id="' + e + '"]').attr("data-keno-id");
            o.includes(t) && ($('[data-keno-id="' + e + '"]').toggleClass("keno_active", !1), $(".keno-picked").removeClass("keno-picked"), $(".keno-correct").removeClass("keno-correct"), $(".outcome-window").fadeOut(300), $(".outcome-window-demo").fadeOut(300), console.log("clear " + e + " keno now"), clickAudio.src = isAudioGame ? "/assets/media/click.mp3" : "", clickAudio.play(), o = o.filter(e => e !== t))
        }
        displayMultiplier()
    }, window.displayMultiplier = function() {
        u && $("#cf_slick").slick("unslick"), u = !0, $("#cf_slick").html("");
        for (let t = 0; t < e[o.length].length; t++) $("#cf_slick").append('<div data-keno-multiplier="' + t + '"><p><i class="fad fa-octagon"></i> ' + t + "</p><span>x" + e[o.length][t] + "</span></div>");
        $("#cf_slick").slick({
            infinite: !1,
            slidesToShow: 6,
            slidesToScroll: 6,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }]
        })
    }, $("*[data-games]").on("click", function() {
        $("*[data-games]").toggleClass("bc_active", !1), $(this).toggleClass("bc_active", !0), i = parseInt($(this).attr("data-games")), $(".games_input").val(i)
    }), $("#change_games").on("click", function() {
        a || (a = !0, $("#change_games span").toggleClass("dn", !0), $("#change_games input").toggleClass("dn", !1), $(".bomb_input").on("input", function() {
            var e = parseInt($(this).val());
            if (isNaN(e) || e < 1 || e > 240) return $(this).toggleClass("bad", !0), void(r = !0);
            $(this).toggleClass("bad", !1), r = !1, i = e, $("*[data-games]").toggleClass("bc_active", !1), $('*[data-games="' + i + '"]').toggleClass("bc_active", !0)
        }).focus())
    }), $("*[data-victory]").on("click", function() {
        $(this).attr("*[data-victory]"), $(".buttons-3-selected").removeClass("buttons-3-selected"), $(this).addClass("buttons-3-selected"), s = parseInt($(this).attr("data-victory"))
    }), $("[data-keno-id]").on("click", function() {
        if (r) return;
        $(".keno-picked").removeClass("keno-picked"), $(".keno-correct").removeClass("keno-correct");
        let e = $(this).attr("data-keno-id");
        if (o.includes(e)) $(this).toggleClass("keno_active", !1), $(".outcome-window").fadeOut(300), $(".outcome-window-demo").fadeOut(300), console.log("re-setting keno now"), clickAudio.src = isAudioGame ? "/assets/media/click.mp3" : "", clickAudio.play(), o = o.filter(o => o !== e);
        else {
            if (o.length >= 10) return;
            $(this).toggleClass("keno_active", !0), $(".outcome-window").fadeOut(300), $(".outcome-window-demo").fadeOut(300), o.push(e), clickAudio.src = isAudioGame ? "/assets/media/click.mp3" : "", clickAudio.play()
        }
        0 == d && displayMultiplier()
    })
});