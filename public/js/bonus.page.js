! function(t) {
    var e = {};

    function r(o) {
        if (e[o]) return e[o].exports;
        var n = e[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return t[o].call(n.exports, n, n.exports, r), n.l = !0, n.exports
    }
    r.m = t, r.c = e, r.d = function(t, e, o) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: o
        })
    }, r.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, r.t = function(t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (r.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var n in t) r.d(o, n, function(e) {
                return t[e]
            }.bind(null, n));
        return o
    }, r.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return r.d(e, "a", e), e
    }, r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, r.p = "/", r(r.s = 17)
}({
    17: function(t, e, r) {
        t.exports = r("Dkb6")
    },
    Dkb6: function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r("o0o1"),
            n = r.n(o);

        function i(t, e, r, o, n, i, a) {
            try {
                var l = t[i](a),
                    s = l.value
            } catch (t) {
                return void r(t)
            }
            l.done ? e(s) : Promise.resolve(s).then(o, n)
        }

        function a(t) {
            return function() {
                var e = this,
                    r = arguments;
                return new Promise(function(o, n) {
                    var a = t.apply(e, r);

                    function l(t) {
                        i(a, o, n, l, s, "next", t)
                    }

                    function s(t) {
                        i(a, o, n, l, s, "throw", t)
                    }
                    l(void 0)
                })
            }
        }
        $.on("/bonus", function() {
            var t, e, r, o, i, l = {
                    sum: .01,
                    color: "#d1d652de"
                },
                s = {
                    sum: .05,
                    color: "#f46e42de"
                },
                c = {
                    sum: .1,
                    color: "#508bf0de"
                },
                f = {
                    sum: .15,
                    color: "#df1347de"
                },
                u = {
                    sum: .01,
                    color: "#d1d652de"
                },
                d = {
                    sum: .05,
                    color: "#f46e42de"
                },
                p = {
                    sum: .1,
                    color: "#508bf0de"
                },
                y = {
                    sum: .15,
                    color: "#df1347de"
                },
                F = {
                    sum: .01,
                    color: "#d1d652de"
                },
                m = {
                    sum: .05,
                    color: "#f46e42de"
                },
                h = {
                    sum: .1,
                    color: "#508bf0de"
                },
                v = {
                    sum: .15,
                    color: "#df1347de"
                },
                S = {
                    sum: .01,
                    color: "#d1d652de"
                },
                g = {
                    sum: .05,
                    color: "#f46e42de"
                },
                x = {
                    sum: .1,
                    color: "#508bf0de"
                },
                k = function(t, e) {
                    return parseFloat(t.sum + e).toFixed(2) + ""
                },
                b = {
                    sum: 5,
                    color: "#d1d652de"
                },
                w = {
                    sum: 10,
                    color: "#f46e42de"
                },
                _ = {
                    sum: 20.5,
                    color: "#508bf0de"
                },
                T = {
                    sum: 30,
                    color: "#df1347de"
                },
                O = {
                    sum: 5,
                    color: "#d1d652de"
                },
                L = {
                    sum: 10,
                    color: "#f46e42de"
                },
                I = {
                    sum: 20.5,
                    color: "#508bf0de"
                },
                E = {
                    sum: 30,
                    color: "#df1347de"
                },
                N = {
                    sum: 5,
                    color: "#d1d652de"
                },
                j = {
                    sum: 10,
                    color: "#f46e42de"
                },
                A = {
                    sum: 20.5,
                    color: "#508bf0de"
                },
                C = {
                    sum: 30,
                    color: "#df1347de"
                },
                P = {
                    sum: 5,
                    color: "#d1d652de"
                },
                z = {
                    sum: 10,
                    color: "#f46e42de"
                },
                R = {
                    sum: 20.5,
                    color: "#508bf0de"
                },
                G = function(t) {
                    return t.sum + ""
                },
                M = null;
            window.spin_ref = function() {
                r || $.get("/api/ref_bonus", function(t) {
                    var n = JSON.parse(t);
                    0 !== parseInt(t) ? (r = !0, $("#ref_block").fadeOut("fast", function() {
                        e.stopAnimation(!1), e.rotationAngle = 0, e.draw(), o = n.segment, e.animation.stopAngle = e.segments[o].startAngle + (e.segments[o].endAngle - e.segments[o].startAngle) / 2, e.startAnimation()
                    })) : iziToast.error({
                        message: "This wheel requires 10 active referrals to spinв.",
                        icon: "fa fa-times",
                        position: "bottomCenter"
                    })
                })
            }, window.spin_bonus = function() {
                r || $.get("/api/bonus", function(e) {
                    var n = JSON.parse(e);
                    if (-1 !== parseInt(e))
                        if (0 !== parseInt(e))
                            if (null == n.time) r = !0, $("#wheel_block").fadeOut("fast", function() {
                                t.stopAnimation(!1), t.rotationAngle = 0, t.draw(), o = n.segment, t.animation.stopAngle = t.segments[o].startAngle + (t.segments[o].endAngle - t.segments[o].startAngle) / 2, t.startAnimation()
                            });
                            else {
                                var a = parseInt(n.time) - 1;
                                null == i && (i = setInterval(function() {
                                    a -= 1, $.each($(".iziToast-message"), function(t, e) {
                                        0 === $(e).html().indexOf("До") && $(e).html("Until the next bonus: " + fmtMSS(a))
                                    }), a <= 0 && (clearInterval(i), i = null, r = !1)
                                }, 1e3), iziToast.info({
                                    message: "Until the next bonus: " + fmtMSS(a),
                                    timeout: 1e3 * a,
                                    resetOnHover: !1,
                                    icon: "fa fa-info",
                                    onClosing: function() {
                                        clearInterval(i), i = null, r = !1
                                    }
                                }))
                            }
                    else iziToast.error({
                        message: "The bonus is only available with a zero balance!",
                        icon: "fa fa-times",
                        position: "bottomCenter"
                    });
                    else iziToast.error({
                        message: 'Join the VKontakte group to receive a bonus.<br><a href="javascript:void(0)" onclick="window.open(\'https://vk.com/', \'_blank\')" class="ll">Перейти</a>',
                        timeout: !1,
                        icon: "fa fa-times",
                        position: "bottomCenter",
                        theme: "dark",
                        backgroundColor: "#222120"
                    })
                })
            }, window.resetReloadText = function(t) {
                $("#reload_text").fadeOut(125, function() {
                    $(this).delay(125).removeAttr("style").html(t).fadeIn(125), $("#reload_hint").delay(250).fadeIn(125)
                })
            }, window.resetRefReloadText = function(t) {
                $(".ref_reload_text").fadeOut(125, function() {
                    $(this).delay(125).removeAttr("style").html(t).fadeIn(125), $("#ref_reload_hint").delay(250).fadeIn(125)
                })
            }, window.stop = function() {
                r = !1, updateBalanceN(function(t) {
                    $("#reload_hint").hide(), $("#reload_text").html("+" + t + '&nbsp;<i class="fad fa-coins"></i>'), $("#reload_text").css({
                        color: "#3dd343"
                    }), $("#wheel_block").fadeIn("fast"), setTimeout(function() {
                        resetReloadText("3 мин")
                    }, 2e3)
                })
            }, window.referralStop = function() {
                r = !1, updateBalanceN(function(t) {
                    $("#ref_reload_hint").hide(), $(".ref_reload_text").html("+" + t + '&nbsp;<i class="fad fa-coins"></i>'), $(".ref_reload_text").css({
                        color: "#3dd343"
                    }), $("#ref_block").fadeIn("fast"), setTimeout(function() {
                        $.get("/get_active_refs", function(t) {
                            var e = parseInt(t);
                            e > 10 && (e = 10), e < 0 && (e = 0), resetRefReloadText(e + "/10")
                        })
                    }, 2e3)
                })
            }, window.setTab = function(t) {
                t !== M && (M = t, $("*[data-tab]").toggleClass("reward_active", !1), $("*[data-tab=" + t + "]").toggleClass("reward_active", !0), $("*[data-s-tab]").toggleClass("m-game-selection-item-active", !1), $("*[data-s-tab=" + t + "]").toggleClass("m-game-selection-item-active", !0), $(".bonus_tab").hide(), $("#" + t).fadeIn("fast"))
            }, window.activatePromo = function(t) {
                null == t || t.length < 1 ? iziToast.error({
                    message: "Enter promotional code.",
                    icon: "fa fa-times",
                    position: "bottomCenter"
                }) : $.get("/promo/" + t, function(t) {
                    var e = JSON.parse(t);
                    if (null != e.error) return -1 === e.error && $("#b_si").click(), 0 === e.error && iziToast.error({
                        message: "Данный промокод больше не действителен.",
                        icon: "fa fa-times",
                        position: "bottomCenter"
                    }), 1 === e.error && iziToast.error({
                        message: "Have you already used this promotional code?.",
                        icon: "fa fa-times",
                        position: "bottomCenter"
                    }), 2 === e.error && iziToast.error({
                        message: "You have already used the referral code!",
                        icon: "fa fa-times",
                        position: "bottomCenter"
                    }), 3 === e.error && iziToast.error({
                        message: "You cannot use your promotional code.",
                        icon: "fa fa-times",
                        position: "bottomCenter"
                    }), 4 === e.error && iziToast.error({
                        message: "There is no such promo code.",
                        icon: "fa fa-times",
                        position: "bottomCenter"
                    }), 5 === e.error && iziToast.error({
                        message: "You can only redeem 2 promotional codes from UpTouch partners per day.",
                        icon: "fa fa-times",
                        position: "bottomCenter"
                    }), void(6 === e.error && iziToast.error({
                        message: 'To activate the promotional code, your balance must be less than 15&nbsp;<i class="fad fa-coins"></i>',
                        icon: "fa fa-times",
                        position: "bottomCenter"
                    }));
                    iziToast.success({
                        message: "You have successfully activated a promotional code for the amount " + e.result + '&nbsp;<i class="fad fa-coins"></i>',
                        icon: !1,
                        position: "bottomCenter"
                    }), $(".promoDlg .iziToast-close").click(), updateBalanceN()
                })
            };
            var W = function() {
                    var t = a(n.a.mark(function t() {
                        return n.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, navigator.serviceWorker.register("/js/service.js");
                                case 2:
                                    return t.abrupt("return", t.sent);
                                case 3:
                                case "end":
                                    return t.stop()
                            }
                        }, t)
                    }));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                B = function() {
                    var t = a(n.a.mark(function t() {
                        var e, r;
                        return n.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return e = $('<div class="notificationOverlay" style="display: none"></div>'), $("body").prepend(e), "denied" !== Notification.permission && "granted" !== Notification.permission && e.fadeIn("fast"), t.next = 5, window.Notification.requestPermission();
                                case 5:
                                    if (r = t.sent, e.fadeOut("fast", function() {
                                            $(this).remove()
                                        }), "granted" === r) {
                                        t.next = 12;
                                        break
                                    }
                                    console.error("Permission not granted for Notification"), iziToast.error({
                                        icon: "fas fa-times",
                                        message: "You have opted out of accepting notifications.<br>This setting can be changed in your browser's website notification settings.",
                                        timeout: 7500,
                                        position: "bottomCenter"
                                    }), t.next = 16;
                                    break;
                                case 12:
                                    if (0 === $("#notificationOption .bonus_option_ok").length) {
                                        t.next = 14;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 14:
                                    $.get("/notifyBonus", function(t) {
                                        updateBalanceN(), console.log(t)
                                    }), $("#notificationOption").prepend('\n                <div class="bonus_option_ok">\n                    <i class="fal fa-check"></i>\n                    <span>Вы выполнили это задание.</span>\n                </div>');
                                case 16:
                                case "end":
                                    return t.stop()
                            }
                        }, t)
                    }));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }();
            (function() {
                var t = a(n.a.mark(function t() {
                    return n.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return "serviceWorker" in navigator ? "PushManager" in window ? $("#notificationOption").fadeIn("fast") : console.error("No Push API Support!") : console.error("No Service Worker support!"), t.next = 3, W();
                            case 3:
                                $("#notificationOption").on("click", a(n.a.mark(function t() {
                                    return n.a.wrap(function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2, B();
                                            case 2:
                                            case "end":
                                                return t.stop()
                                        }
                                    }, t)
                                })));
                            case 4:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                }));
                return function() {
                    return t.apply(this, arguments)
                }
            })()(), $.get("/get_additional_bonus", function(r) {
                var o = parseFloat(r);
                t = new Winwheel({
                    canvasId: "canvas",
                    lineWidth: 5,
                    numSegments: 15,
                    segments: [{
                        fillStyle: "#2a2a2f",
                        text: k(l, o),
                        textStrokeStyle: "#FFFFFF",
                        strokeStyle: l.color
                    }, {
                        fillStyle: "#2a2a2f",
                        text: k(s, o),
                        textStrokeStyle: "#FFFFFF",
                        strokeStyle: s.color
                    }, {
                        fillStyle: "#2a2a2f",
                        text: k(c, o),
                        textStrokeStyle: "#FFFFFF",
                        strokeStyle: c.color
                    }, {
                        fillStyle: "#2a2a2f",
                        text: k(f, o),
                        textStrokeStyle: "#FFFFFF",
                        strokeStyle: f.color
                    }, {
                        fillStyle: "#2a2a2f",
                        text: k(u, o),
                        textStrokeStyle: "#FFFFFF",
                        strokeStyle: u.color
                    }, {
                        fillStyle: "#2a2a2f",
                        text: k(d, o),
                        textStrokeStyle: "#FFFFFF",
                        strokeStyle: d.color
                    }, {
                        fillStyle: "#2a2a2f",
                        text: k(p, o),
                        textStrokeStyle: "#FFFFFF",
                        strokeStyle: p.color
                    }, {
                        fillStyle: "#2a2a2f",
                        text: k(y, o),
                        textStrokeStyle: "#FFFFFF",
                        strokeStyle: y.color
                    }, {
                        fillStyle: "#2a2a2f",
                        text: k(F, o),
                        textStrokeStyle: "#FFFFFF",
                        strokeStyle: F.color
                    }, {
                        fillStyle: "#2a2a2f",
                        text: k(m, o),
                        textStrokeStyle: "#FFFFFF",
                        strokeStyle: m.color
                    }, {
                        fillStyle: "#2a2a2f",
                        text: k(h, o),
                        textStrokeStyle: "#FFFFFF",
                        strokeStyle: h.color
                    }, {
                        fillStyle: "#2a2a2f",
                        text: k(v, o),
                        textStrokeStyle: "#FFFFFF",
                        strokeStyle: v.color
                    }, {
                        fillStyle: "#2a2a2f",
                        text: k(S, o),
                        textStrokeStyle: "#FFFFFF",
                        strokeStyle: S.color
                    }, {
                        fillStyle: "#2a2a2f",
                        text: k(g, o),
                        textStrokeStyle: "#FFFFFF",
                        strokeStyle: g.color
                    }, {
                        fillStyle: "#2a2a2f",
                        text: k(x, o),
                        textStrokeStyle: "#FFFFFF",
                        strokeStyle: x.color
                    }],
                    innerRadius: 100,
                    animation: {
                        type: "spinToStop",
                        duration: 5,
                        spins: 15,
                        callbackFinished: "stop()"
                    },
                    responsive: !1
                }), e = new Winwheel({
                    canvasId: "ref_canvas",
                    lineWidth: 4,
                    numSegments: 15,
                    segments: [{
                        fillStyle: "#2a2a2f",
                        text: G(b),
                        textStrokeStyle: "#FFFFFF",
                        strokeStyle: b.color
                    }, {
                        fillStyle: "#2a2a2f",
                        text: G(w),
                        textStrokeStyle: "#FFFFFF",
                        strokeStyle: w.color
                    }, {
                        fillStyle: "#2a2a2f",
                        text: G(_),
                        textStrokeStyle: "#FFFFFF",
                        strokeStyle: _.color
                    }, {
                        fillStyle: "#2a2a2f",
                        text: G(T),
                        textStrokeStyle: "#FFFFFF",
                        strokeStyle: T.color
                    }, {
                        fillStyle: "#2a2a2f",
                        text: G(O),
                        textStrokeStyle: "#FFFFFF",
                        strokeStyle: O.color
                    }, {
                        fillStyle: "#2a2a2f",
                        text: G(L),
                        textStrokeStyle: "#FFFFFF",
                        strokeStyle: L.color
                    }, {
                        fillStyle: "#2a2a2f",
                        text: G(I),
                        textStrokeStyle: "#FFFFFF",
                        strokeStyle: I.color
                    }, {
                        fillStyle: "#2a2a2f",
                        text: G(E),
                        textStrokeStyle: "#FFFFFF",
                        strokeStyle: E.color
                    }, {
                        fillStyle: "#2a2a2f",
                        text: G(N),
                        textStrokeStyle: "#FFFFFF",
                        strokeStyle: N.color
                    }, {
                        fillStyle: "#2a2a2f",
                        text: G(j),
                        textStrokeStyle: "#FFFFFF",
                        strokeStyle: j.color
                    }, {
                        fillStyle: "#2a2a2f",
                        text: G(A),
                        textStrokeStyle: "#FFFFFF",
                        strokeStyle: A.color
                    }, {
                        fillStyle: "#2a2a2f",
                        text: G(C),
                        textStrokeStyle: "#FFFFFF",
                        strokeStyle: C.color
                    }, {
                        fillStyle: "#2a2a2f",
                        text: G(P),
                        textStrokeStyle: "#FFFFFF",
                        strokeStyle: P.color
                    }, {
                        fillStyle: "#2a2a2f",
                        text: G(z),
                        textStrokeStyle: "#FFFFFF",
                        strokeStyle: z.color
                    }, {
                        fillStyle: "#2a2a2f",
                        text: G(R),
                        textStrokeStyle: "#FFFFFF",
                        strokeStyle: R.color
                    }],
                    innerRadius: 100,
                    animation: {
                        type: "spinToStop",
                        duration: 5,
                        spins: 15,
                        callbackFinished: "referralStop()"
                    },
                    responsive: !1
                }), $.get("/get_active_refs", function(t) {
                    var e = parseInt(t);
                    e > 10 && (e = 10), e < 0 && (e = 0), resetRefReloadText(e + "/10")
                }), setTab("wheel")
            })
        })
    },
    ls82: function(t, e, r) {
        var o = function(t) {
            "use strict";
            var e = Object.prototype,
                r = e.hasOwnProperty,
                o = "function" == typeof Symbol ? Symbol : {},
                n = o.iterator || "@@iterator",
                i = o.asyncIterator || "@@asyncIterator",
                a = o.toStringTag || "@@toStringTag";

            function l(t, e, r, o) {
                var n = e && e.prototype instanceof f ? e : f,
                    i = Object.create(n.prototype),
                    a = new k(o || []);
                return i._invoke = function(t, e, r) {
                    var o = "suspendedStart";
                    return function(n, i) {
                        if ("executing" === o) throw new Error("Generator is already running");
                        if ("completed" === o) {
                            if ("throw" === n) throw i;
                            return {
                                value: void 0,
                                done: !0
                            }
                        }
                        for (r.method = n, r.arg = i;;) {
                            var a = r.delegate;
                            if (a) {
                                var l = S(a, r);
                                if (l) {
                                    if (l === c) continue;
                                    return l
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if ("suspendedStart" === o) throw o = "completed", r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            o = "executing";
                            var f = s(t, e, r);
                            if ("normal" === f.type) {
                                if (o = r.done ? "completed" : "suspendedYield", f.arg === c) continue;
                                return {
                                    value: f.arg,
                                    done: r.done
                                }
                            }
                            "throw" === f.type && (o = "completed", r.method = "throw", r.arg = f.arg)
                        }
                    }
                }(t, r, a), i
            }

            function s(t, e, r) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, r)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            t.wrap = l;
            var c = {};

            function f() {}

            function u() {}

            function d() {}
            var p = {};
            p[n] = function() {
                return this
            };
            var y = Object.getPrototypeOf,
                F = y && y(y(b([])));
            F && F !== e && r.call(F, n) && (p = F);
            var m = d.prototype = f.prototype = Object.create(p);

            function h(t) {
                ["next", "throw", "return"].forEach(function(e) {
                    t[e] = function(t) {
                        return this._invoke(e, t)
                    }
                })
            }

            function v(t, e) {
                var o;
                this._invoke = function(n, i) {
                    function a() {
                        return new e(function(o, a) {
                            ! function o(n, i, a, l) {
                                var c = s(t[n], t, i);
                                if ("throw" !== c.type) {
                                    var f = c.arg,
                                        u = f.value;
                                    return u && "object" == typeof u && r.call(u, "__await") ? e.resolve(u.__await).then(function(t) {
                                        o("next", t, a, l)
                                    }, function(t) {
                                        o("throw", t, a, l)
                                    }) : e.resolve(u).then(function(t) {
                                        f.value = t, a(f)
                                    }, function(t) {
                                        return o("throw", t, a, l)
                                    })
                                }
                                l(c.arg)
                            }(n, i, o, a)
                        })
                    }
                    return o = o ? o.then(a, a) : a()
                }
            }

            function S(t, e) {
                var r = t.iterator[e.method];
                if (void 0 === r) {
                    if (e.delegate = null, "throw" === e.method) {
                        if (t.iterator.return && (e.method = "return", e.arg = void 0, S(t, e), "throw" === e.method)) return c;
                        e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return c
                }
                var o = s(r, t.iterator, e.arg);
                if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, c;
                var n = o.arg;
                return n ? n.done ? (e[t.resultName] = n.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, c) : n : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, c)
            }

            function g(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
            }

            function x(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e
            }

            function k(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], t.forEach(g, this), this.reset(!0)
            }

            function b(t) {
                if (t) {
                    var e = t[n];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var o = -1,
                            i = function e() {
                                for (; ++o < t.length;)
                                    if (r.call(t, o)) return e.value = t[o], e.done = !1, e;
                                return e.value = void 0, e.done = !0, e
                            };
                        return i.next = i
                    }
                }
                return {
                    next: w
                }
            }

            function w() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return u.prototype = m.constructor = d, d.constructor = u, d[a] = u.displayName = "GeneratorFunction", t.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === u || "GeneratorFunction" === (e.displayName || e.name))
            }, t.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, a in t || (t[a] = "GeneratorFunction")), t.prototype = Object.create(m), t
            }, t.awrap = function(t) {
                return {
                    __await: t
                }
            }, h(v.prototype), v.prototype[i] = function() {
                return this
            }, t.AsyncIterator = v, t.async = function(e, r, o, n, i) {
                void 0 === i && (i = Promise);
                var a = new v(l(e, r, o, n), i);
                return t.isGeneratorFunction(r) ? a : a.next().then(function(t) {
                    return t.done ? t.value : a.next()
                })
            }, h(m), m[a] = "Generator", m[n] = function() {
                return this
            }, m.toString = function() {
                return "[object Generator]"
            }, t.keys = function(t) {
                var e = [];
                for (var r in t) e.push(r);
                return e.reverse(),
                    function r() {
                        for (; e.length;) {
                            var o = e.pop();
                            if (o in t) return r.value = o, r.done = !1, r
                        }
                        return r.done = !0, r
                    }
            }, t.values = b, k.prototype = {
                constructor: k,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !t)
                        for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done) throw t;
                    var e = this;

                    function o(r, o) {
                        return a.type = "throw", a.arg = t, e.next = r, o && (e.method = "next", e.arg = void 0), !!o
                    }
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var i = this.tryEntries[n],
                            a = i.completion;
                        if ("root" === i.tryLoc) return o("end");
                        if (i.tryLoc <= this.prev) {
                            var l = r.call(i, "catchLoc"),
                                s = r.call(i, "finallyLoc");
                            if (l && s) {
                                if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                            } else if (l) {
                                if (this.prev < i.catchLoc) return o(i.catchLoc, !0)
                            } else {
                                if (!s) throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var n = this.tryEntries[o];
                        if (n.tryLoc <= this.prev && r.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                            var i = n;
                            break
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, c) : this.complete(a)
                },
                complete: function(t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), c
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var r = this.tryEntries[e];
                        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), x(r), c
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var r = this.tryEntries[e];
                        if (r.tryLoc === t) {
                            var o = r.completion;
                            if ("throw" === o.type) {
                                var n = o.arg;
                                x(r)
                            }
                            return n
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, r) {
                    return this.delegate = {
                        iterator: b(t),
                        resultName: e,
                        nextLoc: r
                    }, "next" === this.method && (this.arg = void 0), c
                }
            }, t
        }(t.exports);
        try {
            regeneratorRuntime = o
        } catch (t) {
            Function("r", "regeneratorRuntime = r")(o)
        }
    },
    o0o1: function(t, e, r) {
        t.exports = r("ls82")
    }
});