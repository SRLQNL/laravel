! function(e) {
    var o = {};

    function t(i) {
        if (o[i]) return o[i].exports;
        var a = o[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(a.exports, a, a.exports, t), a.l = !0, a.exports
    }
    t.m = e, t.c = o, t.d = function(e, o, i) {
        t.o(e, o) || Object.defineProperty(e, o, {
            enumerable: !0,
            get: i
        })
    }, t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.t = function(e, o) {
        if (1 & o && (e = t(e)), 8 & o) return e;
        if (4 & o && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (t.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & o && "string" != typeof e)
            for (var a in e) t.d(i, a, function(o) {
                return e[o]
            }.bind(null, a));
        return i
    }, t.n = function(e) {
        var o = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(o, "a", o), o
    }, t.o = function(e, o) {
        return Object.prototype.hasOwnProperty.call(e, o)
    }, t.p = "/", t(t.s = 6)
}({
    "08te": function(e, o) {
        $.on("/tower", function() {
            var e = 1,
                o = 0,
                t = !0,
                i = !1,
                a = !1,
                r = null;
            betAudio = new Audio, minesAudio = new Audio, winAudio = new Audio, bombAudio = new Audio, window.row = function(e, o) {
                $("*[data-r]").toggleClass("mine_disabled", !0), $('*[data-r="' + e + '"]').toggleClass("mine_disabled", !1 === o).toggleClass("tower_active", !0 === o)
            }, window.tower = function() {
                if (!1 !== a) return iziToast.info({
                    message: "You bet too often!",
                    icon: "fa fa-info"
                }), setTimeout(function() {
                    a = !1
                }, 100);
                a = !0, t && ($("*[data-grid-id]").toggleClass("tower_active", !1).toggleClass("mine_disabled", !0).toggleClass("tower_bomb", !1).toggleClass("tower_safe", !1).toggleClass("tower_safe_picked", !1), $.get("/game/tower/" + $("#bet").val() + "/" + e + (isDemo ? "?demo" : ""), function(e) {
                    var t = JSON.parse(e);
                    if (console.log(t), null != t.error) return "$" === t.error && load("/"), -1 === t.error && $("#b_si").click(), 0 === t.error && iziToast.error({
                        message: "Couldn't find the game.",
                        icon: "fa fa-times"
                    }), 1 === t.error && iziToast.error({
                        message: 'Minimum bet: 0.01&nbsp;<i class="fad fa-coins"></i>',
                        icon: "fa fa-times"
                    }), a = !1, 2 === t.error && $("#_payin").click(), a = !1, 3 === t.error && iziToast.error({
                        message: "Number of minutes: from 1 to 4",
                        icon: "fa fa-times"
                    }), void(a = !1);
                    clear(), $(".outcome-window").fadeOut(200), $(".outcome-window-demo").fadeOut(200), betAudio.src = isAudioGame ? "/assets/media/bet.mp3" : "", betAudio.play(), $("#play").fadeOut("fast").attr("onclick", "take()"), setTimeout(function() {
                        a = !1
                    }, 350), updateBalanceN(), swap(!1), r = t.id, o = 0, _disableDemo = !0, row(0, !0), $('*[data-row-id="0"]').toggleClass("tower_mul_active", !0)
                }))
            }, window.take = function() {
                if (!1 !== a) return iziToast.info({
                    message: "You bet too often!",
                    icon: "fa fa-info"
                }), setTimeout(function() {
                    a = !1
                }, 100);
                a = !0, t || $.get("/game/tower/take/" + r + (isDemo ? "?demo" : ""), function(e) {
                    var o = JSON.parse(e);
                    if (null != o.error) return -1 === o.error && iziToast.error({
                        message: "Требуется авторизация.",
                        icon: "fa fa-times"
                    }), 0 === o.error && console.log("Server cancelled input"), void(1 === o.error && iziToast.error({
                        message: "Игра не найдена.",
                        icon: "fa fa-times"
                    }));
                    winAudio.src = isAudioGame ? "/assets/media/win.mp3" : "", winAudio.play(), setTimeout(function() {
                        a = !1
                    }, 100), 1 == o.demo || (sendDrop(r), validateTask(r), $(".outcome-window__coeff").text("x" + o.multiplier), $(".outcome-window_won__sum").text(parseFloat(o.win).toFixed(2)), $(".outcome-window").fadeIn(200)), isDemo && isGuest() && showDemoTooltip(), 1 == o.demo && ($(".outcome-window__coeff-demo").text("x" + o.multiplier), $(".outcome-window_won__sum").text(parseFloat(o.win).toFixed(2)), $(".outcome-window-demo").fadeIn(200)), swap(!0), clear(), updateBalanceN(), displayGrid(o.grid)
                })
            }, window.clear = function() {
                $("*[data-grid-id]").toggleClass("tower_active", !1).toggleClass("mine_disabled", !0), $("*[data-row-id]").toggleClass("tower_mul_active", !1), setBetText("Play"), $("#play").attr("onclick", "tower()"), r = null, i = !1, o = 0, _disableDemo = !1
            }, window.swap = function(e) {
                t = e, $("*[data-grid-id]").toggleClass("mine_disabled", e)
            }, window.clear_c = function() {
                $.get("/game/tower/mul/" + e, function(e) {
                    for (var o = JSON.parse(e), t = 0; t < Object.keys(o).length; t++) $('*[data-row-id="' + t + '"]').html("x" + o[t + 1])
                })
            }, window.displayGrid = function(e) {
                for (var o = Array.from(e), t = 0; t < 10; t++)
                    for (var i = 0; i < 5; i++) $('*[data-r="' + t + '"][data-grid-in-row-id="' + i + '"]').toggleClass("mine_disabled", !0).toggleClass(1 === o[t][i] ? "tower_bomb" : "tower_safe", !0)
            }, window.displayRow = function(e, o) {
                var t = Array.from(o);
                $.each($('*[data-r="' + e + '"]'), function(e, o) {
                    $(o).toggleClass(1 === t[e] ? "tower_bomb" : "tower_safe", !0).toggleClass("mine_disabled", !0)
                })
            }, clear_c(), $("*[data-bomb]").on("click", function(o) {
                t ? ($("*[data-bomb]").toggleClass("bc_active", !1), $(this).toggleClass("bc_active", !0), e = parseInt($(this).attr("data-bomb")), clear_c()) : o.preventDefault()
            }), $("*[data-r]").on("click", function() {
                if (!($(this).hasClass("mine_disabled") || t || $(this).hasClass("tower_safe") || $(this).hasClass("tower_bomb"))) {
                    var e = parseInt($(this).attr("data-grid-in-row-id")),
                        a = $(this);
                    row(o, !1), $.get("/game/tower/open/" + r + "/" + e + (isDemo ? "?demo" : ""), function(e) {
                        var t = JSON.parse(e);
                        if (console.log(t), null != t.error) return -1 === t.error && iziToast.error({
                            message: "Игра не найдена.",
                            icon: "fa fa-times"
                        }), void(0 === t.error && console.log("Server cancelled input"));
                        if ("continue" === t.status) {
                            displayRow(o, t.row), a.toggleClass("tower_safe_picked", !0), minesAudio.src = isAudioGame ? "/assets/media/game.mp3" : "", minesAudio.play();
                            var s = parseFloat(t.profit).toFixed(2);
                            i ? $("#cf_profit").html(s) : (setBetText('Take<br><span id="cf_profit">' + s + '</span>&nbsp;<i class="fad fa-coins"></i>'), i = !0), setTimeout(function() {
                                $("#cf_profit").toggleClass("cf_profit-error", parseFloat(s) <= 0)
                            }, 200), 9 === o ? take() : (o += 1, row(o, !0), $("*[data-row-id]").toggleClass("tower_mul_active", !1), $('*[data-row-id="' + o + '"]').toggleClass("tower_mul_active", !0))
                        } else isDemo || sendDrop(r), validateTask(r), a.toggleClass("mine_disabled", !0).toggleClass("tower_bomb", !0), bombAudio.src = isAudioGame ? "/assets/media/bomb.mp3" : "", bombAudio.play(), setTimeout(function() {
                            updateBalanceN(), swap(!0), clear(), displayGrid(t.grid)
                        }, 1e3)
                    })
                }
            })
        })
    },
    6: function(e, o, t) {
        e.exports = t("08te")
    }
});