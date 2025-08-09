(wx.webpackJsonp = wx.webpackJsonp || []).push([
        [592], {
            613: function(e, n, t) {
                "use strict";
                t.d(n, {
                    AS: function() {
                        return p
                    },
                    C6: function() {
                        return b
                    },
                    DR: function() {
                        return f
                    },
                    Fn: function() {
                        return c
                    },
                    GQ: function() {
                        return h
                    },
                    KR: function() {
                        return a
                    },
                    Ms: function() {
                        return g
                    },
                    Nr: function() {
                        return Z
                    },
                    R2: function() {
                        return m
                    },
                    Uh: function() {
                        return o
                    },
                    c9: function() {
                        return l
                    },
                    cQ: function() {
                        return s
                    },
                    d2: function() {
                        return i
                    },
                    hz: function() {
                        return v
                    },
                    nt: function() {
                        return u
                    },
                    pB: function() {
                        return r
                    },
                    tb: function() {
                        return d
                    },
                    u_: function() {
                        return y
                    }
                });
                var o = "https://commercial-cdn.xiaoice.com/character-ip/xiyangyang-mini-images/images/textarea_close.png",
                    a = "https://commercial-cdn.xiaoice.com/character-ip/xiyangyang-mini-images/images/textarea_ready.png",
                    i = "https://commercial-cdn.xiaoice.com/character-ip/xiyangyang-mini-images/images/textarea_empty.png",
                    r = "https://commercial-cdn.xiaoice.com/character-ip/xiyangyang-mini-images/images/handle_voice.png",
                    c = "https://commercial-cdn.xiaoice.com/character-ip/xiyangyang-mini-images/images/portrait_xyy.png",
                    s = "https://commercial-cdn.xiaoice.com/character-ip/xiyangyang-mini-images/images/portrait_self.png",
                    l = "https://commercial-cdn.xiaoice.com/character-ip/xiyangyang-mini-images/images/handle_text.png",
                    u = "https://commercial-cdn.xiaoice.com/character-ip/xiyangyang-mini-images/images/handle_game.png",
                    d = "https://commercial-cdn.xiaoice.com/character-ip/xiyangyang-mini-images/images/voice_icon.png",
                    h = "https://commercial-cdn.xiaoice.com/character-ip/xiyangyang-mini-images/images/voice_play.gif",
                    p = "https://commercial-cdn.xiaoice.com/character-ip/xiyangyang-mini-images/images/game_play.gif",
                    f = "https://commercial-cdn.xiaoice.com/character-ip/xiyangyang-mini-images/images/game_playing.gif",
                    m = "https://commercial-cdn.xiaoice.com/character-ip/xiyangyang-mini-images/images/message_loading.gif",
                    g = "https://commercial-cdn.xiaoice.com/character-ip/xiyangyang-mini-images/images/go-back.svg",
                    v = "https://commercial-cdn.xiaoice.com/character-ip/xiyangyang-mini-images/images/avatar-default.png",
                    Z = "https://commercial-cdn.xiaoice.com/character-ip/xiyangyang-mini-images/images/avatar-edit-icon.png",
                    y = "https://commercial-cdn.xiaoice.com/character-ip/xiyangyang-mini-images/images/base_info_icon.png",
                    b = "https://commercial-cdn.xiaoice.com/character-ip/xiyangyang-mini-images/images/more_info_icon.png"
            },
            1809: function(e, n, t) {
                "use strict";
                var o = t(4165),
                    a = t(5861),
                    i = t(9439),
                    r = t(1515),
                    c = t(2954),
                    s = t.n(c),
                    l = t(4184),
                    u = t.n(l),
                    d = t(7294),
                    h = t(5394),
                    p = t(1141),
                    f = t(6261),
                    m = t(8982),
                    g = t(5893);
                n.Z = function(e) {
                    var n = e.className,
                        t = e.isLogin,
                        c = void 0 !== t && t,
                        l = e.onSuccess,
                        v = (0, d.useState)(!1),
                        Z = (0, i.Z)(v, 2),
                        y = Z[0],
                        b = Z[1],
                        x = (0, d.useState)(""),
                        A = (0, i.Z)(x, 2),
                        w = A[0],
                        k = A[1];
                    (0, d.useEffect)((function() {
                        w || s().login({
                            success: function(e) {
                                k(e.code), (0, h.Xx)(e.code).then((function(e) {
                                    console.log("~~~LoginButton~~checkLogin~~~~", e), b(!e), e && (T(), S())
                                }))
                            }
                        })
                    }), [w]);
                    var T = function() {
                            var e = s().getStorageSync("trackAuthCode");
                            e ? P(e) : (0, p.OX)().then((function(e) {
                                P(null == e ? void 0 : e.userId), s().setStorageSync("trackAuthCode", null == e ? void 0 : e.userId)
                            }))
                        },
                        P = function(e) {
                            (0, f.G3)("login_pv", 1, {
                                userid: e
                            })
                        },
                        S = function() {
                            var e = (0, a.Z)((0, o.Z)().mark((function e() {
                                var n;
                                return (0, o.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, (0, p.Ai)();
                                        case 2:
                                            if (n = e.sent) {
                                                e.next = 5;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 5:
                                            (0, m.RR)(n);
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        M = function() {
                            var e = (0, a.Z)((0, o.Z)().mark((function e(n) {
                                var t, i, r;
                                return (0, o.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t = n.detail, i = t.errMsg, r = t.code, e.prev = 1, w) {
                                                e.next = 5;
                                                break
                                            }
                                            return s().showToast({
                                                title: "wx.code为空"
                                            }), e.abrupt("return");
                                        case 5:
                                            i.includes("ok") && (s().showLoading({
                                                title: "正在登录"
                                            }), s().login({
                                                success: function() {
                                                    var e = (0, a.Z)((0, o.Z)().mark((function e(n) {
                                                        var t;
                                                        return (0, o.Z)().wrap((function(e) {
                                                            for (;;) switch (e.prev = e.next) {
                                                                case 0:
                                                                    return e.next = 2, (0, h.x4)(n.code, r);
                                                                case 2:
                                                                    if (t = e.sent, s().hideLoading(), t) {
                                                                        e.next = 7;
                                                                        break
                                                                    }
                                                                    return s().showToast({
                                                                        title: "登录失败,请重试"
                                                                    }), e.abrupt("return");
                                                                case 7:
                                                                    return b(!1), s().showToast({
                                                                        title: "登录成功"
                                                                    }), T(), e.next = 12, S();
                                                                case 12:
                                                                    null == l || l();
                                                                case 13:
                                                                case "end":
                                                                    return e.stop()
                                                            }
                                                        }), e)
                                                    })));
                                                    return function(n) {
                                                        return e.apply(this, arguments)
                                                    }
                                                }()
                                            })), e.next = 12;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(1), s().hideLoading(), s().showToast({
                                                title: e.t0.message || e.t0.errMsg
                                            });
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 8]
                                ])
                            })));
                            return function(n) {
                                return e.apply(this, arguments)
                            }
                        }();
                    return (0, g.jsx)(g.Fragment, {
                        children: (0, g.jsx)(r.zx, {
                            className: u()("login-btn", n, (c || !y) && "hidden"),
                            openType: "getPhoneNumber",
                            onGetPhoneNumber: M
                        })
                    })
                }
            },
            1211: function(e, n, t) {
                "use strict";
                var o = t(9439),
                    a = t(1515),
                    i = t(2954),
                    r = t.n(i),
                    c = t(7294),
                    s = t(5893);
                n.Z = function(e) {
                    var n = e.navigationBarBackgroundColor,
                        t = e.content,
                        i = c.useState((function() {
                            return r().getStorageSync("statusBarHeight") || r().getSystemInfoSync().statusBarHeight
                        })),
                        l = (0, o.Z)(i, 1)[0],
                        u = c.useState((function() {
                            var e = r().getStorageSync("navigationBarHeight");
                            if (e) return e;
                            var n = r().getSystemInfoSync(),
                                t = n.statusBarHeight,
                                o = n.platform,
                                a = r().getMenuButtonBoundingClientRect(),
                                i = a.top,
                                c = a.height;
                            return i && 0 !== i && c && 0 !== c ? 2 * (i - t) + c : "android" === o ? 48 : 40
                        })),
                        d = (0, o.Z)(u, 1)[0];
                    return (0, s.jsxs)(a.G7, {
                        className: "base-container",
                        id: "custom-navigation",
                        style: {
                            background: n || "transparent"
                        },
                        children: [(0, s.jsx)(a.G7, {
                            style: {
                                height: l
                            }
                        }), (0, s.jsx)(a.G7, {
                            className: "navigation",
                            style: {
                                height: d
                            },
                            children: (0, s.jsx)(a.G7, {
                                className: "navigation-content",
                                children: t
                            })
                        })]
                    })
                }
            },
            3592: function(e, n, t) {
                "use strict";
                var o = t(9439),
                    a = t(1515),
                    i = t(2954),
                    r = t.n(i),
                    c = t(7294),
                    s = t(4184),
                    l = t.n(s),
                    u = t(613),
                    d = t(5893);
                n.Z = function(e) {
                    var n = e.onClose,
                        t = e.onSubmit,
                        i = e.customNavigationHeight,
                        s = (0, c.useState)(0),
                        h = (0, o.Z)(s, 2),
                        p = h[0],
                        f = h[1],
                        m = (0, c.useState)(""),
                        g = (0, o.Z)(m, 2),
                        v = g[0],
                        Z = g[1];
                    return (0, c.useEffect)((function() {
                        r().onKeyboardHeightChange((function(e) {
                            console.log("~~~~onKeyboardHeightChange~~~~~~~~~~~~", e), f((null == e ? void 0 : e.height) || 0)
                        }))
                    })), (0, d.jsxs)(a.G7, {
                        className: "textarea-mask-container",
                        children: [(0, d.jsx)(a.G7, {
                            className: l()("textare-container"),
                            style: {
                                paddingTop: i + "px"
                            },
                            children: (0, d.jsx)(a.gx, {
                                onBlur: function(e) {},
                                onInput: function(e) {
                                    var n;
                                    Z(null == e || null === (n = e.detail) || void 0 === n ? void 0 : n.value)
                                },
                                value: v,
                                autoFocus: !0,
                                focus: !0,
                                showConfirmBar: !1,
                                placeholder: "请输入",
                                "placeholder-style": "color:rgba(255,255,255,0.5)",
                                children: " "
                            })
                        }), (0, d.jsxs)(a.G7, {
                            className: l()("bottom-handle-container"),
                            style: {
                                bottom: p + "px"
                            },
                            children: [(0, d.jsx)(a.G7, {
                                className: l()("close", "handle-item"),
                                onClick: function() {
                                    Z(""), n()
                                },
                                children: (0, d.jsx)(a.Ee, {
                                    src: u.Uh
                                })
                            }), (0, d.jsx)(a.G7, {
                                className: l()("main", "handle-item"),
                                onClick: function() {
                                    v && (t(v), Z(""), n())
                                },
                                children: (0, d.jsx)(a.Ee, {
                                    src: v ? u.KR : u.d2
                                })
                            }), (0, d.jsx)(a.G7, {
                                className: "empty"
                            })]
                        })]
                    })
                }
            },
            4641: function(e, n, t) {
                "use strict";
                var o = t(9439),
                    a = t(1515),
                    i = t(2954),
                    r = t.n(i),
                    c = t(7294),
                    s = t(9606),
                    l = t(613),
                    u = t(4184),
                    d = t.n(u),
                    h = t(5893),
                    p = t(2180).window,
                    f = function(e) {
                        return e.START = "start", e.STOP = "stop", e.CANCLE = "cancle", e
                    }({});
                n.Z = function(e) {
                    var n = e.onHhanldeVoiceStatus,
                        t = e.tipShow,
                        i = (0, c.useRef)(),
                        u = (0, c.useState)({}),
                        m = (0, o.Z)(u, 2),
                        g = m[0],
                        v = m[1],
                        Z = (0, c.useState)(!1),
                        y = (0, o.Z)(Z, 2),
                        b = y[0],
                        x = y[1],
                        A = (0, c.useState)(!1),
                        w = (0, o.Z)(A, 2),
                        k = w[0],
                        T = w[1],
                        P = 0,
                        S = r().getRecorderManager(),
                        M = (0, c.useState)(!1),
                        E = (0, o.Z)(M, 2),
                        L = E[0],
                        I = E[1],
                        N = {
                            format: "mp3",
                            duration: 15e3
                        };
                    (0, c.useEffect)((function() {
                        O(), R(), F()
                    }), []);
                    var F = function() {
                            S.onStop((function(e) {
                                console.log("~~~~~~ recorderManager.onStop~~~~~~~~~", e), n(f.STOP, e)
                            }))
                        },
                        R = function() {
                            r().getSetting({
                                success: function(e) {
                                    e.authSetting["scope.record"] ? (r().setStorageSync("scopeRecordPermission", "permission"), I(!0)) : I(!1)
                                }
                            })
                        },
                        C = (0, s.Z)((function() {
                            console.log("~~~~~~getRecordPermission~~~~~~~~~"), r().authorize({
                                scope: "scope.record",
                                success: function() {
                                    console.log("~~~~~~录音授权成功~~~~~~~~~"), r().setStorageSync("scopeRecordPermission", "permission"), I(!0)
                                },
                                fail: function(e) {
                                    console.log("~~~~~~录音授失败~~~~~~~~~", e), r().showModal({
                                        title: "提示！",
                                        confirmText: "去设置",
                                        showCancel: !1,
                                        content: "您未授权录音权限，将无法使用语音功能，请前往设置中心授权录音权限",
                                        success: function(e) {
                                            e.confirm && r().openSetting()
                                        }
                                    })
                                }
                            })
                        }), 1e3),
                        O = function() {
                            r().getSystemInfoSync();
                            var e = null;
                            r().createSelectorQuery().select("#canvasProgressbg").context((function(n) {
                                (e = n.context).setLineWidth(4), e.setStrokeStyle("#fff"), e.setLineCap("round"), e.beginPath(), e.arc(40, 40, 38, 0, 2 * Math.PI, !1), e.stroke(), e.draw()
                            })).exec()
                        },
                        _ = function(e) {
                            var n = null;
                            r().createSelectorQuery().select("#canvasProgress").context((function(t) {
                                (n = t.context).setLineWidth(4), n.setStrokeStyle("#3F8DF2"), n.setLineCap("round"), n.beginPath(), n.arc(40, 40, 38, -Math.PI / 2, e * Math.PI - Math.PI / 2, !1), n.stroke(), n.draw()
                            })).exec()
                        },
                        j = function() {
                            k ? n(f.CANCLE) : S.stop(), clearInterval(i.current), x(!1), T(!1), P = 0
                        },
                        D = function() {
                            console.log("~~~~~~~~~~onLongPress~~~~~~~", L), L ? (x(!0), i.current = p.setInterval((function() {
                                P <= 150 ? (_(P / 75), P += 1) : j()
                            }), 100), n(f.START), S.start(N)) : C()
                        };
                    return (0, h.jsxs)(h.Fragment, {
                        children: [(0, h.jsx)(a.G7, {
                            className: d()("tip-container", (!t || b) && "hide_tip"),
                            children: "羊羊的回复均由AI生成"
                        }), (0, h.jsxs)(a.G7, {
                            className: "voice-record-btn-container",
                            onTouchStart: function(e) {
                                ! function(e) {
                                    console.log("~~~~~~~~~~onTouchStart~~~~~~~", e), v(e.touches[0])
                                }(e)
                            },
                            onTouchMove: function(e) {
                                ! function(e) {
                                    var n = e.touches[e.touches.length - 1].clientY - g.clientY;
                                    T(Math.abs(n) > 20)
                                }(e)
                            },
                            onTouchEnd: function(e) {
                                ! function(e) {
                                    console.log("~~~~~~~~~~onTouchEnd~~~~~~~", e, "isMoveOut", k), j(), _(0)
                                }(e)
                            },
                            onLongPress: function() {
                                D()
                            },
                            children: [b && (0, h.jsx)(a.G7, {
                                className: d()("record-tips", k && "is-active"),
                                children: k ? "取消发送" : "上滑取消发送"
                            }), (0, h.jsxs)(a.G7, {
                                className: d()("voice-record-btn-active", b && "active-show"),
                                children: [(0, h.jsx)(a.G7, {
                                    className: "progress_center"
                                }), (0, h.jsx)(a.Xz, {
                                    className: "progress_bg",
                                    id: "canvasProgressbg",
                                    "canvas-id": "canvasProgressbg",
                                    children: " "
                                }), (0, h.jsx)(a.Xz, {
                                    className: "progress_canvas",
                                    id: "canvasProgress",
                                    "canvas-id": "canvasProgress",
                                    children: " "
                                })]
                            }), (0, h.jsx)(a.G7, {
                                className: d()("voice-record-btn-default", !b && "default-show"),
                                children: (0, h.jsx)(a.Ee, {
                                    src: l.pB
                                })
                            })]
                        })]
                    })
                }
            },
            726: function(e, n, t) {
                "use strict";
                t.d(n, {
                    PB: function() {
                        return a
                    },
                    W6: function() {
                        return o
                    },
                    dT: function() {
                        return i
                    }
                });
                var o = [{
                        text: "你好呀，我是喜羊羊，羊村的小英雄哦",
                        json: "https://commercial-cdn.xiaoice.com/character-ip/character-assets/xiyangyang-say-hello/xiyangyang-say-hello-with-blendshape-0.json"
                    }, {
                        text: "你来看我了呀，我好开心呢",
                        json: "https://commercial-cdn.xiaoice.com/character-ip/character-assets/xiyangyang-say-hello/xiyangyang-say-hello-with-blendshape-1.json"
                    }, {
                        text: "你好啊，我是喜羊羊，很高兴见到你",
                        json: "https://commercial-cdn.xiaoice.com/character-ip/character-assets/xiyangyang-say-hello/xiyangyang-say-hello-with-blendshape-2.json"
                    }, {
                        text: "我是喜羊羊，你的好朋友，快来和我聊天吧",
                        json: "https://commercial-cdn.xiaoice.com/character-ip/character-assets/xiyangyang-say-hello/xiyangyang-say-hello-with-blendshape-3.json"
                    }],
                    a = function(e) {
                        return [{
                            text: {
                                text: e
                            }
                        }]
                    },
                    i = function(e) {
                        return e.XYY = "xyy", e.CURRENT_USER = "currentUser", e
                    }({})
            },
            1141: function(e, n, t) {
                "use strict";
                t.d(n, {
                    hO: function() {
                        return y
                    },
                    e5: function() {
                        return Z
                    },
                    v2: function() {
                        return m
                    },
                    uU: function() {
                        return v
                    },
                    Mc: function() {
                        return p
                    },
                    Ai: function() {
                        return S
                    },
                    Nh: function() {
                        return A
                    },
                    OX: function() {
                        return x
                    },
                    NJ: function() {
                        return k
                    },
                    zV: function() {
                        return b
                    },
                    Lj: function() {
                        return P
                    }
                });
                var o = t(4165),
                    a = t(5861),
                    i = t(1413),
                    r = t(2954),
                    c = t.n(r),
                    s = (t(1354), t(5394)),
                    l = "xiyangyang",
                    u = t(9686),
                    d = t(2882);

                function h(e, n, t) {
                    var o = t,
                        a = "GET",
                        r = t.split(" ");
                    return 2 === r.length && (a = r[0], o = r[1]),
                        function(t, r) {
                            t = (0, d.Z)(t);
                            var s = Object.assign({
                                    requestHandler: function(e) {
                                        return (0, i.Z)({}, e)
                                    },
                                    responseHandler: function(e) {
                                        if (e.data) return e.data;
                                        throw new Error("internal error")
                                    },
                                    errorHandler: function(e) {
                                        throw e
                                    }
                                }, n, r),
                                l = s.requestHandler,
                                u = s.responseHandler,
                                h = s.errorHandler,
                                p = function(e, n) {
                                    return e.replace(/\{([^{}]+)\}/g, (function(e, t) {
                                        var o = n[t];
                                        return delete n[t], encodeURIComponent(o)
                                    }))
                                }(o, t),
                                f = Object.assign(e, {
                                    url: p,
                                    data: t,
                                    method: a
                                });
                            return Promise.resolve(l(f)).then((function(e) {
                                return new Promise((function(n, t) {
                                    c().request((0, i.Z)((0, i.Z)({}, e), {}, {
                                        success: n,
                                        fail: t
                                    }))
                                }))
                            })).then(u).catch(h)
                        }
                }
                c().getAccountInfoSync().miniProgram.envVersion;
                var p = function() {
                        c().setStorageSync("generatePageSessionsId", (0, u.D)())
                    },
                    f = function() {
                        return c().getStorageSync("generatePageSessionsId")
                    },
                    m = "https://ip.xiaoice.com",
                    g = function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return h.bind(null, e, n)
                    }({}, {
                        requestHandler: function(e) {
                            var n = e.url;
                            /^http(s)?:/.test(n) || (e.url = m + n);
                            var t, o = (0, s.hP)();
                            return o && (e.header = (0, i.Z)((0, i.Z)({}, null !== (t = e.header) && void 0 !== t ? t : {}), {}, {
                                "x-trace-id": (0, u.D)(),
                                Authorization: o
                            })), e
                        },
                        responseHandler: function(e) {
                            var n = null == e ? void 0 : e.data;
                            if (!n) throw new Error("服务器开小差了，请稍后再试~");
                            return n
                        },
                        errorHandler: function(e) {
                            throw c().showToast({
                                title: e.message || "服务器开小差了，请稍后再试~",
                                icon: "error"
                            }), e
                        }
                    }),
                    v = function(e) {
                        var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            t = e.url;
                        /^http(s)?:/.test(t) || (e.url = m + t);
                        var o, a = c().getStorageSync("accessToken");
                        return a && n && (e.header = (0, i.Z)((0, i.Z)({}, null !== (o = e.header) && void 0 !== o ? o : {}), {}, {
                            authorization: a,
                            "x-trace-id": (0, u.D)()
                        })), new Promise((function(n, t) {
                            c().request((0, i.Z)((0, i.Z)({}, e), {}, {
                                success: function(o) {
                                    if (200 !== o.statusCode) return e.customError || setTimeout((function() {
                                        c().showToast({
                                            icon: "none",
                                            title: o.data.msg || "请求接口失败",
                                            duration: 1500
                                        })
                                    }), 300), void t(o.data);
                                    n(o.data)
                                },
                                fail: function(e) {
                                    setTimeout((function() {
                                        c().showToast({
                                            icon: "none",
                                            title: (null == e ? void 0 : e.msg) || "请求接口失败",
                                            duration: 1500
                                        })
                                    }), 300), t(e)
                                }
                            }))
                        }))
                    },
                    Z = g("POST /api/v1/auth/wx-login"),
                    y = function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return v((0, i.Z)((0, i.Z)({}, n), {}, {
                            url: "/api/v1/auth/wx-login",
                            method: "POST",
                            data: (0, i.Z)({}, e)
                        }))
                    },
                    b = function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            o = f(),
                            a = {
                                text: {
                                    text: e
                                }
                            };
                        return n && (a = {
                            event: e
                        }), v((0, i.Z)((0, i.Z)({}, t), {}, {
                            url: "/openapi/v1/ipchat/characters/".concat(l, "/sessions/").concat(o, "/chat"),
                            method: "POST",
                            data: (0, i.Z)({}, a)
                        }))
                    },
                    x = function() {
                        return v({
                            url: "/api/v1/auth/profile",
                            method: "GET",
                            data: {}
                        })
                    };

                function A(e) {
                    return w.apply(this, arguments)
                }

                function w() {
                    return (w = (0, a.Z)((0, o.Z)().mark((function e(n) {
                        return (0, o.Z)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", v({
                                        url: "/api/v1/ipchat/characters/xiyangyang/tts",
                                        method: "POST",
                                        data: {
                                            text: n,
                                            withBlendshape: !0
                                        }
                                    }));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function k(e) {
                    return T.apply(this, arguments)
                }

                function T() {
                    return (T = (0, a.Z)((0, o.Z)().mark((function e(n) {
                        return (0, o.Z)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return console.log("===================================="), console.log(m, "baseURL"), console.log("===================================="), e.abrupt("return", v({
                                        url: "".concat(m, "/api/v1/ipchat/asr?sample_rate=16k&audio_format=MP3&enable_user_profile=true"),
                                        method: "POST",
                                        data: n,
                                        header: {
                                            Authorization: c().getStorageSync("accessToken"),
                                            "Trace-Id": (0, u.D)(),
                                            "content-type": "application/octet-stream"
                                        }
                                    }, !1));
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function P(e) {
                    return v({
                        url: "/api/v1/auth/profile",
                        method: "PATCH",
                        data: e,
                        customError: !0
                    })
                }

                function S() {
                    return v({
                        url: "/api/v1/auth/profile",
                        method: "GET"
                    })
                }
                g("GET /api/calendar/v1/subscription"), g("GET /api/calendar/v1/calendars"), g("POST /api/calendar/v1/subscription"), g("GET /api/calendar/v1/calendars/{calendar_name}/cards"), g("GET /api/calendar/v1/calendars/{calendar_name}/common-card")
            },
            5394: function(e, n, t) {
                "use strict";
                t.d(n, {
                    Xx: function() {
                        return p
                    },
                    hP: function() {
                        return d
                    },
                    rh: function() {
                        return l
                    },
                    x4: function() {
                        return h
                    }
                });
                var o = t(4165),
                    a = t(5861),
                    i = t(2954),
                    r = t.n(i),
                    c = t(1141),
                    s = (r().getStorageSync("appid"), r().getStorageSync("phoneCode"), r().getStorageSync("accessToken") || null);

                function l() {
                    r().getAccountInfoSync().miniProgram.appId;
                    return "wx8c1be05dfd586ee9"
                }

                function u() {
                    return r().getStorageSync("phoneCode") || null
                }

                function d() {
                    return r().getStorageSync("accessToken") || s
                }
                var h = function() {
                        var e = (0, a.Z)((0, o.Z)().mark((function e(n, t) {
                            var a, i, s, u;
                            return (0, o.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r().setStorageSync("phoneCode", t), r().setStorageSync("loginCode", n), e.next = 4, (0, c.hO)({
                                            appId: l(),
                                            loginCode: n,
                                            phoneCode: t,
                                            partnerId: "65ba0cbcea22471dcab81f38"
                                        });
                                    case 4:
                                        if (a = e.sent, s = (i = a || {}).access_token, u = i.refresh_token, !s) {
                                            e.next = 12;
                                            break
                                        }
                                        return r().setStorageSync("accessToken", s), r().setStorageSync("refreshToken", u), e.abrupt("return", !0);
                                    case 12:
                                        return e.abrupt("return", !1);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(n, t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    p = function() {
                        var e = (0, a.Z)((0, o.Z)().mark((function e(n) {
                            var t, a, i, s, d;
                            return (0, o.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r().setStorageSync("loginCode", n), t = !0, console.log("~~~~~~checkLogin~~~~~~~~~in", u()), u()) {
                                            e.next = 7;
                                            break
                                        }
                                        t = !1, e.next = 14;
                                        break;
                                    case 7:
                                        return console.log("~~~~~~使用本地存储的值请求登录接口", u()), e.next = 10, (0, c.e5)({
                                            appId: l() || "",
                                            loginCode: n,
                                            partnerId: "65ba0cbcea22471dcab81f38"
                                        });
                                    case 10:
                                        a = e.sent, console.log("~~~~~~checkLogin~~~~~~~~~in--in", a), s = (i = a || {}).access_token, d = i.refresh_token, s ? (r().setStorageSync("accessToken", s), r().setStorageSync("refreshToken", d), t = !0) : t = !1;
                                    case 14:
                                        return e.abrupt("return", t);
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(n) {
                            return e.apply(this, arguments)
                        }
                    }()
            },
            2607: function(e, n, t) {
                "use strict";
                t.d(n, {
                    zk: function() {
                        return q
                    },
                    Zf: function() {
                        return C
                    }
                });
                var o = t(1002),
                    a = t(3433),
                    i = t(7762),
                    r = t(1413),
                    c = t(5671),
                    s = t(3144),
                    l = t(7326),
                    u = t(136),
                    d = t(7277),
                    h = t(4942),
                    p = t(1646),
                    f = t(2954),
                    m = t.n(f),
                    g = t(5017),
                    v = t(198),
                    Z = function(e) {
                        (0, u.Z)(t, e);
                        var n = (0, d.Z)(t);

                        function t() {
                            return (0, c.Z)(this, t), n.apply(this, arguments)
                        }
                        return (0, s.Z)(t, [{
                            key: "dispatchTouchEvent",
                            value: function(e) {
                                var n, t = e.changedTouches,
                                    o = (0, i.Z)(t);
                                try {
                                    for (o.s(); !(n = o.n()).done;) {
                                        var a = n.value,
                                            r = new v.X(a),
                                            c = {
                                                pageX: r.pageX,
                                                pageY: r.pageY,
                                                pointerId: r.identifier,
                                                type: {
                                                    touchstart: "pointerdown",
                                                    touchmove: "pointermove",
                                                    touchend: "pointerup"
                                                }[e.type],
                                                pointerType: "touch"
                                            };
                                        this.canvas.dispatchEvent(c)
                                    }
                                } catch (e) {
                                    o.e(e)
                                } finally {
                                    o.f()
                                }
                            }
                        }]), t
                    }(g.Y),
                    y = {
                        type: "change"
                    },
                    b = {
                        type: "start"
                    },
                    x = {
                        type: "end"
                    },
                    A = function(e) {
                        (0, u.Z)(t, e);
                        var n = (0, d.Z)(t);

                        function t(e, o) {
                            var a;
                            (0, c.Z)(this, t), a = n.call(this), void 0 === o && console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'), o === p.HxU && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'), a.object = e, a.domElement = o, a.domElement.style.touchAction = "none", a.enabled = !0, a.target = new p.Pa4, a.minDistance = 0, a.maxDistance = 1 / 0, a.minZoom = 0, a.maxZoom = 1 / 0, a.minPolarAngle = 0, a.maxPolarAngle = Math.PI, a.minAzimuthAngle = -1 / 0, a.maxAzimuthAngle = 1 / 0, a.enableDamping = !1, a.dampingFactor = .05, a.enableZoom = !0, a.zoomSpeed = 1, a.enableRotate = !0, a.rotateSpeed = 1, a.enablePan = !1, a.panSpeed = 1, a.screenSpacePanning = !0, a.keyPanSpeed = 7, a.autoRotate = !1, a.autoRotateSpeed = 2, a.keys = {
                                LEFT: "ArrowLeft",
                                UP: "ArrowUp",
                                RIGHT: "ArrowRight",
                                BOTTOM: "ArrowDown"
                            }, a.mouseButtons = {
                                LEFT: p.RsA.ROTATE,
                                MIDDLE: p.RsA.DOLLY,
                                RIGHT: p.RsA.PAN
                            }, a.touches = {
                                ONE: p.QmN.PAN,
                                TWO: p.QmN.DOLLY_ROTATE
                            }, a.target0 = a.target.clone(), a.position0 = a.object.position.clone(), a.zoom0 = a.object.zoom, a._domElementKeyEvents = null, a.getPolarAngle = function() {
                                return d.phi
                            }, a.getAzimuthalAngle = function() {
                                return d.theta
                            }, a.getDistance = function() {
                                return this.object.position.distanceTo(this.target)
                            }, a.listenToKeyEvents = function(e) {
                                e.addEventListener("keydown", q), this._domElementKeyEvents = e
                            }, a.saveState = function() {
                                i.target0.copy(i.target), i.position0.copy(i.object.position), i.zoom0 = i.object.zoom
                            }, a.reset = function() {
                                i.target.copy(i.target0), i.object.position.copy(i.position0), i.object.zoom = i.zoom0, i.object.updateProjectionMatrix(), i.dispatchEvent(y), i.update(), s = r.NONE
                            }, a.update = function() {
                                var n = new p.Pa4,
                                    t = (new p._fP).setFromUnitVectors(e.up, new p.Pa4(0, 1, 0)),
                                    o = t.clone().invert(),
                                    a = new p.Pa4,
                                    c = new p._fP,
                                    l = 2 * Math.PI;
                                return function() {
                                    var e = i.object.position;
                                    n.copy(e).sub(i.target), n.applyQuaternion(t), d.setFromVector3(n), i.autoRotate && s === r.NONE && N(2 * Math.PI / 60 / 60 * i.autoRotateSpeed), i.enableDamping ? (d.theta += h.theta * i.dampingFactor, d.phi += h.phi * i.dampingFactor) : (d.theta += h.theta, d.phi += h.phi);
                                    var p = i.minAzimuthAngle,
                                        v = i.maxAzimuthAngle;
                                    return isFinite(p) && isFinite(v) && (p < -Math.PI ? p += l : p > Math.PI && (p -= l), v < -Math.PI ? v += l : v > Math.PI && (v -= l), d.theta = p <= v ? Math.max(p, Math.min(v, d.theta)) : d.theta > (p + v) / 2 ? Math.max(p, d.theta) : Math.min(v, d.theta)), d.phi = Math.max(i.minPolarAngle, Math.min(i.maxPolarAngle, d.phi)), d.makeSafe(), d.radius *= f, d.radius = Math.max(i.minDistance, Math.min(i.maxDistance, d.radius)), !0 === i.enableDamping ? i.target.addScaledVector(m, i.dampingFactor) : i.target.add(m), n.setFromSpherical(d), n.applyQuaternion(o), e.copy(i.target).add(n), i.object.lookAt(i.target), !0 === i.enableDamping ? (h.theta *= 1 - i.dampingFactor, h.phi *= 1 - i.dampingFactor, m.multiplyScalar(1 - i.dampingFactor)) : (h.set(0, 0, 0), m.set(0, 0, 0)), f = 1, !!(g || a.distanceToSquared(i.object.position) > u || 8 * (1 - c.dot(i.object.quaternion)) > u) && (i.dispatchEvent(y), a.copy(i.object.position), c.copy(i.object.quaternion), g = !1, !0)
                                }
                            }(), a.dispose = function() {
                                i.domElement.removeEventListener("contextmenu", $), i.domElement.removeEventListener("pointerdown", X), i.domElement.removeEventListener("pointercancel", J), i.domElement.removeEventListener("wheel", Q), i.domElement.removeEventListener("pointermove", K), i.domElement.removeEventListener("pointerup", V), null !== i._domElementKeyEvents && i._domElementKeyEvents.removeEventListener("keydown", q)
                            };
                            var i = (0, l.Z)(a),
                                r = {
                                    NONE: -1,
                                    ROTATE: 0,
                                    DOLLY: 1,
                                    PAN: 2,
                                    TOUCH_ROTATE: 3,
                                    TOUCH_PAN: 4,
                                    TOUCH_DOLLY_PAN: 5,
                                    TOUCH_DOLLY_ROTATE: 6
                                },
                                s = r.NONE,
                                u = 1e-6,
                                d = new p.$V,
                                h = new p.$V,
                                f = 1,
                                m = new p.Pa4,
                                g = !1,
                                v = new p.FM8,
                                Z = new p.FM8,
                                A = new p.FM8,
                                w = new p.FM8,
                                k = new p.FM8,
                                T = new p.FM8,
                                P = new p.FM8,
                                S = new p.FM8,
                                M = new p.FM8,
                                E = [],
                                L = {};

                            function I() {
                                return Math.pow(.95, i.zoomSpeed)
                            }

                            function N(e) {
                                h.theta -= e
                            }

                            function F(e) {
                                h.phi -= e
                            }
                            var R = function() {
                                    var e = new p.Pa4;
                                    return function(n, t) {
                                        e.setFromMatrixColumn(t, 0), e.multiplyScalar(-n), m.add(e)
                                    }
                                }(),
                                C = function() {
                                    var e = new p.Pa4;
                                    return function(n, t) {
                                        !0 === i.screenSpacePanning ? e.setFromMatrixColumn(t, 1) : (e.setFromMatrixColumn(t, 0), e.crossVectors(i.object.up, e)), e.multiplyScalar(n), m.add(e)
                                    }
                                }(),
                                O = function() {
                                    var e = new p.Pa4;
                                    return function(n, t) {
                                        var o = i.domElement;
                                        if (i.object.isPerspectiveCamera) {
                                            var a = i.object.position;
                                            e.copy(a).sub(i.target);
                                            var r = e.length();
                                            r *= Math.tan(i.object.fov / 2 * Math.PI / 180), R(2 * n * r / o.clientHeight, i.object.matrix), C(2 * t * r / o.clientHeight, i.object.matrix)
                                        } else i.object.isOrthographicCamera ? (R(n * (i.object.right - i.object.left) / i.object.zoom / o.clientWidth, i.object.matrix), C(t * (i.object.top - i.object.bottom) / i.object.zoom / o.clientHeight, i.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), i.enablePan = !1)
                                    }
                                }();

                            function _(e) {
                                i.object.isPerspectiveCamera ? f /= e : i.object.isOrthographicCamera ? (i.object.zoom = Math.max(i.minZoom, Math.min(i.maxZoom, i.object.zoom * e)), i.object.updateProjectionMatrix(), g = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), i.enableZoom = !1)
                            }

                            function j(e) {
                                i.object.isPerspectiveCamera ? f *= e : i.object.isOrthographicCamera ? (i.object.zoom = Math.max(i.minZoom, Math.min(i.maxZoom, i.object.zoom / e)), i.object.updateProjectionMatrix(), g = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), i.enableZoom = !1)
                            }

                            function D(e) {
                                v.set(e.clientX, e.clientY)
                            }

                            function Y(e) {
                                w.set(e.clientX, e.clientY)
                            }

                            function H() {
                                if (1 === E.length) v.set(E[0].pageX, E[0].pageY);
                                else {
                                    var e = .5 * (E[0].pageX + E[1].pageX),
                                        n = .5 * (E[0].pageY + E[1].pageY);
                                    v.set(e, n)
                                }
                            }

                            function W() {
                                if (1 === E.length) w.set(E[0].pageX, E[0].pageY);
                                else {
                                    var e = .5 * (E[0].pageX + E[1].pageX),
                                        n = .5 * (E[0].pageY + E[1].pageY);
                                    w.set(e, n)
                                }
                            }

                            function z() {
                                var e = E[0].pageX - E[1].pageX,
                                    n = E[0].pageY - E[1].pageY,
                                    t = Math.sqrt(e * e + n * n);
                                P.set(0, t)
                            }

                            function U(e) {
                                if (1 == E.length) Z.set(e.pageX, e.pageY);
                                else {
                                    var n = te(e),
                                        t = .5 * (e.pageX + n.x),
                                        o = .5 * (e.pageY + n.y);
                                    Z.set(t, o)
                                }
                                A.subVectors(Z, v).multiplyScalar(i.rotateSpeed);
                                var a = i.domElement;
                                N(2 * Math.PI * A.x / a.clientHeight), F(2 * Math.PI * A.y / a.clientHeight), v.copy(Z)
                            }

                            function G(e) {
                                if (1 === E.length) k.set(e.pageX, e.pageY);
                                else {
                                    var n = te(e),
                                        t = .5 * (e.pageX + n.x),
                                        o = .5 * (e.pageY + n.y);
                                    k.set(t, o)
                                }
                                T.subVectors(k, w).multiplyScalar(i.panSpeed), O(T.x, T.y), w.copy(k)
                            }

                            function B(e) {
                                var n = te(e),
                                    t = e.pageX - n.x,
                                    o = e.pageY - n.y,
                                    a = Math.sqrt(t * t + o * o);
                                S.set(0, a), M.set(0, Math.pow(S.y / P.y, i.zoomSpeed)), _(M.y), P.copy(S)
                            }

                            function X(e) {
                                !1 !== i.enabled && (0 === E.length && (i.domElement.setPointerCapture(e.pointerId), i.domElement.addEventListener("pointermove", K), i.domElement.addEventListener("pointerup", V)), function(e) {
                                    E.push(e)
                                }(e), "touch" === e.pointerType ? function(e) {
                                    switch (ne(e), E.length) {
                                        case 1:
                                            switch (i.touches.ONE) {
                                                case p.QmN.ROTATE:
                                                    if (!1 === i.enableRotate) return;
                                                    H(), s = r.TOUCH_ROTATE;
                                                    break;
                                                case p.QmN.PAN:
                                                    if (!1 === i.enablePan) return;
                                                    W(), s = r.TOUCH_PAN;
                                                    break;
                                                default:
                                                    s = r.NONE
                                            }
                                            break;
                                        case 2:
                                            switch (i.touches.TWO) {
                                                case p.QmN.DOLLY_PAN:
                                                    if (!1 === i.enableZoom && !1 === i.enablePan) return;
                                                    i.enableZoom && z(), i.enablePan && W(), s = r.TOUCH_DOLLY_PAN;
                                                    break;
                                                case p.QmN.DOLLY_ROTATE:
                                                    if (!1 === i.enableZoom && !1 === i.enableRotate) return;
                                                    i.enableZoom && z(), i.enableRotate && H(), s = r.TOUCH_DOLLY_ROTATE;
                                                    break;
                                                default:
                                                    s = r.NONE
                                            }
                                            break;
                                        default:
                                            s = r.NONE
                                    }
                                    s !== r.NONE && i.dispatchEvent(b)
                                }(e) : function(e) {
                                    var n;
                                    switch (e.button) {
                                        case 0:
                                            n = i.mouseButtons.LEFT;
                                            break;
                                        case 1:
                                            n = i.mouseButtons.MIDDLE;
                                            break;
                                        case 2:
                                            n = i.mouseButtons.RIGHT;
                                            break;
                                        default:
                                            n = -1
                                    }
                                    switch (n) {
                                        case p.RsA.DOLLY:
                                            if (!1 === i.enableZoom) return;
                                            (function(e) {
                                                P.set(e.clientX, e.clientY)
                                            })(e), s = r.DOLLY;
                                            break;
                                        case p.RsA.ROTATE:
                                            if (e.ctrlKey || e.metaKey || e.shiftKey) {
                                                if (!1 === i.enablePan) return;
                                                Y(e), s = r.PAN
                                            } else {
                                                if (!1 === i.enableRotate) return;
                                                D(e), s = r.ROTATE
                                            }
                                            break;
                                        case p.RsA.PAN:
                                            if (e.ctrlKey || e.metaKey || e.shiftKey) {
                                                if (!1 === i.enableRotate) return;
                                                D(e), s = r.ROTATE
                                            } else {
                                                if (!1 === i.enablePan) return;
                                                Y(e), s = r.PAN
                                            }
                                            break;
                                        default:
                                            s = r.NONE
                                    }
                                    s !== r.NONE && i.dispatchEvent(b)
                                }(e))
                            }

                            function K(e) {
                                !1 !== i.enabled && ("touch" === e.pointerType ? function(e) {
                                    switch (ne(e), s) {
                                        case r.TOUCH_ROTATE:
                                            if (!1 === i.enableRotate) return;
                                            U(e), i.update();
                                            break;
                                        case r.TOUCH_PAN:
                                            if (!1 === i.enablePan) return;
                                            G(e), i.update();
                                            break;
                                        case r.TOUCH_DOLLY_PAN:
                                            if (!1 === i.enableZoom && !1 === i.enablePan) return;
                                            (function(e) {
                                                i.enableZoom && B(e), i.enablePan && G(e)
                                            })(e), i.update();
                                            break;
                                        case r.TOUCH_DOLLY_ROTATE:
                                            if (!1 === i.enableZoom && !1 === i.enableRotate) return;
                                            (function(e) {
                                                i.enableZoom && B(e), i.enableRotate && U(e)
                                            })(e), i.update();
                                            break;
                                        default:
                                            s = r.NONE
                                    }
                                }(e) : function(e) {
                                    if (!1 !== i.enabled) switch (s) {
                                        case r.ROTATE:
                                            if (!1 === i.enableRotate) return;
                                            ! function(e) {
                                                Z.set(e.clientX, e.clientY), A.subVectors(Z, v).multiplyScalar(i.rotateSpeed);
                                                var n = i.domElement;
                                                N(2 * Math.PI * A.x / n.clientHeight), F(2 * Math.PI * A.y / n.clientHeight), v.copy(Z), i.update()
                                            }(e);
                                            break;
                                        case r.DOLLY:
                                            if (!1 === i.enableZoom) return;
                                            ! function(e) {
                                                S.set(e.clientX, e.clientY), M.subVectors(S, P), M.y > 0 ? _(I()) : M.y < 0 && j(I()), P.copy(S), i.update()
                                            }(e);
                                            break;
                                        case r.PAN:
                                            if (!1 === i.enablePan) return;
                                            ! function(e) {
                                                k.set(e.clientX, e.clientY), T.subVectors(k, w).multiplyScalar(i.panSpeed), O(T.x, T.y), w.copy(k), i.update()
                                            }(e)
                                    }
                                }(e))
                            }

                            function V(e) {
                                !1 !== i.enabled && (e.pointerType, i.dispatchEvent(x), s = r.NONE, ee(e), 0 === E.length && (i.domElement.releasePointerCapture(e.pointerId), i.domElement.removeEventListener("pointermove", K), i.domElement.removeEventListener("pointerup", V)))
                            }

                            function J(e) {
                                ee(e)
                            }

                            function Q(e) {
                                !1 === i.enabled || !1 === i.enableZoom || s !== r.NONE && s !== r.ROTATE || (e.preventDefault(), i.dispatchEvent(b), function(e) {
                                    e.deltaY < 0 ? j(I()) : e.deltaY > 0 && _(I()), i.update()
                                }(e), i.dispatchEvent(x))
                            }

                            function q(e) {
                                !1 !== i.enabled && !1 !== i.enablePan && function(e) {
                                    var n = !1;
                                    switch (e.code) {
                                        case i.keys.UP:
                                            O(0, i.keyPanSpeed), n = !0;
                                            break;
                                        case i.keys.BOTTOM:
                                            O(0, -i.keyPanSpeed), n = !0;
                                            break;
                                        case i.keys.LEFT:
                                            O(i.keyPanSpeed, 0), n = !0;
                                            break;
                                        case i.keys.RIGHT:
                                            O(-i.keyPanSpeed, 0), n = !0
                                    }
                                    n && (e.preventDefault(), i.update())
                                }(e)
                            }

                            function $(e) {
                                !1 !== i.enabled && e.preventDefault()
                            }

                            function ee(e) {
                                delete L[e.pointerId];
                                for (var n = 0; n < E.length; n++)
                                    if (E[n].pointerId == e.pointerId) return void E.splice(n, 1)
                            }

                            function ne(e) {
                                var n = L[e.pointerId];
                                void 0 === n && (n = new p.FM8, L[e.pointerId] = n), n.set(e.pageX, e.pageY)
                            }

                            function te(e) {
                                var n = e.pointerId === E[0].pointerId ? E[1] : E[0];
                                return L[n.pointerId]
                            }
                            return i.domElement.addEventListener("contextmenu", $), i.domElement.addEventListener("pointerdown", X), i.domElement.addEventListener("pointercancel", J), i.domElement.addEventListener("wheel", Q, {
                                passive: !1
                            }), a.update(), a
                        }
                        return (0, s.Z)(t)
                    }(p.pBf),
                    w = t(6702),
                    k = t(6646),
                    T = t(6387),
                    P = t.n(T),
                    S = t(101),
                    M = t(3889),
                    E = new WeakSet,
                    L = new WeakSet,
                    I = function() {
                        function e(n) {
                            (0, c.Z)(this, e), (0, S.Z)(this, L), (0, S.Z)(this, E), (0, h.Z)(this, "_loadingMap", null), (0, h.Z)(this, "_loadingKey", null), (0, h.Z)(this, "_isStartProcess", null), (0, h.Z)(this, "_isFailed", null), (0, h.Z)(this, "_handleProcess", null), (0, h.Z)(this, "_handleSuccess", null), (0, h.Z)(this, "_handleFailed", null), (0, h.Z)(this, "finishCount", 0), this._loadingMap = {}, this._loadingKey = [], this._isStartProcess = !1, this._isFailed = !1, this._handleProcess = null == n ? void 0 : n.handleProcess, this._handleSuccess = null == n ? void 0 : n.handleSuccess, this._handleFailed = null == n ? void 0 : n.handleFailed
                        }
                        return (0, s.Z)(e, [{
                            key: "register",
                            value: function(e) {
                                this._loadingKey.includes(e) || this._loadingKey.push(e)
                            }
                        }, {
                            key: "set",
                            value: function(e, n, t) {
                                var o = this;
                                this._loadingMap[e] = {
                                    loaded: n,
                                    total: t
                                }, this._isStartProcess || (this._loadingKey.every((function(e) {
                                    return null != o._loadingMap[e]
                                })) && (this._isStartProcess = !0), (0, M.Z)(this, L, F).call(this))
                            }
                        }, {
                            key: "remove",
                            value: function(e) {
                                delete this._loadingMap[e]
                            }
                        }, {
                            key: "clear",
                            value: function() {
                                this._loadingMap = {}
                            }
                        }, {
                            key: "setFailed",
                            value: function() {
                                var e;
                                this._isFailed = !0, null === (e = this._handleFailed) || void 0 === e || e.call(this), this.finishCount += 1
                            }
                        }, {
                            key: "setSuccess",
                            value: function() {
                                var e = this;
                                this.finishCount += 1, this._isFailed || this.finishCount === this._loadingKey.length && setTimeout((function() {
                                    var n;
                                    null === (n = e._handleSuccess) || void 0 === n || n.call(e)
                                }), 200)
                            }
                        }]), e
                    }();

                function N() {
                    var e = Object.values(this._loadingMap),
                        n = 0,
                        t = 0;
                    return e.forEach((function(e) {
                        n += e.loaded, t += e.total
                    })), {
                        loaded: n,
                        total: t
                    }
                }

                function F() {
                    var e;
                    if (!(this._loadingKey.length < 1 || this._isFailed))
                        if (this._isStartProcess) {
                            var n = (0, M.Z)(this, E, N).call(this),
                                t = n.loaded,
                                o = n.total,
                                a = 0;
                            o > 0 && (a = Math.round(t / o * 100)), null === (e = this._handleProcess) || void 0 === e || e.call(this, a)
                        } else {
                            var i;
                            null === (i = this._handleProcess) || void 0 === i || i.call(this, 0)
                        }
                }
                var R = {
                        lights: !0,
                        orbitControls: !0,
                        raycaster: !0,
                        fps: 60,
                        dpr: 1,
                        loaders: {
                            gltf: {
                                dracoLoaderPath: "/draco/gltf/"
                            },
                            texture: !1,
                            hdr: !1
                        }
                    },
                    C = function(e) {
                        (0, u.Z)(t, e);
                        var n = (0, d.Z)(t);

                        function t(e) {
                            var o, a, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            (0, c.Z)(this, t), a = n.call(this), (0, h.Z)((0, l.Z)(a), "platform", null), (0, h.Z)((0, l.Z)(a), "canvas", null), (0, h.Z)((0, l.Z)(a), "scene", null), (0, h.Z)((0, l.Z)(a), "clock", null), (0, h.Z)((0, l.Z)(a), "camera", null), (0, h.Z)((0, l.Z)(a), "renderer", null), (0, h.Z)((0, l.Z)(a), "orbitControls", null), (0, h.Z)((0, l.Z)(a), "renderFns", []), (0, h.Z)((0, l.Z)(a), "loopRenderId", null), (0, h.Z)((0, l.Z)(a), "lights", {}), (0, h.Z)((0, l.Z)(a), "gltfLoader", null), (0, h.Z)((0, l.Z)(a), "mManager", null), (0, h.Z)((0, l.Z)(a), "configuration", (0, r.Z)({}, R)), (0, h.Z)((0, l.Z)(a), "modelMap", new Map), (0, h.Z)((0, l.Z)(a), "defaultModel", null), (0, h.Z)((0, l.Z)(a), "fps", null), (0, h.Z)((0, l.Z)(a), "singleFrameTime", null), (0, h.Z)((0, l.Z)(a), "raycaster", null), (0, h.Z)((0, l.Z)(a), "addCharacter", (function(e) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                                    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                                e.hall = (0, l.Z)(a), 0 === a.modelMap.size && (a.defaultModel = e, console.log("model =>", e), e.scene.position.set(n, t, o), e.scene.traverse((function(e) {
                                    e.receiveShadow = !0, e.castShadow = !0
                                })), e.scene.receiveShadow = !0, a.configuration.helper && e.scene.traverse((function(e) {
                                    var n = new p.ZzF;
                                    n.expandByObject(e);
                                    var t = new p.GQ(n, 16711680);
                                    a.scene.add(t)
                                }))), e.onAddToHall(), setTimeout((function() {
                                    a.scene.add(e.scene)
                                }), 1), a.modelMap.set(e.name, e)
                            })), (0, h.Z)((0, l.Z)(a), "removeCharacter", (function(e) {
                                var n = a.modelMap.get(e);
                                n && (a.scene.remove(n), a.modelMap.delete(e), a.defaultModel === n && (a.defaultModel = null))
                            })), (0, h.Z)((0, l.Z)(a), "onClick", (function(e, n, t, o) {
                                var i;
                                if (a.raycaster) {
                                    if (a.defaultModel) {
                                        var r = (0, l.Z)(a),
                                            c = r.raycaster,
                                            s = r.camera,
                                            u = new p.FM8;
                                        console.log("renderSize", u.x, u.y, t, o), u.x = e / t * 2 - 1, u.y = -n / o * 2 + 1, c.setFromCamera(u, s);
                                        var d = c.intersectObjects(null === (i = a.defaultModel) || void 0 === i ? void 0 : i.scene.children);
                                        return d.length ? (a.emit("onRaycaster", d[0].object.name, d[0], d), d[0].object.name) : null
                                    }
                                    console.error("未加载模型")
                                } else console.error("需要设置初始化raycaster")
                            })), (0, h.Z)((0, l.Z)(a), "addLight", (function(e, n) {
                                return a.lights[e] = n, a.scene.add(n), n
                            })), (0, h.Z)((0, l.Z)(a), "removeLight", (function() {
                                for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                for (var o = 0, i = n; o < i.length; o++) {
                                    var r = i[o];
                                    a.scene.remove(a.lights[r])
                                }
                            })), (0, h.Z)((0, l.Z)(a), "loadGLTF", (function(e, n) {
                                return n = n || e.split("/").slice(-1)[0], new Promise((function(t, o) {
                                    var i, r;
                                    if (null === (i = a.mManager) || void 0 === i || i.register(e), /^wxfile:/.test(e)) {
                                        var c, s = m().getFileSystemManager().readFileSync(e);
                                        null === (c = a.gltfLoader) || void 0 === c || c.parse(s, e, (function(n) {
                                            var o;
                                            t(n), null === (o = a.mManager) || void 0 === o || o.setSuccess(), m().getFileSystemManager().removeSavedFile({
                                                filePath: e
                                            })
                                        }), (function(e) {
                                            var n;
                                            o(e), null === (n = a.mManager) || void 0 === n || n.setFailed()
                                        }))
                                    } else null === (r = a.gltfLoader) || void 0 === r || r.load(e, (function(e) {
                                        var n;
                                        t(e), null === (n = a.mManager) || void 0 === n || n.setSuccess()
                                    }), (function(t) {
                                        var o;
                                        null === (o = a.mManager) || void 0 === o || o.set(e, t.loaded, t.total), a.emit(["progress", n], t.loaded, t.total)
                                    }), (function(e) {
                                        var n;
                                        o(e), null === (n = a.mManager) || void 0 === n || n.setFailed()
                                    }))
                                }))
                            })), (0, h.Z)((0, l.Z)(a), "timeStamp", 0), (0, h.Z)((0, l.Z)(a), "renderLoop", (function() {
                                if (null === a.loopRenderId) {
                                    a.loopRenderId = (0, p.v1Y)((function e() {
                                        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
                                        a.loopRenderId = (0, p.v1Y)(e);
                                        var t = a.clock.getDelta();
                                        if (a.timeStamp += 1e3 * t, a.timeStamp >= a.singleFrameTime) {
                                            a.timeStamp %= a.singleFrameTime;
                                            var o, r = (0, i.Z)(a.renderFns);
                                            try {
                                                for (r.s(); !(o = r.n()).done;) {
                                                    var c = o.value;
                                                    c.call((0, l.Z)(a), n)
                                                }
                                            } catch (e) {
                                                r.e(e)
                                            } finally {
                                                r.f()
                                            }
                                        }
                                    }))
                                }
                            })), (0, h.Z)((0, l.Z)(a), "cancelRender", (function() {
                                a.loopRenderId && ((0, p.iI$)(a.loopRenderId), a.loopRenderId = null)
                            })), (0, h.Z)((0, l.Z)(a), "addRenderFn", (function(e) {
                                a.renderFns.push(e)
                            })), (0, h.Z)((0, l.Z)(a), "removeRenderFn", (function(e) {
                                var n, t, o = null === (n = a.renderFns) || void 0 === n ? void 0 : n.indexOf(e);
                                o > -1 && (null === (t = a.renderFns) || void 0 === t || t.splice(o, 1))
                            })), (0, h.Z)((0, l.Z)(a), "onTouch", (function(e) {
                                var n;
                                null === (n = a.platform) || void 0 === n || n.dispatchTouchEvent(e)
                            })), (0, h.Z)((0, l.Z)(a), "dispose", (function() {
                                var e, n, t;
                                a.cancelRender(), null === (e = a.orbitControls) || void 0 === e || e.dispose(), a.orbitControls = null, a.renderer.forceContextLoss(), a.renderer.dispose(), null === (n = a.scene) || void 0 === n || n.traverse((function(e) {
                                    var n, t;
                                    null === (n = e.geometry) || void 0 === n || n.dispose(), null === (t = e.material) || void 0 === t || t.dispose(), e = null
                                })), a.lights = null, null === (t = a.scene) || void 0 === t || t.clear(), a.scene = null, a.camera = null, null === p.CtF || void 0 === p.CtF || p.CtF.clear(), p.iw8.dispose(), a.renderFns = null, a.renderer.domElement = null, a.renderer = null, a.removeAllListeners(), a.canvas = null, a.platform = null, a.clock = null, a.gltfLoader = null, a.mManager = null, a.configuration = null
                            })), a.canvas = e;
                            var u = new Z(e);
                            return a.platform = u, p.iw8.set(u), Object.assign(a.configuration, s), a.fps = null !== (o = a.configuration.fps) && void 0 !== o ? o : 60, a.singleFrameTime = 1e3 / a.fps, a.clock = new p.SUY, a.scene = new p.xsS, a.scene.fog = new p.yo9(16777215, .015), a.camera = new p.cPb, a.renderer = new p.b5g({
                                antialias: !1,
                                alpha: !0,
                                canvas: e
                            }), s.helper && a.scene.add(new p.VLJ(20, 2, new p.Ilk("green"), new p.Ilk("white"))), a.initLoadingManager(), a.initLoaders(), a.initCanvas(), a.initOrbitControls(), a.initCamera(), a.initLights(), a.initRenderer(), a.initRaycaster(), a
                        }
                        return (0, s.Z)(t, [{
                            key: "initCanvas",
                            value: function() {
                                this.emit("onBeforeInitCanvas"), this.camera.aspect = this.canvas.width / this.canvas.height, this.camera.updateProjectionMatrix(), this.renderer.setSize(this.canvas.width, this.canvas.height), this.renderer.setPixelRatio(this.configuration.dpr || 1), this.emit("onAfterInitCanvas")
                            }
                        }, {
                            key: "initRenderer",
                            value: function() {
                                var e = this;
                                this.emit("onBeforeInitRenderer"), this.renderer.setClearColor(0, 0), this.renderer.useLegacyLights = !1, this.renderer.outputEncoding = p.knz, this.renderFns.push((function() {
                                    e.renderer.render(e.scene, e.camera)
                                })), this.emit("onAfterInitRenderer")
                            }
                        }, {
                            key: "initCamera",
                            value: function() {
                                var e, n, t;
                                this.emit("onBeforeInitCamera");
                                var o, i = this.configuration.camera,
                                    r = this.camera;
                                null != i && i.fov && (r.fov = null == i ? void 0 : i.fov), this.camera.near = null !== (e = null == i ? void 0 : i.near) && void 0 !== e ? e : .01, null != i && i.far && (this.camera.far = null == i ? void 0 : i.far), null != i && i.zoom && (this.camera.zoom = null == i ? void 0 : i.zoom), (n = this.camera.position).set.apply(n, (0, a.Z)(null !== (t = null == i ? void 0 : i.position) && void 0 !== t ? t : [0, 0, 10])), null != i && i.focus ? (o = this.camera).lookAt.apply(o, (0, a.Z)(i.focus)) : this.camera.lookAt(0, 0, 0), this.emit("onAfterInitCamera")
                            }
                        }, {
                            key: "initOrbitControls",
                            value: function() {
                                var e, n = this;
                                if (this.configuration.orbitControls) {
                                    if (this.emit("onBeforeInitOrbitControls"), this.orbitControls = new A(this.camera, this.canvas), "object" === (0, o.Z)(this.configuration.orbitControls)) {
                                        var t, i = this.configuration.orbitControls;
                                        void 0 !== i.enableZoom && (this.orbitControls.enableZoom = i.enableZoom), this.orbitControls.enableRotate = null !== (t = i.enableRotate) && void 0 !== t && t
                                    }
                                    var r;
                                    this.orbitControls.touches = {
                                        ONE: p.QmN.ROTATE,
                                        TWO: p.QmN.DOLLY_PAN
                                    }, this.orbitControls.screenSpacePanning = !1, this.orbitControls.minPolarAngle = Math.PI / 2, this.orbitControls.maxPolarAngle = Math.PI / 2, this.orbitControls.enableDamping = !0, this.orbitControls.dampingFactor = .05, null !== (e = this.configuration.camera) && void 0 !== e && e.focus ? (r = this.orbitControls.target).set.apply(r, (0, a.Z)(this.configuration.camera.focus)) : this.orbitControls.target.set(0, 0, 0), this.renderFns.unshift((function() {
                                        return n.orbitControls.update()
                                    })), this.emit("onAfterInitOrbitControls")
                                }
                            }
                        }, {
                            key: "initLights",
                            value: function() {
                                if (this.configuration.lights) {
                                    this.emit("onBeforeInitLights");
                                    var e = new p.vmT(1907997, 11578524);
                                    e.position.set(0, 10, 0), e.intensity = .6, this.scene.add(e), this.lights.hemisphereLight = e;
                                    var n = new p.Ox3(16777215);
                                    n.position.set(-2.947, 8.167, 10.609), n.intensity = 1, this.scene.add(n), this.lights.directionalLight = n, this.emit("onAfterInitLights")
                                }
                            }
                        }, {
                            key: "initLoadingManager",
                            value: function() {
                                var e = this;
                                this.mManager = new I({
                                    handleProcess: function(n) {
                                        e.emit("onLoadProcess", n)
                                    },
                                    handleSuccess: function() {
                                        e.emit("onLoadSuccess")
                                    },
                                    handleFailed: function() {
                                        e.emit("onLoadFailed")
                                    }
                                })
                            }
                        }, {
                            key: "initLoaders",
                            value: function() {
                                if (this.configuration.loaders) {
                                    this.emit("onBeforeInitLoaders");
                                    var e = this.configuration.loaders.gltf;
                                    if (e) {
                                        var n = new w.E;
                                        if ("object" === (0, o.Z)(e) && e.dracoLoaderPath) {
                                            var t, a = new k._;
                                            a.setDecoderPath(null !== (t = e.dracoLoaderPath) && void 0 !== t ? t : "/draco/gltf/"), n.setDRACOLoader(a)
                                        }
                                        this.gltfLoader = n
                                    }
                                    this.emit("onAfterInitLoaders")
                                }
                            }
                        }, {
                            key: "initRaycaster",
                            value: function() {
                                this.configuration.raycaster && (this.raycaster = new p.iMs)
                            }
                        }, {
                            key: "now",
                            get: function() {
                                return Date.now()
                            }
                        }]), t
                    }(P()),
                    O = t(9439),
                    _ = t(4165),
                    j = t(2346),
                    D = t(3092),
                    Y = t(6033),
                    H = t(5861);

                function W(e, n) {
                    return e + Math.floor(Math.random() * (n - e))
                }
                var z = ["jawForward", "-", "-", "jawOpen", "mouthClose", "-", "mouthPucker", "-", "-", "mouthSmileLeft", "mouthSmileRight", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "mouthLowerDownLeft", "mouthLowerDownRight", "mouthUpperUpLeft", "mouthUpperUpRight", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "tongueOut"],
                    U = [0, 0, .003, .022, .063, .149, .266, .389, .6, .389, .266, .149, .063, .022, .003, 0, 0].map((function(e) {
                        return 1.66 * e
                    })),
                    G = function(e) {
                        (0, u.Z)(t, e);
                        var n = (0, d.Z)(t);

                        function t(e, o, a) {
                            var i;
                            return (0, c.Z)(this, t), i = n.call(this), (0, h.Z)((0, l.Z)(i), "action", null), (0, h.Z)((0, l.Z)(i), "mixer", null), (0, h.Z)((0, l.Z)(i), "isTemp", !1), (0, h.Z)((0, l.Z)(i), "dispose", (function() {
                                i.mixer.removeEventListener("finished", i.onFinish), i.mixer.removeEventListener("loop", i.onLoop), i.mixer.existingAction(i.action) && i.mixer.uncacheAction(i.action), i.removeAllListeners(), i.mixer = null, i.action = null
                            })), (0, h.Z)((0, l.Z)(i), "setConfig", (function(e) {
                                var n;
                                e && (e.loop && i.action.setLoop(e.loop, null !== (n = e.repetitions) && void 0 !== n ? n : 1), e.timeScale && (i.action.timeScale = e.timeScale), void 0 !== e.clampWhenFinished && (i.action.clampWhenFinished = e.clampWhenFinished), void 0 !== e.enabled && (i.action.enabled = e.enabled), void 0 !== e.weight && i.action.setEffectiveWeight(e.weight))
                            })), (0, h.Z)((0, l.Z)(i), "onFinish", (function(e) {
                                if (e.action === i.action) {
                                    var n, t;
                                    i.finishResolve && (null === (n = (t = i).finishResolve) || void 0 === n || n.call(t, {
                                        finish: !0
                                    }), i.finishResolve = null), i.breakResolve = null;
                                    var o = i.action.getEffectiveWeight();
                                    1 === o && (console.log("action %s weight %d finished", i.name, o), i.emit("finish"))
                                }
                            })), (0, h.Z)((0, l.Z)(i), "onLoop", (function(e) {
                                if (e.action === i.action) {
                                    var n, t;
                                    null === (n = (t = i).loopResolve) || void 0 === n || n.call(t, {
                                        loop: !0
                                    }), i.loopResolve = null;
                                    var o = i.action.getEffectiveWeight();
                                    1 === o && (console.log("action %s weight %d looped", i.name, o), i.emit("loop"))
                                }
                            })), (0, h.Z)((0, l.Z)(i), "waitBreak", (function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1 / 0;
                                return new Promise((function(n, t) {
                                    i.breakResolve = n, Number.isFinite(e) && setTimeout((function() {
                                        t(new Error("Action ".concat(i.name, " timeout of ").concat(e, "ms exceeded for wait-break"))), i.breakResolve = null
                                    }), e)
                                }))
                            })), (0, h.Z)((0, l.Z)(i), "break", (function() {
                                var e, n;
                                console.log("action %s breaked", i.name), i.breakResolve && (null === (e = (n = i).breakResolve) || void 0 === e || e.call(n, {
                                    break: !0
                                }), i.breakResolve = null, i.emit("break")), i.loopResolve = null, i.finishResolve = null
                            })), (0, h.Z)((0, l.Z)(i), "waitLoop", (function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1 / 0;
                                return new Promise((function(n, t) {
                                    i.loopResolve = n, Number.isFinite(e) && setTimeout((function() {
                                        t(new Error("Action ".concat(i.name, " timeout of ").concat(e, "ms exceeded for wait-loop"))), i.loopResolve = null
                                    }), e)
                                }))
                            })), (0, h.Z)((0, l.Z)(i), "waitFinish", (function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1 / 0;
                                return new Promise((function(n, t) {
                                    i.finishResolve = n, Number.isFinite(e) && setTimeout((function() {
                                        t(new Error("Action ".concat(i.name, " timeout of ").concat(e, "ms exceeded for wait-finish"))), i.finishResolve = null
                                    }), e)
                                }))
                            })), (0, h.Z)((0, l.Z)(i), "waitRace", (function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1 / 0;
                                return Promise.race([i.waitBreak(e), i.waitFinish(e), i.waitLoop(e)])
                            })), (0, h.Z)((0, l.Z)(i), "waitFinishOrBreak", (function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1 / 0;
                                return Promise.race([i.waitBreak(e), i.waitFinish(e)])
                            })), (0, h.Z)((0, l.Z)(i), "crossFadeTo", (function(e) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .35,
                                    t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                                e.action.enabled = !0, e !== (0, l.Z)(i) && e.action.reset(), i.action.isRunning() && 1 === i.action.getEffectiveWeight() && i.break(), i.action.crossFadeTo(e.action, n, t), e.action.setEffectiveTimeScale(1), e.action.play(), console.log("crossFadeTo", e.name)
                            })), (0, h.Z)((0, l.Z)(i), "crossFadeFrom", (function(e) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .35,
                                    t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                                i.action.enabled = !0, e !== (0, l.Z)(i) && i.action.reset(), e.action.isRunning() && 1 === e.action.getEffectiveWeight() && e.break(), i.action.crossFadeFrom(e.action, n, t), i.action.setEffectiveTimeScale(1), i.action.play(), console.log("crossFadeFrom", e.name)
                            })), (0, h.Z)((0, l.Z)(i), "play", (function() {
                                i.action.enabled = !0, i.action.weight = 1, i.action.reset(), i.action.setEffectiveTimeScale(1), i.action.play(), console.log("action play", i.name)
                            })), (0, h.Z)((0, l.Z)(i), "stop", (function() {
                                i.action.stop(), i.action.setEffectiveWeight(0), i.action.enabled = !1, console.log("action stop", i.name)
                            })), i.action = e, i.action.setLoop(p.jAl, 1), i.action.clampWhenFinished = !0, i.name = o, i.mixer = e.getMixer(), i.mixer.addEventListener("finished", i.onFinish), i.mixer.addEventListener("loop", i.onLoop), i.setConfig(a), i
                        }
                        return (0, s.Z)(t, [{
                            key: "weight",
                            get: function() {
                                return this.action.getEffectiveWeight()
                            }
                        }, {
                            key: "enabled",
                            get: function() {
                                return this.action.enabled
                            }
                        }, {
                            key: "isEffective",
                            get: function() {
                                return this.action.enabled && this.action.getEffectiveWeight() > 0 && this.action.time > 0
                            }
                        }]), t
                    }(P());

                function B(e) {
                    return X.apply(this, arguments)
                }

                function X() {
                    return (X = (0, H.Z)((0, _.Z)().mark((function e(n) {
                        return (0, _.Z)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", new Promise((function(e) {
                                        setTimeout(e, n)
                                    })));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }
                var K = new WeakMap,
                    V = new WeakMap,
                    J = new WeakMap,
                    Q = new WeakMap,
                    q = function(e) {
                        (0, u.Z)(t, e);
                        var n = (0, d.Z)(t);

                        function t(e, o, r) {
                            var s, u, d, f, g, v, Z, y;
                            ((0, c.Z)(this, t), v = n.call(this), (0, h.Z)((0, l.Z)(v), "name", null), (0, h.Z)((0, l.Z)(v), "actionMap", new Map), (0, h.Z)((0, l.Z)(v), "scene", null), (0, h.Z)((0, l.Z)(v), "hall", null), (0, h.Z)((0, l.Z)(v), "loop", !1), (0, h.Z)((0, l.Z)(v), "options", null), (0, h.Z)((0, l.Z)(v), "idle", null), (0, h.Z)((0, l.Z)(v), "deepIdle1DeltaTime", null), (0, h.Z)((0, l.Z)(v), "deepIdle1", null), (0, h.Z)((0, l.Z)(v), "morphTargets", []), (0, h.Z)((0, l.Z)(v), "defaultMorphDict", new Map), (0, h.Z)((0, l.Z)(v), "talkMorphTargetNames", null), (0, h.Z)((0, l.Z)(v), "blinkMorphTargetNames", null), (0, h.Z)((0, l.Z)(v), "talkVolume", 1), (0, h.Z)((0, l.Z)(v), "isTalking", !1), (0, h.Z)((0, l.Z)(v), "toPlayTalkMorphNames", {}), (0, h.Z)((0, l.Z)(v), "clock", new p.SUY), (0, h.Z)((0, l.Z)(v), "mixer", null), (0, h.Z)((0, l.Z)(v), "lastActionTime", Date.now()), (0, h.Z)((0, l.Z)(v), "renderFns", []), (0, h.Z)((0, l.Z)(v), "baseActionUrl", null), (0, h.Z)((0, l.Z)(v), "preActions", []), (0, h.Z)((0, l.Z)(v), "loopedActions", []), (0, h.Z)((0, l.Z)(v), "postActions", []), (0, h.Z)((0, l.Z)(v), "onAddToHall", (function() {
                                var e;
                                if (v.options.blinkMorphNames && v.blinkEyes(v.options.blinkMorphNames), null !== (e = v.options.idleActions) && void 0 !== e && e[0]) {
                                    var n, t = (0, i.Z)(v.options.idleActions);
                                    try {
                                        for (t.s(); !(n = t.n()).done;) {
                                            var o = n.value,
                                                a = v.actionMap.get(o);
                                            null == a || a.setConfig({
                                                loop: p.YKA,
                                                repetitions: 1 / 0
                                            })
                                        }
                                    } catch (e) {
                                        t.e(e)
                                    } finally {
                                        t.f()
                                    }
                                    v.playAction(v.options.idleActions[Math.random() * v.options.idleActions.length | 0])
                                }
                                v.loop || (v.loop = !0, (0, Y.Z)((0, l.Z)(v), K).call((0, l.Z)(v), (function() {
                                    var e, n = v.clock.getDelta();
                                    null === (e = v.mixer) || void 0 === e || e.update(n)
                                })))
                            })), (0, j.Z)((0, l.Z)(v), K, {
                                writable: !0,
                                value: function(e) {
                                    var n;
                                    null === (n = v.hall) || void 0 === n || n.addRenderFn(e), v.renderFns.push(e)
                                }
                            }), (0, j.Z)((0, l.Z)(v), V, {
                                writable: !0,
                                value: function(e) {
                                    var n, t;
                                    null === (n = v.hall) || void 0 === n || n.removeRenderFn(e), null === (t = v.renderFns) || void 0 === t || t.splice(v.renderFns.indexOf(e), 1)
                                }
                            }), (0, h.Z)((0, l.Z)(v), "isPreAction", (function(e) {
                                return v.preActions.includes(e)
                            })), (0, h.Z)((0, l.Z)(v), "isPostAction", (function(e) {
                                return v.postActions.includes(e)
                            })), (0, h.Z)((0, l.Z)(v), "isLoopAction", (function(e) {
                                return v.loopedActions.includes(e)
                            })), (0, h.Z)((0, l.Z)(v), "isIdleAction", (function(e) {
                                return v.idle.includes(e)
                            })), (0, h.Z)((0, l.Z)(v), "isWeightAction", (function(e) {
                                return v.getWeightActionNames().includes(e)
                            })), (0, h.Z)((0, l.Z)(v), "isExtraAction", (function(e) {
                                return v.extraActions.includes(e)
                            })), (0, h.Z)((0, l.Z)(v), "isMainAction", (function(e) {
                                return v.mainActions.includes(e)
                            })), (0, h.Z)((0, l.Z)(v), "getPreAction", (function(e) {
                                var n = v.loopedActions.findIndex((function(n) {
                                    return n === e
                                }));
                                return v.preActions[n]
                            })), (0, h.Z)((0, l.Z)(v), "getLoopAction", (function(e) {
                                var n = v.preActions.findIndex((function(n) {
                                    return n === e
                                }));
                                return v.loopedActions[n]
                            })), (0, h.Z)((0, l.Z)(v), "getPostAction", (function(e) {
                                var n = v.loopedActions.findIndex((function(n) {
                                    return n === e
                                }));
                                return v.postActions[n]
                            })), (0, h.Z)((0, l.Z)(v), "getExtraAction", (function(e) {
                                var n = v.mainActions.findIndex((function(n) {
                                    return n === e
                                }));
                                return v.extraActions[n]
                            })), (0, h.Z)((0, l.Z)(v), "getMainAction", (function(e) {
                                var n = v.extraActions.findIndex((function(n) {
                                    return n === e
                                }));
                                return v.mainActions[n]
                            })), (0, h.Z)((0, l.Z)(v), "allAnimations", new Set), (0, h.Z)((0, l.Z)(v), "mixAnimation", (function(e, n) {
                                if (v.mixer || (v.mixer = new p.Xcj(v.scene)), e && 0 !== e.length) {
                                    var t, o = (0, l.Z)(v).mixer,
                                        a = (0, i.Z)(e);
                                    try {
                                        var r = function() {
                                            var e, a = t.value,
                                                i = a.name.startsWith("Armature|") ? a.name.replace("Armature|", "") : a.name;
                                            console.log("clip.name ===>", a.name), v.isPreAction(a.name) || v.isPostAction(a.name) || v.isExtraAction(a.name) || v.allAnimations.add(a.name);
                                            var r = new G(o.clipAction(a), i);
                                            if (r.isTemp = n, null !== (e = v.idle) && void 0 !== e && e.length) {
                                                v.loopedActions.includes(i) ? v.isExtraAction(i) || r.on("loop", (function() {
                                                    if (v.isWeightAction(i)) {
                                                        var e = Date.now() - v.lastActionTime;
                                                        if (!v.isTalking && e > v.deepIdle1DeltaTime && v.deepIdle1) {
                                                            if (i !== v.deepIdle1) {
                                                                var n = v.getPreAction(v.deepIdle1);
                                                                n ? v.playAction(n) : v.playAction(v.deepIdle1, 1)
                                                            }
                                                        } else if (v.isIdleAction(i)) {
                                                            var t = v.idle[Math.random() * v.idle.length | 0];
                                                            i !== t && v.playAction(t)
                                                        }
                                                    }
                                                })) : r.on("finish", (function() {
                                                    v.isExtraAction(i) || (r.isTemp && setTimeout((function() {
                                                        v.actionMap.delete(i), r.dispose()
                                                    }), 1e3), v.isWeightAction(i) && (v.isPreAction(i) ? v.playAction(v.getLoopAction(i), 0) : v.playAction(v.idle[Math.random() * v.idle.length | 0])))
                                                }))
                                            }
                                            v.actionMap.set(i, r)
                                        };
                                        for (a.s(); !(t = a.n()).done;) r()
                                    } catch (e) {
                                        a.e(e)
                                    } finally {
                                        a.f()
                                    }
                                }
                            })), (0, h.Z)((0, l.Z)(v), "getAction", (function(e) {
                                return v.actionMap.get(e)
                            })), (0, h.Z)((0, l.Z)(v), "getWeightActions", (function(e) {
                                var n = [];
                                return v.actionMap.forEach((function(t) {
                                    t.name !== e && t.isEffective && n.push(t)
                                })), n
                            })), (0, h.Z)((0, l.Z)(v), "getWeightActionNames", (function(e) {
                                return v.getWeightActions(e).map((function(e) {
                                    return e.name
                                }))
                            })), (0, h.Z)((0, l.Z)(v), "breakDeepIdle", (0, H.Z)((0, _.Z)().mark((function e() {
                                var n;
                                return (0, _.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!v.deepIdle1 || !v.isWeightAction(v.deepIdle1)) {
                                                e.next = 12;
                                                break
                                            }
                                            if (v.lastActionTime = Date.now(), !(n = v.getPostAction(v.deepIdle1))) {
                                                e.next = 8;
                                                break
                                            }
                                            return console.log("breakDeepIdle=>", v.getWeightActionNames()), e.next = 7, v.playAction(n);
                                        case 7:
                                            return e.abrupt("return", e.sent);
                                        case 8:
                                            return v.playAction(v.idle[Math.random() * v.idle.length | 0], .5), e.next = 11, B(350);
                                        case 11:
                                            return e.abrupt("return", e.sent);
                                        case 12:
                                            v.lastActionTime = Date.now();
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))), (0, h.Z)((0, l.Z)(v), "playDeepIdle1", (0, H.Z)((0, _.Z)().mark((function e() {
                                var n;
                                return (0, _.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (v.deepIdle1) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            if (!v.isWeightAction(v.deepIdle1)) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 4:
                                            return e.next = 6, v.breakTalk();
                                        case 6:
                                            (n = v.getPreAction(v.deepIdle1)) ? v.playAction(n): v.playAction(v.deepIdle1, 1), v.lastActionTime = Date.now() - v.deepIdle1DeltaTime;
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))), (0, h.Z)((0, l.Z)(v), "breakTalk", (0, H.Z)((0, _.Z)().mark((function e() {
                                var n;
                                return (0, _.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!v.isTalking) {
                                                e.next = 5;
                                                break
                                            }
                                            return null === (n = (0, Y.Z)((0, l.Z)(v), J)) || void 0 === n || n.stop(), v.isTalking = !1, e.next = 5, v.resetTalkMorph();
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))), (0, h.Z)((0, l.Z)(v), "playAction", function() {
                                var e = (0, H.Z)((0, _.Z)().mark((function e(n) {
                                    var t, o, a, r, c, s, l, u, d, h, f, m, g, Z, y = arguments;
                                    return (0, _.Z)().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (o = y.length > 1 && void 0 !== y[1] ? y[1] : .35, a = v.getExtraAction(n), !v.baseActionUrl) {
                                                    e.next = 9;
                                                    break
                                                }
                                                if (r = v.loadJsonAction(n, !v.loopedActions.includes(n)), !a) {
                                                    e.next = 7;
                                                    break
                                                }
                                                return e.next = 7, v.loadJsonAction(a, !0);
                                            case 7:
                                                return e.next = 9, r;
                                            case 9:
                                                if (c = v.actionMap.get(n)) {
                                                    e.next = 13;
                                                    break
                                                }
                                                return console.warn("未找到动作: ".concat(n)), e.abrupt("return", Promise.reject(new Error("未找到动作: ".concat(n))));
                                            case 13:
                                                if ((s = v.isLoopAction(n)) && c.setConfig({
                                                        loop: p.YKA,
                                                        repetitions: 1 / 0
                                                    }), !(l = v.getWeightActions()).length) {
                                                    e.next = 49;
                                                    break
                                                }
                                                u = (0, i.Z)(l), e.prev = 18, u.s();
                                            case 20:
                                                if ((d = u.n()).done) {
                                                    e.next = 39;
                                                    break
                                                }
                                                if ((h = d.value) === c) {
                                                    e.next = 37;
                                                    break
                                                }
                                                if (!(f = v.getPostAction(h.name)) || f === n) {
                                                    e.next = 35;
                                                    break
                                                }
                                                if (!v.isExtraAction(f)) {
                                                    e.next = 31;
                                                    break
                                                }
                                                if (!v.baseActionUrl) {
                                                    e.next = 29;
                                                    break
                                                }
                                                return e.next = 29, v.loadJsonAction(f, !0);
                                            case 29:
                                                return h.crossFadeTo(v.actionMap.get(f), 0), e.abrupt("continue", 37);
                                            case 31:
                                                return v.playAction(f, .1), e.next = 34, B(500);
                                            case 34:
                                                return e.abrupt("return", v.playAction(n, o));
                                            case 35:
                                                console.log("prev action name: ", h.name), h.crossFadeTo(c, o);
                                            case 37:
                                                e.next = 20;
                                                break;
                                            case 39:
                                                e.next = 44;
                                                break;
                                            case 41:
                                                e.prev = 41, e.t0 = e.catch(18), u.e(e.t0);
                                            case 44:
                                                return e.prev = 44, u.f(), e.finish(44);
                                            case 47:
                                                e.next = 50;
                                                break;
                                            case 49:
                                                c.play();
                                            case 50:
                                                if (a && (m = v.actionMap.get(a), s && (null == m || m.setConfig({
                                                        loop: p.YKA,
                                                        repetitions: 1 / 0
                                                    })), null == m || m.play()), g = v.getPreAction(v.deepIdle1), Z = v.getPostAction(v.deepIdle1), null !== (t = v.idle) && void 0 !== t && t.includes(n) || v.deepIdle1 === n || g === n || Z === n || (v.lastActionTime = Date.now()), !s) {
                                                    e.next = 56;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 56:
                                                return e.abrupt("return", c.waitFinishOrBreak());
                                            case 57:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [18, 41, 44, 47]
                                    ])
                                })));
                                return function(n) {
                                    return e.apply(this, arguments)
                                }
                            }()), (0, h.Z)((0, l.Z)(v), "resolveTalkMorphNames", (function(e) {
                                v.toPlayTalkMorphNames = {};
                                for (var n = 0; n < e.length; n++) {
                                    var t = e[n];
                                    "-" !== t && "_" !== t && (v.toPlayTalkMorphNames[t] = n)
                                }
                            })), (0, h.Z)((0, l.Z)(v), "resetTalkMorph", (function(e) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 150;
                                e || (e = v.talkMorphTargetNames);
                                var t, o = v.morphTargets.filter((function(n) {
                                        return !e || e.includes(n.name)
                                    })),
                                    a = [],
                                    r = (0, i.Z)(o);
                                try {
                                    for (r.s(); !(t = r.n()).done;)
                                        for (var c = t.value, s = v.defaultMorphDict.get(c), u = 0, d = Object.entries(v.toPlayTalkMorphNames); u < d.length; u++) {
                                            var h = (0, O.Z)(d[u], 1),
                                                f = h[0],
                                                m = c.morphTargetDictionary[f];
                                            void 0 !== m && c.morphTargetInfluences[m] !== s[m] && a.push([c, m, new p.lfu([0, n], [c.morphTargetInfluences[m], s[m]], 1, new Float32Array(1))])
                                        }
                                } catch (e) {
                                    r.e(e)
                                } finally {
                                    r.f()
                                }
                                return a.length ? new Promise((function(e) {
                                    var t = Date.now();
                                    (0, Y.Z)((0, l.Z)(v), K).call((0, l.Z)(v), (function o() {
                                        var i = Date.now() - t;
                                        i > n && (i = n);
                                        for (var r = 0, c = a; r < c.length; r++) {
                                            var s = (0, O.Z)(c[r], 3),
                                                u = s[0],
                                                d = s[1],
                                                h = s[2];
                                            u.morphTargetInfluences[d] = h.evaluate(i)[0]
                                        }
                                        i === n && ((0, Y.Z)((0, l.Z)(v), V).call((0, l.Z)(v), o), e(!0))
                                    }))
                                })) : Promise.resolve(!0)
                            })), (0, j.Z)((0, l.Z)(v), J, {
                                writable: !0,
                                value: null
                            }), (0, h.Z)((0, l.Z)(v), "playTalk", function() {
                                var e = (0, H.Z)((0, _.Z)().mark((function e(n, t, o) {
                                    var a, r, c, s, u, d, h, p, f, g, Z, y, b, x, A = arguments;
                                    return (0, _.Z)().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (a = A.length > 3 && void 0 !== A[3] ? A[3] : 1, r = A.length > 4 && void 0 !== A[4] ? A[4] : 0, c = A.length > 5 && void 0 !== A[5] ? A[5] : {}, v.lastActionTime = Date.now(), !v.isTalking) {
                                                    e.next = 14;
                                                    break
                                                }
                                                return console.log("isTalking", (0, Y.Z)((0, l.Z)(v), J)), null === (s = (0, Y.Z)((0, l.Z)(v), J)) || void 0 === s || s.stop(), e.next = 9, v.resetTalkMorph(o);
                                            case 9:
                                                return e.next = 11, B(150);
                                            case 11:
                                                return e.next = 13, v.playTalk(n, t, o, a, r);
                                            case 13:
                                                return e.abrupt("return");
                                            case 14:
                                                if (v.isTalking = !0, o || (o = v.talkMorphTargetNames), u = v.morphTargets.filter((function(e) {
                                                        return !o || o.includes(e.name)
                                                    })), v.emit("onBeforePlayTalk", u), d = Date.now(), h = function e() {
                                                        var n = Date.now(),
                                                            o = Math.ceil((n - d + r) / (1e3 / 30));
                                                        if (o >= 0 && o < (null == t ? void 0 : t.length)) {
                                                            var c, s = t[o],
                                                                h = (0, i.Z)(u);
                                                            try {
                                                                for (h.s(); !(c = h.n()).done;)
                                                                    for (var p = c.value, f = 0, m = Object.entries(v.toPlayTalkMorphNames); f < m.length; f++) {
                                                                        var g = (0, O.Z)(m[f], 2),
                                                                            Z = g[0],
                                                                            y = g[1];
                                                                        void 0 !== p.morphTargetDictionary[Z] && (p.morphTargetInfluences[p.morphTargetDictionary[Z]] = s[y] * a)
                                                                    }
                                                            } catch (e) {
                                                                h.e(e)
                                                            } finally {
                                                                h.f()
                                                            }
                                                        } else o >= 0 && (0, Y.Z)((0, l.Z)(v), V).call((0, l.Z)(v), e)
                                                    }, "string" == typeof c && (c = {
                                                        action: c
                                                    }), c = c.action || c.loopAction || c.onceAction, y = v.getExtraAction(c), b = v.isLoopAction(c), e.prev = 24, c && b && (p = v.getPreAction(c), f = v.getPostAction(c)), y && b && (g = v.getPreAction(y), Z = v.getPostAction(y)), !c || !v.baseActionUrl) {
                                                    e.next = 37;
                                                    break
                                                }
                                                return x = [], p && x.push(v.loadJsonAction(p, !0)), c && x.push(v.loadJsonAction(c, !b)), f && x.push(v.loadJsonAction(f, !0)), g && x.push(v.loadJsonAction(g, !0)), y && x.push(v.loadJsonAction(y, !b)), Z && x.push(v.loadJsonAction(Z, !0)), e.next = 37, Promise.all(x);
                                            case 37:
                                                if (!c || !b || v.getWeightActionNames().includes(c)) {
                                                    e.next = 44;
                                                    break
                                                }
                                                if (!p) {
                                                    e.next = 43;
                                                    break
                                                }
                                                return e.next = 41, v.playAction(p);
                                            case 41:
                                                e.next = 44;
                                                break;
                                            case 43:
                                                v.playAction(c);
                                            case 44:
                                                return console.log("isTalking ==> true"), e.next = 47, new Promise((function(e, o) {
                                                    var a = (0, D.Z)((0, l.Z)(v), J, m().createInnerAudioContext());
                                                    a.src = n, a.startTime = 0, a.volume = v.talkVolume, a.onPlay((function() {
                                                        u.length && null != t && t.length && (d = Date.now(), (0, Y.Z)((0, l.Z)(v), K).call((0, l.Z)(v), h)), c && !b && (console.log("说话时播放"), v.playAction(c))
                                                    })), a.onEnded((0, H.Z)((0, _.Z)().mark((function n() {
                                                        return (0, _.Z)().wrap((function(n) {
                                                            for (;;) switch (n.prev = n.next) {
                                                                case 0:
                                                                    u.length && (0, Y.Z)((0, l.Z)(v), V).call((0, l.Z)(v), h), a.destroy(), e(!0);
                                                                case 3:
                                                                case "end":
                                                                    return n.stop()
                                                            }
                                                        }), n)
                                                    })))), a.onError(function() {
                                                        var e = (0, H.Z)((0, _.Z)().mark((function e(n) {
                                                            return (0, _.Z)().wrap((function(e) {
                                                                for (;;) switch (e.prev = e.next) {
                                                                    case 0:
                                                                        u.length && (0, Y.Z)((0, l.Z)(v), V).call((0, l.Z)(v), h), a.destroy(), o(n);
                                                                    case 3:
                                                                    case "end":
                                                                        return e.stop()
                                                                }
                                                            }), e)
                                                        })));
                                                        return function(n) {
                                                            return e.apply(this, arguments)
                                                        }
                                                    }()), a.onStop((0, H.Z)((0, _.Z)().mark((function n() {
                                                        return (0, _.Z)().wrap((function(n) {
                                                            for (;;) switch (n.prev = n.next) {
                                                                case 0:
                                                                    u.length && (0, Y.Z)((0, l.Z)(v), V).call((0, l.Z)(v), h), a.destroy(), e(!0);
                                                                case 3:
                                                                case "end":
                                                                    return n.stop()
                                                            }
                                                        }), n)
                                                    })))), a.play()
                                                }));
                                            case 47:
                                                if (console.log("player talk end"), console.log("postAction", f, v.isWeightAction(c)), !c || !v.isWeightAction(c)) {
                                                    e.next = 56;
                                                    break
                                                }
                                                if (!f) {
                                                    e.next = 55;
                                                    break
                                                }
                                                return e.next = 53, v.playAction(f);
                                            case 53:
                                                e.next = 56;
                                                break;
                                            case 55:
                                                b && v.playAction(v.idle[Math.random() * v.idle.length | 0]);
                                            case 56:
                                                e.next = 61;
                                                break;
                                            case 58:
                                                e.prev = 58, e.t0 = e.catch(24), v.emit("onErrorPlayTalk", u, e.t0);
                                            case 61:
                                                return e.prev = 61, v.lastActionTime = Date.now(), v.isTalking = !1, console.log("isTalking ==> false"), v.emit("onAfterPlayTalk", u), e.finish(61);
                                            case 67:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [24, 58, 61, 67]
                                    ])
                                })));
                                return function(n, t, o) {
                                    return e.apply(this, arguments)
                                }
                            }()), (0, h.Z)((0, l.Z)(v), "blinkEyes", (function(e, n) {
                                n || (n = v.blinkMorphTargetNames);
                                for (var t = v.morphTargets.filter((function(e) {
                                        return !n || n.includes(e.name)
                                    })), o = [], r = 0; r < 3; r++) {
                                    for (var c = W(180, 240), s = 0; s < c; s++) o.push(0);
                                    o.push.apply(o, (0, a.Z)(U))
                                }
                                var u = U.length / 2 | 0,
                                    d = Date.now(),
                                    h = 0,
                                    p = function n() {
                                        var a = Date.now(),
                                            r = Math.ceil((a - d) / (1e3 / 30));
                                        d = a, h = (h + r) % o.length;
                                        var c, s = (0, i.Z)(t);
                                        try {
                                            for (s.s(); !(c = s.n()).done;) {
                                                var u, p = c.value,
                                                    m = (0, i.Z)(e);
                                                try {
                                                    for (m.s(); !(u = m.n()).done;) {
                                                        var g = u.value;
                                                        if (void 0 !== p.morphTargetDictionary[g]) {
                                                            var Z = o[h];
                                                            if (p.morphTargetInfluences[p.morphTargetDictionary[g]] = Z, v.isWeightAction(v.deepIdle1) && 0 === Z) return (0, Y.Z)((0, l.Z)(v), V).call((0, l.Z)(v), n), d = Date.now(), h = 0, void(0, Y.Z)((0, l.Z)(v), K).call((0, l.Z)(v), f)
                                                        }
                                                    }
                                                } catch (e) {
                                                    m.e(e)
                                                } finally {
                                                    m.f()
                                                }
                                            }
                                        } catch (e) {
                                            s.e(e)
                                        } finally {
                                            s.f()
                                        }
                                    },
                                    f = function n() {
                                        var o = Date.now(),
                                            a = Math.ceil((o - d) / (1e3 / 30));
                                        d = o, (h += a) > u && (h = u);
                                        var r, c = (0, i.Z)(t);
                                        try {
                                            for (c.s(); !(r = c.n()).done;) {
                                                var s, p = r.value,
                                                    f = (0, i.Z)(e);
                                                try {
                                                    for (f.s(); !(s = f.n()).done;) {
                                                        var g = s.value;
                                                        if (void 0 !== p.morphTargetDictionary[g]) {
                                                            var Z = U[h];
                                                            if (p.morphTargetInfluences[p.morphTargetDictionary[g]] = Z, !v.isWeightAction(v.deepIdle1) && h === u) return (0, Y.Z)((0, l.Z)(v), V).call((0, l.Z)(v), n), d = Date.now(), h = u, void(0, Y.Z)((0, l.Z)(v), K).call((0, l.Z)(v), m)
                                                        }
                                                    }
                                                } catch (e) {
                                                    f.e(e)
                                                } finally {
                                                    f.f()
                                                }
                                            }
                                        } catch (e) {
                                            c.e(e)
                                        } finally {
                                            c.f()
                                        }
                                    },
                                    m = function n() {
                                        var o = Date.now(),
                                            a = Math.ceil((o - d) / (1e3 / 30));
                                        d = o, (h += a) > U.length - 1 && (h = U.length - 1);
                                        var r, c = (0, i.Z)(t);
                                        try {
                                            for (c.s(); !(r = c.n()).done;) {
                                                var s, u = r.value,
                                                    f = (0, i.Z)(e);
                                                try {
                                                    for (f.s(); !(s = f.n()).done;) {
                                                        var m = s.value;
                                                        if (void 0 !== u.morphTargetDictionary[m]) {
                                                            var g = U[h];
                                                            if (u.morphTargetInfluences[u.morphTargetDictionary[m]] = g, !v.isWeightAction(v.deepIdle1) && h === U.length - 1) return (0, Y.Z)((0, l.Z)(v), V).call((0, l.Z)(v), n), d = Date.now(), h = 0, void(0, Y.Z)((0, l.Z)(v), K).call((0, l.Z)(v), p)
                                                        }
                                                    }
                                                } catch (e) {
                                                    f.e(e)
                                                } finally {
                                                    f.f()
                                                }
                                            }
                                        } catch (e) {
                                            c.e(e)
                                        } finally {
                                            c.f()
                                        }
                                    };
                                (0, Y.Z)((0, l.Z)(v), K).call((0, l.Z)(v), p)
                            })), (0, j.Z)((0, l.Z)(v), Q, {
                                writable: !0,
                                value: null
                            }), (0, h.Z)((0, l.Z)(v), "dispose", (function() {
                                var e, n, t, o;
                                null === (e = (0, Y.Z)((0, l.Z)(v), J)) || void 0 === e || e.stop(), v.renderFns.forEach((function(e) {
                                    var n;
                                    null === (n = v.hall) || void 0 === n || n.removeRenderFn(e)
                                })), v.renderFns = null, null === (n = v.mixer) || void 0 === n || n.stopAllAction(), v.actionMap.forEach((function(e) {
                                    e.dispose()
                                })), v.actionMap.clear(), null === (t = v.mixer) || void 0 === t || t.uncacheRoot(v.scene), v.mixer = null;
                                null === (o = v.hall) || void 0 === o || o.removeCharacter(v.name),
                                    function e(n) {
                                        var t, o, a = null === (t = n.children) || void 0 === t ? void 0 : t.filter((function(e) {
                                            return !!e
                                        }));
                                        a.forEach((function(n) {
                                            var t, o, a, i, r;
                                            n.children.length ? e(n) : (null === (t = n.geometry) || void 0 === t || null === (o = t.dispose) || void 0 === o || o.call(t), null === (a = n.material) || void 0 === a || null === (i = a.dispose) || void 0 === i || i.call(a), null === (r = n.clear) || void 0 === r || r.call(n))
                                        })), null == n || null === (o = n.clear) || void 0 === o || o.call(n), a = null
                                    }(v.scene), v.scene = null, v.removeAllListeners(), v.morphTargets = null, v.idle = null, v.defaultMorphDict.clear(), v.clock = null, v.hall = null, v.toPlayTalkMorphNames = null, v.options = null, (0, D.Z)((0, l.Z)(v), J, null), (0, D.Z)((0, l.Z)(v), Q, null)
                            })), (0, h.Z)((0, l.Z)(v), "loadJsonAction", function() {
                                var e = (0, H.Z)((0, _.Z)().mark((function e(n, t) {
                                    var o, a, i;
                                    return (0, _.Z)().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (!v.actionMap.has(n)) {
                                                    e.next = 2;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 2:
                                                if (v.baseActionUrl) {
                                                    e.next = 4;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 4:
                                                return o = v.baseActionUrl + n + ".json", console.log("loadJsonAction =>", o, n, t), e.next = 8, new Promise((function(e, n) {
                                                    m().request({
                                                        url: o,
                                                        method: "GET",
                                                        success: function(n) {
                                                            e(n.data)
                                                        },
                                                        fail: n
                                                    })
                                                }));
                                            case 8:
                                                a = e.sent, console.log("obj==>", a), i = p.m7l.parse(a[0]), console.log("actions==>", i), v.mixAnimation([i], t);
                                            case 13:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(n, t) {
                                    return e.apply(this, arguments)
                                }
                            }()), v.name = e, v.scene = o.scene, v.options = r || {}, v.idle = null == r ? void 0 : r.idleActions, v.loopedActions = null !== (s = null == r ? void 0 : r.loopedActions) && void 0 !== s ? s : [], v.preActions = null !== (u = null == r ? void 0 : r.preActions) && void 0 !== u ? u : [], v.postActions = null !== (d = null == r ? void 0 : r.postActions) && void 0 !== d ? d : [], v.extraActions = null !== (f = null == r ? void 0 : r.extraActions) && void 0 !== f ? f : [], v.mainActions = null !== (g = null == r ? void 0 : r.mainActions) && void 0 !== g ? g : [], v.deepIdle1 = null == r ? void 0 : r.deepIdle1, v.deepIdle1DeltaTime = null == r ? void 0 : r.deepIdle1DeltaTime, console.log(o.animations), v.mixAnimation(o.animations), v.morphTargets = function e(n) {
                                var t, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                                return n.morphTargetDictionary && o.push(n), null === (t = n.children) || void 0 === t || t.forEach((function(n) {
                                    return e(n, o)
                                })), o
                            }(o.scene), console.log("morphTargets ===>", v.morphTargets), v.resolveDefaultMorph(), null != r && r.talkMorphNames ? v.resolveTalkMorphNames(r.talkMorphNames) : v.resolveTalkMorphNames(z), r) && (r.baseActionUrl && (v.baseActionUrl = r.baseActionUrl), r.position && (Z = v.scene.position).set.apply(Z, (0, a.Z)(r.position)), r.scale && (y = v.scene.scale).set.apply(y, (0, a.Z)(r.scale)), r.talkMorphTargetNames && (v.talkMorphTargetNames = r.talkMorphTargetNames), r.blinkMorphTargetNames && (v.blinkMorphTargetNames = r.blinkMorphTargetNames), r.talkVolume && (v.talkVolume = r.talkVolume));
                            return v
                        }
                        return (0, s.Z)(t, [{
                            key: "resolveDefaultMorph",
                            value: function() {
                                var e = this;
                                this.morphTargets.forEach((function(n) {
                                    e.defaultMorphDict.set(n, n.morphTargetInfluences ? Array.from(n.morphTargetInfluences) : new Array(Object.keys(n.morphTargetDictionary).length).fill(0))
                                }))
                            }
                        }, {
                            key: "center",
                            get: function() {
                                if ((0, Y.Z)(this, Q)) return (0, Y.Z)(this, Q);
                                var e = new p.ZzF;
                                e.expandByObject(this.scene);
                                var n = new p.Pa4;
                                return e.getCenter(n), (0, D.Z)(this, Q, n), n
                            }
                        }]), t
                    }(P())
            },
            8982: function(e, n, t) {
                "use strict";
                t.d(n, {
                    RR: function() {
                        return c
                    },
                    nk: function() {
                        return r
                    }
                });
                var o = t(2954),
                    a = t.n(o),
                    i = "xyy_auth_key";

                function r() {
                    var e = a().getStorageSync(i);
                    if (e) {
                        var n;
                        try {
                            n = JSON.parse(e)
                        } catch (e) {
                            console.error("getAuthStorage: ", e)
                        }
                        return n
                    }
                }

                function c(e) {
                    var n = JSON.stringify(e);
                    a().setStorageSync(i, n)
                }
            },
            6261: function(e, n, t) {
                "use strict";
                t.d(n, {
                    G3: function() {
                        return d
                    },
                    GC: function() {
                        return h
                    }
                });
                var o = t(1413),
                    a = t(6048),
                    i = t(2954),
                    r = t.n(i),
                    c = t(5394),
                    s = new a.ZP({
                        host: "cn-beijing.log.aliyuncs.com",
                        project: "aicplatform-cluster",
                        logstore: "character-ip-terminal",
                        time: 1,
                        count: 10,
                        topic: "mini_program",
                        source: "source",
                        tags: {
                            tags: "tags"
                        }
                    }),
                    l = function() {
                        return r().getStorageSync("trackAuthCode") || ""
                    },
                    u = (l(), (0, c.rh)(), function() {
                        return {
                            APIVersion: "",
                            __topic__: "mini_program",
                            userid: l(),
                            appid: (0, c.rh)(),
                            app_type: "mini_program",
                            deviceid: ""
                        }
                    }),
                    d = function(e, n) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        s.send((0, o.Z)((0, o.Z)({}, u()), {}, {
                            event: e,
                            value: n
                        }, t))
                    },
                    h = function(e, n) {
                        s.send((0, o.Z)((0, o.Z)({}, u()), {}, {
                            event: e,
                            value: 1
                        }, n))
                    }
            },
            7863: function(e, n, t) {
                "use strict";
                t.d(n, {
                    R: function() {
                        return c
                    }
                });
                var o = t(4165),
                    a = t(5861),
                    i = t(2954),
                    r = t.n(i);

                function c(e, n) {
                    return s.apply(this, arguments)
                }

                function s() {
                    return (s = (0, a.Z)((0, o.Z)().mark((function e(n, t) {
                        var a, i, c;
                        return (0, o.Z)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = r().getFileSystemManager(), t || (t = n.replace(/^.+\/([^\/|\.]+)\.zip$/, "$1.glb")), i = "".concat(r().env.USER_DATA_PATH, "/glb/"), e.prev = 3, a.statSync(i + t), e.abrupt("return", i + t);
                                case 8:
                                    return e.prev = 8, e.t0 = e.catch(3), e.next = 12, new Promise((function(e, t) {
                                        r().downloadFile({
                                            url: n,
                                            success: function(n) {
                                                var t = n.tempFilePath;
                                                e(t), console.log("_tempFilePath", t)
                                            },
                                            fail: function(e) {
                                                t(e)
                                            }
                                        })
                                    }));
                                case 12:
                                    return c = e.sent, e.abrupt("return", new Promise((function(e, n) {
                                        a.unzip({
                                            zipFilePath: c,
                                            targetPath: i,
                                            success: function() {
                                                e(i + t)
                                            },
                                            fail: function(e) {
                                                console.error(e), n(e)
                                            },
                                            complete: function() {
                                                a.removeSavedFile({
                                                    filePath: c
                                                })
                                            }
                                        })
                                    })));
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [3, 8]
                        ])
                    })))).apply(this, arguments)
                }
            },
            9686: function(e, n, t) {
                "use strict";
                t.d(n, {
                    D: function() {
                        return i
                    }
                });
                for (var o = [], a = 0; a < 256; a++) o[a] = (a < 16 ? "0" : "") + a.toString(16);

                function i() {
                    var e = 4294967295 * Math.random() | 0,
                        n = 4294967295 * Math.random() | 0,
                        t = 4294967295 * Math.random() | 0,
                        a = 4294967295 * Math.random() | 0;
                    return (o[255 & e] + o[e >> 8 & 255] + o[e >> 16 & 255] + o[e >> 24 & 255] + "-" + o[255 & n] + o[n >> 8 & 255] + "-" + o[n >> 16 & 15 | 64] + o[n >> 24 & 255] + "-" + o[63 & t | 128] + o[t >> 8 & 255] + "-" + o[t >> 16 & 255] + o[t >> 24 & 255] + o[255 & a] + o[a >> 8 & 255] + o[a >> 16 & 255] + o[a >> 24 & 255]).toUpperCase()
                }
            },
            2480: function() {}
        }
    ]);