$.on("/plinko", function() {
    var t = 8,
        e = !1,
        a = 15,
        o = !1,
        i = 0,
        n = 0,
        s = 0,
        r = 0,
        l = "medium";
    win5 = 0, win3 = 0, betAudio = new Audio, winAudio = new Audio, plinkoAudio = new Audio;
    let d, c, u = [],
        m = [],
        f = [],
        p = [],
        g = [],
        w = 0,
        b = {
            8: {
                1: [5, -66],
                2: [-44, -24],
                3: [-11],
                4: [-3, -100],
                5: [.1, -7.4],
                6: [10],
                7: [0, .11, -.11, 20, -77, -97],
                8: [-19, -33],
                9: [30]
            },
            9: {
                1: [-5],
                2: [1.3],
                3: [4.1, 28],
                4: [1.1],
                5: [1.8, 4],
                6: [-4],
                7: [-1.4],
                8: [2.2],
                9: [-2],
                10: [-25]
            },
            10: {
                1: [0, 1, -1.3],
                2: [-2.22],
                3: [3],
                4: [5, -70],
                5: [.4, -9.6],
                6: [2],
                7: [.2, 4],
                8: [-29],
                9: [6.5, -3.5],
                10: [.7, 2.5],
                11: [66, -1]
            },
            11: {
                1: [6.66],
                2: [1.4, 22, 112, -52],
                3: [-57],
                4: [-160],
                5: [7, -1.444, 7],
                6: [1.2, -4, -50],
                7: [5, -2],
                8: [-7, -60],
                9: [3.33, 25],
                10: [0, 1.8, -2.2, 3.52, -85],
                11: [-22],
                12: [.55, -29.3, -1.3]
            },
            12: {
                1: [0, -1.5, -1.66],
                2: [22],
                3: [-2, -2.22],
                4: [.6, .21, 5.42, 77],
                5: [5.5, 27],
                6: [7, 5, 5.2, .051, -4.1, 55.555],
                7: [25, 55],
                8: [-7, 29.3],
                9: [.1],
                10: [3],
                11: [128],
                12: [33],
                13: [-1, -4.42, 2.424]
            },
            13: {
                1: [.555],
                2: [.5, 5, -2.7],
                3: [.7],
                4: [.9],
                5: [.99, -99.3],
                6: [-55],
                7: [.12, -.6],
                8: [.6, -99.4],
                9: [0, -1.76, -.2, -.7312],
                10: [-99.2],
                11: [-3.131, -3, -99],
                12: [100],
                13: [-2.22, -121],
                14: [3.33, 77, -1]
            },
            14: {
                1: [3.7],
                2: [.9, -3],
                3: [.4, .8],
                4: [1.3],
                5: [-.213],
                6: [-.1],
                7: [.6],
                8: [2.9],
                9: [0, 3.5],
                10: [.1, .7],
                11: [-24, 28],
                12: [.5, 2.8, -5, -20],
                13: [-.8, 44],
                14: [3],
                15: [-66]
            },
            15: {
                1: [1.3, 3.1],
                2: [-68.9],
                3: [3, 5],
                4: [2.9, 5.5],
                5: [5.2],
                6: [.4, .7],
                7: [1.5, -2],
                8: [.5, 3.33],
                9: [-21.2],
                10: [.9],
                11: [.3, 3.2, 5.6],
                12: [.2, .6],
                13: [20],
                14: [20.1],
                15: [20.2],
                16: [0, -3.1]
            },
            16: {
                1: [-150],
                2: [1.4, -3, -66],
                3: [-3.1],
                4: [1.5],
                5: [1.9],
                6: [1.2, -88],
                7: [.8, 1.1, 1.6],
                8: [0],
                9: [1.3, 2.8],
                10: [.9, 2.1],
                11: [2.2],
                12: [2.3, -1.2],
                13: [1.8],
                14: [3.6],
                15: [3.1, -45],
                16: [3],
                17: [2.7]
            }
        };
    window.setMode = function(t, e) {
        0 == r && ($("*[data-tab]").toggleClass("active", !1), $("*[data-tab=" + t + "]").toggleClass("active", !0)), "default" === t && 0 == r && (i = 0, $("#auto").fadeOut(0), $("#gamestext").fadeOut(0), $("#gamesvalue").fadeOut(0), $("#gamesvictory").fadeOut(0), $("#gamesvictoryvalue").fadeOut(0), $("#play").fadeIn(0)), "auto" === t && (i = 1, $("#play").fadeOut(0), $("#gamestext").fadeIn(0), $("#gamesvalue").fadeIn(0), $("#gamesvictory").fadeIn(0), $("#gamesvictoryvalue").fadeIn(0), $("#auto").fadeIn(0))
    }, window.initPlinko = function(e) {
        const {
            Engine: a,
            Render: o,
            World: n,
            Bodies: s,
            Events: r
        } = Matter, b = a.create(), v = o.create({
            element: document.getElementsByClassName("plinko")[0],
            engine: b,
            options: {
                wireframes: !1,
                background: "rgb(39, 45, 57)",
                pixelRatio: 1
            }
        });
        c = function(e) {
            n.clear(b.world), g = [];
            const a = e + 2,
                o = 800 / a / 2,
                i = (e - 3) / ((e - 7) / 2) * (800 / 700),
                {
                    world: r
                } = b,
                c = u[l][t],
                w = {
                    0: ["#ffc000", "#997300"],
                    1: ["#ffa808", "#a16800"],
                    2: ["#ffa808", "#a95b00"],
                    3: ["#ff9010", "#a95b00"],
                    4: ["#ff7818", "#914209"],
                    5: ["#ff6020", "#b93500"],
                    6: ["#ff4827", "#c01d00"],
                    7: ["#ff302f", "#c80100"],
                    8: ["#ff1837", "#91071c"],
                    9: ["#ff003f", "#990026"]
                },
                $ = {
                    8: [w[9], w[7], w[4], w[2], w[0], w[2], w[4], w[7], w[9]],
                    9: [w[9], w[7], w[6], w[5], w[2], w[2], w[5], w[6], w[7], w[9]],
                    10: [w[9], w[8], w[7], w[5], w[4], w[1], w[4], w[5], w[7], w[8], w[9]],
                    11: [w[9], w[8], w[7], w[5], w[4], w[2], w[2], w[4], w[5], w[7], w[8], w[9]],
                    12: [w[9], w[8], w[7], w[6], w[5], w[4], w[1], w[4], w[5], w[6], w[7], w[8], w[9]],
                    13: [w[9], w[8], w[7], w[6], w[5], w[4], w[2], w[2], w[4], w[5], w[6], w[7], w[8], w[9]],
                    14: [w[9], w[8], w[7], w[6], w[5], w[4], w[3], w[2], w[3], w[4], w[5], w[6], w[7], w[8], w[9]],
                    15: [w[9], w[8], w[7], w[6], w[5], w[4], w[3], w[2], w[2], w[3], w[4], w[5], w[6], w[7], w[8], w[9]],
                    16: [w[9], w[8], w[7], w[6], w[5], w[4], w[3], w[2], w[1], w[2], w[3], w[4], w[5], w[6], w[7], w[8], w[9]]
                },
                v = (800 - 2 * o) / (a - 1),
                k = [s.rectangle(400, 625, 800, 50, {
                    isStatic: !0,
                    render: {
                        fillStyle: "transparent"
                    }
                }), s.rectangle(0, 0, o / 2, 1200, {
                    isStatic: !0,
                    render: {
                        fillStyle: "transparent"
                    }
                }), s.rectangle(800, 0, o / 2, 1200, {
                    isStatic: !0,
                    render: {
                        fillStyle: "transparent"
                    }
                })],
                y = (800 - 2 * o) / a,
                h = 560 / e,
                _ = Array(e).fill().map((t, a) => {
                    const n = y * (e - a - 1) / 2;
                    return Array(a + 3).fill().map((t, e) => ((t, e) => s.circle(t, e, i, {
                        isStatic: !0,
                        render: {
                            fillStyle: "#66abf5"
                        },
                        label: "peg"
                    }))(o + y * e + y / 2 + n, h * a + h / 2))
                }).reduce((t, e) => [...t, ...e], []),
                A = Array(a - 1).fill().map((e, a) => (e => {
                    const a = v / 1.08;
                    let o = g.length,
                        i = $[t][o];
                    n.add(r, s.rectangle(e, 588, a, 24, {
                        isStatic: !0,
                        render: {
                            fillStyle: i[0]
                        },
                        chamfer: {
                            radius: 3
                        },
                        label: "bucket-" + o
                    }));
                    let l = "x" + c[o];
                    return g.push({
                        text: l,
                        x: e,
                        y: 591.75
                    }), s.rectangle(e, 600, a, 7.5, {
                        isStatic: !0,
                        render: {
                            fillStyle: i[1]
                        }
                    })
                })(v * a + v));
            n.add(r, [...k, ..._, ...A]), d = function(t, e, a, o, l) {
                const d = ((t, e, a, o, n) => {
                    const r = 1.1 * i,
                        l = 400 + t,
                        d = `hsl(${((t,e)=>Math.floor(360*Math.random())+0)()}, 90%, 60%)`;
                    return p[e] = a, m[e] = o, f[e] = n, s.circle(l, 0, r, {
                        restitution: .8,
                        render: {
                            fillStyle: d
                        },
                        label: "plinko-" + e
                    })
                })(t, e, a, o, l);
                n.add(r, d)
            }
        }, $.get("/game/plinko/multipliers", function(t) {
            u = JSON.parse(t), c(e)
        }), r.on(b, "collisionStart", function(t) {
            const {
                pairs: e
            } = t;
            e.forEach(t => {
                const {
                    bodyA: e,
                    bodyB: a
                } = t, {
                    label: o
                } = e, {
                    label: s
                } = a;
                if (o.includes("plinko") && s.includes("plinko") && (t.isActive = !1), s.includes("plinko") && o.includes("bucket")) {
                    let t = s.split("plinko-")[1];
                    if (console.log("Collide - " + t + " (profit: " + p[t] + ")"), void 0 === p[t]) return;
                    n.remove(b.world, a), --w <= 0 && 0 == i && (setBetText("Play"), w = 0), --w <= 0 && 1 == i && (w = 0), 1 == parseFloat(f[t]) || (updateBalanceN(void 0, parseFloat(p[t])), parseFloat(p[t]) > 0 && show_win_window(parseFloat(m[t]), parseFloat(p[t]))), isDemo && isGuest() && showDemoTooltip(), 1 == parseFloat(f[t]) && show_win_window_demo(parseFloat(m[t]), parseFloat(p[t])), plinkoAudio.src = isAudioGame ? "/assets/media/plinko.mp3" : "", plinkoAudio.play(), delete p[t]
                }
            })
        }), r.on(v, "afterRender", () => {
            if (0 === $(".plinko canvas").length) return;
            const t = $(".plinko canvas")[0].getContext("2d");
            t.font = "13px Open Sans", t.fillStyle = "black", t.textAlign = "center";
            for (let e = 0; e < g.length; e++) {
                let a = g[e];
                t.fillText(a.text, a.x, a.y)
            }
        }), a.run(b), o.run(v)
    }, window.show_win_window = function(t, e) {
        $(".outcome-window__coeff").text("x" + t), $(".outcome-window_won__sum").text(e), $(".outcome-window").fadeIn(200), winAudio.src = isAudioGame ? "/assets/media/win.mp3" : "", winAudio.play()
    }, window.show_win_window_demo = function(t, e) {
        $(".outcome-window__coeff-demo").text("x" + t), $(".outcome-window_won__sum").text(e), $(".outcome-window-demo").fadeIn(200), winAudio.src = isAudioGame ? "/assets/media/win.mp3" : "", winAudio.play()
    }, window.plinko = function() {
        if (!1 !== e) return iziToast.info({
            message: "You bet too often!",
            icon: "fa fa-info"
        });
        e = !0, 0 != parseFloat($("#money").html()) && 0 == parseFloat($("#money").html()) || (w++, $.get("/game/plinko/" + l + "/" + t + "/" + $("#bet").val() + (isDemo ? "?demo" : ""), function(t) {
            let a = JSON.parse(t);
            if (console.log(a), null != a.error) return "$" === a.error && load("games"), -1 === a.error && $("#b_si").click(), 0 === a.error && iziToast.error({
                message: "Number of pins - from 8 to 16",
                icon: "fa fa-times",
                position: "bottomCenter"
            }), 1 === a.error && iziToast.error({
                message: "Minimum bet: 0.01.",
                icon: "fa fa-times",
                position: "bottomCenter"
            }), 2 === a.error && $("#_payin").click(), e = !1, 3 === a.error && iziToast.error({
                message: "Invalid risk level",
                icon: "fa fa-times",
                position: "bottomCenter"
            }), void w--;
            betAudio.src = isAudioGame ? "/assets/media/bet.mp3" : "", betAudio.play(), isDemo || setTimeout(function() {
                sendDrop(a.id), validateTask(13)
            }, 5e3), $(".outcome-window").fadeOut(200), $(".outcome-window-demo").fadeOut(200), setBetText("Бросить еще"), setTimeout(function() {
                e = !1
            }, 10), isDemo || updateBalanceN(void 0, -parseFloat($("#bet").val())), drop(a.bucket, a.id, a.profit.toFixed(2), a.multiplier, a.demo)
        }))
    }, window.plinkoauto = function() {
        if (!(a > 0)) return iziToast.info({
            message: "The minimum number of games is 5",
            icon: "fa fa-info"
        }), setTimeout(function() {}, 100);
        0 != parseFloat($("#money").html()) && 0 == parseFloat($("#money").html()) || (w++, $.get("/game/plinko/" + l + "/" + t + "/" + $("#bet").val() + (isDemo ? "?demo" : ""), function(t) {
            let o = JSON.parse(t);
            if (console.log(o), null != o.error) return "$" === o.error && load("games"), -1 === o.error && $("#b_si").click(), 0 === o.error && iziToast.error({
                message: "Number of pins - from 8 to 16",
                icon: "fa fa-times",
                position: "bottomCenter"
            }), e = !1, stopauto(), 1 === o.error && iziToast.error({
                message: "Minimum bet: .",
                icon: "fa fa-times",
                position: "bottomCenter"
            }), e = !1, stopauto(), 2 === o.error && $("#_payin").click(), e = !1, stopauto(), 3 === o.error && iziToast.error({
                message: "Invalid risk level",
                icon: "fa fa-times",
                position: "bottomCenter"
            }), e = !1, stopauto(), void w--;
            betAudio.src = isAudioGame ? "/assets/media/bet.mp3" : "", betAudio.play(), isDemo || setTimeout(function() {
                sendDrop(o.id), validateTask(13)
            }, 5e3), $(".outcome-window").fadeOut(200), $(".outcome-window-demo").fadeOut(200), setTimeout(function() {
                e = !1
            }, 10), isDemo || updateBalanceN(void 0, -parseFloat($("#bet").val())), drop(o.bucket, o.id, o.profit.toFixed(2), o.multiplier, o.demo), a -= 1, r = 1, 1 == s && stopauto(), 0 == s && (0 == n && (0 == s && (a > 0 ? retrygame() : (stopauto(), a = parseInt($("*[data-games]").attr("data-games")))), 1 == s && stopauto()), 1 == n && (0 == o.result ? a > 0 ? retrygame() : (stopauto(), win3 = 0, a = parseInt($("*[data-games]").attr("data-games"))) : (a > 0 && (win3 < 2 ? (win3 += 1, retrygame()) : (stopauto(), win3 = 0, a = parseInt($("*[data-games]").attr("data-games"))), a = parseInt($("*[data-games]").attr("data-games"))), 0 == a && (stopauto(), win3 = 0, a = parseInt($("*[data-games]").attr("data-games"))))), 2 == n && (0 == o.result ? a > 0 ? retrygame() : (stopauto(), win5 = 0, a = parseInt($("*[data-games]").attr("data-games"))) : (a > 0 && (win5 < 4 ? (win5 += 1, retrygame()) : (stopauto(), win5 = 0, a = parseInt($("*[data-games]").attr("data-games"))), a = parseInt($("*[data-games]").attr("data-games"))), 0 == a && (stopauto(), win5 = 0, a = parseInt($("*[data-games]").attr("data-games"))))))
        }))
    }, window.retrygame = function() {
        0 == s && ($("#auto").fadeIn("fast").attr("onclick", "stopauto()"), setAutoText("Остановить"), setTimeout(function() {
            plinkoauto()
        }, 150)), 1 == s && stopauto()
    }, window.plinkoautotry = function() {
        s = 0, r = 1, plinkoauto()
    }, window.stopauto = function() {
        s = 1, r = 0, $("#auto").fadeIn(0).attr("onclick", "plinkoautotry()"), setAutoText("Запустить"), a = parseInt($("*[data-games]").attr("data-games"))
    }, window.drop = function(e, a, o, i, n) {
        let s = b[t][e][Math.floor(Math.random() * b[t][e].length)];
        d(s, a, o, i, n), console.log("Dropping game id " + a + " in " + e + " - " + s + " = " + i + " status: " + n)
    }, window.debug = function(t) {
        d(t, Math.random(), 0)
    }, window.reloadCSS = function(t) {
        $("[data-async]").remove(), void 0 !== t && t()
    }, reloadCSS(function() {
        initPlinko(8)
    }), window.datapin = function(e) {
        $("*[data-pin]").on("click", function(e) {
            w > 0 || ($("*[data-pin]").toggleClass("bc_active", !1), $(this).toggleClass("bc_active", !0), t = parseInt($(this).attr("data-pin")), c(t))
        })
    }, window.datadiff = function(e) {
        $("*[data-plinko-difficulty]").on("click", function() {
            w > 0 || (l = $(this).attr("data-plinko-difficulty"), $(".buttons-3-selected").removeClass("buttons-3-selected"), $(this).addClass("buttons-3-selected"), c(t))
        })
    }, datapin(), datadiff(), $("*[data-games]").on("click", function() {
        $("*[data-games]").toggleClass("bc_active", !1), $(this).toggleClass("bc_active", !0), a = parseInt($(this).attr("data-games")), $(".games_input").val(a)
    }), $("#change_games").on("click", function() {
        o || (o = !0, $("#change_games span").toggleClass("dn", !0), $("#change_games input").toggleClass("dn", !1), $(".bomb_input").on("input", function() {
            var t = parseInt($(this).val());
            if (isNaN(t) || t < 1 || t > 240) return $(this).toggleClass("bad", !0), void(u = !0);
            $(this).toggleClass("bad", !1), u = !1, a = t, $("*[data-games]").toggleClass("bc_active", !1), $('*[data-games="' + a + '"]').toggleClass("bc_active", !0)
        }).focus())
    }), $("*[data-victory]").on("click", function() {
        $(this).attr("*[data-victory]"), $(".buttons-4-selected").removeClass("buttons-4-selected"), $(this).addClass("buttons-4-selected"), n = parseInt($(this).attr("data-victory"))
    })
});