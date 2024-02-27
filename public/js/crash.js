! function(e) {
    var a = {};

    function t(o) {
        if (a[o]) return a[o].exports;
        var s = a[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(s.exports, s, s.exports, t), s.l = !0, s.exports
    }
    t.m = e, t.c = a, t.d = function(e, a, o) {
        t.o(e, a) || Object.defineProperty(e, a, {
            enumerable: !0,
            get: o
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
        var o = Object.create(null);
        if (t.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & a && "string" != typeof e)
            for (var s in e) t.d(o, s, function(a) {
                return e[a]
            }.bind(null, s));
        return o
    }, t.n = function(e) {
        var a = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(a, "a", a), a
    }, t.o = function(e, a) {
        return Object.prototype.hasOwnProperty.call(e, a)
    }, t.p = "/", t(t.s = 12)
}({
    12: function(e, a, t) {
        e.exports = t("aHX/")
    },
    "aHX/": function(e, a) {
        $.on("/crash", function() {
            var e, a, t, o, s = !1;
            betAudio = new Audio, winAudio = new Audio, loseAudio = new Audio, window.init = function() {
                null != e && (e.destroy(), e = null);
                var a = document.getElementById("chart").getContext("2d");
                a.height = 673, e = new Chart(a, {
                    type: "line",
                    data: {
                        labels: ["0s", "3s"],
                        datasets: [{
                            label: "",
                            data: [0, 0],
                            backgroundColor: "rgba(156,63,78,0.2)",
                            borderColor: "rgba(255, 99, 132, 1)",
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: !0,
                        maintainAspectRatio: !1,
                        bezierCurve: !1,
                        layout: {
                            padding: {
                                left: 0,
                                right: 0,
                                top: 30,
                                bottom: 20
                            }
                        },
                        legend: {
                            display: !1
                        },
                        tooltips: {
                            enabled: !1
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: !0,
                                    maxTicksLimit: 20,
                                    precision: 0,
                                    callback: function(e, a, t) {
                                        return "x" + e
                                    }
                                }
                            }],
                            xAxes: [{
                                ticks: {
                                    beginAtZero: !0,
                                    display: !1
                                }
                            }]
                        }
                    }
                })
            }, window.take = function() {
                if (!1 !== s) return iziToast.info({
                    message: "You bet too often!",
                    icon: "fa fa-info"
                }), setTimeout(function() {
                    s = !1
                }, 10);
                s = !0, null != a ? (t = -1, $.get("/game/crash/take/" + a + (isDemo ? "?demo" : ""), function(t) {
                    var o = JSON.parse(t);
                    if (null == o.error) {
                        1 == o.demo && ($(".c_f").toggleClass("c_f-progress-demo", !1), $(".c_f").toggleClass("c_f-win-demo", !0)), 0 == o.demo && ($(".c_f").toggleClass("c_f-progress", !1), $(".c_f").removeClass("c_f-win-demo", !1), $(".c_f").toggleClass("c_f-win", !0)), winAudio.src = isAudioGame ? "/assets/media/win.mp3" : "", winAudio.play(), setTimeout(function() {
                            s = !1
                        }, 10);
                        var i = parseFloat(o.profit).toFixed(2);
                        $("#game_profit").html((o.mul >= 1 ? "You win " : "") + i + ' &nbsp;<i class="fad fa-coins"></i>');
                        for (var r = parseInt((o.crash - parseFloat(o.mul).toFixed(2)) / .9), l = 0; l < r - 2; l++) e.data.datasets[0].data.unshift(0), e.data.labels[e.data.labels.length] = 3 * e.data.labels.length + "s";
                        var n = e.data.datasets[0].data.length;
                        e.data.datasets[0].data[n - 1] = parseFloat(o.crash).toFixed(2);
                        for (var d = 0; d < n - 1; d++) d < 1 || (e.data.datasets[0].data[n - 1 - d] = parseFloat(e.data.datasets[0].data[n - 1]) / (1.2 * d));
                        e.update(), isDemo || sendDrop(a), validateTask(a), isDemo && isGuest() && showDemoTooltip(), a = null, swap(), updateBalanceN(), _disableDemo = !1
                    } else - 1 !== o.error && 0 !== o.error || (swap(), a = null, updateBalanceN())
                })) : swap()
            }, window.swap = function() {
                null == a ? ($("#play").attr("onclick", "crash()"), setBetText("Play")) : $("#play").attr("onclick", "take()")
            }, window.crash = function() {
                if (!1 !== s) return iziToast.info({
                    message: "You bet too often!",
                    icon: "fa fa-info"
                });
                s = !0, o || (o = !0, $.get("/game/crash/" + $("#bet").val() + (isDemo ? "?demo" : ""), function(i) {
                    o = !1;
                    var r = JSON.parse(i);
                    if (null != r.error) return "$" === r.error && load("/"), -1 === r.error && $("#b_si").click(), 1 === r.error && iziToast.error({
                        message: 'Minimum bet: 0.01&nbsp;<i class="fad fa-coins"></i>',
                        icon: "fa fa-times"
                    }), s = !1, 2 === r.error && $("#_payin").click(), void(s = !1);
                    setTimeout(function() {
                            s = !1
                        }, 500), betAudio.src = isAudioGame ? "/assets/media/bet.mp3" : "", betAudio.play(), 1 == r.demo ? ($(".tip_badge").fadeIn(200), $(".tip_text").fadeIn(200)) : ($(".c_f").removeClass("c_f-win-demo"), $(".c_f").removeClass("c_f-lost-demo"), $(".tip_badge").fadeOut(200), $(".tip_text").fadeOut(200)), a = r.id, swap(), 1 == r.demo && ($(".c_f").toggleClass("c_f-win-demo", !1), $(".c_f").toggleClass("c_f-lost-demo", !1), $(".c_f").toggleClass("c_f-progress-demo", !0), $(".tip_badge").fadeIn(200), $(".tip_text").fadeIn(200), $(".c_f").fadeIn("fast")), 0 == r.demo && ($(".c_f").toggleClass("c_f-win", !1), $(".c_f").toggleClass("c_f-lost", !1), $(".c_f").toggleClass("c_f-progress", !0), $(".c_f").removeClass("c_f-win-demo", !1), $(".c_f").removeClass("c_f-lost-demo", !1), $(".c_f").fadeIn("fast")), t = 0, init(), _disableDemo = !0,
                        function o() {
                            $.get("/game/crash/tick/" + a + (isDemo ? "?demo" : ""), function(s) {
                                if (-1 !== t) {
                                    var i = JSON.parse(s),
                                        r = parseFloat(i.mul).toFixed(2);
                                    if (null == i.error) {
                                        var l = (parseFloat(i.bet).toFixed(2) * (r - 1)).toFixed(2);
                                        l = r < 1 ? parseFloat($("#bet").val()).toFixed(2) : l, 1 == i.demo ? ($(".tip_badge").fadeIn(200), $(".tip_text").fadeIn(200)) : ($(".tip_badge").fadeOut(200), $(".tip_text").fadeOut(200)), $("#game_multiplier").html("x" + r), $("#game_profit").html((r < 1 ? "" : "+") + l + '&nbsp;<i class="fad fa-coins"></i>'), $("#bet_btn").html().startsWith("Take") ? $("#bet_btn").html("Take<br>" + l + '&nbsp;<i class="fad fa-coins"></i>') : setBetText("Take<br>" + l + '&nbsp;<i class="fad fa-coins"></i>');
                                        var n = e.data.datasets[0].data.length;
                                        if (!(e.data.datasets[0].data[n - 1] >= 20)) {
                                            e.data.datasets[0].data[n - 1] += .01;
                                            for (var d = 0; d < n - 1; d++) d < 1 || (e.data.datasets[0].data[n - 1 - d] = parseFloat(e.data.datasets[0].data[n - d]) / 2);
                                            if (e.update(), t += 100, !((f = r) >= (c = $("#betout").val()) || parseFloat(f) >= parseFloat(c)) || (take(), 0)) {
                                                var f, c;
                                                if (setTimeout(o, 30), t >= 3e3 && t % 3e3 == 0) {
                                                    if (3 * e.data.labels.length > 60) return;
                                                    e.data.labels[e.data.labels.length] = 3 * e.data.labels.length + "s", e.data.datasets[0].data.unshift(0), e.update()
                                                }
                                                parseFloat(r) > 20 && take()
                                            }
                                        }
                                    } else - 1 === i.error ? iziToast.error({
                                        message: "Game not found.",
                                        icon: "fa fa-times"
                                    }) : (1 == i.demo && ($(".c_f").toggleClass("c_f-progress-demo", !1), $(".c_f").toggleClass("c_f-lost-demo", !0), $("#game_multiplier").html("x" + parseFloat(i.error).toFixed(2)), $("#game_profit").html("Вы проиграли " + i.bet + '&nbsp;<i class="fad fa-coins"></i>')), 0 == i.demo && ($(".c_f").toggleClass("c_f-progress", !1), $(".c_f").toggleClass("c_f-lost", !0), $("#game_multiplier").html("x" + parseFloat(i.error).toFixed(2)), $("#game_profit").html("You lose " + i.bet + '&nbsp;<i class="fad fa-coins"></i>')), loseAudio.src = isAudioGame ? "/assets/media/lose.mp3" : "", loseAudio.play(), isDemo || sendDrop(a), validateTask(a), _disableDemo = !1, a = null, swap(), updateBalanceN())
                                }
                            })
                        }()
                }))
            }, init(), $("#betout").on("change", function(e) {
                var a = $(e.target);
                a.val() < 1.1 && a.val(1.1)
            })
        })
    }
});