
require("../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../@babel/runtime/helpers/typeof");
(wx.webpackJsonp = wx.webpackJsonp || []).push([
    [127], {
        4795: function(n, r, t) {
            var i = t(5392),
                o = t(7506),
                a = t(7171);
             function u(e, n) {
                var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!r) {
                    if (Array.isArray(e) || (r = (0, a.Z)(e)) || n && e && "number" == typeof e.length) {
                        r && (e = r);
                        var t = 0,
                            i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return t >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[t++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, u = !0,
                    c = !1;
                return {
                    s: function() {
                        r = r.call(e)
                    },
                    n: function() {
                        var e = r.next();
                        return u = e.done, e
                    },
                    e: function(e) {
                        c = !0, o = e
                    },
                    f: function() {
                        try {
                            u || null == r.return || r.return()
                        } finally {
                            if (c) throw o
                        }
                    }
                }
            }
            var c = t(3289),
                s = t(5979),
                l = t(8436),
                d = t(6557),
                f = t(542),
                v = t(6041),
                h = t(6976),
                m = t.n(h),
                p = t(5271),
                g = t(220),
                x = t(2187),
                y = t.n(x),
                Z = t(2433),
                b = t(9615),
                j = function() {
                    return b.Z.Date.now()
                },
                S = /\s/;
            var w = function(e) {
                    for (var n = e.length; n-- && S.test(e.charAt(n)););
                    return n
                },
                N = /^\s+/;
            var I = function(e) {
                    return e ? e.slice(0, w(e) + 1).replace(N, "") : e
                },
                T = t(9572),
                G = t(3795);
            var _ = function(n) {
                    return "symbol" == e(n) || (0, G.Z)(n) && "[object Symbol]" == (0, T.Z)(n)
                },
                k = /^[-+]0x[0-9a-f]+$/i,
                C = /^0b[01]+$/i,
                A = /^0o[0-7]+$/i,
                M = parseInt;
            var P = function(e) {
                    if ("number" == typeof e) return e;
                    if (_(e)) return NaN;
                    if ((0, Z.Z)(e)) {
                        var n = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = (0, Z.Z)(n) ? n + "" : n
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = I(e);
                    var r = C.test(e);
                    return r || A.test(e) ? M(e.slice(2), r ? 2 : 8) : k.test(e) ? NaN : +e
                },
                R = Math.max,
                E = Math.min;
            var L = function(e, n, r) {
                var t, i, o, a, u, c, s = 0,
                    l = !1,
                    d = !1,
                    f = !0;
                if ("function" != typeof e) throw new TypeError("Expected a function");
                 function v(n) {
                    var r = t,
                        o = i;
                    return t = i = void 0, s = n, a = e.apply(o, r)
                }
                 function h(e) {
                    return s = e, u = setTimeout(p, n), l ? v(e) : a
                }
                 function m(e) {
                    var r = e - c;
                    return void 0 === c || r >= n || r < 0 || d && e - s >= o
                }
                 function p() {
                    var e = j();
                    if (m(e)) return g(e);
                    u = setTimeout(p, function(e) {
                        var r = n - (e - c);
                        return d ? E(r, o - (e - s)) : r
                    }(e))
                }
                 function g(e) {
                    return u = void 0, f && t ? v(e) : (t = i = void 0, a)
                }
                 function x() {
                    var e = j(),
                        r = m(e);
                    if (t = arguments, i = this, c = e, r) {
                        if (void 0 === u) return h(c);
                        if (d) return clearTimeout(u), u = setTimeout(p, n), v(c)
                    }
                    return void 0 === u && (u = setTimeout(p, n)), a
                }
                return n = P(n) || 0, (0, Z.Z)(r) && (l = !!r.leading, o = (d = "maxWait" in r) ? R(P(r.maxWait) || 0, n) : o, f = "trailing" in r ? !!r.trailing : f), x.cancel = function() {
                    void 0 !== u && clearTimeout(u), s = 0, t = c = i = u = void 0
                }, x.flush = function() {
                    return void 0 === u ? a : g(j())
                }, x
            };
            var U = function(e, n, r) {
                    var t = !0,
                        i = !0;
                    if ("function" != typeof e) throw new TypeError("Expected a function");
                    return (0, Z.Z)(r) && (t = "leading" in r ? !!r.leading : t, i = "trailing" in r ? !!r.trailing : i), L(e, n, {
                        leading: t,
                        maxWait: n,
                        trailing: i
                    })
                },
                O = t(3994),
                F = t(767);
            var H = function(n) {
                    F.Z && ((0, O.mf)(n) || console.error("useMemoizedFn expected parameter is a function, got ".concat(e(n))));
                    var r = (0, p.useRef)(n);
                    r.current = (0, p.useMemo)((function() {
                        return n
                    }), [n]);
                    var t = (0, p.useRef)(void 0);
                    return t.current || (t.current = function() {
                        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                        return r.current.apply(this, e)
                    }), t.current
                },
                D = t(3804),
                V = t(1504),
                Y = t(2676),
                z = function(e) {
                    return e.START = "start", e.STOP = "stop", e.CANCEL = "cancel", e
                }({}),
                B = function(e) {
                    var n = e.onVoiceStatusChange,
                        r = e.onTextChange,
                        t = e.handleAtList,
                        i = e.atList,
                        o = (0, p.useState)(),
                        a = (0, f.Z)(o, 2),
                        u = a[0],
                        c = a[1],
                        s = (0, p.useState)(!1),
                        l = (0, f.Z)(s, 2),
                        d = l[0],
                        h = l[1],
                        g = (0, p.useState)(!1),
                        x = (0, f.Z)(g, 2),
                        Z = x[0],
                        b = x[1],
                        j = (0, p.useState)(!1),
                        S = (0, f.Z)(j, 2),
                        w = S[0],
                        N = S[1],
                        I = (0, p.useState)(""),
                        T = (0, f.Z)(I, 2),
                        G = T[0],
                        _ = T[1],
                        k = (0, p.useState)(z.CANCEL),
                        C = (0, f.Z)(k, 2),
                        A = C[0],
                        M = C[1],
                        P = m().getRecorderManager(),
                        R = (0, p.useState)(!1),
                        E = (0, f.Z)(R, 2),
                        L = E[0],
                        O = E[1],
                        F = {
                            format: "mp3",
                            duration: 15e3
                        },
                        B = H((function(e) {
                            if (A === z.CANCEL) return m().getFileSystemManager().unlink({
                                filePath: e.tempFilePath
                            }), void n(z.CANCEL);
                            console.log(A, "~~~~~~~~~~handleOnRecorderStop~~~~~~~~~", e), n(z.STOP, e)
                        }));
                    (0, p.useEffect)((function() {
                        $()
                    }), []), P.onStop(B);
                    var $ = function() {
                            m().getStorageSync("scopeRecordPermission") ? O(!0) : m().getSetting({
                                success: function(e) {
                                    e.authSetting["scope.record"] ? (m().setStorageSync("scopeRecordPermission", "permission"), O(!0)) : O(!1)
                                }
                            })
                        },
                        J = U((function() {
                            m().authorize({
                                scope: "scope.record",
                                success: function() {
                                    m().setStorageSync("scopeRecordPermission", "permission"), O(!0)
                                },
                                fail: function(e) {
                                    console.log("~~~~~~录音授失败~~~~~~~~~", e), m().showModal({
                                        title: "提示！",
                                        confirmText: "去设置",
                                        showCancel: !1,
                                        content: "您未授权录音权限，将无法使用语音功能，请前往设置中心授权录音权限",
                                        success: function(e) {
                                            e.confirm && m().openSetting()
                                        }
                                    })
                                }
                            })
                        }), 250),
                        W = function(e) {
                            console.log("~~~~~~~~~~onTouchEnd~~~~~~~", e, "isMoveOut", Z), Z ? ((0, V.G3)("audio_cancel_pv", 1), M(z.CANCEL)) : M(z.STOP), P.stop(), h(!1), b(!1)
                        };
                    return (0, Y.jsx)(Y.Fragment, {
                        children: (0, Y.jsx)(v.G7, {
                            className: y()("bottom-operating-area-container", d && "is-on-long-press"),
                            children: (0, Y.jsxs)(v.G7, {
                                className: "area-box",
                                children: [0 === i.length ? (0, Y.jsx)(Y.Fragment, {}) : (0, Y.jsxs)(v.G7, {
                                    className: "at-box",
                                    children: [(0, Y.jsx)(v.G7, {
                                        className: "box-left",
                                        children: "发送给："
                                    }), (0, Y.jsx)(v.G7, {
                                        className: "box-right",
                                        children: i.map((function(e, n) {
                                            var r, o;
                                            return (0, Y.jsxs)(v.G7, {
                                                className: "at-item",
                                                children: [(0, Y.jsx)(v.G7, {
                                                    className: "portrait",
                                                    children: (0, Y.jsx)(v.Ee, {
                                                        src: e.avatarUrl || (null == e || null === (r = e.senderInfo) || void 0 === r ? void 0 : r.avatarUrl)
                                                    })
                                                }), (0, Y.jsx)(v.G7, {
                                                    className: "name",
                                                    children: e.nickName || (null == e || null === (o = e.senderInfo) || void 0 === o ? void 0 : o.nickName)
                                                }), (0, Y.jsx)(v.G7, {
                                                    className: "bo"
                                                }), (0, Y.jsx)(v.G7, {
                                                    className: "cancel",
                                                    onClick: function() {
                                                        t(i.filter((function(n) {
                                                            return n.id !== e.id
                                                        })))
                                                    }
                                                })]
                                            }, n)
                                        }))
                                    })]
                                }), w ? (0, Y.jsxs)(v.G7, {
                                    className: "input-handle-container",
                                    children: [(0, Y.jsxs)(v.G7, {
                                        className: "input-box",
                                        children: [(0, Y.jsx)(v.II, {
                                            placeholder: "请输入文字",
                                            "always-embed": !0,
                                            "cursor-spacing": "ios" === m().getSystemInfoSync().platform ? "100rpx" : "12rpx",
                                            onInput: function(e) {
                                                var n;
                                                _(null == e || null === (n = e.detail) || void 0 === n ? void 0 : n.value)
                                            },
                                            value: G
                                        }), G && (0, Y.jsx)(v.G7, {
                                            className: "send-icon",
                                            onClick: function() {
                                                r(G), _("")
                                            }
                                        })]
                                    }), (0, Y.jsx)(v.G7, {
                                        className: "handle-icon",
                                        onClick: function() {
                                            return N(!1)
                                        }
                                    })]
                                }) : (0, Y.jsxs)(v.G7, {
                                    className: "voice-handle-container",
                                    onTouchStart: function(e) {
                                        ! function(e) {
                                            console.log("~~~~~~~~~~onTouchStart~~~~~~~", e), c(e.touches[0])
                                        }(e)
                                    },
                                    onTouchMove: function(e) {
                                        ! function(e) {
                                            if (u) {
                                                var n = e.touches[e.touches.length - 1].clientY - u.clientY;
                                                b(Math.abs(n) > 20)
                                            }
                                        }(e)
                                    },
                                    onTouchEnd: function(e) {
                                        W(e)
                                    },
                                    onLongPress: function() {
                                        console.log("~~~~~~~~~~onLongPress~~~~~~~"), L ? (h(!0), n(z.START), P.start(F)) : J()
                                    },
                                    children: [(0, Y.jsxs)(v.G7, {
                                        className: y()("record-handle-box", "box", d && "is-press"),
                                        children: [(0, Y.jsx)(v.Ee, {
                                            src: D.zl
                                        }), (0, Y.jsx)(v.G7, {
                                            className: y()("record-tips", Z && "move-out")
                                        })]
                                    }), (0, Y.jsxs)(v.G7, {
                                        className: y()("voice-handle-box", "box", d && "is-press"),
                                        children: [(0, Y.jsxs)(v.G7, {
                                            className: "voice-box",
                                            children: [(0, Y.jsx)(v.G7, {
                                                className: "voice-icon"
                                            }), "按住 说话"]
                                        }), (0, Y.jsx)(v.G7, {
                                            className: "handle-icon",
                                            onClick: function() {
                                                return N(!0)
                                            }
                                        })]
                                    })]
                                })]
                            })
                        })
                    })
                },
                $ = t(3452),
                J = t(8897),
                W = t(8392),
                Q = function(e) {
                    var n = e.roomInfo,
                        r = e.atList,
                        t = e.atHumanId,
                        i = e.currentPlayTTSInfo,
                        o = e.handleClickMember,
                        a = (0, p.useState)(),
                        u = (0, f.Z)(a, 2),
                        l = u[0],
                        d = u[1],
                        g = (0, p.useState)(!1),
                        x = (0, f.Z)(g, 2),
                        Z = x[0],
                        b = x[1],
                        j = (0, p.useState)([{
                            left: m().pxTransform(100),
                            top: m().pxTransform(100)
                        }, {
                            left: m().pxTransform(50),
                            top: m().pxTransform(50)
                        }, {
                            left: m().pxTransform(150),
                            top: m().pxTransform(150)
                        }]),
                        S = (0, f.Z)(j, 2),
                        w = S[0],
                        N = S[1],
                        I = (0, p.useState)(new Array(6).fill(0).map((function() {
                            return {
                                left: m().pxTransform(Math.floor(34 * Math.random())),
                                top: m().pxTransform(Math.floor(18 * Math.random()))
                            }
                        }))),
                        T = (0, f.Z)(I, 2),
                        G = T[0],
                        _ = T[1],
                        k = (0, p.useRef)((function() {})),
                        C = (0, p.useRef)((function() {})),
                        A = (0, p.useRef)(null);
                    k.current = function() {
                        var e = new Array(6).fill(0).map((function() {
                            return {
                                left: m().pxTransform(Math.floor(34 * Math.random())),
                                top: m().pxTransform(Math.floor(18 * Math.random()))
                            }
                        }));
                        d(e)
                    }, C.current = function() {
                        var e = new Array(3).fill(0).map((function() {
                            return {
                                left: m().pxTransform(Math.floor(300 * Math.random())),
                                top: m().pxTransform(Math.floor(200 * Math.random()))
                            }
                        }));
                        N(e)
                    }, (0, p.useEffect)((function() {
                        if (null != n && n.humans) {
                            var e = function(e) {
                                    var n = e.characters,
                                        r = e.humans,
                                        t = e.leftCharacterIds,
                                        i = e.leftHumanIds;
                                    return {
                                        residualCharacters: n.filter((function(e) {
                                            return !t.includes(e.id)
                                        })),
                                        residualHumans: r.filter((function(e) {
                                            return !i.includes(e.id)
                                        }))
                                    }
                                }(n),
                                r = e.residualCharacters,
                                t = e.residualHumans,
                                i = [].concat((0, c.Z)(r), (0, c.Z)(t)).map((function(e, r) {
                                    return (0, s.Z)((0, s.Z)({}, e), {}, {
                                        index: r,
                                        owner: e.id === n.owner,
                                        isHuamn: t.some((function(n) {
                                            return n.id === e.id
                                        })),
                                        senderType: t.some((function(n) {
                                            return n.id === e.id
                                        })) ? "human" : "character",
                                        senderId: e.id
                                    })
                                })),
                                o = 3 - t.length,
                                a = {
                                    avatarUrl: D.d8,
                                    nickName: "",
                                    id: "invite",
                                    senderId: "invite"
                                };
                            return o > 0 && i.unshift((0, s.Z)({
                                    index: 0
                                }, a)), o > 1 && i.push((0, s.Z)({
                                    index: i.length
                                }, a)), _(i), k.current(), C.current(), A.current = setInterval((function() {
                                    k.current()
                                }), 5e3), A.current = setInterval((function() {
                                    C.current()
                                }), 1e4),
                                function() {
                                    clearInterval(A.current)
                                }
                        }
                    }), [n]), (0, h.useDidShow)((function() {
                        b(!1)
                    }));
                    var M = function(e, a) {
                        var u, c, s = r && r.length > 0 && r.some((function(n) {
                                return (null == n ? void 0 : n.senderId) == (null == e ? void 0 : e.id)
                            })),
                            d = r && r.length > 0,
                            f = t && t == e.id,
                            h = (0, $.gv)(),
                            p = (null == h ? void 0 : h.id) == e.id && t === (null == h ? void 0 : h.id),
                            g = null == e ? void 0 : e.owner,
                            x = (null == e ? void 0 : e.isHuamn) && !g,
                            Z = (null == i ? void 0 : i.senderId) == e.id;
                        return (0, Y.jsxs)(v.G7, {
                            className: y()("area-item", d && (s ? "is-at" : "no-at")),
                            onClick: function() {
                                "invite" === e.id ? n.owner === (null == h ? void 0 : h.id) ? b(!0) : m().showToast({
                                    title: "只有群管理员可以邀请好友哦！",
                                    icon: "none"
                                }) : o(e)
                            },
                            children: [f && (0, Y.jsxs)(v.G7, {
                                className: "at-tips",
                                children: ["不能@", p ? "自己" : "我", "哦"]
                            }), (0, Y.jsxs)(v.G7, {
                                className: y()("people-item", "main", g && "is-administrator", x && "is-human", Z && "is-play"),
                                style: {
                                    top: l && (null === (u = l[e.index]) || void 0 === u ? void 0 : u.top) || 0,
                                    left: l && (null === (c = l[e.index]) || void 0 === c ? void 0 : c.left) || 0
                                },
                                children: [(0, Y.jsx)(v.G7, {
                                    className: y()("image-box", !1),
                                    children: (0, Y.jsx)(v.Ee, {
                                        src: e.avatarUrl
                                    })
                                }), (0, Y.jsxs)(v.G7, {
                                    className: "name",
                                    children: [e.nickName, " "]
                                })]
                            })]
                        }, a)
                    };
                    return (0, Y.jsxs)(Y.Fragment, {
                        children: [(0, Y.jsxs)(v.G7, {
                            className: y()("people-display-area", "peoples-num-".concat(G.length)),
                            children: [function() {
                                var e = [J.Ue, J.nj, J.il];
                                return (0, Y.jsx)(Y.Fragment, {
                                    children: e.map((function(e, n) {
                                        var r, t;
                                        return (0, Y.jsxs)(v.G7, {
                                            className: "ball-item",
                                            style: {
                                                top: w && (null === (r = w[n]) || void 0 === r ? void 0 : r.top) || 0,
                                                left: w && (null === (t = w[n]) || void 0 === t ? void 0 : t.left) || 0
                                            },
                                            children: [" ", (0, Y.jsx)(v.Ee, {
                                                src: e
                                            }, n)]
                                        }, n)
                                    }))
                                })
                            }(), (0, Y.jsx)(v.G7, {
                                className: y()("area-top"),
                                children: G.filter((function(e, n) {
                                    return n % 2 == 0
                                })).map((function(e, n) {
                                    return M(e, n)
                                }))
                            }), (0, Y.jsx)(v.G7, {
                                className: y()("area-bottom"),
                                children: G.filter((function(e, n) {
                                    return n % 2 != 0
                                })).map((function(e, n) {
                                    return M(e, n)
                                }))
                            })]
                        }), Z && (0, Y.jsx)(W.Z, {
                            handleCancel: function() {
                                b(!1)
                            }
                        })]
                    })
                },
                q = t(199),
                X = t(7160),
                K = t(463),
                ee = t(1139),
                ne = t(7593),
                re = t(5440);
            var te = function(e) {
                return this.__data__.set(e, "__lodash_hash_undefined__"), this
            };
            var ie = function(e) {
                return this.__data__.has(e)
            };
             function oe(e) {
                var n = -1,
                    r = null == e ? 0 : e.length;
                for (this.__data__ = new re.Z; ++n < r;) this.add(e[n])
            }
            oe.prototype.add = oe.prototype.push = te, oe.prototype.has = ie;
            var ae = oe;
            var ue = function(e, n) {
                for (var r = -1, t = null == e ? 0 : e.length; ++r < t;)
                    if (n(e[r], r, e)) return !0;
                return !1
            };
            var ce = function(e, n) {
                return e.has(n)
            };
            var se = function(e, n, r, t, i, o) {
                    var a = 1 & r,
                        u = e.length,
                        c = n.length;
                    if (u != c && !(a && c > u)) return !1;
                    var s = o.get(e),
                        l = o.get(n);
                    if (s && l) return s == n && l == e;
                    var d = -1,
                        f = !0,
                        v = 2 & r ? new ae : void 0;
                    for (o.set(e, n), o.set(n, e); ++d < u;) {
                        var h = e[d],
                            m = n[d];
                        if (t) var p = a ? t(m, h, d, n, e, o) : t(h, m, d, e, n, o);
                        if (void 0 !== p) {
                            if (p) continue;
                            f = !1;
                            break
                        }
                        if (v) {
                            if (!ue(n, (function(e, n) {
                                    if (!ce(v, n) && (h === e || i(h, e, r, t, o))) return v.push(n)
                                }))) {
                                f = !1;
                                break
                            }
                        } else if (h !== m && !i(h, m, r, t, o)) {
                            f = !1;
                            break
                        }
                    }
                    return o.delete(e), o.delete(n), f
                },
                le = t(6711),
                de = t(6299),
                fe = t(4523);
            var ve = function(e) {
                var n = -1,
                    r = Array(e.size);
                return e.forEach((function(e, t) {
                    r[++n] = [t, e]
                })), r
            };
            var he = function(e) {
                    var n = -1,
                        r = Array(e.size);
                    return e.forEach((function(e) {
                        r[++n] = e
                    })), r
                },
                me = le.Z ? le.Z.prototype : void 0,
                pe = me ? me.valueOf : void 0;
            var ge = function(e, n, r, t, i, o, a) {
                    switch (r) {
                        case "[object DataView]":
                            if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset) return !1;
                            e = e.buffer, n = n.buffer;
                        case "[object ArrayBuffer]":
                            return !(e.byteLength != n.byteLength || !o(new de.Z(e), new de.Z(n)));
                        case "[object Boolean]":
                        case "[object Date]":
                        case "[object Number]":
                            return (0, fe.Z)(+e, +n);
                        case "[object Error]":
                            return e.name == n.name && e.message == n.message;
                        case "[object RegExp]":
                        case "[object String]":
                            return e == n + "";
                        case "[object Map]":
                            var u = ve;
                        case "[object Set]":
                            var c = 1 & t;
                            if (u || (u = he), e.size != n.size && !c) return !1;
                            var s = a.get(e);
                            if (s) return s == n;
                            t |= 2, a.set(e, n);
                            var l = se(u(e), u(n), t, i, o, a);
                            return a.delete(e), l;
                        case "[object Symbol]":
                            if (pe) return pe.call(e) == pe.call(n)
                    }
                    return !1
                },
                xe = t(8366),
                ye = Object.prototype.hasOwnProperty;
            var Ze = function(e, n, r, t, i, o) {
                    var a = 1 & r,
                        u = (0, xe.Z)(e),
                        c = u.length;
                    if (c != (0, xe.Z)(n).length && !a) return !1;
                    for (var s = c; s--;) {
                        var l = u[s];
                        if (!(a ? l in n : ye.call(n, l))) return !1
                    }
                    var d = o.get(e),
                        f = o.get(n);
                    if (d && f) return d == n && f == e;
                    var v = !0;
                    o.set(e, n), o.set(n, e);
                    for (var h = a; ++s < c;) {
                        var m = e[l = u[s]],
                            p = n[l];
                        if (t) var g = a ? t(p, m, l, n, e, o) : t(m, p, l, e, n, o);
                        if (!(void 0 === g ? m === p || i(m, p, r, t, o) : g)) {
                            v = !1;
                            break
                        }
                        h || (h = "constructor" == l)
                    }
                    if (v && !h) {
                        var x = e.constructor,
                            y = n.constructor;
                        x == y || !("constructor" in e) || !("constructor" in n) || "function" == typeof x && x instanceof x && "function" == typeof y && y instanceof y || (v = !1)
                    }
                    return o.delete(e), o.delete(n), v
                },
                be = t(2226),
                je = t(6052),
                Se = t(2437),
                we = t(9125),
                Ne = "[object Arguments]",
                Ie = "[object Array]",
                Te = "[object Object]",
                Ge = Object.prototype.hasOwnProperty;
            var _e = function(e, n, r, t, i, o) {
                var a = (0, je.Z)(e),
                    u = (0, je.Z)(n),
                    c = a ? Ie : (0, be.Z)(e),
                    s = u ? Ie : (0, be.Z)(n),
                    l = (c = c == Ne ? Te : c) == Te,
                    d = (s = s == Ne ? Te : s) == Te,
                    f = c == s;
                if (f && (0, Se.Z)(e)) {
                    if (!(0, Se.Z)(n)) return !1;
                    a = !0, l = !1
                }
                if (f && !l) return o || (o = new ne.Z), a || (0, we.Z)(e) ? se(e, n, r, t, i, o) : ge(e, n, c, r, t, i, o);
                if (!(1 & r)) {
                    var v = l && Ge.call(e, "__wrapped__"),
                        h = d && Ge.call(n, "__wrapped__");
                    if (v || h) {
                        var m = v ? e.value() : e,
                            p = h ? n.value() : n;
                        return o || (o = new ne.Z), i(m, p, r, t, o)
                    }
                }
                return !!f && (o || (o = new ne.Z), Ze(e, n, r, t, i, o))
            };
            var ke = function e(n, r, t, i, o) {
                return n === r || (null == n || null == r || !(0, G.Z)(n) && !(0, G.Z)(r) ? n != n && r != r : _e(n, r, t, i, e, o))
            };
            var Ce = function(e, n, r, t) {
                var i = r.length,
                    o = i,
                    a = !t;
                if (null == e) return !o;
                for (e = Object(e); i--;) {
                    var u = r[i];
                    if (a && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1
                }
                for (; ++i < o;) {
                    var c = (u = r[i])[0],
                        s = e[c],
                        l = u[1];
                    if (a && u[2]) {
                        if (void 0 === s && !(c in e)) return !1
                    } else {
                        var d = new ne.Z;
                        if (t) var f = t(s, l, c, e, n, d);
                        if (!(void 0 === f ? ke(l, s, 3, t, d) : f)) return !1
                    }
                }
                return !0
            };
            var Ae = function(e) {
                    return e == e && !(0, Z.Z)(e)
                },
                Me = t(4749);
            var Pe = function(e) {
                for (var n = (0, Me.Z)(e), r = n.length; r--;) {
                    var t = n[r],
                        i = e[t];
                    n[r] = [t, i, Ae(i)]
                }
                return n
            };
            var Re = function(e, n) {
                return function(r) {
                    return null != r && r[e] === n && (void 0 !== n || e in Object(r))
                }
            };
            var Ee = function(e) {
                    var n = Pe(e);
                    return 1 == n.length && n[0][2] ? Re(n[0][0], n[0][1]) : function(r) {
                        return r === e || Ce(r, e, n)
                    }
                },
                Le = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                Ue = /^\w*$/;
            var Oe = function(n, r) {
                if ((0, je.Z)(n)) return !1;
                var t = e(n);
                return !("number" != t && "symbol" != t && "boolean" != t && null != n && !_(n)) || Ue.test(n) || !Le.test(n) || null != r && n in Object(r)
            };
             function Fe(e, n) {
                if ("function" != typeof e || null != n && "function" != typeof n) throw new TypeError("Expected a function");
                var r = function r() {
                    var t = arguments,
                        i = n ? n.apply(this, t) : t[0],
                        o = r.cache;
                    if (o.has(i)) return o.get(i);
                    var a = e.apply(this, t);
                    return r.cache = o.set(i, a) || o, a
                };
                return r.cache = new(Fe.Cache || re.Z), r
            }
            Fe.Cache = re.Z;
            var He = Fe;
            var De = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                Ve = /\\(\\)?/g,
                Ye = function(e) {
                    var n = He(e, (function(e) {
                            return 500 === r.size && r.clear(), e
                        })),
                        r = n.cache;
                    return n
                }((function(e) {
                    var n = [];
                    return 46 === e.charCodeAt(0) && n.push(""), e.replace(De, (function(e, r, t, i) {
                        n.push(t ? i.replace(Ve, "$1") : r || e)
                    })), n
                }));
            var ze = function(e, n) {
                    for (var r = -1, t = null == e ? 0 : e.length, i = Array(t); ++r < t;) i[r] = n(e[r], r, e);
                    return i
                },
                Be = le.Z ? le.Z.prototype : void 0,
                $e = Be ? Be.toString : void 0;
            var Je = function e(n) {
                if ("string" == typeof n) return n;
                if ((0, je.Z)(n)) return ze(n, e) + "";
                if (_(n)) return $e ? $e.call(n) : "";
                var r = n + "";
                return "0" == r && 1 / n == -1 / 0 ? "-0" : r
            };
            var We = function(e) {
                return null == e ? "" : Je(e)
            };
            var Qe = function(e, n) {
                return (0, je.Z)(e) ? e : Oe(e, n) ? [e] : Ye(We(e))
            };
            var qe = function(e) {
                if ("string" == typeof e || _(e)) return e;
                var n = e + "";
                return "0" == n && 1 / e == -1 / 0 ? "-0" : n
            };
            var Xe = function(e, n) {
                for (var r = 0, t = (n = Qe(n, e)).length; null != e && r < t;) e = e[qe(n[r++])];
                return r && r == t ? e : void 0
            };
            var Ke = function(e, n, r) {
                var t = null == e ? void 0 : Xe(e, n);
                return void 0 === t ? r : t
            };
            var en = function(e, n) {
                    return null != e && n in Object(e)
                },
                nn = t(4404),
                rn = t(9313),
                tn = t(5743);
            var on = function(e, n, r) {
                for (var t = -1, i = (n = Qe(n, e)).length, o = !1; ++t < i;) {
                    var a = qe(n[t]);
                    if (!(o = null != e && r(e, a))) break;
                    e = e[a]
                }
                return o || ++t != i ? o : !!(i = null == e ? 0 : e.length) && (0, tn.Z)(i) && (0, rn.Z)(a, i) && ((0, je.Z)(e) || (0, nn.Z)(e))
            };
            var an = function(e, n) {
                return null != e && on(e, n, en)
            };
            var un = function(e, n) {
                return Oe(e) && Ae(n) ? Re(qe(e), n) : function(r) {
                    var t = Ke(r, e);
                    return void 0 === t && t === n ? an(r, e) : ke(n, t, 3)
                }
            };
            var cn = function(e) {
                return e
            };
            var sn = function(e) {
                return function(n) {
                    return null == n ? void 0 : n[e]
                }
            };
            var ln = function(e) {
                return function(n) {
                    return Xe(n, e)
                }
            };
            var dn = function(e) {
                return Oe(e) ? sn(qe(e)) : ln(e)
            };
            var fn = function(n) {
                    return "function" == typeof n ? n : null == n ? cn : "object" == e(n) ? (0, je.Z)(n) ? un(n[0], n[1]) : Ee(n) : dn(n)
                },
                vn = t(9634);
            var hn = function(e) {
                return function(n, r, t) {
                    var i = Object(n);
                    if (!(0, vn.Z)(n)) {
                        var o = fn(r, 3);
                        n = (0, Me.Z)(n), r = function(e) {
                            return o(i[e], e, i)
                        }
                    }
                    var a = e(n, r, t);
                    return a > -1 ? i[o ? n[a] : a] : void 0
                }
            };
            var mn = function(e, n, r, t) {
                for (var i = e.length, o = r + (t ? 1 : -1); t ? o-- : ++o < i;)
                    if (n(e[o], o, e)) return o;
                return -1
            };
            var pn = function(e) {
                return e ? (e = P(e)) === 1 / 0 || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
            };
            var gn = function(e) {
                    var n = pn(e),
                        r = n % 1;
                    return n == n ? r ? n - r : n : 0
                },
                xn = Math.max;
            var yn = hn((function(e, n, r) {
                var t = null == e ? 0 : e.length;
                if (!t) return -1;
                var i = null == r ? 0 : gn(r);
                return i < 0 && (i = xn(t + i, 0)), mn(e, fn(n, 3), i)
            }));
            var Zn = function(e) {
                return e != e
            };
            var bn = function(e, n, r) {
                for (var t = r - 1, i = e.length; ++t < i;)
                    if (e[t] === n) return t;
                return -1
            };
            var jn = function(e, n, r) {
                return n == n ? bn(e, n, r) : mn(e, Zn, r)
            };
            var Sn = function(e, n) {
                return !!(null == e ? 0 : e.length) && jn(e, n, 0) > -1
            };
            var wn = function(e, n, r) {
                    for (var t = -1, i = null == e ? 0 : e.length; ++t < i;)
                        if (r(n, e[t])) return !0;
                    return !1
                },
                Nn = t(6169);
            var In = function() {},
                Tn = Nn.Z && 1 / he(new Nn.Z([, -0]))[1] == 1 / 0 ? function(e) {
                    return new Nn.Z(e)
                } : In;
            var Gn = function(e, n, r) {
                var t = -1,
                    i = Sn,
                    o = e.length,
                    a = !0,
                    u = [],
                    c = u;
                if (r) a = !1, i = wn;
                else if (o >= 200) {
                    var s = n ? null : Tn(e);
                    if (s) return he(s);
                    a = !1, i = ce, c = new ae
                } else c = n ? [] : u;
                e: for (; ++t < o;) {
                    var l = e[t],
                        d = n ? n(l) : l;
                    if (l = r || 0 !== l ? l : 0, a && d == d) {
                        for (var f = c.length; f--;)
                            if (c[f] === d) continue e;
                        n && c.push(d), u.push(l)
                    } else i(c, d, r) || (c !== u && c.push(d), u.push(l))
                }
                return u
            };
            var _n = function(e, n) {
                    return e && e.length ? Gn(e, fn(n, 2)) : []
                },
                kn = t(6883),
                Cn = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return Math.ceil(.237 * e.length)
                };
             function An(e) {
                var n, r, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (0, $.gv)(),
                    o = e.senderId,
                    a = void 0 === o ? "" : o,
                    u = e.text,
                    c = void 0 === u ? "" : u,
                    l = e.senderType,
                    d = e.audio,
                    f = e.image,
                    v = (null == i ? void 0 : i.id) === a,
                    h = t.memberMap || {};
                return (0, s.Z)({
                    content: {
                        text: c,
                        duration: Cn(c || "")
                    },
                    isSelf: v,
                    senderInfo: {
                        senderId: a,
                        senderType: l,
                        nickName: v ? null == i ? void 0 : i.nickName : null === (n = h[a]) || void 0 === n ? void 0 : n.nickName,
                        avatarUrl: v ? null == i ? void 0 : i.avatarUrl : null === (r = h[a]) || void 0 === r ? void 0 : r.avatarUrl
                    },
                    type: d ? "audio" : f ? "image" : "text"
                }, e)
            }
            var Mn = t(6836);
             function Pn(e) {
                var n = e.message,
                    r = void 0 === n ? {} : n,
                    t = e.isPlaying,
                    i = e.isShowTime,
                    o = e.onPressAt,
                    a = e.onReplayVoice,
                    u = r.content,
                    c = void 0 === u ? {} : u,
                    s = c.text,
                    l = void 0 === s ? "" : s,
                    d = c.duration,
                    f = void 0 === d ? 0 : d,
                    h = r.isSelf,
                    m = r.createdAt,
                    p = r.id,
                    g = r.senderType,
                    x = r.senderInfo,
                    Z = (void 0 === x ? {} : x).avatarUrl,
                    b = void 0 === Z ? "" : Z;
                return (0, Y.jsxs)(Y.Fragment, {
                    children: [(0, Y.jsxs)(v.G7, {
                        id: "item-".concat(p),
                        className: y()("dialogue-item", h ? "self-box" : "other-box", t && "playing"),
                        children: ["human" !== g && (0, Y.jsxs)(v.G7, {
                            className: y()("voice-paly"),
                            children: [(0, Y.jsx)(v.Ee, {
                                src: t ? D.GQ : D.tb
                            }), f, "″"]
                        }), (0, Y.jsx)(v.G7, {
                            className: "item-portrait",
                            onLongPress: function() {
                                o(r)
                            },
                            children: (0, Y.jsx)(v.Ee, {
                                src: b
                            })
                        }), (0, Y.jsx)(v.G7, {
                            className: "item-content",
                            onClick: function() {
                                "human" !== g && a(r)
                            },
                            children: l
                        })]
                    }), i && (0, Y.jsx)(v.G7, {
                        className: "inner-time",
                        children: (0, Mn.n)(m)
                    })]
                })
            }
            var Rn = t.p + "assets/imgs/wave-static.svg",
                En = {
                    audioContent: "index-module__audioContent___PpJgj"
                };
             function Ln(e) {
                var n = e.message,
                    r = void 0 === n ? {} : n,
                    t = e.isPlaying,
                    i = e.isShowTime,
                    o = e.onPressAt,
                    a = e.onReplayVoice,
                    u = r.isSelf,
                    c = r.createdAt,
                    s = r.id,
                    l = r.senderType,
                    d = r.senderInfo,
                    f = (void 0 === d ? {} : d).avatarUrl,
                    h = void 0 === f ? "" : f;
                return (0, Y.jsxs)(Y.Fragment, {
                    children: [(0, Y.jsxs)(v.G7, {
                        id: "item-".concat(s),
                        className: y()("dialogue-item", u ? "self-box" : "other-box", t && "playing"),
                        children: [(0, Y.jsx)(v.G7, {
                            className: "item-portrait",
                            onLongPress: function() {
                                o(r)
                            },
                            children: (0, Y.jsx)(v.Ee, {
                                src: h
                            })
                        }), (0, Y.jsx)(v.G7, {
                            className: y()("item-content", En.audioContent),
                            onClick: function() {
                                "human" !== l && a(r)
                            },
                            children: (0, Y.jsx)(v.Ee, {
                                src: t ? "https://virtualhuman-app.oss-cn-beijing.aliyuncs.com/interaction/public/ip-miniprogram/imgs/wave-animation.gif" : Rn,
                                className: En.waveStaticIcon
                            })
                        })]
                    }), i && (0, Y.jsx)(v.G7, {
                        className: "inner-time",
                        children: (0, Mn.n)(c)
                    })]
                })
            }
            var Un = "index-module__aiImage___JaPXy",
                On = "index-module__imageContent___idIIT";
             function Fn(e) {
                var n = e.message,
                    r = void 0 === n ? {} : n,
                    t = e.isShowTime,
                    i = e.onPressAt,
                    o = r.image,
                    a = (void 0 === o ? {} : o).imageUrl,
                    u = void 0 === a ? "" : a,
                    c = r.isSelf,
                    s = r.createdAt,
                    l = r.id,
                    d = r.senderInfo,
                    h = (void 0 === d ? {} : d).avatarUrl,
                    g = void 0 === h ? "" : h,
                    x = (0, p.useState)({
                        width: 0,
                        height: 0
                    }),
                    Z = (0, f.Z)(x, 2),
                    b = Z[0],
                    j = Z[1];
                return (0, Y.jsxs)(Y.Fragment, {
                    children: [(0, Y.jsxs)(v.G7, {
                        id: "item-".concat(l),
                        className: y()("dialogue-item", c ? "self-box" : "other-box"),
                        children: [(0, Y.jsx)(v.G7, {
                            className: "item-portrait",
                            onLongPress: function() {
                                i(r)
                            },
                            children: (0, Y.jsx)(v.Ee, {
                                src: g
                            })
                        }), (0, Y.jsx)(v.G7, {
                            className: On,
                            children: (0, Y.jsx)(v.Ee, {
                                className: Un,
                                src: u,
                                mode: "aspectFit",
                                style: b,
                                onClick: function() {
                                    m().previewImage({
                                        urls: [u],
                                        current: u
                                    })
                                },
                                onError: function(e) {
                                    return console.error(e)
                                },
                                onLoad: function(e) {
                                    var n = e.detail,
                                        r = n.width,
                                        t = n.height;
                                    if (0 != t) {
                                        var i = +r / +t,
                                            o = r,
                                            a = t;
                                        i > 1 ? a = (o = Math.min(+r, 160)) / i : o = (a = Math.min(+t, 160)) * i, j({
                                            width: o,
                                            height: a
                                        })
                                    }
                                }
                            })
                        })]
                    }), t && (0, Y.jsx)(v.G7, {
                        className: "inner-time",
                        children: (0, Mn.n)(s)
                    })]
                })
            }
            var Hn = t(2930),
                Dn = function(e) {
                    var n = m().getCurrentInstance().router,
                        r = ((null == n ? void 0 : n.params) || {}).roomId,
                        t = void 0 === r ? "" : r,
                        i = m().getStorageSync("lastChatRoomDialogue") || {};
                    i[t] = e || Date.now(), m().setStorageSync("lastChatRoomDialogue", i)
                };
             function Vn() {
                var e, n, r = (0, p.useState)(!1),
                    t = (0, f.Z)(r, 2),
                    i = t[0],
                    a = t[1],
                    x = (0, p.useState)(0),
                    Z = (0, f.Z)(x, 2),
                    b = Z[0],
                    j = Z[1],
                    S = (0, p.useState)(""),
                    w = (0, f.Z)(S, 2),
                    N = w[0],
                    I = w[1],
                    T = (0, p.useState)({}),
                    G = (0, f.Z)(T, 2),
                    _ = G[0],
                    k = G[1],
                    C = (0, p.useState)([]),
                    A = (0, f.Z)(C, 2),
                    M = A[0],
                    P = A[1],
                    R = (0, p.useState)(""),
                    E = (0, f.Z)(R, 2),
                    L = E[0],
                    U = E[1],
                    O = (0, p.useRef)(null),
                    F = (0, p.useState)([]),
                    H = (0, f.Z)(F, 2),
                    D = H[0],
                    z = H[1],
                    J = (0, p.useRef)([]),
                    W = (0, p.useState)(0),
                    ne = (0, f.Z)(W, 2),
                    re = ne[0],
                    te = ne[1],
                    ie = (0, p.useState)(""),
                    oe = (0, f.Z)(ie, 2),
                    ae = oe[0],
                    ue = oe[1],
                    ce = (0, p.useState)(null),
                    se = (0, f.Z)(ce, 2),
                    le = se[0],
                    de = se[1],
                    fe = (0, p.useState)({
                        isLoading: !1,
                        isUpper: !1
                    }),
                    ve = (0, f.Z)(fe, 2),
                    he = ve[0],
                    me = ve[1],
                    pe = (0, p.useState)(""),
                    ge = (0, f.Z)(pe, 2),
                    xe = ge[0],
                    ye = ge[1],
                    Ze = (0, p.useState)(m().getStorageSync("themeList") || []),
                    be = (0, f.Z)(Ze, 2),
                    je = be[0],
                    Se = (be[1], (0, p.useRef)(null)),
                    we = (0, p.useRef)(),
                    Ne = (0, p.useRef)([]),
                    Ie = (0, p.useRef)(null),
                    Te = (0, p.useRef)(null),
                    Ge = (0, p.useRef)([]),
                    _e = (0, p.useRef)((function() {})),
                    ke = (0, p.useRef)(null);
                (0, h.useLoad)(function() {
                    var e = (0, d.Z)((0, l.Z)().m((function e(n) {
                        return (0, l.Z)().w((function(e) {
                            for (;;) switch (e.n) {
                                case 0:
                                    Ae(n, "useLoad"), m().setInnerAudioOption({
                                        obeyMuteSwitch: !1
                                    }), m().hideShareMenu({
                                        menus: ["shareAppMessage"]
                                    });
                                case 1:
                                    return e.a(2)
                            }
                        }), e)
                    })));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }()), (0, p.useLayoutEffect)((function() {
                    m().createSelectorQuery().select("#safe-area").boundingClientRect().exec((function(e) {
                        var n, r = (null === (n = e[0]) || void 0 === n ? void 0 : n.height) || 0,
                            t = m().getSystemInfoSync().screenWidth / 375,
                            i = M.length;
                        te(r - (426 + (i > 0 ? i > 2 ? 52 : 26 : 0)) * t)
                    }))
                }), [M]), (0, p.useEffect)((function() {
                    he.isUpper || m().createSelectorQuery().select("#scroll").boundingClientRect().exec((function(e) {
                        var n;
                        j((null === (n = e[0]) || void 0 === n ? void 0 : n.height) || 0)
                    }))
                }), [D, he.isUpper]), (0, p.useEffect)((function() {
                    Ne.current = M
                }), [null == M ? void 0 : M.length]), (0, h.useDidShow)((function() {
                    console.log("useDidShow~~~~~~~~~~~~~~~~~~~~", m().getCurrentPages());
                    var e = (m().getCurrentInstance() || {}).router;
                    ke.current && Ce(null == e ? void 0 : e.params), ke.current && 0 === D.length && Ae(null == e ? void 0 : e.params, "useDidShow")
                })), (0, h.useDidHide)((function() {
                    ke.current = !0, console.log("onHide~~~~~~~~~~~~~~~~~")
                })), (0, h.useUnload)((function() {
                    var e;
                    null === (e = we.current) || void 0 === e || e.destroy(), O.current && O.current.release()
                }));
                var Ce = function() {
                        var e = (0, d.Z)((0, l.Z)().m((function e(n) {
                            var r, t;
                            return (0, l.Z)().w((function(e) {
                                for (;;) switch (e.n) {
                                    case 0:
                                        return r = n.roomId, e.n = 1, (0, ee.Vv)({
                                            room_id: r
                                        });
                                    case 1:
                                        t = e.v, k((0, s.Z)((0, s.Z)({}, _), {}, {
                                            displayName: null == t ? void 0 : t.displayName
                                        }));
                                    case 2:
                                        return e.a(2)
                                }
                            }), e)
                        })));
                        return function(n) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Ae = function() {
                        var e = (0, d.Z)((0, l.Z)().m((function e(n, r) {
                            var t, i, o, a, u, c, d, f, v, h;
                            return (0, l.Z)().w((function(e) {
                                for (;;) switch (e.n) {
                                    case 0:
                                        return console.log("~~~~~~~handleInit~~~~~", n, r, ke.current), i = n.roomId, o = n.unreadNum, I(i), Te.current = i, e.n = 1, (0, ee.Vv)({
                                            room_id: i
                                        });
                                    case 1:
                                        return a = e.v, c = (u = a || {}).characters, d = u.humans, f = (0, kn.H)(c), v = (0, kn.H)(d), a.memberMap = (0, s.Z)((0, s.Z)({}, f), v), Ie.current = (0, s.Z)((0, s.Z)({}, f), v), k(a), e.n = 2, (0, ee.UU)({
                                            room_id: i,
                                            count: +o || 10
                                        });
                                    case 2:
                                        h = e.v, Pe(h, a), o + 0 > 0 && setTimeout((function() {
                                            j(0)
                                        }), 500), Dn(null === (t = h.reverse()[0]) || void 0 === t ? void 0 : t.createdAt), Me();
                                    case 3:
                                        return e.a(2)
                                }
                            }), e)
                        })));
                        return function(n, r) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Me = function() {
                        O.current || (O.current = (0, K.l)({
                            url: ee.v2,
                            options: {
                                path: "/api/v1/chat/socketio",
                                auth: {
                                    authorization: (0, $.hP)()
                                }
                            }
                        }, {}), O.current.start(), De())
                    };
                Se.current = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = An((0, s.Z)({
                            senderType: n ? "human" : "character",
                            id: String(Date.now()),
                            senderId: n ? (0, $.gv)().id : null == e ? void 0 : e.senderId
                        }, e), _),
                        t = J.current || [];
                    J.current = [].concat((0, c.Z)(t), [r]), z(J.current)
                };
                var Pe = function(e, n) {
                        var r = e.reverse().map((function(e) {
                            return An(e, n)
                        }));
                        console.log("~~~~~~~~~handlePreDialogHistory~~~~~"), J.current = [].concat((0, c.Z)(r), (0, c.Z)(D)), z(J.current)
                    },
                    Re = function() {
                        ye(""), de({})
                    },
                    Ee = function() {
                        var e = (0, d.Z)((0, l.Z)().m((function e(n, r) {
                            var t;
                            return (0, l.Z)().w((function(e) {
                                for (;;) switch (e.n) {
                                    case 0:
                                        if (r && n) {
                                            e.n = 1;
                                            break
                                        }
                                        return Re(), e.a(2);
                                    case 1:
                                        (t = m().createInnerAudioContext()).src = r, t.play(), t.onEnded((function() {
                                            if (t.stop(), t.destroy(), we.current = void 0, m().getFileSystemManager().removeSavedFile({
                                                    filePath: r
                                                }), Ge.current.length) {
                                                var e, i, o, a = Ge.current[0],
                                                    u = a.id,
                                                    c = a.text,
                                                    s = void 0 === c ? "" : c,
                                                    l = a.ttsList,
                                                    d = void 0 === l ? [] : l;
                                                s ? u === n ? s && d.length ? Ee(u, d.shift() || "") : (Ge.current.shift(), Re(), Fe(null === (e = Ge.current[0]) || void 0 === e ? void 0 : e.id)) : Fe(null === (i = Ge.current[0]) || void 0 === i ? void 0 : i.id) : Fe(null === (o = Ge.current[0]) || void 0 === o ? void 0 : o.id)
                                            } else Re()
                                        })), we.current = t;
                                    case 2:
                                        return e.a(2)
                                }
                            }), e)
                        })));
                        return function(n, r) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Le = function() {
                        var e = (0, d.Z)((0, l.Z)().m((function e() {
                            var n, r, t, i, a, c, s, d, f, v, h, p, g, x, y, Z, b, j, S, w;
                            return (0, l.Z)().w((function(e) {
                                for (;;) switch (e.p = e.n) {
                                    case 0:
                                        if (r = Ge.current[0], t = r.id, i = r.text, a = void 0 === i ? "" : i, c = r.senderId, s = void 0 === c ? "" : c, a) {
                                            e.n = 1;
                                            break
                                        }
                                        return e.a(2);
                                    case 1:
                                        ye(t), de({
                                            id: t,
                                            senderId: s
                                        }), d = [], f = null === (n = Ie.current[s]) || void 0 === n ? void 0 : n.name, v = "", h = a.split(/([\u3002|\uff1b|;|\uff01|!]+)/).filter(Boolean), p = u(h), e.p = 2, x = (0, l.Z)().m((function e() {
                                            var n, r;
                                            return (0, l.Z)().w((function(e) {
                                                for (;;) switch (e.n) {
                                                    case 0:
                                                        n = g.value, /([\u3002|\uff1b|;|\uff01|!]+)/.test(n) ? (r = v + n, d.push((function() {
                                                            return (0, ee.Nh)({
                                                                ip_name: f,
                                                                text: r,
                                                                withBlendshape: !1
                                                            })
                                                        })), v = "") : "" !== n && (v += n);
                                                    case 1:
                                                        return e.a(2)
                                                }
                                            }), e)
                                        })), p.s();
                                    case 3:
                                        if ((g = p.n()).done) {
                                            e.n = 5;
                                            break
                                        }
                                        return e.d((0, o.Z)(x()), 4);
                                    case 4:
                                        e.n = 3;
                                        break;
                                    case 5:
                                        e.n = 7;
                                        break;
                                    case 6:
                                        e.p = 6, w = e.v, p.e(w);
                                    case 7:
                                        return e.p = 7, p.f(), e.f(7);
                                    case 8:
                                        if (v && (y = v, d.push((function() {
                                                return (0, ee.Nh)({
                                                    ip_name: f,
                                                    text: y,
                                                    withBlendshape: !1
                                                })
                                            })), v = ""), d.length) {
                                            e.n = 9;
                                            break
                                        }
                                        return e.a(2);
                                    case 9:
                                        Z = d[0](), b = (0, l.Z)().m((function e() {
                                            var n, r, i, o, a, u, c;
                                            return (0, l.Z)().w((function(e) {
                                                for (;;) switch (e.n) {
                                                    case 0:
                                                        return e.n = 1, Z;
                                                    case 1:
                                                        if (i = e.v, o = i.audio, a = m().getFileSystemManager(), u = "".concat(m().env.USER_DATA_PATH, "/xiyangyang-audio-").concat(t, "-").concat((0, Hn.D)(), ".wav"), a.writeFileSync(u, null == o ? void 0 : o.base64Data, "base64"), Z = null === (n = d[S]) || void 0 === n ? void 0 : n.call(d), c = Ge.current.find((function(e) {
                                                                return e.id === t
                                                            }))) {
                                                            e.n = 2;
                                                            break
                                                        }
                                                        return e.a(2, {
                                                            v: void 0
                                                        });
                                                    case 2:
                                                        null === (r = c.ttsList) || void 0 === r || r.push(u), 1 === S && setTimeout((function() {
                                                            var e, n = (null === (e = c.ttsList) || void 0 === e ? void 0 : e.shift()) || "";
                                                            Ee(t, n)
                                                        }), 50);
                                                    case 3:
                                                        return e.a(2)
                                                }
                                            }), e)
                                        })), S = 1;
                                    case 10:
                                        if (!(S <= d.length)) {
                                            e.n = 13;
                                            break
                                        }
                                        return e.d((0, o.Z)(b()), 11);
                                    case 11:
                                        if (!(j = e.v)) {
                                            e.n = 12;
                                            break
                                        }
                                        return e.a(2, j.v);
                                    case 12:
                                        S++, e.n = 10;
                                        break;
                                    case 13:
                                        return e.a(2)
                                }
                            }), e, null, [
                                [2, 6, 7, 8]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Ue = function() {
                        var e = (0, d.Z)((0, l.Z)().m((function e() {
                            var n, r, t, i, o, a, u;
                            return (0, l.Z)().w((function(e) {
                                for (;;) switch (e.n) {
                                    case 0:
                                        if (n = Ge.current.shift() || {}, r = n.url, t = void 0 === r ? "" : r, i = n.id, o = void 0 === i ? "" : i, a = n.senderId, u = void 0 === a ? "" : a, t && o) {
                                            e.n = 1;
                                            break
                                        }
                                        return Re(), e.a(2);
                                    case 1:
                                        ye(o), de({
                                            id: o,
                                            senderId: u
                                        }), Ee(o, t);
                                    case 2:
                                        return e.a(2)
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Oe = function() {
                        var e = (0, d.Z)((0, l.Z)().m((function e(n) {
                            var r, t, i, o, a;
                            return (0, l.Z)().w((function(e) {
                                for (;;) switch (e.n) {
                                    case 0:
                                        if (r = n.id, t = n.senderId, i = n.audio, o = n.text, !(a = void 0 === o ? "" : o)) {
                                            e.n = 1;
                                            break
                                        }
                                        return Ge.current.push({
                                            id: r,
                                            text: a,
                                            ttsList: [],
                                            senderId: t
                                        }), e.a(2);
                                    case 1:
                                        Ge.current.push({
                                            id: r,
                                            url: (null == i ? void 0 : i.audioUrl) || "",
                                            senderId: t
                                        });
                                    case 2:
                                        return e.a(2)
                                }
                            }), e)
                        })));
                        return function(n) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Fe = function() {
                        var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                        if (n) {
                            if (!we.current)
                                if (null !== (e = Ge.current) && void 0 !== e && e.length) {
                                    var r = Ge.current[0],
                                        t = r.id,
                                        i = r.text,
                                        o = void 0 === i ? "" : i;
                                    t === n && (o ? Le() : Ue())
                                } else Re()
                        } else Re()
                    },
                    He = function(e) {
                        var n;
                        (0, V.G3)("text_pv", 1), Re(), Ve(), me({
                            isLoading: !1,
                            isUpper: !1
                        });
                        var r = Ne.current,
                            t = r.filter((function(e) {
                                return "human" != (null == e ? void 0 : e.senderType)
                            })).map((function(e) {
                                return null == e ? void 0 : e.senderId
                            }));
                        t.length > 0 && (e = "".concat(r.map((function(e) {
                            var n;
                            return "@".concat(e.nickName || (null == e || null === (n = e.senderInfo) || void 0 === n ? void 0 : n.nickName))
                        })).join(" "), " ").concat(e), P([])), Se.current({
                            text: e
                        }, !0), Dn();
                        var i = null === (n = m().getCurrentInstance().router) || void 0 === n ? void 0 : n.params.roomId;
                        O.current.sendText({
                            text: e,
                            roomId: i,
                            ack: "",
                            sendTo: t
                        })
                    },
                    De = function() {
                        var e = O.current._socket;
                        e.on("roomSendMsg", (function(e) {
                            var n;
                            e.roomId === Te.current && (Dn(null == e ? void 0 : e.createdAt), Se.current(e, !1), "human" !== e.senderType && (null != e && e.image || (Oe({
                                id: e.id,
                                senderId: e.senderId,
                                audio: e.audio,
                                text: e.text
                            }), 1 === Ge.current.length && Fe(null === (n = Ge.current[0]) || void 0 === n ? void 0 : n.id))))
                        })), e.on("joinRoom", (function(e) {
                            console.log("~~~~~~~~~joinRoom~~~~~", e), _e.current(e)
                        })), e.on("leaveRoom", (function(e) {
                            console.log("~~~~~~~~~leaveRoom~~~~~", e), _e.current(e)
                        })), e.on("roomDismiss", (function(e) {
                            (null == e ? void 0 : e.id) === Te.current && (console.log("~~~~~~~~~leaveRoom~~~~~", e), m().showToast({
                                icon: "none",
                                title: "该群已被管理员解散"
                            }), setTimeout((function() {
                                (0, X.UY)(q.iY.Package, q.iY.Group + "?fromInner=true")
                            }), 500))
                        }))
                    };
                _e.current = function(e) {
                    var n = e || {},
                        r = n.characters,
                        t = n.humans;
                    if (n.id === Te.current) {
                        var i = (0, kn.H)(r),
                            o = (0, kn.H)(t);
                        e.memberMap = (0, s.Z)((0, s.Z)({}, i), o), Ie.current = (0, s.Z)((0, s.Z)({}, i), o), k(e)
                    }
                };
                var Ve = function() {
                        var e, n;
                        null === (e = we.current) || void 0 === e || e.stop(), null === (n = we.current) || void 0 === n || n.destroy(), we.current = void 0, Ge.current = []
                    },
                    Ye = function(e) {
                        var n = null == le ? void 0 : le.id;
                        Ve(), Re();
                        var r = null == e ? void 0 : e.id;
                        r && (n && n === r || null != e && e.type && "text" !== (null == e ? void 0 : e.type) || null != e && e.senderId && (ye(r), de({
                            id: r,
                            senderId: null == e ? void 0 : e.senderId
                        }), Oe(e), Fe(r)))
                    },
                    ze = function(e) {
                        var n = null == le ? void 0 : le.id;
                        Ve(), Re();
                        var r = null == e ? void 0 : e.id;
                        r && (n && n === r || null != e && e.type && "audio" !== (null == e ? void 0 : e.type) || null != e && e.senderId && (ye(r), de({
                            id: r,
                            senderId: null == e ? void 0 : e.senderId
                        }), Oe(e), Fe(r)))
                    },
                    Be = function(e) {
                        console.log("~~~~~~~~~~~handlePressAt~~~~~~~", e, M);
                        var n = e.senderType,
                            r = e.senderId,
                            t = M;
                        yn(t, {
                            senderId: r
                        }) ? t = t.filter((function(n) {
                            return n.senderId !== e.senderId
                        })) : t.push(e), P(_n((0, c.Z)(t).filter((function(e) {
                            return "human" !== e.senderType
                        })), "senderId")), "human" === n && (U(r), setTimeout((function() {
                            U("")
                        }), 3e3))
                    },
                    $e = function() {
                        var e = (0, d.Z)((0, l.Z)().m((function e() {
                            var n, r;
                            return (0, l.Z)().w((function(e) {
                                for (;;) switch (e.n) {
                                    case 0:
                                        if (n = D[0], !he.isLoading) {
                                            e.n = 1;
                                            break
                                        }
                                        return e.a(2);
                                    case 1:
                                        return me({
                                            isLoading: !0,
                                            isUpper: !0
                                        }), e.n = 2, (0, ee.UU)({
                                            room_id: N,
                                            count: 10,
                                            fromMessage: n.id
                                        });
                                    case 2:
                                        r = e.v, me({
                                            isLoading: !1,
                                            isUpper: !0
                                        }), Pe(r, _), ue("item-".concat(n.id));
                                    case 3:
                                        return e.a(2)
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                return (0, Y.jsxs)(v.G7, {
                    className: "index",
                    children: [(0, Y.jsx)(v.G7, {
                        className: "safe-area",
                        id: "safe-area"
                    }), (0, Y.jsx)(g.Z, {
                        showBack: !0,
                        showHandle: !0,
                        goHandle: function() {
                            (0, X.c4)(q.iY.Package, q.iY.GroupManager + "?roomId=".concat(N)), Ve()
                        },
                        goBack: function() {
                            (0, X.UY)(q.iY.Package, q.iY.Group + "?fromInner=true")
                        },
                        children: (0, Y.jsxs)(v.G7, {
                            className: "group-chat-header",
                            children: [(0, Y.jsx)(v.G7, {
                                className: "group-chat-title",
                                children: (null == _ ? void 0 : _.displayName) || "群聊"
                            }), (0, Y.jsx)(v.G7, {
                                className: "group-chat-tag",
                                style: {
                                    backgroundColor: null === (e = je.find((function(e) {
                                        return (null == e ? void 0 : e.name) === (null == _ ? void 0 : _.themeName)
                                    }))) || void 0 === e || null === (e = e.feOptions) || void 0 === e ? void 0 : e.bgColor
                                },
                                children: null === (n = je.find((function(e) {
                                    return (null == e ? void 0 : e.name) === (null == _ ? void 0 : _.themeName)
                                }))) || void 0 === n ? void 0 : n.displayName
                            })]
                        })
                    }), (0, Y.jsx)(v.G7, {
                        className: y()("stage-container", i && "is-open"),
                        children: (0, Y.jsx)(v.G7, {
                            className: "stage-box",
                            children: (0, Y.jsx)(v.G7, {
                                className: "people-box",
                                children: (0, Y.jsx)(Q, {
                                    atList: M,
                                    atHumanId: L,
                                    roomInfo: _,
                                    handleClickMember: Be,
                                    currentPlayTTSInfo: le
                                })
                            })
                        })
                    }), (0, Y.jsx)(v.G7, {
                        className: y()("stage-handle-container", i && "up"),
                        onClick: function() {
                            a(!i)
                        },
                        children: (0, Y.jsx)(v.G7, {
                            className: "fold-icon"
                        })
                    }), (0, Y.jsx)(Y.Fragment, {
                        children: (0, Y.jsx)(v.pf, {
                            className: "scrollview",
                            style: {
                                height: i ? 0 : re
                            },
                            scrollY: !0,
                            scrollTop: b,
                            upperThreshold: 10,
                            onScrollToUpper: $e,
                            scrollIntoView: ae,
                            children: (0, Y.jsx)(v.G7, {
                                className: y()(i && "hidden", "dialogue-box-container"),
                                style: {
                                    minHeight: "".concat(re, "px")
                                },
                                id: "scroll",
                                children: (D || []).map((function(e, n) {
                                    var r = e || {},
                                        t = r.type,
                                        i = void 0 === t ? "text" : t,
                                        o = r.id,
                                        a = (le || {}).id,
                                        u = D[n + 1],
                                        c = (null == u ? void 0 : u.createdAt) - (null == e ? void 0 : e.createdAt) > 3e5,
                                        s = xe === o || a === o;
                                    return "audio" === i ? (0, Y.jsx)(Ln, {
                                        message: e,
                                        isPlaying: s,
                                        isShowTime: c,
                                        onPressAt: Be,
                                        onReplayVoice: ze
                                    }, o) : "image" === i ? (0, Y.jsx)(Fn, {
                                        message: e,
                                        isShowTime: c,
                                        onPressAt: Be
                                    }, o) : (0, Y.jsx)(Pn, {
                                        message: e,
                                        isPlaying: s,
                                        isShowTime: c,
                                        onPressAt: Be,
                                        onReplayVoice: Ye
                                    }, o)
                                }))
                            })
                        })
                    }), (0, Y.jsx)(B, {
                        onVoiceStatusChange: function(e, n) {
                            if (Re(), Ve(), n) {
                                var r = m().getFileSystemManager().readFileSync(n.tempFilePath);
                                m().getFileSystemManager().removeSavedFile({
                                    filePath: n.tempFilePath,
                                    success: function() {
                                        return console.log("录音完成，删除临时文件成功")
                                    }
                                }), console.log("~~~~~~~~~~onHhanldeVoiceStatus~~~~~~~~~~~", e, n, r.byteLength, N, M, Ne.current), (0, V.G3)("audio_pv", 1), (0, ee.NJ)(r).then((function(e) {
                                    null != e && e.text ? He(null == e ? void 0 : e.text) : m().showToast({
                                        icon: "none",
                                        title: "未识别到语音",
                                        duration: 1e3
                                    })
                                }))
                            }
                        },
                        onTextChange: function(e) {
                            He(e)
                        },
                        atList: M,
                        handleAtList: function(e) {
                            P(e)
                        }
                    })]
                })
            }
            Vn.enableShareAppMessage = !0, Page((0, i.createPageConfig)(Vn, "pages/group-chat/index", {
                root: {
                    cn: []
                }
            }, {
                navigationBarTitleText: "羊羊聊天群",
                navigationStyle: "custom",
                disableScroll: !0,
                enableShareAppMessage: !0
            } || {}))
        }
    },
    function(e) {
        e.O(0, [107, 216, 592], (function() {
            return n = 4795, e(e.s = n);
            var n
        })), e.O()
    }
]);