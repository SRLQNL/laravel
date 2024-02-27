! function(e) {
    var a = {};

    function t(i) {
        if (a[i]) return a[i].exports;
        var o = a[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(o.exports, o, o.exports, t), o.l = !0, o.exports
    }
    t.m = e, t.c = a, t.d = function(e, a, i) {
        t.o(e, a) || Object.defineProperty(e, a, {
            enumerable: !0,
            get: i
        })
    }, t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.t = function(e, a) {
        if (1 & a && (e = t(e)), 8 & a) return e;
        if (4 & a && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (t.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & a && "string" != typeof e)
            for (var o in e) t.d(i, o, function(a) {
                return e[a]
            }.bind(null, o));
        return i
    }, t.n = function(e) {
        var a = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(a, "a", a), a
    }, t.o = function(e, a) {
        return Object.prototype.hasOwnProperty.call(e, a)
    }, t.p = "/", t(t.s = 3)
}({
    3: function(e, a, t) {
        e.exports = t("UPzd")
    },
    UPzd: function(e, a) {
        $.on("/mines", function() {
            var e = 3,
                a = 15,
                t = !0,
                i = !1,
                o = !1,
                s = 25 - e,
                n = 0,
                r = !1,
                l = !1,
                d = null;
            betAudio = new Audio, minesAudio = new Audio, winAudio = new Audio, loseAudio = new Audio, window.setMode = function(e, a) {
                $("*[data-tab]").toggleClass("active", !1), $("*[data-tab=" + e + "]").toggleClass("active", !0), "default" === e && (auto = 0, $("#auto").fadeOut(0), $("#gamestext").fadeOut(0), $("#gamesvalue").fadeOut(0), $("#gamesvictory").fadeOut(0), $("#gamesvictoryvalue").fadeOut(0), $("#play").fadeIn(0)), "auto" === e && (auto = 1, $("#play").fadeOut(0), $("#gamestext").fadeIn(0), $("#gamesvalue").fadeIn(0), $("#gamesvictory").fadeIn(0), $("#gamesvictoryvalue").fadeIn(0), $("#auto").fadeIn(0))
            }, window.minesauto = function() {
                return iziToast.warning({
                    message: "Auto bets are temporarily unavailable!",
                    icon: "fa fa-info"
                }), setTimeout(function() {
                    l = !1
                }, 100)
            }, window.mines = function() {
                if (!1 !== l) return iziToast.info({
                    message: "You bet too often!",
                    icon: "fa fa-info"
                }), setTimeout(function() {
                    l = !1
                }, 100);
                l = !0, t && !i && $.ajax({
                    type: "POST",
                    url: "/game/mines",
                    data: {
                        _token: $('meta[name="csrf-token"]').attr("content"),
                        bet: $("#bet").val(),
                        mines: e,
                        demo: isDemo ? "1" : "0"
                    },
                    success: function(e) {
                        var a = JSON.parse(e);
                        if (null != a.error) return "$" === a.error && load("/"), -1 === a.error && $("#b_si").click(), 0 === a.error && iziToast.error({
                            message: "Не удалось найти игру.",
                            icon: "fa fa-times"
                        }), 1 === a.error && iziToast.error({
                            message: 'Minimum bet: 0.01&nbsp;<i class="fad fa-coins"></i>',
                            icon: "fa fa-times"
                        }), l = !1, 2 === a.error && $("#_payin").click(), l = !1, 3 === a.error && iziToast.error({
                            message: "Number of minutes: from 2 to 24",
                            icon: "fa fa-times"
                        }), void(l = !1);
                        clear(), $(".outcome-window").fadeOut(200), $(".outcome-window-demo").fadeOut(200), betAudio.src = isAudioGame ? "/assets/media/bet.mp3" : "", betAudio.play(), $("#play").fadeOut("fast").attr("onclick", "take()"), setTimeout(function() {
                            l = !1
                        }, 200), updateBalanceN(), $("*[data-diamond]").toggleClass("cf_active", !1), swap(!1), d = a.id, _disableDemo = !0
                    }
                })
            }, window.take = function() {
                !1 === l && (l = !0, t || $.get("/game/mines/take/" + d + (isDemo ? "?demo" : ""), function(e) {
                    var a = JSON.parse(e);
                    if (null != a.error) return -1 === a.error && iziToast.error({
                        message: "Требуется авторизация.",
                        icon: "fa fa-times"
                    }), 0 === a.error && console.log("Server cancelled input"), void(1 === a.error && iziToast.error({
                        message: "Игра не найдена.",
                        icon: "fa fa-times"
                    }));
                    winAudio.src = isAudioGame ? "/assets/media/win.mp3" : "", winAudio.play(), 1 == a.demo || (sendDrop(d), validateTask(d), $(".outcome-window__coeff").text("x" + a.multiplier), $(".outcome-window_won__sum").text(parseFloat(a.win).toFixed(2)), $(".outcome-window").fadeIn(200)), isDemo && isGuest() && showDemoTooltip(), 1 == a.demo && ($(".outcome-window__coeff-demo").text("x" + a.multiplier), $(".outcome-window_won__sum").text(parseFloat(a.win).toFixed(2)), $(".outcome-window-demo").fadeIn(200)), swap(!0), clear(), updateBalanceN(), displayGrid(a.grid), l = !1, _disableDemo = !1
                }))
            }, window.setStatus = function(a) {
                void 0 === a && (a = 25), $("#bomb").prop("number", p_n("#bomb")).animateNumber({
                    number: e
                }), $("#safe").prop("number", p_n("#safe")).animateNumber({
                    number: a - e
                })
            }, window.clear = function() {
                setStatus(), s = 25 - e, n = 0, $("*[data-grid-id]").removeAttr("class"), $("*[data-grid-id]").toggleClass("mine_disabled", !0), setBetText("Play"), $("#play").attr("onclick", "mines()"), d = null, o = !1
            }, window.swap = function(e) {
                t = e, $("*[data-grid-id]").toggleClass("mine_disabled", e)
            }, window.clear_c = function() {
                $.get("/game/mines/mul/" + e, function(a) {
                    var t = JSON.parse(a);
                    r && $("#cf_slick").slick("unslick"), r = !0, $("#cf_slick").html("");
                    for (var i = 0; i < 25 - e; i++) $("#cf_slick").append('<div data-diamond="' + (i + 1) + '"><p><i class="fad fa-diamond"></i> ' + (i + 1) + "</p><span>x" + abbreviateNumber(t[(i + 1).toString()]) + "</span></div>");
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
                })
            }, window.displayGrid = function(e) {
                for (var a = Array.from(e), t = 0; t < 25; t++) $('*[data-grid-id="' + t + '"]').toggleClass(1 === a[t] ? "mine_bomb" : "mine_safe", !0)
            }, clear_c();
            var c = !1,
                u = !1;
            $("#change_bombs").on("click", function() {
                c || (c = !0, $("#change_bombs span").toggleClass("dn", !0), $("#change_bombs input").toggleClass("dn", !1), $(".bomb_input").on("input", function() {
                    var a = parseInt($(this).val());
                    if (isNaN(a) || a < 2 || a > 24) return $(this).toggleClass("bad", !0), void(i = !0);
                    $(this).toggleClass("bad", !1), i = !1, e = a, $("*[data-bomb]").toggleClass("bc_active", !1), $('*[data-bomb="' + e + '"]').toggleClass("bc_active", !0), clear_c(), setStatus()
                }).focus())
            }), $("#change_games").on("click", function() {
                u || (u = !0, $("#change_games span").toggleClass("dn", !0), $("#change_games input").toggleClass("dn", !1), $(".bomb_input").on("input", function() {
                    var e = parseInt($(this).val());
                    if (isNaN(e) || e < 1 || e > 240) return $(this).toggleClass("bad", !0), void(i = !0);
                    $(this).toggleClass("bad", !1), i = !1, a = e, $("*[data-games]").toggleClass("bc_active", !1), $('*[data-games="' + a + '"]').toggleClass("bc_active", !0)
                }).focus())
            }), $("*[data-bomb]").on("click", function(a) {
                t ? ($("*[data-bomb]").toggleClass("bc_active", !1), $(this).toggleClass("bc_active", !0), e = parseInt($(this).attr("data-bomb")), $(".bomb_input").val(e), setStatus(), clear_c()) : a.preventDefault()
            }), $("*[data-games]").on("click", function() {
                $("*[data-games]").toggleClass("bc_active", !1), $(this).toggleClass("bc_active", !0), a = parseInt($(this).attr("data-games")), $(".games_input").val(a)
            }), $("*[data-victory]").on("click", function() {
                $(this).attr("*[data-victory]"), $(".buttons-3-selected").removeClass("buttons-3-selected"), $(this).addClass("buttons-3-selected"), parseInt($(this).attr("data-victory"))
            }), $("*[data-grid-id]").on("click", function() {
                if (!($(this).hasClass("mine_disabled") || t || $(this).hasClass("mine_safe"))) {
                    var a = parseInt($(this).attr("data-grid-id"));
                    $.get("/game/mines/mine/" + d + "/" + a + (isDemo ? "?demo" : ""), function(t) {
                        var i = JSON.parse(t);
                        if (null != i.error) return -1 === i.error && iziToast.error({
                            message: "Игра не найдена.",
                            icon: "fa fa-times"
                        }), void(0 === i.error && console.log("Server cancelled input"));
                        if ("continue" === i.status) {
                            s -= 1, n += 1, setStatus(s + e), $(this).toggleClass("mine_disabled", !0), $(".slick-slide").toggleClass("cf_active", !1), $("*[data-diamond=" + n + "]").toggleClass("cf_active", !0), $("#cf_slick").slick("slickGoTo", n - 1), $("*[data-grid-id=" + a + "]").toggleClass("mine_safe", !0), minesAudio.src = isAudioGame ? "/assets/media/game.mp3" : "", minesAudio.play();
                            var r = parseFloat(i.profit).toFixed(2);
                            o ? $("#cf_profit").html(r) : (setBetText('take<br><span id="cf_profit">' + r + '</span> &nbsp;<i class="fad fa-coins"></i>'), o = !0), setTimeout(function() {
                                $m("#cf_profit").toggleClass("cf_profit-error", parseFloat(r) <= 0)
                            }, 200), 0 === s && take()
                        } else isDemo || sendDrop(d), validateTask(d), loseAudio.src = isAudioGame ? "/assets/media/bomb.mp3" : "", loseAudio.play(), l = !1, $("*[data-grid-id=" + a + "]").toggleClass("mine_bomb", !0), $("*[data-diamond=" + n + "]").toggleClass("cf_active", !1), setTimeout(function() {
                            updateBalanceN(), swap(!0), clear(), displayGrid(i.grid)
                        }, 1e3)
                    })
                }
            })
        })
    }
});