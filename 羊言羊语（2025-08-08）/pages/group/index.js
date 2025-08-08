
require("../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../@babel/runtime/helpers/typeof");
(wx.webpackJsonp = wx.webpackJsonp || []).push([
    [15], {
        8874: function(n, a, t) {
            var o = t(5392),
                i = t(7335),
                r = t(7506);
             function s(e) {
                var n = Object(e),
                    a = [];
                for (var t in n) a.unshift(t);
                return function e() {
                    for (; a.length;)
                        if ((t = a.pop()) in n) return e.value = t, e.done = !1, e;
                    return e.done = !0, e
                }
            }
            var l = t(5979),
                c = t(3289),
                u = t(8436),
                d = t(6557),
                m = t(542),
                g = t(6041),
                v = t(6976),
                x = t.n(v),
                h = t(7160),
                p = t(199),
                f = t(5271),
                N = t(2187),
                _ = t.n(N),
                j = t(5575),
                M = t(220),
                y = t(3452),
                I = function(e) {
                    return e.NOT_LOGOIN_IN = "not_login_in", e.UNKNOWN = "unknown", e.IS_LOGIN_IN = "is_login_in", e
                }({});
            var G = t(3931),
                Z = t(3994),
                T = t(767),
                w = function(n) {
                    T.Z && ((0, Z.mf)(n) || console.error('useMount: parameter `fn` expected to be a function, but got "'.concat(e(n), '".'))), (0, f.useEffect)((function() {
                        null == n || n()
                    }), [])
                },
                b = t(1598),
                k = t(1139),
                S = t(1504),
                D = t(2752),
                A = t(8897),
                C = t(2676),
                E = (0, D.z)(g.G7)({
                    name: "Container",
                    class: "c1xy053i",
                    propsAsIs: !0
                }),
                z = function(e) {
                    var n = e.others,
                        a = e.humans,
                        t = e.type,
                        o = (0, y.gv)(),
                        i = (0, f.useMemo)((function() {
                            if (console.log("userAuthInfo", o), "create" === t) return {
                                name: (null == o ? void 0 : o.nickName) || "羊村小可爱",
                                avatar: (null == o ? void 0 : o.avatarUrl) || A.Y1
                            };
                            var e, n, i = (a || []).filter((function(e) {
                                return "owner" === (null == e ? void 0 : e.role)
                            })) || [];
                            return {
                                name: null === (e = i[0]) || void 0 === e ? void 0 : e.nickName,
                                avatar: null === (n = i[0]) || void 0 === n ? void 0 : n.avatarUrl
                            }
                        }), [null == o ? void 0 : o.avatarUrl, null == o ? void 0 : o.nickName, t, a]),
                        r = (0, f.useCallback)((function() {
                            var e = (a || []).filter((function(e) {
                                return "normal" === (null == e ? void 0 : e.role)
                            }));
                            return 0 === e.length ? (0, C.jsx)(C.Fragment, {}) : e.map((function(e, n) {
                                return (0, C.jsxs)(g.G7, {
                                    className: _()("inviter_avatar", "inviter_avatar_".concat(n)),
                                    children: [(0, C.jsx)(g.Ee, {
                                        mode: "aspectFill",
                                        src: (null == e ? void 0 : e.avatarUrl) || ""
                                    }), (0, C.jsx)(g.G7, {
                                        className: "username",
                                        children: null == e ? void 0 : e.nickName
                                    })]
                                }, n)
                            }))
                        }), [a]);
                    return (0, C.jsx)(E, {
                        children: (0, C.jsxs)(g.G7, {
                            className: "circle_box",
                            children: [(0, C.jsxs)(g.G7, {
                                className: "circle",
                                children: [(0, C.jsx)(g.G7, {
                                    className: "circle_inner"
                                }), (0, C.jsx)(g.G7, {
                                    className: "circle_2"
                                }), (0, C.jsx)(g.G7, {
                                    className: "circle_3"
                                }), (n || []).map((function(e, n) {
                                    return (0, C.jsx)(g.G7, {
                                        className: "avatar_".concat(n),
                                        children: (0, C.jsxs)(g.G7, {
                                            className: "avatar",
                                            children: [(0, C.jsx)(g.Ee, {
                                                src: (null == e ? void 0 : e.avatarUrl) || ""
                                            }), (0, C.jsx)(g.G7, {
                                                className: "username",
                                                children: e.nickName
                                            })]
                                        })
                                    }, e.avatarUrl)
                                }))]
                            }), (0, C.jsxs)(g.G7, {
                                className: "self_avatar",
                                children: [(0, C.jsx)(g.Ee, {
                                    mode: "aspectFill",
                                    src: i.avatar
                                }), (0, C.jsx)(g.G7, {
                                    className: "username",
                                    children: i.name
                                })]
                            }), r()]
                        })
                    })
                };
            t(3595);
            var L = "index-module__box___diAF0",
                O = "index-module__swiper___XMoHA",
                U = "index-module__swiper_container___wx31W",
                Y = "index-module__swiper_item___cuYFc",
                R = "index-module__group_circle_box___eWke3",
                P = "index-module__active_swiper_item___AddER",
                Q = "index-module__dots___LkJ23",
                F = "index-module__dot___m3rdX",
                W = "index-module__dot_active___ElHC1",
                H = "index-module__refresh___u50eX",
                J = "index-module__create_btn___flXwG",
                V = "index-module__create_tip___RLTzF",
                X = "index-module__join_group_circle_box____nVEp",
                B = "index-module__close_icon___wi7yi",
                q = "index-module__main_box___U2r4h",
                K = function(e) {
                    var n, a = e.actionType,
                        t = void 0 === a ? "join" : a,
                        o = e.joinRoomId,
                        r = void 0 === o ? "" : o,
                        s = e.onClose,
                        l = e.onHandle,
                        N = e.themeInfo,
                        j = (0, f.useState)(t),
                        M = (0, m.Z)(j, 2),
                        I = M[0],
                        Z = M[1],
                        T = (0, f.useState)([]),
                        D = (0, m.Z)(T, 2),
                        E = D[0],
                        K = D[1],
                        $ = (0, f.useState)([]),
                        ee = (0, m.Z)($, 2),
                        ne = ee[0],
                        ae = ee[1],
                        te = (0, f.useState)([
                            [{
                                avatarUrl: A.Dt,
                                nickName: "灰太狼"
                            }, {
                                avatarUrl: A.Gu,
                                nickName: "喜羊羊"
                            }, {
                                avatarUrl: A.Xq,
                                nickName: "懒羊羊"
                            }]
                        ]),
                        oe = (0, m.Z)(te, 2),
                        ie = oe[0],
                        re = (oe[1], (0, f.useState)(0)),
                        se = (0, m.Z)(re, 2),
                        le = se[0],
                        ce = (se[1], (0, f.useState)(0)),
                        ue = (0, m.Z)(ce, 2),
                        de = (ue[0], ue[1]),
                        me = (0, f.useState)(0),
                        ge = (0, m.Z)(me, 2),
                        ve = ge[0],
                        xe = ge[1],
                        he = (0, f.useState)(0),
                        pe = (0, m.Z)(he, 2),
                        fe = pe[0],
                        Ne = pe[1],
                        _e = (0, f.useState)((null === (n = (0, v.getCurrentInstance)().router) || void 0 === n ? void 0 : n.params.roomId) || ""),
                        je = (0, m.Z)(_e, 1)[0],
                        Me = (0, f.useState)([]),
                        ye = (0, m.Z)(Me, 2),
                        Ie = ye[0],
                        Ge = ye[1],
                        Ze = function() {
                            var e = (0, d.Z)((0, u.Z)().m((function e() {
                                return (0, u.Z)().w((function(e) {
                                    for (;;) switch (e.n) {
                                        case 0:
                                            if (!(ve <= 0)) {
                                                e.n = 1;
                                                break
                                            }
                                            return e.a(2);
                                        case 1:
                                            Te(!0);
                                        case 2:
                                            return e.a(2)
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    w((function() {
                        "create" === I && Te(), "join" === I && Ae()
                    }));
                    var Te = function() {
                            var e = (0, d.Z)((0, u.Z)().m((function e() {
                                var n, a, t, o, i, r, s, l = arguments;
                                return (0, u.Z)().w((function(e) {
                                    for (;;) switch (e.p = e.n) {
                                        case 0:
                                            return n = l.length > 0 && void 0 !== l[0] && l[0], ae([]), e.p = 1, e.n = 2, (0, k.zY)({
                                                theme_name: (null == N ? void 0 : N.name) || "kuakuaqun",
                                                refresh: n
                                            });
                                        case 2:
                                            a = e.v, o = (t = a || {}).candidates, i = t.refreshCount, r = t.totalCount, o && o.length > 0 && (ae([o]), de(r), xe(i)), e.n = 4;
                                            break;
                                        case 3:
                                            e.p = 3, s = e.v, console.error("获取候选角色失败", s);
                                        case 4:
                                            return e.a(2)
                                    }
                                }), e, null, [
                                    [1, 3]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        we = (0, f.useState)(!1),
                        be = (0, m.Z)(we, 2),
                        ke = be[0],
                        Se = be[1],
                        De = function() {
                            var e = (0, d.Z)((0, u.Z)().m((function e() {
                                var n, a, t;
                                return (0, u.Z)().w((function(e) {
                                    for (;;) switch (e.n) {
                                        case 0:
                                            return console.log("~~~~~~~handleCreateGroup~~~~~~~~~~~~~", ne, fe), n = ne[fe], a = n.map((function(e) {
                                                return e.name
                                            })), e.n = 1, (0, k.Rb)();
                                        case 1:
                                            if (!((null == (t = e.v) ? void 0 : t.remain) <= 0)) {
                                                e.n = 2;
                                                break
                                            }
                                            return l && l({
                                                type: "remain"
                                            }), e.a(2);
                                        case 2:
                                            Se(!0), (0, k.sm)({
                                                characterNames: a,
                                                themeName: null == N ? void 0 : N.name
                                            }).then((function(e) {
                                                if (console.log("createRooms", e), null != e && e.errno) x().showToast({
                                                    title: (null == e ? void 0 : e.errmsg) || "创建失败,请重试",
                                                    icon: "none"
                                                });
                                                else {
                                                    var n = x().getCurrentInstance().router,
                                                        a = ((null == n ? void 0 : n.params) || {}).fromUserId,
                                                        t = void 0 === a ? "" : a;
                                                    (0, S.G3)("create_room_pv", 1, {
                                                        tags: {
                                                            room_id: null == e ? void 0 : e.id,
                                                            from_user_id: t
                                                        }
                                                    }), setTimeout((function() {
                                                        s && s(), Se(!1), (0, h.c4)(p.iY.Package, p.iY.GroupChat + "?roomId=".concat(null == e ? void 0 : e.id, "&unreadNum=10"))
                                                    }), 1500)
                                                }
                                            }));
                                        case 3:
                                            return e.a(2)
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        Ae = function() {
                            var e = (0, d.Z)((0, u.Z)().m((function e() {
                                var n, a, t, o;
                                return (0, u.Z)().w((function(e) {
                                    for (;;) switch (e.n) {
                                        case 0:
                                            return console.log("~~~~~~~~~~~~handleJoinInit~~~~~~~~~~~~", r, "xxxxx", je), e.n = 1, (0, k.bY)({
                                                room_id: r || je,
                                                appId: (0, y.rh)() || ""
                                            });
                                        case 1:
                                            n = e.v, console.log("~~~~~~~~~_publicInfo~~~~~", n), t = (a = n || {}).characters, o = a.humans, Ge(o), K((0, c.Z)(t).slice(0, 3));
                                        case 2:
                                            return e.a(2)
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        Ce = Array.from({
                            length: ne.length
                        }, (function(e, n) {
                            return n
                        }));
                    return (0, C.jsxs)(g.G7, {
                        className: L,
                        children: ["create" === I && (0, C.jsxs)(g.G7, {
                            className: q,
                            children: [(0, C.jsx)(g.G7, {
                                className: O,
                                children: (0, C.jsxs)(g.tq, {
                                    current: fe,
                                    className: U,
                                    onChange: function(e) {
                                        Ne(e.detail.current)
                                    },
                                    children: [0 === ne.length && ie.map((function(e, n) {
                                        return (0, C.jsx)(g.t3, {
                                            className: _()(Y, (0, i.Z)({}, P, fe === n)),
                                            children: (0, C.jsx)(g.G7, {
                                                className: R,
                                                children: (0, C.jsx)(z, {
                                                    others: e || [],
                                                    type: "create"
                                                })
                                            })
                                        }, n)
                                    })), 0 !== ne.length && ne.map((function(e, n) {
                                        return (0, C.jsx)(g.t3, {
                                            className: _()(Y, (0, i.Z)({}, P, fe === n)),
                                            children: (0, C.jsx)(g.G7, {
                                                className: R,
                                                children: (0, C.jsx)(z, {
                                                    others: e || [],
                                                    type: "create"
                                                })
                                            })
                                        }, n)
                                    }))]
                                })
                            }), !!le && (0, C.jsx)(g.G7, {
                                className: Q,
                                children: Ce.map((function(e) {
                                    return (0, C.jsx)(g.G7, {
                                        className: _()(F, (0, i.Z)({}, W, e === fe))
                                    }, e)
                                }))
                            }), (0, C.jsxs)(g.G7, {
                                className: H,
                                children: [(0, C.jsx)(g.Ee, {
                                    src: 0 === ve ? A.uU : A.n9,
                                    onClick: Ze
                                }), (0, C.jsxs)(g.G7, {
                                    children: [(0, C.jsx)(g.xv, {
                                        style: {
                                            opacity: .5
                                        },
                                        children: "点击可刷新角色，今日剩余"
                                    }), (0, C.jsx)(g.xv, {
                                        style: {
                                            color: "white",
                                            margin: "0 4px"
                                        },
                                        children: ve || 0
                                    }), (0, C.jsx)(g.xv, {
                                        style: {
                                            opacity: .5
                                        },
                                        children: "次"
                                    })]
                                })]
                            }), (0, C.jsx)(G.ZP, {
                                className: J,
                                style: {
                                    background: "#faba25",
                                    fontSize: "16px",
                                    opacity: ke ? .5 : 1
                                },
                                type: "primary",
                                onClick: function() {
                                    ke || De()
                                },
                                children: "创建" + (ke ? "中..." : (null == N ? void 0 : N.displayName) || "夸夸群")
                            }), (0, C.jsx)(g.G7, {
                                className: V,
                                children: "每次创建群聊都会拉不同的角色进群哦"
                            }), (0, C.jsx)(b.Z, {
                                handleLoginSuccess: function() {
                                    return Te()
                                }
                            })]
                        }), "join" === I && (0, C.jsxs)(g.G7, {
                            className: q,
                            children: [(0, C.jsx)(g.G7, {
                                className: X,
                                children: (0, C.jsx)(z, {
                                    others: E || [],
                                    humans: Ie,
                                    type: "join"
                                })
                            }), (0, C.jsx)(G.ZP, {
                                className: J,
                                style: {
                                    background: "#faba25",
                                    margin: "20px auto",
                                    fontSize: "16px",
                                    marginTop: "70px"
                                },
                                type: "primary",
                                onClick: function() {
                                    ! function() {
                                        var e = x().getCurrentInstance().router,
                                            n = ((null == e ? void 0 : e.params) || {}).fromUserId,
                                            a = void 0 === n ? "" : n;
                                        (0, S.G3)("join_room_pv", 1, {
                                            tags: {
                                                room_id: je,
                                                from_user_id: a
                                            }
                                        }), (0, k.PH)({
                                            room_id: r || je
                                        }).then((function(e) {
                                            console.log("joinRooms", e), "400001" == (e || {}).errno ? x().showToast({
                                                title: "您来晚了，当前群聊已满员",
                                                icon: "none"
                                            }) : (0, h.c4)(p.iY.Package, p.iY.GroupChat + "?roomId=".concat(r || je)), s && s()
                                        }))
                                    }()
                                },
                                children: "加入群聊"
                            }), (0, C.jsx)(G.ZP, {
                                className: J,
                                style: {
                                    margin: "0 auto",
                                    fontSize: "16px",
                                    border: "1px solid rgba(255, 255, 255, 0.10)"
                                },
                                onClick: function() {
                                    Z("create"), Te()
                                },
                                children: "创建我的群聊"
                            }), (0, C.jsx)(b.Z, {
                                handleLoginSuccess: function() {}
                            })]
                        }), (0, C.jsx)(g.Ee, {
                            className: B,
                            src: A.UF,
                            onClick: s
                        })]
                    })
                },
                $ = t(6836),
                ee = t(463),
                ne = t(3804),
                ae = t(6883),
                te = {
                    2: [{
                        x: 7,
                        y: 24,
                        width: 32
                    }, {
                        x: 37,
                        y: 11,
                        width: 22
                    }],
                    3: [{
                        x: 7,
                        y: 7,
                        width: 28
                    }, {
                        x: 37,
                        y: 26,
                        width: 22
                    }, {
                        x: 15,
                        y: 39,
                        width: 20
                    }],
                    4: [{
                        x: 7,
                        y: 7,
                        width: 28
                    }, {
                        x: 31,
                        y: 31,
                        width: 28
                    }, {
                        x: 39,
                        y: 11,
                        width: 16
                    }, {
                        x: 11,
                        y: 39,
                        width: 16
                    }],
                    5: [{
                        x: 15,
                        y: 11,
                        width: 24
                    }, {
                        x: 42,
                        y: 12,
                        width: 14
                    }, {
                        x: 7,
                        y: 34,
                        width: 16
                    }, {
                        x: 39,
                        y: 28,
                        width: 20
                    }, {
                        x: 25,
                        y: 41,
                        width: 14
                    }],
                    6: [{
                        x: 7,
                        y: 7,
                        width: 22
                    }, {
                        x: 35,
                        y: 13,
                        width: 14
                    }, {
                        x: 25,
                        y: 27,
                        width: 14
                    }, {
                        x: 9,
                        y: 35,
                        width: 16
                    }, {
                        x: 28,
                        y: 43,
                        width: 16
                    }, {
                        x: 41,
                        y: 28,
                        width: 20
                    }]
                },
                oe = (0, D.z)(g.G7)({
                    name: "Container",
                    class: "ctw6dp4",
                    propsAsIs: !0
                }),
                ie = function(e) {
                    var n, a, t, o, i = e.onClick,
                        r = e.groupInfo,
                        s = (e.index, (0, f.useMemo)((function() {
                            var e;
                            return (null == r || null === (e = r.users.slice(0, 6)) || void 0 === e ? void 0 : e.length) || 0
                        }), [null == r ? void 0 : r.users])),
                        l = (0, f.useMemo)((function() {
                            return te[s] || {}
                        }), [s]);
                    return (0, C.jsxs)(oe, {
                        onClick: i,
                        children: [(0, C.jsxs)(g.G7, {
                            className: _()("avatar_box", 0 != (null == r ? void 0 : r.unreadNum) && "has-unread"),
                            style: {
                                borderColor: null == r || null === (n = r.themeInfo) || void 0 === n || null === (n = n.feOptions) || void 0 === n ? void 0 : n.bgColor,
                                background: null == r || null === (a = r.themeInfo) || void 0 === a || null === (a = a.feOptions) || void 0 === a ? void 0 : a.borderColor
                            },
                            children: [null == r ? void 0 : r.users.map((function(e, n) {
                                var a, t, o;
                                return (0, C.jsx)(g.G7, {
                                    className: "avatar",
                                    style: {
                                        backgroundImage: "url(".concat(null == e ? void 0 : e.avatarUrl, ")"),
                                        width: "".concat(null === (a = l[n]) || void 0 === a ? void 0 : a.width, "px"),
                                        left: "".concat(null === (t = l[n]) || void 0 === t ? void 0 : t.x, "px"),
                                        top: "".concat(null === (o = l[n]) || void 0 === o ? void 0 : o.y, "px")
                                    }
                                }, null == e ? void 0 : e.nickName)
                            })), (0, C.jsxs)(g.G7, {
                                className: "tag",
                                style: {
                                    background: null == r || null === (t = r.themeInfo) || void 0 === t || null === (t = t.feOptions) || void 0 === t ? void 0 : t.bgColor,
                                    opacity: .8
                                },
                                children: [" ", null == r || null === (o = r.themeInfo) || void 0 === o ? void 0 : o.displayName]
                            })]
                        }), (0, C.jsxs)(g.G7, {
                            className: "group_info",
                            children: [(0, C.jsx)(g.G7, {
                                className: "group_name",
                                children: null == r ? void 0 : r.displayName
                            }), (0, C.jsxs)(g.G7, {
                                className: "latest_msg_box",
                                children: [0 != (null == r ? void 0 : r.unreadNum) && (0, C.jsx)(g.G7, {
                                    className: "latest_msg_count",
                                    children: "[".concat(null == r ? void 0 : r.unreadNum, "条]")
                                }), (0, C.jsx)(g.G7, {
                                    className: "latest_msg",
                                    children: null == r ? void 0 : r.lastMessageText
                                })]
                            })]
                        }), (0, C.jsx)(g.G7, {
                            className: "latest_time",
                            children: null == r ? void 0 : r.lastMessageFromNow
                        })]
                    })
                };
            t(3639);
            var re = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05LjgzMTA5IDEuOTAzMDFDOS4yMzQyNCAxLjMwNjE2IDguMjY2OTYgMS4zMDQ4NiA3LjY2ODUgMS45MDAxTDEuNTQ1MTYgNy45OTA1NUMxLjI1NjIxIDguMjc3OTUgMS4wOTM3NSA4LjY2ODY4IDEuMDkzNzUgOS4wNzYyMlYxMC44OTk5QzEuMDkzNzUgMTEuNTA0IDEuNTgzNDQgMTEuOTkzNyAyLjE4NzUgMTEuOTkzN0g0LjAxMzk0QzQuNDE4NjMgMTEuOTkzNyA0LjgwNjg1IDExLjgzMzUgNS4wOTM3OCAxMS41NDgxTDExLjIxNTcgNS40NTlDMTEuODE2NSA0Ljg2MTQ5IDExLjgxNzggMy44ODk3IDExLjIxODcgMy4yOTA1N0w5LjgzMTA5IDEuOTAzMDFaTTguNTk0MDcgMi44MzA2OEM4LjY3OTU3IDIuNzQ1NjQgOC44MTc3NSAyLjc0NTgzIDguOTAzMDIgMi44MzEwOUwxMC4yOTA2IDQuMjE4NjVDMTAuMzc2MiA0LjMwNDI0IDEwLjM3NiA0LjQ0MzA3IDEwLjI5MDIgNC41Mjg0M0w0LjE2ODIgMTAuNjE3NUM0LjEyNzIyIDEwLjY1ODMgNC4wNzE3NiAxMC42ODEyIDQuMDEzOTQgMTAuNjgxMkgyLjQwNjI1VjkuMDc2MjJDMi40MDYyNSA5LjAxOCAyLjQyOTQ2IDguOTYyMTggMi40NzA3NCA4LjkyMTEyTDguNTk0MDcgMi44MzA2OFpNNy44NzUgMTAuNzE4OEM3LjUxMjU2IDEwLjcxODggNy4yMTg3NSAxMS4wMTI2IDcuMjE4NzUgMTEuMzc1QzcuMjE4NzUgMTEuNzM3NCA3LjUxMjU2IDEyLjAzMTMgNy44NzUgMTIuMDMxM0gxMi4yNUMxMi42MTI0IDEyLjAzMTMgMTIuOTA2MiAxMS43Mzc0IDEyLjkwNjIgMTEuMzc1QzEyLjkwNjIgMTEuMDEyNiAxMi42MTI0IDEwLjcxODggMTIuMjUgMTAuNzE4OEg3Ljg3NVoiIGZpbGw9IiNBQUFCQjMiLz4KPC9zdmc+Cg==",
                se = "index-module__blessModal___y3qiV",
                le = "index-module__blessWrap___CLSVS",
                ce = "index-module__blessAnimation___sbC7z",
                ue = "index-module__closeIcon___TeoZU",
                de = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgb3BhY2l0eT0iMC41IiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHJ4PSIxNiIgZmlsbD0iYmxhY2siIGZpbGwtb3BhY2l0eT0iMC41Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTYgMTcuMDYwOEwxOS4yMTk3IDIwLjI4MDVMMjAuMjgwMyAxOS4yMTk4TDE3LjA2MDcgMTYuMDAwMUwyMC4yODAzIDEyLjc4MDVMMTkuMjE5NyAxMS43MTk4TDE2IDE0LjkzOTVMMTIuNzgwMyAxMS43MTk4TDExLjcxOTcgMTIuNzgwNUwxNC45MzkzIDE2LjAwMDFMMTEuNzE5NyAxOS4yMTk4TDEyLjc4MDMgMjAuMjgwNUwxNiAxNy4wNjA4WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==";
             function me(e) {
                var n = e.onClose;
                return (0, C.jsx)(g.G7, {
                    className: se,
                    children: (0, C.jsxs)(g.G7, {
                        className: le,
                        children: [(0, C.jsx)(g.Ee, {
                            src: ne.R5,
                            className: ce
                        }), (0, C.jsx)(g.Ee, {
                            src: de,
                            className: ue,
                            onClick: n
                        })]
                    })
                })
            }
            var ge = {
                blessModal: "index-module__blessModal___EADIa",
                blessWrap: "index-module__blessWrap___Rt7C9",
                blessAnimation: "index-module__blessAnimation___UVdPk",
                closeIcon: "index-module__closeIcon___uLbMi",
                typeList: "index-module__typeList___UGpFO",
                typeItem: "index-module__typeItem___klmUg",
                typeName: "index-module__typeName___lHXnt",
                typeSubName: "index-module__typeSubName___C_UER"
            };
             function ve(e) {
                var n = e.onClose,
                    a = e.themeList,
                    t = void 0 === a ? [] : a,
                    o = e.onSelect,
                    i = [].concat((0, c.Z)(t), [{
                        displayName: "敬请期待",
                        avatarUrl: "".concat(ne.lG, "type7.png"),
                        name: "type7"
                    }]);
                return (0, C.jsx)(g.G7, {
                    className: ge.blessModal,
                    children: (0, C.jsxs)(g.G7, {
                        className: ge.blessWrap,
                        children: [(0, C.jsx)(g.G7, {
                            className: ge.typeList,
                            children: i.map((function(e) {
                                return (0, C.jsxs)(g.G7, {
                                    className: ge.typeItem,
                                    onClick: function() {
                                        "type7" !== e.name && (null == o || o(e))
                                    },
                                    children: [(0, C.jsx)(g.Ee, {
                                        src: e.avatarUrl,
                                        className: ge.typeIcon
                                    }), (0, C.jsxs)(g.G7, {
                                        children: [(0, C.jsx)(g.G7, {
                                            className: ge.typeName,
                                            children: e.displayName
                                        }), e.description && (0, C.jsx)(g.G7, {
                                            className: ge.typeSubName,
                                            children: e.description
                                        })]
                                    })]
                                }, e.name)
                            }))
                        }), (0, C.jsx)(g.Ee, {
                            src: de,
                            className: ge.closeIcon,
                            onClick: n
                        })]
                    })
                })
            }
            "".concat(ne.lG, "type1.png"), "".concat(ne.lG, "type2.png"), "".concat(ne.lG, "type3.png"), "".concat(ne.lG, "type4.png"), "".concat(ne.lG, "type5.png"), "".concat(ne.lG, "type6.png"), "".concat(ne.lG, "type7.png");
            var xe = t(8285);
             function he() {
                var e, n, a, t = function(e) {
                        var n = (0, f.useState)(I.UNKNOWN),
                            a = (0, m.Z)(n, 2),
                            t = a[0],
                            o = a[1];
                        return x().useLoad(function() {
                            var n = (0, d.Z)((0, u.Z)().m((function n(a) {
                                var t, i, r;
                                return (0, u.Z)().w((function(n) {
                                    for (;;) switch (n.n) {
                                        case 0:
                                            return console.log("page query ==>", a), n.n = 1, x().login();
                                        case 1:
                                            return t = n.v, i = t.code, console.log("Taro.login+>", i), n.n = 2, (0, y.Xx)(i);
                                        case 2:
                                            return r = n.v, console.log("checkLogin;", r), o(r ? I.IS_LOGIN_IN : I.NOT_LOGOIN_IN), n.n = 3, Promise.resolve(null == e ? void 0 : e(a, r));
                                        case 3:
                                            return n.a(2)
                                    }
                                }), n)
                            })));
                            return function(e) {
                                return n.apply(this, arguments)
                            }
                        }()), t
                    }(),
                    o = (0, f.useState)(null),
                    N = (0, m.Z)(o, 2),
                    G = N[0],
                    Z = N[1],
                    T = (0, f.useState)(!1),
                    w = (0, m.Z)(T, 2),
                    D = w[0],
                    A = w[1],
                    E = (0, f.useState)(!1),
                    z = (0, m.Z)(E, 2),
                    L = z[0],
                    O = z[1],
                    U = (0, f.useState)([]),
                    Y = (0, m.Z)(U, 2),
                    R = Y[0],
                    P = Y[1],
                    Q = (0, f.useState)([]),
                    F = (0, m.Z)(Q, 2),
                    W = F[0],
                    H = F[1],
                    J = (0, f.useState)(""),
                    V = (0, m.Z)(J, 2),
                    X = V[0],
                    B = V[1],
                    q = (0, f.useState)({}),
                    te = (0, m.Z)(q, 2),
                    oe = te[0],
                    se = te[1],
                    le = (0, f.useState)(!0),
                    ce = (0, m.Z)(le, 2),
                    ue = ce[0],
                    de = ce[1],
                    ge = (0, f.useRef)(null),
                    he = (0, f.useState)({}),
                    pe = (0, m.Z)(he, 2),
                    fe = pe[0],
                    Ne = pe[1],
                    _e = (0, f.useRef)(null),
                    je = (0, f.useRef)((function() {})),
                    Me = (0, f.useState)(!0),
                    ye = (0, m.Z)(Me, 2),
                    Ie = (ye[0], ye[1]),
                    Ge = (0, f.useState)("chat"),
                    Ze = (0, m.Z)(Ge, 2),
                    Te = Ze[0],
                    we = Ze[1],
                    be = (0, f.useState)("create"),
                    ke = (0, m.Z)(be, 2),
                    Se = ke[0],
                    De = ke[1],
                    Ae = (0, f.useState)({
                        open: !1,
                        content: ""
                    }),
                    Ce = (0, m.Z)(Ae, 2),
                    Ee = Ce[0],
                    ze = Ce[1],
                    Le = (0, f.useState)({
                        avatarUrl: (null === (e = (0, y.gv)()) || void 0 === e ? void 0 : e.avatarUrl) || "",
                        nickName: (null === (n = (0, y.gv)()) || void 0 === n ? void 0 : n.nickName) || ""
                    }),
                    Oe = (0, m.Z)(Le, 2),
                    Ue = Oe[0],
                    Ye = Oe[1],
                    Re = (0, f.useState)((null === (a = (0, y.gv)()) || void 0 === a ? void 0 : a.nickName) || ""),
                    Pe = (0, m.Z)(Re, 2),
                    Qe = Pe[0],
                    Fe = Pe[1],
                    We = (0, f.useState)(!1),
                    He = (0, m.Z)(We, 2),
                    Je = He[0],
                    Ve = He[1],
                    Xe = (0, f.useState)(!1),
                    Be = (0, m.Z)(Xe, 2),
                    qe = Be[0],
                    Ke = Be[1],
                    $e = (0, f.useState)(!1),
                    en = (0, m.Z)($e, 2),
                    nn = en[0],
                    an = en[1],
                    tn = (0, f.useRef)();
                (0, v.useShareAppMessage)((function(e) {
                    return {
                        title: "叮咚，你收到一条羊村群聊邀请信息",
                        path: "/".concat(p.iY.Package, "/").concat(p.iY.Group),
                        imageUrl: ne.ch
                    }
                })), (0, v.useLoad)(function() {
                    var e = (0, d.Z)((0, u.Z)().m((function e(n) {
                        var a, t, o;
                        return (0, u.Z)().w((function(e) {
                            for (;;) switch (e.p = e.n) {
                                case 0:
                                    if (a = (null == n ? void 0 : n.roomId) || "", t = (null == n ? void 0 : n.fromUserId) || "", null != n && n.roomId && B(a), null == n || !n.scene) {
                                        e.n = 4;
                                        break
                                    }
                                    return e.p = 1, e.n = 2, (0, k.fs)({
                                        info_id: null == n ? void 0 : n.scene
                                    });
                                case 2:
                                    o = e.v, a = null == o ? void 0 : o.roomId, t = null == o ? void 0 : o.fromUserId, console.log("~~~~~~~~~~~getWxQrcodeInfo~~~~~~", o, a), B(a), e.n = 4;
                                    break;
                                case 3:
                                    e.p = 3, e.v;
                                case 4:
                                    console.log("~~~~~~~useLoad~~~~~~~~~", n), n.fromInner ? A(!0) : (n.tabType ? (ln(n.tabType), A(!0)) : A(!1), (0, S.G3)("app_pv", 1), a && t && (0, S.G3)("from_share_pv", 1, {
                                        tags: {
                                            room_id: a,
                                            from_user_id: t
                                        }
                                    })), tn.current = x().createInnerAudioContext();
                                case 5:
                                    return e.a(2)
                            }
                        }), e, null, [
                            [1, 3]
                        ])
                    })));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }()), (0, v.useUnload)((function() {
                    var e;
                    console.log("~~~~~~~~useUnload~~~~~~Gruop", ge.current), ge.current && ge.current.release(), null === (e = tn.current) || void 0 === e || e.destroy()
                })), (0, f.useEffect)((function() {
                    var e;
                    Ve(!1), Fe((null === (e = (0, y.gv)()) || void 0 === e ? void 0 : e.nickName) || "")
                }), [Te]), (0, f.useEffect)((function() {
                    t !== I.NOT_LOGOIN_IN || X || O(!0), t === I.IS_LOGIN_IN && (console.log("~~~~~~~~~~~~loginStatus~~~~~~~~~~IS_LOGIN_IN"), on())
                }), [t]), (0, f.useEffect)((function() {
                    D && X && (console.log("~~~~~joinRoomId~~~~~~~", X), (0, k.bY)({
                        room_id: X,
                        appId: (0, y.rh)() || ""
                    }).then((function(e) {
                        console.log("getPublicRoomsInfo", e);
                        var n = e || {};
                        "400404" === (null == n ? void 0 : n.errno) ? (x().showToast({
                            title: "该群已被管理员解散",
                            icon: "none",
                            duration: 2e3
                        }), t === I.NOT_LOGOIN_IN && (De("create"), setTimeout((function() {
                            O(!0)
                        }), 50))) : (De("join"), O(!0))
                    })))
                }), [D]), (0, v.useDidShow)((function() {
                    an(!1), console.log("~~~~~~~~~~~~useDidShow~~~~~~~~~~"), t === I.IS_LOGIN_IN && on()
                })), je.current = function() {
                    on()
                };
                var on = function() {
                        var e = (0, d.Z)((0, u.Z)().m((function e() {
                            var n, a, t, o, i, d, m, g, v, h, p, f, N, _, j;
                            return (0, u.Z)().w((function(e) {
                                for (;;) switch (e.n) {
                                    case 0:
                                        return de(!0), e.n = 1, (0, k.A4)();
                                    case 1:
                                        return o = e.v, e.n = 2, (0, k.RC)();
                                    case 2:
                                        if (i = e.v, console.log("~~~~~~~~~getThemes~~~~~~~~~~~~~~", i), H(i), x().setStorageSync("themeList", i), null == o || !o.errno) {
                                            e.n = 3;
                                            break
                                        }
                                        return de(!1), e.a(2);
                                    case 3:
                                        return e.n = 4, (0, k.Rb)();
                                    case 4:
                                        return d = e.v, console.log("~~~~~~~~~handleInt~~~~~~~~~~~~~", d), Z(d), m = sn(o), g = o.map((function(e) {
                                            return e.id
                                        })), e.n = 5, (0, k.g5)({
                                            roomIds: g
                                        });
                                    case 5:
                                        v = e.v, h = x().getStorageSync("lastChatRoomDialogue"), p = {}, f = (0, u.Z)().m((function e(n) {
                                            var a;
                                            return (0, u.Z)().w((function(e) {
                                                for (;;) switch (e.n) {
                                                    case 0:
                                                        a = 0, h[n] && v[n].forEach((function(e) {
                                                            e.createdAt > h[n] && a++
                                                        })), p[n] = a;
                                                    case 1:
                                                        return e.a(2)
                                                }
                                            }), e)
                                        })), _ = s(v);
                                    case 6:
                                        if ((j = _()).done) {
                                            e.n = 8;
                                            break
                                        }
                                        return N = j.value, e.d((0, r.Z)(f(N)), 7);
                                    case 7:
                                        e.n = 6;
                                        break;
                                    case 8:
                                        Ye({
                                            avatarUrl: (null === (n = (0, y.gv)()) || void 0 === n ? void 0 : n.avatarUrl) || "",
                                            nickName: (null === (a = (0, y.gv)()) || void 0 === a ? void 0 : a.nickName) || ""
                                        }), Fe((null === (t = (0, y.gv)()) || void 0 === t ? void 0 : t.nickName) || ""), P(o.map((function(e) {
                                            var n, a = (0, ae.x)(e),
                                                t = a.residualCharacters,
                                                o = a.residualHumans,
                                                r = [].concat((0, c.Z)(t), (0, c.Z)(o));
                                            return (0, l.Z)((0, l.Z)({}, e), {}, {
                                                users: r,
                                                themeInfo: i.find((function(n) {
                                                    return n.name === e.themeName
                                                })),
                                                lastMessageFromNow: (0, $.n)(null == e || null === (n = e.lastMessage) || void 0 === n ? void 0 : n.createdAt),
                                                lastMessageText: un(null == e ? void 0 : e.lastMessage, m),
                                                unreadNum: p[e.id] || 0
                                            })
                                        }))), de(!1), rn();
                                    case 9:
                                        return e.a(2)
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    rn = function() {
                        ge.current || (ge.current = (0, ee.l)({
                            url: k.v2,
                            options: {
                                path: "/api/v1/chat/socketio",
                                auth: {
                                    authorization: (0, y.hP)()
                                }
                            }
                        }, {}), ge.current.start(), cn())
                    },
                    sn = function(e) {
                        var n = {};
                        return e.forEach((function(e) {
                            n = (0, l.Z)((0, l.Z)((0, l.Z)({}, n), (0, ae.H)(null == e ? void 0 : e.characters)), (0, ae.H)(null == e ? void 0 : e.humans))
                        })), se(n), n
                    },
                    ln = function(e) {
                        "chat" == e ? on().finally((function() {
                            return we(e)
                        })) : (0, y.et)().finally((function() {
                            return we(e)
                        }))
                    },
                    cn = function() {
                        var e = ge.current._socket;
                        e.on("roomSendMsg", (function(e) {
                            _e.current(e)
                        })), e.on("joinRoom", (function(e) {
                            console.log("~~~~~~~~~joinRoom~~~~~", e), je.current(e)
                        })), e.on("leaveRoom", (function(e) {
                            console.log("~~~~~~~~~leaveRoom~~~~~", e), je.current(e)
                        })), e.on("roomDismiss", (function(e) {
                            console.log("~~~~~~~~~roomDismiss~~~~~", e), je.current(e)
                        }))
                    };
                (0, f.useEffect)((function() {
                    var e = R.map((function(e) {
                        var n, a, t = null === (n = fe[e.id]) || void 0 === n ? void 0 : n[(null === (a = fe[e.id]) || void 0 === a ? void 0 : a.length) - 1];
                        return t ? (0, l.Z)((0, l.Z)({}, e), {}, {
                            lastMessage: t,
                            lastMessageFromNow: (0, $.n)(null == t ? void 0 : t.createdAt),
                            lastMessageText: un(t),
                            unreadNum: e.unreadNum + 1
                        }) : e
                    })) || [];
                    P(e)
                }), [fe]), _e.current = function(e) {
                    var n;
                    Ne((0, l.Z)((0, l.Z)({}, fe), {}, (0, i.Z)({}, e.roomId, null === (n = (0, c.Z)(fe[e.roomId] || [])) || void 0 === n ? void 0 : n.concat(e))))
                };
                var un = function(e, n) {
                        var a;
                        return e ? "".concat(null === (a = (n || oe)[e.senderId]) || void 0 === a ? void 0 : a.nickName, "：").concat(e.text) : "赶快开启对话吧~"
                    },
                    dn = (0, f.useCallback)((function() {
                        return (0, C.jsx)(g.G7, {
                            className: "video-container",
                            onClick: function() {
                                A(!0)
                            },
                            children: (0, C.jsx)(g.nk, {
                                id: "video",
                                src: ne.in,
                                autoplay: !0,
                                controls: !1,
                                "object-fit": "cover",
                                onEnded: function() {
                                    A(!0)
                                }
                            })
                        })
                    }), []),
                    mn = (0, f.useState)(0),
                    gn = (0, m.Z)(mn, 2),
                    vn = gn[0],
                    xn = gn[1],
                    hn = (0, f.useState)({}),
                    pn = (0, m.Z)(hn, 2),
                    fn = pn[0],
                    Nn = pn[1];
                return (0, C.jsxs)(g.G7, {
                    className: _()("page", "list_page"),
                    children: [!D && dn(), (0, C.jsx)(M.Z, {
                        children: "羊言羊语"
                    }), "chat" === Te ? (0, C.jsxs)(g.G7, {
                        className: "group_page",
                        children: [R.length > 0 && (0, C.jsxs)(g.G7, {
                            className: "theme_list",
                            children: [(0, C.jsx)(g.tq, {
                                className: "banner-swiper",
                                autoplay: !0,
                                circular: !0,
                                interval: 5e3,
                                onChange: function(e) {
                                    xn(e.detail.current)
                                },
                                children: W.filter((function(e) {
                                    return e.bannerUrl
                                })).map((function(e, n) {
                                    return (0, C.jsx)(g.t3, {
                                        onClick: function() {
                                            G && (null == G ? void 0 : G.remain) <= 0 ? ze({
                                                open: !0,
                                                content: (0, C.jsxs)(g.G7, {
                                                    style: {
                                                        textAlign: "center"
                                                    },
                                                    children: [(0, C.jsx)(g.G7, {
                                                        children: "每天只能创建一次群聊哦"
                                                    }), (0, C.jsx)(g.G7, {
                                                        children: "今天的机会已经用完，明天再来吧！"
                                                    })]
                                                })
                                            }) : (0, y.gv)() && (Nn(e), De("create"), O(!0))
                                        },
                                        children: (0, C.jsx)(g.Ee, {
                                            className: "banner-image",
                                            src: e.bannerUrl,
                                            mode: "aspectFill"
                                        })
                                    }, n)
                                }))
                            }), (0, C.jsx)(g.G7, {
                                className: "spot-pagination",
                                children: W.filter((function(e) {
                                    return e.bannerUrl
                                })).map((function(e, n) {
                                    return (0, C.jsx)(g.G7, {
                                        className: "spot-pagination-bullet " + (vn == n ? "spot-pagination-bullet-active" : "")
                                    }, n)
                                }))
                            })]
                        }), (R || []).sort((function(e, n) {
                            var a, t;
                            return (null == n || null === (a = n.lastMessage) || void 0 === a ? void 0 : a.createdAt) - (null == e || null === (t = e.lastMessage) || void 0 === t ? void 0 : t.createdAt)
                        })).length > 0 ? (0, C.jsx)(g.G7, {
                            className: "group_list",
                            children: R.map((function(e, n) {
                                return (0, C.jsx)(g.G7, {
                                    onClick: function() {
                                        (0, S.G3)("enter_room_pv", 1, {
                                            tags: {
                                                room_id: e.id
                                            }
                                        }), (0, h.c4)(p.iY.Package, p.iY.GroupChat + "?roomId=".concat(null == e ? void 0 : e.id, "&unreadNum=").concat(null == e ? void 0 : e.unreadNum))
                                    },
                                    children: (0, C.jsx)(ie, {
                                        groupInfo: e,
                                        index: n
                                    })
                                }, e.id)
                            }))
                        }) : (0, C.jsx)(C.Fragment, {
                            children: !ue && (0, C.jsx)(g.Ee, {
                                src: ne.km,
                                className: "empty"
                            })
                        }), !ue && (0, C.jsxs)(C.Fragment, {
                            children: [(0, C.jsxs)(g.G7, {
                                className: _()("create_btn", {
                                    empty_mode: !(null != R && R.length)
                                }, "relative"),
                                onClick: function() {
                                    G && (null == G ? void 0 : G.remain) <= 0 ? ze({
                                        open: !0,
                                        content: (0, C.jsxs)(g.G7, {
                                            style: {
                                                textAlign: "center"
                                            },
                                            children: [(0, C.jsx)(g.G7, {
                                                children: "每天只能创建一次群聊哦"
                                            }), (0, C.jsx)(g.G7, {
                                                children: "今天的机会已经用完，明天再来吧！"
                                            })]
                                        })
                                    }) : (0, y.gv)() && an(!0)
                                },
                                children: [(0, C.jsx)(g.Ee, {
                                    src: ne.IU
                                }), (0, C.jsxs)(g.G7, {
                                    className: "creat-handle",
                                    children: [(0, C.jsx)(g.G7, {
                                        children: "创建群聊"
                                    }), (0, C.jsxs)(g.G7, {
                                        style: {
                                            opacity: "0.6",
                                            fontSize: "10px"
                                        },
                                        children: ["今日", ((null == G ? void 0 : G.total) || 0) - ((null == G ? void 0 : G.remain) || 0), "/", (null == G ? void 0 : G.total) || 0]
                                    })]
                                }), !(0, y.gv)() && (0, C.jsx)(b.Z, {
                                    handleLoginSuccess: function() {
                                        on()
                                    }
                                })]
                            }), !(0, y.gv)() && (0, C.jsx)(g.G7, {
                                className: "login-tip",
                                children: "登录后即可看到已有群聊哦～"
                            }), (0, C.jsx)(g.G7, {
                                className: _()("bless", {
                                    no_group: !(null != R && R.length)
                                }),
                                onClick: function() {
                                    (0, S.GC)("press_goodnight_btn_pv"), Ke(!0), tn.current && (tn.current.src = "https://commercial-cdn.xiaoice.com/character-ip/praising-groups-mini-program/bless-audio-v2.mp3", tn.current.play())
                                },
                                children: (0, C.jsx)(g.Ee, {
                                    src: "https://virtualhuman-app.oss-cn-beijing.aliyuncs.com/interaction/public/ip-miniprogram/imgs/bless-icon.png"
                                })
                            })]
                        })]
                    }) : (0, C.jsx)(g.G7, {
                        className: "main_page",
                        children: (0, y.gv)() ? (0, C.jsxs)(g.G7, {
                            className: "login_info",
                            children: [(0, C.jsx)(g.zx, {
                                openType: "chooseAvatar",
                                onChooseAvatar: function(e) {
                                    var n = e.detail.avatarUrl;
                                    x().getImageInfo({
                                        src: n
                                    }).then((function(e) {
                                        var n = x().createCanvasContext("myCanvas");
                                        n.drawImage(e.path, 0, 0, e.width, e.height, 0, 0, 100, 100), n.draw(!1, (function() {
                                            x().canvasToTempFilePath({
                                                canvasId: "myCanvas",
                                                width: 100,
                                                height: 100,
                                                destWidth: 100,
                                                destHeight: 100
                                            }).then((function(e) {
                                                x().uploadFile({
                                                    url: "".concat(k.v2, "/api/v1/auth/me/update-avatar"),
                                                    filePath: e.tempFilePath,
                                                    name: "file",
                                                    header: {
                                                        "content-type": "multipart/form-data",
                                                        Authorization: (0, y.hP)()
                                                    },
                                                    success: function(e) {
                                                        var n;
                                                        if (null == e || null === (n = e.data) || void 0 === n || !n.includes("errmsg")) {
                                                            var a = JSON.parse(e.data);
                                                            x().setStorageSync("userAuthInfo", JSON.stringify((0, l.Z)((0, l.Z)({}, (0, y.gv)()), {}, {
                                                                avatarUrl: null == a ? void 0 : a.avatarUrl
                                                            }))), Ye((0, l.Z)((0, l.Z)({}, Ue), {}, {
                                                                avatarUrl: null == a ? void 0 : a.avatarUrl
                                                            }))
                                                        }
                                                    },
                                                    fail: function(e) {
                                                        console.log("===================================="), console.log("err", e), console.log("===================================="), x().showToast({
                                                            title: e.errMsg,
                                                            icon: "none"
                                                        })
                                                    }
                                                })
                                            }))
                                        }))
                                    }))
                                },
                                children: (0, C.jsx)(g.Ee, {
                                    src: (0, y.gv)().avatarUrl
                                })
                            }), Je ? (0, C.jsxs)(g.G7, {
                                children: [(0, C.jsx)(g.II, {
                                    className: "name_input",
                                    value: Qe,
                                    onInput: function(e) {
                                        Ie(!0), Fe(e.detail.value)
                                    },
                                    maxlength: 16,
                                    onFocus: function() {},
                                    placeholder: "请输入昵称",
                                    type: "nickname",
                                    onBlur: function(e) {
                                        Fe(e.detail.value)
                                    },
                                    onNickNameReview: function(e) {
                                        e.detail.pass ? Ie(!1) : Fe("")
                                    },
                                    name: "nickname"
                                }), (0, C.jsx)(g.zx, {
                                    formType: "submit",
                                    className: "save_name",
                                    onClick: function(e) {
                                        console.log("===================================="), console.log(e), console.log("===================================="), Qe ? Qe !== Ue.nickName ? (0, k.zW)({
                                            nickName: Qe
                                        }).then((function(e) {
                                            "400401" !== (null == e ? void 0 : e.errno) ? e && ((0, S.GC)("update_nickname_pv"), Ve(!1), Ye((0, l.Z)((0, l.Z)({}, Ue), {}, {
                                                nickName: Qe
                                            })), x().setStorageSync("userAuthInfo", JSON.stringify((0, l.Z)((0, l.Z)({}, (0, y.gv)()), {}, {
                                                nickName: Qe
                                            }))), Fe(Qe)): x().showToast({
                                                title: "昵称重复了，换一个试试吧",
                                                icon: "none"
                                            })
                                        })).catch((function() {
                                            Fe(Ue.nickName), Ve(!1)
                                        })) : Ve(!1) : x().showToast({
                                            title: "昵称不能为空",
                                            icon: "none"
                                        })
                                    },
                                    children: "保存"
                                })]
                            }) : (0, C.jsxs)(g.G7, {
                                className: "my_name",
                                onClick: function() {
                                    Ve(!0)
                                },
                                children: [Ue.nickName, (0, C.jsx)(g.Ee, {
                                    src: re,
                                    onClick: function() {
                                        Ie(!0)
                                    }
                                }), " "]
                            })]
                        }) : (0, C.jsxs)(g.G7, {
                            className: "no_login_info",
                            children: [(0, C.jsx)(g.Ee, {
                                src: "https://virtualhuman-app.oss-cn-beijing.aliyuncs.com/interaction/public/ip-miniprogram/imgs/header_icon.png"
                            }), (0, C.jsxs)(g.G7, {
                                className: "my_name",
                                children: ["我的昵称", (0, C.jsx)(g.Ee, {
                                    src: re
                                }), " "]
                            }), (0, C.jsx)(b.Z, {
                                handleLoginSuccess: function() {
                                    on()
                                }
                            })]
                        })
                    }), Ee.open && (0, C.jsx)(j.Z, {
                        type: "confirm",
                        onCancel: function() {
                            ze({
                                open: !1,
                                content: ""
                            })
                        },
                        onOk: function() {
                            ze({
                                open: !1,
                                content: ""
                            })
                        },
                        children: Ee.content
                    }), L && (0, C.jsx)(K, {
                        themeInfo: fn,
                        actionType: Se,
                        joinRoomId: X,
                        onClose: function() {
                            an(!1), O(!1), on()
                        },
                        onHandle: function(e) {
                            "remain" === e.type && (O(!1), on(), setTimeout((function() {
                                ze({
                                    open: !0,
                                    content: (0, C.jsxs)(g.G7, {
                                        style: {
                                            textAlign: "center"
                                        },
                                        children: [(0, C.jsx)(g.G7, {
                                            children: "每天只能创建一次群聊哦"
                                        }), (0, C.jsx)(g.G7, {
                                            children: "今天的机会已经用完，明天再来吧！"
                                        })]
                                    })
                                })
                            }), 20))
                        }
                    }), (0, C.jsx)(xe.Z, {
                        page: Te,
                        handleClick: ln
                    }), (0, C.jsx)(g.Xz, {
                        canvasId: "myCanvas",
                        style: "width: 100px; height: 100px;"
                    }), qe && (0, C.jsx)(me, {
                        onClose: function() {
                            var e;
                            Ke(!1), null === (e = tn.current) || void 0 === e || e.stop()
                        }
                    }), nn && (0, C.jsx)(ve, {
                        themeList: W,
                        onClose: function() {
                            an(!1)
                        },
                        onSelect: function(e) {
                            console.log("Selected chat type:", e), Nn(e), De("create"), O(!0)
                        }
                    })]
                })
            }
            he.enableShareAppMessage = !0, Page((0, o.createPageConfig)(he, "pages/group/index", {
                root: {
                    cn: []
                }
            }, {
                navigationBarTitleText: "羊言羊语",
                navigationStyle: "custom",
                disableScroll: !0
            } || {}))
        },
        3595: function(e, n, a) {
            a.r(n)
        },
        3639: function(e, n, a) {
            a.r(n)
        }
    },
    function(e) {
        e.O(0, [107, 216, 592], (function() {
            return n = 8874, e(e.s = n);
            var n
        })), e.O()
    }
]);