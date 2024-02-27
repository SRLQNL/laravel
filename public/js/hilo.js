! function(e) {
    var a = {};

    function i(t) {
        if (a[t]) return a[t].exports;
        var r = a[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(r.exports, r, r.exports, i), r.l = !0, r.exports
    }
    i.m = e, i.c = a, i.d = function(e, a, t) {
        i.o(e, a) || Object.defineProperty(e, a, {
            enumerable: !0,
            get: t
        })
    }, i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function(e, a) {
        if (1 & a && (e = i(e)), 8 & a) return e;
        if (4 & a && "object" == typeof e && e && e.__esModule) return e;
        var t = Object.create(null);
        if (i.r(t), Object.defineProperty(t, "default", {
                enumerable: !0,
                value: e
            }), 2 & a && "string" != typeof e)
            for (var r in e) i.d(t, r, function(a) {
                return e[a]
            }.bind(null, r));
        return t
    }, i.n = function(e) {
        var a = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return i.d(a, "a", a), a
    }, i.o = function(e, a) {
        return Object.prototype.hasOwnProperty.call(e, a)
    }, i.p = "/", i(i.s = 9)
}({
    9: function(e, a, i) {
        e.exports = i("TpFI")
    },
    TpFI: function(e, a) {
        $.on("/hilo", function() {
            var e = null,
                a = !1,
                i = !1,
                t = 1;
            betAudio = new Audio, winAudio = new Audio, clickAudio = new Audio, flipAudio = new Audio, gameAudio = new Audio, loseAudio = new Audio, window.hilo = function() {
                null == e && !0 !== a && $.get("/game/hilo/" + $("#bet").val() + "/" + t + (isDemo ? "?demo" : ""), function(a) {
                    var i = JSON.parse(a);
                    if (null != i.error) return "$" === i.error && load("/"), -1 === i.error && $("#b_si").click(), 1 === i.error && iziToast.error({
                        message: 'Мinimum bid: 0.01&nbsp;<i class="fad fa-coins"></i>',
                        icon: "fa fa-times"
                    }), 2 === i.error && $("#_payin").click(), void(3 === i.error && (replace(), hilo()));
                    betAudio.src = isAudioGame ? "/assets/media/bet.mp3" : "", betAudio.play(), calculateProbability(t), $(".hilo-replace").fadeOut("fast"), $(".cf_status").fadeOut("fast"), $(".hilo-select").fadeIn("fast"), $("#play").fadeOut("fast").attr("onclick", "take()"), updateBalanceN(), e = i, _disableDemo = !0
                })
            }, window.flip = function(r) {
                null != e && !0 !== a && $.get("/game/hilo/flip/" + e.id + "/" + r + (isDemo ? "?demo" : ""), function(r) {
                    var o = JSON.parse(r);
                    if (null != o.error) return -1 === o.error && iziToast.error({
                        message: "Game not found.",
                        icon: "fa fa-times"
                    }), void(0 === o.error && console.log("Server cancelled input"));
                    a = !0;
                    var n = parseFloat(o.multiplier).toFixed(2),
                        l = splitDecimal(n),
                        s = parseFloat(o.deck_index);
                    t = s, clickAudio.src = isAudioGame ? "/assets/media/click.mp3" : "", clickAudio.play(), flipAudio.src = isAudioGame ? "/assets/media/flip.mp3" : "", flipAudio.play(), setCard(deck[s]), setTimeout(function() {
                        if (a = !1, !1 === o.win) setTimeout(function() {
                            $("#cf_status_text").html("Вы проиграли " + e.bet + '&nbsp;<i class="fad fa-coins"></i>'), $(".ribbon-wide").toggleClass("win-ribbon", !1).toggleClass("lose-ribbon", !0), $(".cf_status").fadeIn("fast"), loseAudio.src = isAudioGame ? "/assets/media/lose.mp3" : "", loseAudio.play(), isDemo || sendDrop(e.id), validateTask(e.id), clear(), updateBalanceN(), clearHistory()
                        }, 400);
                        else {
                            calculateProbability(s), $("#games").prop("number", p_n("#games")).animateNumber({
                                number: o.games
                            }), $("#mul").prop("number", p_n("#mul")).animateNumber({
                                number: l[0]
                            }), $("#mul_m").prop("number", p_n("#mul_m")).animateNumber({
                                number: l[1]
                            }), gameAudio.src = isAudioGame ? "/assets/media/game.mp3" : "", gameAudio.play();
                            var t = (parseFloat(e.bet) * parseFloat(o.multiplier)).toFixed(2);
                            t < 0 && (t = "0.00"), i ? $("#cf_profit").html(t) : (setBetText('Забрать<br><span id="cf_profit">' + t + '</span>&nbsp;<i class="fad fa-coins"></i>'), $("#cf_profit").toggleClass("bet_profit-error", parseFloat(t) <= 0), i = !0)
                        }
                    }, 600)
                })
            }, window.take = function() {
                null != e && !0 !== a && $.get("/game/hilo/take/" + e.id + (isDemo ? "?demo" : ""), function(a) {
                    var i = JSON.parse(a);
                    if (null != i.error) return -1 === i.error && iziToast.error({
                        message: "Authorization required.",
                        icon: "fa fa-times"
                    }), 0 === i.error && console.log("Server cancelled input"), void(1 === i.error && iziToast.error({
                        message: "Game not found.",
                        icon: "fa fa-times"
                    }));
                    isDemo || sendDrop(e.id), validateTask(e.id), isDemo && isGuest() && showDemoTooltip(), clear(), updateBalanceN(), clearHistory(), parseFloat(i.profit) > 0 && ($("#cf_status_text").html("You win " + parseFloat(i.profit).toFixed(2) + '&nbsp;<i class="fad fa-coins"></i>'), $(".ribbon-wide").toggleClass("win-ribbon", !0).toggleClass("lose-ribbon", !1), $(".cf_status").fadeIn("fast")), winAudio.src = isAudioGame ? "/assets/media/win.mp3" : "", winAudio.play()
                })
            }, window.calculateProbability = function(e) {
                var a = deck[e].slot / 14 * 100,
                    i = splitDecimal(a),
                    t = splitDecimal(100 - a),
                    r = function(a) {
                        return a ? 12.35 / deck[e].slot : 12.35 / (13 - (deck[e].slot - 1))
                    },
                    o = r(!0),
                    n = r(!1),
                    l = splitDecimal(o),
                    s = splitDecimal(n);
                $("#chance-h_ma").animateNumber({
                    number: t[0]
                }), $("#chance-h_mi").animateNumber({
                    number: t[1]
                }), $("#chance-l_ma").animateNumber({
                    number: i[0]
                }), $("#chance-l_mi").animateNumber({
                    number: i[1]
                }), $("#mul-h_ma").animateNumber({
                    number: s[0]
                }), $("#mul-h_mi").animateNumber({
                    number: s[1]
                }), $("#mul-l_ma").animateNumber({
                    number: l[0]
                }), $("#mul-l_mi").animateNumber({
                    number: l[1]
                })
            }, window.clear = function() {
                e = null, a = !1, i = !1, _disableDemo = !1, $(".hilo-replace").fadeIn("fast"), setBetText("Играть"), $("#play").attr("onclick", "hilo()"), $(".hilo-select").fadeOut("fast"), $("#games").animateNumber({
                    number: 0
                }), $("#mul").animateNumber({
                    number: 0
                }), $("#mul_m").animateNumber({
                    number: 0
                }), $("#chance-h_ma").animateNumber({
                    number: 0
                }), $("#chance-h_mi").animateNumber({
                    number: 0
                }), $("#chance-l_ma").animateNumber({
                    number: 0
                }), $("#chance-l_mi").animateNumber({
                    number: 0
                }), $("#mul-h_ma").animateNumber({
                    number: 0
                }), $("#mul-h_mi").animateNumber({
                    number: 0
                }), $("#mul-l_ma").animateNumber({
                    number: 0
                }), $("#mul_l-mi").animateNumber({
                    number: 0
                })
            }, window.addToHistory = function(e) {
                var a = "hearts" === e.type || "diamonds" === e.type,
                    i = $('<div class="card_history ' + (a ? "card_history_red" : "card_history_black") + '"><div>' + e.value + '</div><i class="' + deck.toIcon(e) + '"></i></div>').hide();
                $(".cf_history").prepend(i), i.fadeIn("fast")
            }, window.setCard = function(e) {
                void 0 === e && (e = deck[1]), $(".hilo-card-value").fadeOut("fast", function() {
                    $(this).html(e.value), $(this).fadeIn("fast")
                }), $("#card_icon").fadeOut("fast", function() {
                    $("#card_icon").attr("class", deck.toIcon(e)), $("#card_icon").fadeIn("fast");
                    var a = "hearts" === e.type || "diamonds" === e.type;
                    $(".hilo_card").toggleClass("card_history_red", a), $(".hilo_card").toggleClass("card_history_black", !a)
                }), addToHistory(e), $("#higher").fadeOut("fast", function() {
                    var e = t % 13 + 1 == 1;
                    $("#higher").html(e ? "Та же" : "Выше или та же"), $("#higher").fadeIn("fast")
                }), $("#lower").fadeOut("fast", function() {
                    var e = t % 13 + 1 == 2;
                    $("#lower").html(e ? "Та же" : "Ниже или та же"), $("#lower").fadeIn("fast")
                })
            }, window.clearHistory = function() {
                $.each($(".cf_history .card_history"), function(e, a) {
                    $(a).fadeOut("fast", function() {
                        $(a).remove()
                    })
                })
            }, window.replace = function() {
                null == e && ($(".cf_status").fadeOut("fast"), clearHistory(), function e() {
                    var a = Math.floor(Math.random() * (Object.keys(deck).length - 1)) + 1,
                        i = deck[a];
                    void 0 !== i && 1 !== i.slot && 13 !== i.slot ? (t = a, setCard(i)) : e()
                }())
            }, clear(), replace()
        })
    }
});