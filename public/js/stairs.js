! function(e) {
    var t = {};

    function o(a) {
        if (t[a]) return t[a].exports;
        var s = t[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return e[a].call(s.exports, s, s.exports, o), s.l = !0, s.exports
    }
    o.m = e, o.c = t, o.d = function(e, t, a) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    }, o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function(e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (o.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var s in e) o.d(a, s, function(t) {
                return e[t]
            }.bind(null, s));
        return a
    }, o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "/", o(o.s = 5)
}({
    5: function(e, t, o) {
        e.exports = o("aiCU")
    },
    aiCU: function(e, t) {
        $.on("/stairs", function() {
            var e = 4,
                t = 0,
                o = !0,
                a = !1,
                s = !1,
                i = null;
            betAudio = new Audio, winAudio = new Audio, gameAudio = new Audio, loseAudio = new Audio, window.row = function(e, t) {
                $("*[data-row]").toggleClass("stairs-block-id", !0), $('*[data-row="' + e + '"]').toggleClass("stairs-block-disabled", !1 === t)
            }, window.stairs = function() {
                if (!1 !== s) return iziToast.info({
                    message: "Вы слишком часто делаете ставку!",
                    icon: "fa fa-info"
                }), setTimeout(function() {
                    s = !1
                }, 100);
                s = !0, o && ($("*[data-row]").toggleClass("stairs-block-disabled", !0), $.get("/game/stairs/" + $("#bet").val() + "/" + e + (isDemo ? "?demo" : ""), function(e) {
                    var o = JSON.parse(e);
                    if (null != o.error) return "$" === o.error && load("/"), -1 === o.error && $("#b_si").click(), 0 === o.error && iziToast.error({
                        message: "Couldn't find the game.",
                        icon: "fa fa-times"
                    }), 1 === o.error && iziToast.error({
                        message: 'Minimum bet 0.01&nbsp;<i class="fad fa-coins"></i>',
                        icon: "fa fa-times"
                    }), 2 === o.error && $("#_payin").click(), s = !1, void(3 === o.error && iziToast.error({
                        message: "Number of stones: from 1 to 7",
                        icon: "fa fa-times"
                    }));
                    $('.stairs-ladder:not([data-stairs-mouseover="true"])').fadeOut("fast", function() {
                        $(this).remove()
                    }), $(".stairs-block").toggleClass("stairs-bad", !1).toggleClass("stairs-good", !1), clear(), $(".outcome-window").fadeOut(200), $(".outcome-window-demo").fadeOut(200), betAudio.src = isAudioGame ? "/assets/media/bet.mp3" : "", betAudio.play(), $("#play").fadeOut("fast").attr("onclick", "take()"), setTimeout(function() {
                        s = !1
                    }, 350), updateBalanceN(), swap(!0), i = o.id, t = 1, _disableDemo = !0, row(1, !0)
                }))
            }, window.take = function() {
                if (!1 !== s) return iziToast.info({
                    message: "Вы слишком часто делаете ставку!",
                    icon: "fa fa-info"
                }), setTimeout(function() {
                    s = !1
                }, 100);
                s = !0, $.get("/game/stairs/take/" + i + (isDemo ? "?demo" : ""), function(e) {
                    var t = JSON.parse(e);
                    if (null != t.error) return -1 === t.error && iziToast.error({
                        message: "Authorization required.",
                        icon: "fa fa-times"
                    }), 0 === t.error && console.log("Server cancelled input"), void(1 === t.error && iziToast.error({
                        message: "Game not found.",
                        icon: "fa fa-times"
                    }));
                    winAudio.src = isAudioGame ? "/assets/media/win.mp3" : "", winAudio.play(), setTimeout(function() {
                        s = !1
                    }, 350), 1 == t.demo || (sendDrop(t), validateTask(t), $(".outcome-window__coeff").text("x" + t.multiplier), $(".outcome-window_won__sum").text(parseFloat(t.win).toFixed(2)), $(".outcome-window").fadeIn(200)), isDemo && isGuest() && showDemoTooltip(), 1 == t.demo && ($(".outcome-window__coeff-demo").text("x" + t.multiplier), $(".outcome-window_won__sum").text(parseFloat(t.win).toFixed(2)), $(".outcome-window-demo").fadeIn(200)), swap(!0), clear(), updateBalanceN(), displayGrid(t.grid)
                })
            }, window.clear = function() {
                $("*[data-row]").toggleClass("stairs-block-disabled", !0), $(".stairs-mul-current").removeClass("stairs-mul-current"), setBetText("play"), $("#play").attr("onclick", "stairs()"), i = null, a = !1, t = 0, _disableDemo = !1
            }, window.swap = function(e) {
                o = e, $("*[data-row]").toggleClass("stairs-bad", !1).toggleClass("stairs-block-disabled", e)
            }, window.clear_c = function() {
                $.get("/game/stairs/mul/" + e, function(e) {
                    for (var t = JSON.parse(e), o = 1; o <= Object.keys(t).length; o++) $('*[data-m-row="' + o + '"]').html("x" + abbreviateNumber(t[o]))
                })
            }, window.displayGrid = function(e) {
                for (var t = 1; t <= 13; t++)
                    for (var o = Array.from(e[t]), a = 0; a < o.length; a++) $('*[data-row="' + t + '"][data-cell-id="' + a + '"]').toggleClass("stairs-block-disabled", !0).toggleClass("stairs-bad", 1 === o[a])
            }, window.displayRow = function(e, t) {
                var o = Array.from(t);
                $.each($('*[data-row="' + e + '"]'), function(e, t) {
                    $(t).toggleClass("stairs-bad", 1 === o[e]).toggleClass("stairs-block-disabled", !0)
                })
            }, clear_c(), $("*[data-bomb]").on("click", function(t) {
                o ? ($("*[data-bomb]").toggleClass("bc_active", !1), $(this).toggleClass("bc_active", !0), e = parseInt($(this).attr("data-bomb")), clear_c()) : t.preventDefault()
            }), $("*[data-row]").mouseover(function() {
                $(this).hasClass("stairs-block-disabled") ? $('.stairs-ladder[data-stairs-mouseover="true"]').fadeOut("fast") : $('.stairs-ladder[data-stairs-mouseover="true"]').stop().fadeIn("fast").css({
                    width: $(".stairs-block").width(),
                    height: $(".stairs-block").width() + 1,
                    top: $(this).position().top,
                    left: $(this).offset().left - $(this).parent().offset().left
                })
            }), $("*[data-row]").on("click", function() {
                if (!$(this).hasClass("stairs-block-disabled")) {
                    var e = parseInt($(this).attr("data-cell-id")),
                        o = $(this);
                    row(t, !1);
                    var s = $('<div class="stairs-ladder"></div>');
                    $("#stairs_container").append(s), s.fadeIn("fast").css({
                        width: $(".stairs-block").width(),
                        height: $(".stairs-block").width() + 1,
                        top: $(this).position().top,
                        left: $(this).offset().left - $(this).parent().offset().left
                    }), $.get("/game/stairs/open/" + i + "/" + e + (isDemo ? "?demo" : ""), function(e) {
                        var s = JSON.parse(e);
                        if (console.log(s), null != s.error) return -1 === s.error && iziToast.error({
                            message: "Game not found.",
                            icon: "fa fa-times"
                        }), void(0 === s.error && console.log("Server cancelled input"));
                        if ("continue" === s.status) {
                            displayRow(t, s.row), $("*[data-m-row]").removeClass("stairs-mul-current"), $('*[data-m-row="' + t + '"]').toggleClass("stairs-mul-current", !0), o.toggleClass("stairs-good", !0);
                            var r = parseFloat(s.profit).toFixed(2);
                            a ? $("#cf_profit").html(r) : (setBetText('Take<br><span id="cf_profit">' + r + '</span>&nbsp;<i class="fad fa-coins"></i>'), a = !0), setTimeout(function() {
                                $("#cf_profit").toggleClass("cf_profit-error", parseFloat(r) <= 0)
                            }, 200), 13 === t ? take() : (t += 1, row(t - 1, !1), row(t, !0)), gameAudio.src = isAudioGame ? "/assets/media/game.mp3" : "", gameAudio.play()
                        } else loseAudio.src = isAudioGame ? "/assets/media/redzone.mp3" : "", loseAudio.play(), isDemo || sendDrop(i), console.log(s), o.toggleClass("stairs-bad", !0).toggleClass("stairs-block-disabled", !0), setTimeout(function() {
                            updateBalanceN(), swap(!0), clear(), displayGrid(s.grid)
                        }, 1e3)
                    })
                }
            })
        })
    }
});