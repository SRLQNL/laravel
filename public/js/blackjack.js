! function(e) {
    var a = {};

    function t(i) {
        if (a[i]) return a[i].exports;
        var n = a[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(n.exports, n, n.exports, t), n.l = !0, n.exports
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
            for (var n in e) t.d(i, n, function(a) {
                return e[a]
            }.bind(null, n));
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
    }, t.p = "/", t(t.s = 10)
}({
    10: function(e, a, t) {
        e.exports = t("tnDT")
    },
    tnDT: function(e, a) {
        $.on("/blackjack", function() {
            var e, a, t = new function() {
                    this.newGame = function() {
                        $.get("/game/blackjack/" + $("#bet").val() + (isDemo ? "?demo" : ""), function(t) {
                            var o = JSON.parse(t);
                            if (a = o.id, null != o.error) return "$" === o.error && load("/"), -1 === o.error && $("#b_si").click(), 1 === o.error && iziToast.error({
                                message: 'Minimum bet: 0.01&nbsp;<i class="fad fa-coins"></i>',
                                icon: "fa fa-times"
                            }), void(2 === o.error && $("#_payin").click());
                            betAudio.src = isAudioGame ? "/assets/media/bet.mp3" : "", betAudio.play(), _disableDemo = !0, updateBalanceN(), $("#play").fadeOut("fast"), resetBoard(), e = new l, r = !0, s = !1, i.resetHand(), n.resetHand(), setTimeout(function() {
                                e.dealCard(i, {
                                    index: o.player[0].index,
                                    rank: o.player[0].value,
                                    suit: o.player[0].type,
                                    value: o.player[0].blackjack_value,
                                    type: "up"
                                }), setTimeout(function() {
                                    e.dealCard(n, {
                                        index: o.dealer.index,
                                        rank: o.dealer.value,
                                        suit: o.dealer.type,
                                        value: o.dealer.blackjack_value,
                                        type: "up"
                                    }), setTimeout(function() {
                                        e.dealCard(i, {
                                            index: o.player[1].index,
                                            rank: o.player[1].value,
                                            suit: o.player[1].type,
                                            value: o.dealer.blackjack_value,
                                            type: "up"
                                        }), setTimeout(function() {
                                            e.dealCard(n, {
                                                index: 1,
                                                rank: "",
                                                suit: "",
                                                value: 0,
                                                type: "down"
                                            }, !0), r && $("#blackjack_controls").fadeIn("fast"), slideAudio.src = isAudioGame ? "/assets/media/slide.mp3" : "", slideAudio.play()
                                        }, 500), slideAudio.src = isAudioGame ? "/assets/media/slide.mp3" : "", slideAudio.play()
                                    }, 500), slideAudio.src = isAudioGame ? "/assets/media/slide.mp3" : "", slideAudio.play()
                                }, 500), slideAudio.src = isAudioGame ? "/assets/media/slide.mp3" : "", slideAudio.play()
                            }, 500)
                        })
                    }
                },
                i = new o,
                n = new o,
                r = !1,
                s = !1;

            function o() {
                var e = [],
                    a = "",
                    t = "";
                this.getElements = function() {
                    return this === i ? (a = "#phand", t = ".player") : (a = "#dhand", t = ".dealer"), {
                        ele: a,
                        score: t
                    }
                }, this.getHand = function() {
                    return e
                }, this.setHand = function(a) {
                    e.push(a)
                }, this.resetHand = function() {
                    e = []
                }, this.flipCards = function(e) {
                    $(".down").each(function() {
                        $(this).removeClass("down").addClass("up"), renderCard(!1, !1, $(this), !1, e)
                    }), n.getScore("dealer", function(e) {
                        $(".dealer").html(e)
                    })
                }
            }

            function d(e) {
                this.getIndex = function() {
                    return e.index
                }, this.getType = function() {
                    return e.type
                }, this.getRank = function() {
                    return e.rank
                }, this.getSuit = function() {
                    return e.suit
                }, this.getValue = function() {
                    var e = this.getRank();
                    return "A" === e ? 11 : "K" === e || "Q" === e || "J" === e ? 10 : parseInt(e, 0)
                }
            }

            function l() {
                this.setCard = function(e, a) {
                    e.setHand(a)
                }, this.dealCard = function(a, t, r) {
                    var o = a,
                        d = a.getElements(),
                        l = d.score,
                        u = d.ele,
                        c = n.getHand();
                    e.setCard(o, t), renderCard(u, o, !1, r), o.getScore(".dealer" === l ? "dealer" : "player", function(e) {
                        $(l).html(e)
                    }), i.getHand().length < 3 && (c.length > 0 && "A" === c[0].rank && setActions("insurance"), i.getScore("player", function(e) {
                        if (21 === e) {
                            if (s) return;
                            i.stand(), s = !0
                        } else c.length > 1 && setActions("run")
                    }))
                }
            }
            betAudio = new Audio, winAudio = new Audio, clickAudio = new Audio, slideAudio = new Audio, gameAudio = new Audio, loseAudio = new Audio, o.prototype.hit = function(t) {
                $.get("/game/blackjack/hit/" + a + (isDemo ? "?demo" : ""), function(a) {
                    var n = JSON.parse(a);
                    e.dealCard(i, {
                        index: n.player.index,
                        rank: n.player.value,
                        suit: n.player.type,
                        value: n.player.blackjack_value,
                        type: "up"
                    }), i.getScore("player", function(e) {
                        t || e > 21 ? (r = !1, clickAudio.src = isAudioGame ? "/assets/media/click.mp3" : "", clickAudio.play(), setTimeout(function() {
                            i.stand()
                        }, 500)) : i.getHand(), setActions(), slideAudio.src = isAudioGame ? "/assets/media/slide.mp3" : "", slideAudio.play(), i.updateBoard()
                    })
                })
            }, o.prototype.stand = function() {
                r = !1, setActions(), $.get("/game/blackjack/stand/" + a + (isDemo ? "?demo" : ""), function(t) {
                    var i = JSON.parse(t),
                        r = JSON.parse(i.status);
                    showAlert("error" === r.type, r.header, r.message), isDemo || sendDrop(a), _disableDemo = !1, clickAudio.src = isAudioGame ? "/assets/media/click.mp3" : "", clickAudio.play(), n.flipCards({
                        rank: i.dealerReveal.value,
                        suit: '<i class="' + deck.toIcon(deck[i.dealerReveal.index]) + '"></i>',
                        value: i.dealerReveal.blackjack_value,
                        dealerScore: i.dealerScore
                    });
                    for (var s = 0; s < i.dealerDraw.length; s++) e.dealCard(n, {
                        index: i.dealerDraw[s].index,
                        rank: i.dealerDraw[s].value,
                        suit: i.dealerDraw[s].type,
                        value: i.dealerDraw[s].blackjack_value,
                        type: "up"
                    });
                    n.updateBoard(), updateBalanceN()
                })
            }, o.prototype.dbl = function() {
                $("#double").hasClass("bb_disabled") || $.get("/game/blackjack/double/" + a + (isDemo ? "?demo" : ""), function(e) {
                    var a = JSON.parse(e);
                    if (null != a.error) return -1 === a.error && iziToast.error({
                        message: "Authorization required.",
                        icon: "fa fa-times",
                        position: "bottomCenter"
                    }), 1 === a.error && iziToast.error({
                        message: "Game not found.",
                        icon: "fa fa-times",
                        position: "bottomCenter"
                    }), 0 === a.error && console.log("Server cancelled input"), void(2 === a.error && iziToast.error({
                        message: "You don't have enough money in your account to double your bet.",
                        icon: "fa fa-times",
                        position: "bottomCenter"
                    }));
                    $("#double").toggleClass("bb_disabled", !0), i.hit(!0), updateBalanceN(), _disableDemo = !1
                })
            }, o.prototype.insure = function() {
                $.get("/game/blackjack/insure/" + a + (isDemo ? "?demo" : ""), function(e) {
                    $(".insurance").fadeOut("fast");
                    var a = JSON.parse(e);
                    if (null != a.error) return -1 === a.error && iziToast.error({
                        message: "Authorization required.",
                        icon: "fa fa-times",
                        position: "bottomCenter"
                    }), 1 === a.error && iziToast.error({
                        message: "Game not found.",
                        icon: "fa fa-times",
                        position: "bottomCenter"
                    }), 0 === a.error && console.log("Server cancelled input"), void(2 === a.error && iziToast.error({
                        message: "You don't have enough money in your account to buy insurance.",
                        icon: "fa fa-times",
                        position: "bottomCenter"
                    }));
                    clickAudio.src = isAudioGame ? "/assets/media/click.mp3" : "", clickAudio.play(), iziToast.success({
                        message: "You bought insurance.",
                        icon: "fas fa-info-circle",
                        position: "bottomCenter"
                    }), updateBalanceN()
                })
            }, o.prototype.getScore = function(e, t) {
                $.get("/game/blackjack/score/" + e + "/" + a + (isDemo ? "?demo" : ""), function(e) {
                    t(parseInt(e))
                })
            }, o.prototype.updateBoard = function() {
                var e = ".dealer";
                this === i && (e = ".player"), this.getScore(".dealer" === e ? "dealer" : "player", function(a) {
                    $(e).html(a)
                })
            }, window.showAlert = function(e, a, t) {
                !e && (winAudio.src = isAudioGame ? "/assets/media/win.mp3" : "", winAudio.play()), e && (loseAudio.src = isAudioGame ? "/assets/media/lose.mp3" : "", loseAudio.play()), $(".wheel_game_result").toggleClass("wg_lose", e), $(".wheel_game_result").toggleClass("wg_win", !e), $(".mul").html(a), $(".te").html(t), $(".wheel_game_result").fadeIn("fast")
            }, window.hideAlert = function() {
                $(".wheel_game_result").fadeOut("fast")
            }, window.setActions = function(e) {
                var a = i.getHand();
                r || ($("#play").fadeIn("fast"), $("#blackjack_controls").fadeOut("fast"), $("#double").toggleClass("bb_disabled", !0), $("#split").toggleClass("bb_disabled", !0), $(".insurance").fadeOut("fast")), "run" === e ? $("#double").toggleClass("bb_disabled", !1) : "split" === e ? $("#split").toggleClass("bb_disabled", !1) : "insurance" === e ? $(".insurance").fadeIn("fast") : a.length > 2 && ($("#double").toggleClass("bb_disabled", !0), $("#split").toggleClass("bb_disabled", !0), $(".insurance").fadeOut("fast"))
            }, window.renderCard = function(e, a, t, r, s) {
                var o, l, u;
                u = new d(t ? (o = n.getHand())[1] : (o = a.getHand())[l = o.length - 1]), void 0 !== s && (u.rank = s.rank, u.suit = s.suit, u.value = s.value);
                var c = u.getRank(),
                    p = u.getSuit(),
                    f = "red",
                    m = 350,
                    g = 20,
                    b = 200,
                    k = e + " .card-" + l,
                    h = u.getType();
                l > 0 && (m -= 50 * l), t ? k = t : ($(e).append('<div class="' + (void 0 !== r && !0 === r ? "dealerSecret " : "") + "blackjack_card card-" + l + " " + h + '"><span class="pos-0"><span class="rank">&nbsp;</span><span class="suit">&nbsp;</span></span></div>'), "#phand" === e ? (g = 340, b = 500, $(e + " div.card-" + l).attr("id", "pcard-" + l), o.length < 2 && setTimeout(function() {
                    i.getScore("player", function(e) {
                        $(".player").html(e).fadeIn("fast")
                    })
                }, 500)) : ($(e + " div.card-" + l).attr("id", "dcard-" + l), o.length < 2 && setTimeout(function() {
                    n.getScore("dealer", function(e) {
                        $(".dealer").html(e).fadeIn("fast")
                    })
                }, 100)), $(e + " .card-" + l).css("z-index", l), $(e + " .card-" + l).animate({
                    top: g,
                    right: m
                }, b), $(e).queue(function() {
                    $(this).animate({
                        left: "-=25.5px"
                    }, 100), $(this).dequeue()
                })), ("up" === h || t) && ("hearts" !== p && "diamonds" !== p && (f = "black"), $(k).find('span[class*="pos"]').addClass("card_history_" + f), void 0 === s ? $(k).find("span.rank").html(c) : ($(".dealerSecret span.rank").html(s.rank), setTimeout(function() {
                    $(".dealer").html(s.dealerScore)
                }, 50)), $(k).find("span.suit").html('<i class="' + deck.toIcon(deck[u.getIndex()]) + '"></i>'))
            }, window.resetBoard = function() {
                $("#dhand").html(""), $("#phand").html(""), $("#phand, #dhand").css("left", 0), $(".dealer").fadeOut("fast"), $(".player").fadeOut("fast"), $(".insurance").fadeOut("fast")
            }, $("#play").on("click", function() {
                r || (hideAlert(), t.newGame())
            }), $("#hit").on("click", function() {
                i.hit()
            }), $("#stand").on("click", function() {
                $(".insurance").fadeOut("fast"), i.stand()
            }), $("#double").on("click", function() {
                i.dbl()
            }), $("#insurance_accept").on("click", function() {
                i.insure()
            }), $("#insurance_cancel").on("click", function() {
                $(".insurance").fadeOut("fast"), clickAudio.src = isAudioGame ? "/assets/media/click.mp3" : "", clickAudio.play()
            })
        })
    }
});