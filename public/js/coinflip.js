! function(e) {
    var i = {};

    function o(s) {
        if (i[s]) return i[s].exports;
        var t = i[s] = {
            i: s,
            l: !1,
            exports: {}
        };
        return e[s].call(t.exports, t, t.exports, o), t.l = !0, t.exports
    }
    o.m = e, o.c = i, o.d = function(e, i, s) {
        o.o(e, i) || Object.defineProperty(e, i, {
            enumerable: !0,
            get: s
        })
    }, o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function(e, i) {
        if (1 & i && (e = o(e)), 8 & i) return e;
        if (4 & i && "object" == typeof e && e && e.__esModule) return e;
        var s = Object.create(null);
        if (o.r(s), Object.defineProperty(s, "default", {
                enumerable: !0,
                value: e
            }), 2 & i && "string" != typeof e)
            for (var t in e) o.d(s, t, function(i) {
                return e[i]
            }.bind(null, t));
        return s
    }, o.n = function(e) {
        var i = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return o.d(i, "a", i), i
    }, o.o = function(e, i) {
        return Object.prototype.hasOwnProperty.call(e, i)
    }, o.p = "/", o(o.s = 13)
}({
    13: function(e, i, o) {
        e.exports = o("1Vy0")
    },
    "1Vy0": function(e, i) {
        $.on("/coinflip", function() {
            var e = null,
                i = !1,
                o = !1;
            betAudio = new Audio, swooshAudio = new Audio, winAudio = new Audio, loseAudio = new Audio, window.coinflip = function() {
                null == e && !0 !== i && $.get("/game/coinflip/" + $("#bet").val() + (isDemo ? "?demo" : ""), function(i) {
                    var o = JSON.parse(i);
                    if (null != o.error) return "$" === o.error && load("/"), -1 === o.error && $("#b_si").click(), 0 === o.error && iziToast.error({
                        message: "Не удалось найти игру.",
                        icon: "fa fa-times"
                    }), 1 === o.error && iziToast.error({
                        message: 'Minimum bet: 0.01&nbsp;<i class="fad fa-coins"></i>',
                        icon: "fa fa-times"
                    }), void(2 === o.error && $("#_payin").click());
                    betAudio.src = isAudioGame ? "/assets/media/bet.mp3" : "", betAudio.play(), $(".cf_status").fadeOut("fast"), $(".coin").toggleClass("game-disabled", !1).fadeIn("fast"), $("#play").fadeOut("fast").attr("onclick", "take()"), updateBalanceN(), e = o, _disableDemo = !0
                })
            }, window.flip = function(s) {
                null != e && !0 !== i && $.get("/game/coinflip/flip/" + e.id + "/" + s + (isDemo ? "?demo" : ""), function(s) {
                    var t = JSON.parse(s);
                    if (null != t.error) return -1 === t.error && iziToast.error({
                        message: "Игра не найдена.",
                        icon: "fa fa-times"
                    }), void(0 === t.error && console.log("Server cancelled input"));
                    i = !0, $("#coin").attr("class", ""), setTimeout(function() {
                        $("#coin").toggleClass("heads", "red" === t.side && !isQuick), $("#coin").toggleClass("tails", "black" === t.side && !isQuick), $("#coin").toggleClass("quick-heads", "red" === t.side && isQuick), $("#coin").toggleClass("quick-tails", "black" === t.side && isQuick);
                        var s = parseFloat(t.multiplier).toFixed(2),
                            a = [(s > 0 ? Math.floor(s) : Math.ceil(s)).toFixed(2).split(".")[0], (s % 1).toFixed(2).split(".")[1]];
                        setTimeout(function() {
                            if (i = !1, "lose" === t.status) 0 == t.demo && ($("#cf_status_text").html("You lose " + e.bet + " $."), $(".ribbon-wide").toggleClass("win-ribbon", !1).toggleClass("lose-ribbon", !0), $(".cf_status").fadeIn("fast")), 1 == t.demo && ($("#cf_status_text").html("You lost (Demo mode) " + e.bet + " руб."), $(".ribbon-wide").toggleClass("win-ribbon", !1).toggleClass("lose-ribbon", !0), $(".cf_status").fadeIn("fast")), loseAudio.src = isAudioGame ? "/assets/media/lose.mp3" : "", loseAudio.play(), isDemo || sendDrop(e.id), validateTask(e.id), clear(), updateBalanceN();
                            else {
                                $("#games").prop("number", p_n("#games")).animateNumber({
                                    number: t.games
                                }), $("#mul").prop("number", p_n("#mul")).animateNumber({
                                    number: a[0]
                                }), $("#mul_m").prop("number", p_n("#mul_m")).animateNumber({
                                    number: a[1]
                                }), $(".cf_history").prepend('<div class="cf cf_' + t.side + ' side-icon"></div>');
                                var s = (parseFloat(e.bet) * parseFloat(t.multiplier)).toFixed(2);
                                o ? $("#cf_profit").html(s) : (setBetText('take<br><span id="cf_profit">' + s + '</span> &nbsp;<i class="fad fa-coins"></i>'), o = !0)
                            }
                        }, isQuick ? 300 : 3e3, isQuick ? (swooshAudio.src = isAudioGame ? "/assets/media/swoosh-fast.mp3" : "", swooshAudio.play()) : (swooshAudio.src = isAudioGame ? "/assets/media/swoosh.mp3" : "", swooshAudio.play()))
                    }, 100)
                })
            }, window.take = function() {
                null != e && !0 !== i && $.get("/game/coinflip/take/" + e.id + (isDemo ? "?demo" : ""), function(i) {
                    var o = JSON.parse(i);
                    if (null != o.error) return -1 === o.error && iziToast.error({
                        message: "Требуется authorization.",
                        icon: "fa fa-times"
                    }), 0 === o.error && console.log("Server cancelled input"), void(1 === o.error && iziToast.error({
                        message: "Game not found.",
                        icon: "fa fa-times"
                    }));
                    winAudio.src = isAudioGame ? "/assets/media/win.mp3" : "", winAudio.play(), isDemo || sendDrop(e.id), validateTask(e.id), isDemo && isGuest() && showDemoTooltip(), clear(), updateBalanceN(), parseFloat(o.profit) > 0 && 0 == o.demo && ($("#cf_status_text").html("Вы выиграли " + parseFloat(o.profit).toFixed(2) + '&nbsp;<i class="fad fa-coins"></i>'), $(".ribbon-wide").toggleClass("win-ribbon", !0).toggleClass("lose-ribbon", !1), $(".cf_status").fadeIn("fast")), parseFloat(o.profit) > 0 && 1 == o.demo && ($("#cf_status_text").html("Вы выиграли (Демо-режим) " + parseFloat(o.profit).toFixed(2) + '&nbsp;<i class="fad fa-coins"></i>'), $(".ribbon-wide").toggleClass("win-ribbon", !0).toggleClass("lose-ribbon", !1), $(".cf_status").fadeIn("fast"))
                })
            }, window.clear = function() {
                e = null, i = !1, o = !1, _disableDemo = !1, setBetText("Play"), $("#play").attr("onclick", "coinflip()"), $(".coin").toggleClass("game-disabled", !0).fadeOut("fast"), $("#games").animateNumber({
                    number: 0
                }), $("#mul").animateNumber({
                    number: 0
                }), $("#mul_m").animateNumber({
                    number: 0
                }), $(".cf_history").html("")
            }, clear()
        })
    }
});