
(wx.webpackJsonp = wx.webpackJsonp || []).push([
    [978], {
        659: function(e, n, s) {
            var a = s(5392),
                r = s(8436),
                t = s(3289),
                i = s(5979),
                c = s(6557),
                l = s(542),
                o = s(6041),
                u = s(5271),
                m = s(6976),
                d = s.n(m),
                h = s(2187),
                f = s.n(h),
                p = s(199),
                x = s(7160),
                v = s(220),
                j = s(5575),
                G = s(8392),
                g = s(1139),
                N = s(3452),
                _ = s(1504),
                Z = s(6883),
                b = s(2676);
             function w() {
                var e = (0, u.useState)(!1),
                    n = (0, l.Z)(e, 2),
                    s = n[0],
                    a = n[1],
                    h = (0, u.useState)(!1),
                    w = (0, l.Z)(h, 2),
                    k = w[0],
                    S = w[1],
                    y = (0, u.useState)({}),
                    C = (0, l.Z)(y, 2),
                    M = C[0],
                    H = C[1],
                    I = (0, u.useState)(!1),
                    T = (0, l.Z)(I, 2),
                    A = T[0],
                    E = T[1],
                    F = (0, u.useState)(""),
                    O = (0, l.Z)(F, 2),
                    P = O[0],
                    U = O[1],
                    Y = (0, u.useState)(),
                    B = (0, l.Z)(Y, 2),
                    J = B[0],
                    V = B[1],
                    z = (0, u.useState)([]),
                    D = (0, l.Z)(z, 2),
                    Q = D[0],
                    R = D[1],
                    q = (0, u.useState)((0, N.gv)()),
                    K = (0, l.Z)(q, 1)[0],
                    L = (0, u.useMemo)((function() {
                        return Q.filter((function(e) {
                            return e.isHuman
                        })).length > 2 ? [] : new Array(2 - Q.filter((function(e) {
                            return e.isHuman
                        })).length).fill(1)
                    }), [Q.length]),
                    W = (0, u.useMemo)((function() {
                        return (null == K ? void 0 : K.id) === (null == J ? void 0 : J.id)
                    }), [K, J]);
                (0, m.useDidShow)((0, c.Z)((0, r.Z)().m((function e() {
                    var n, s, c, l, o, u, m, h, f, p, x, v, j, G, N, _;
                    return (0, r.Z)().w((function(e) {
                        for (;;) switch (e.n) {
                            case 0:
                                return n = d().getCurrentInstance(), s = n.router, c = null == s ? void 0 : s.params, l = c.roomId, U(l), a(!1), e.n = 1, (0, g.Vv)({
                                    room_id: l
                                });
                            case 1:
                                o = e.v, m = (u = o || {}).characters, h = u.owner, f = u.humans, p = (0, Z.H)(m), x = (0, Z.H)(f), o.charactersMap = p, o.humansMap = x, H(o), v = (0, i.Z)({}, x[h]), V(v), j = [], G = (0, Z.x)(o), N = G.residualCharacters, _ = G.residualHumans, [].concat((0, t.Z)(N), (0, t.Z)(_)).forEach((function(e) {
                                    e.id !== h && j.push((0, i.Z)((0, i.Z)({}, e), {}, {
                                        isHuman: _.some((function(n) {
                                            return n.id === e.id
                                        }))
                                    }))
                                })), R(j), d().hideShareMenu({
                                    menus: ["shareAppMessage"]
                                });
                            case 2:
                                return e.a(2)
                        }
                    }), e)
                }))));
                var X = function() {
                        var e = (0, c.Z)((0, r.Z)().m((function e() {
                            var n;
                            return (0, r.Z)().w((function(e) {
                                for (;;) switch (e.n) {
                                    case 0:
                                        return (0, _.G3)("leave_room_pv", 1, {
                                            tags: {
                                                room_id: P
                                            }
                                        }), e.n = 1, (0, g.zG)({
                                            room_id: P
                                        });
                                    case 1:
                                        n = e.v, console.log("~~~~~leaveRomms~~~~~~~~~~~~~~", n), S(!1), (0, x.UY)(p.iY.Package, p.iY.Group + "?fromInner=true");
                                    case 2:
                                        return e.a(2)
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    $ = (0, u.useState)(),
                    ee = (0, l.Z)($, 2),
                    ne = ee[0],
                    se = ee[1],
                    ae = function() {
                        var e = (0, c.Z)((0, r.Z)().m((function e() {
                            var n;
                            return (0, r.Z)().w((function(e) {
                                for (;;) switch (e.p = e.n) {
                                    case 0:
                                        if (!(!ne || ne.length < 3 || ne.length > 10)) {
                                            e.n = 1;
                                            break
                                        }
                                        return d().showToast({
                                            title: "群聊名称为3-10个字符",
                                            icon: "none"
                                        }), e.a(2);
                                    case 1:
                                        if (ne !== (null == M ? void 0 : M.displayName)) {
                                            e.n = 2;
                                            break
                                        }
                                        return E(!1), e.a(2);
                                    case 2:
                                        return (0, _.G3)("edit_room_name_pv", 1, {
                                            tags: {
                                                room_id: P
                                            }
                                        }), e.p = 3, e.n = 4, (0, g.jQ)({
                                            room_id: P,
                                            displayName: ne
                                        });
                                    case 4:
                                        return e.n = 5, (0, g.Vv)({
                                            room_id: P
                                        });
                                    case 5:
                                        n = e.v, H(n), E(!1), d().showToast({
                                            title: "修改成功",
                                            icon: "success"
                                        }), e.n = 7;
                                        break;
                                    case 6:
                                        e.p = 6, e.v, d().showToast({
                                            title: "修改失败",
                                            icon: "none"
                                        });
                                    case 7:
                                        return e.a(2)
                                }
                            }), e, null, [
                                [3, 6]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                return (0, b.jsxs)(b.Fragment, {
                    children: [(0, b.jsx)(v.Z, {
                        showBack: !0,
                        showEdit: !0,
                        goEdit: function() {
                            se((null == M ? void 0 : M.displayName) || ""), E(!0)
                        },
                        children: (0, b.jsx)(o.G7, {
                            className: "group-chat-header",
                            children: (0, b.jsx)(o.G7, {
                                className: "group-chat-title",
                                children: (null == M ? void 0 : M.displayName) || "群聊"
                            })
                        })
                    }), (0, b.jsxs)(o.G7, {
                        className: "box",
                        children: [(0, b.jsxs)(o.G7, {
                            className: "user_item self_item",
                            children: [(0, b.jsx)(o.Ee, {
                                mode: "aspectFill",
                                src: (null == J ? void 0 : J.avatarUrl) || ""
                            }), (0, b.jsx)(o.G7, {
                                className: "username",
                                children: null == J ? void 0 : J.nickName
                            })]
                        }), (0, b.jsxs)(o.G7, {
                            className: "user_list",
                            children: [Q.map((function(e, n) {
                                return (0, b.jsxs)(o.G7, {
                                    className: f()("user_item", e.isHuman && "is-human"),
                                    children: [(0, b.jsx)(o.Ee, {
                                        mode: "aspectFill",
                                        src: e.avatarUrl
                                    }), (0, b.jsx)(o.G7, {
                                        className: "username",
                                        children: e.nickName
                                    })]
                                }, e.id)
                            })), W && L.map((function(e, n) {
                                return (0, b.jsxs)(o.G7, {
                                    className: "user_item user_empty_item",
                                    onClick: function() {
                                        return a(!0)
                                    },
                                    children: [(0, b.jsx)(o.G7, {
                                        className: "add_btn"
                                    }), (0, b.jsx)(o.G7, {
                                        className: "username",
                                        children: "邀请好友"
                                    })]
                                }, n)
                            })), 5 === Q.length && (0, b.jsxs)(o.G7, {
                                className: "user_item user_empty_item",
                                children: [(0, b.jsx)(o.G7, {
                                    className: "add_btn disabled"
                                }), (0, b.jsx)(o.G7, {
                                    className: "username",
                                    children: "成员已满"
                                })]
                            })]
                        }), (0, b.jsx)(o.G7, {
                            className: "leave_btn",
                            onClick: function() {
                                W ? S(!0) : X()
                            },
                            children: "退出群聊"
                        })]
                    }), k && (0, b.jsx)(j.Z, {
                        onCancel: function() {
                            S(!1)
                        },
                        onOk: function() {
                            (0, _.G3)("dismiss_room_pv", 1, {
                                tags: {
                                    room_id: P
                                }
                            }), X()
                        },
                        okText: "退出",
                        children: (0, b.jsxs)(o.G7, {
                            style: {
                                textAlign: "center"
                            },
                            children: [(0, b.jsx)(o.G7, {
                                children: "你是这个群的管理员呢"
                            }), (0, b.jsx)(o.G7, {
                                children: "退出后该群会自动解散而且不可恢复哦～"
                            })]
                        })
                    }), s && (0, b.jsx)(G.Z, {
                        handleCancel: function() {
                            a(!1)
                        }
                    }), A && (0, b.jsx)(o.G7, {
                        className: "edit-modal",
                        children: (0, b.jsxs)(o.G7, {
                            className: "edit-body",
                            children: [(0, b.jsx)(o.G7, {
                                className: "edit-title",
                                children: "群聊名称"
                            }), (0, b.jsx)(o.II, {
                                className: "edit-input",
                                placeholder: "请输入群聊名称",
                                focus: !0,
                                value: ne,
                                onInput: function(e) {
                                    return se(e.detail.value)
                                }
                            }), (0, b.jsx)(o.G7, {
                                className: "edit-tips",
                                children: "3-10个字符"
                            }), (0, b.jsxs)(o.G7, {
                                className: "edit-footer",
                                children: [(0, b.jsx)(o.G7, {
                                    className: "btn cancel-btn",
                                    onClick: function() {
                                        return E(!1)
                                    },
                                    children: "取消"
                                }), (0, b.jsx)(o.G7, {
                                    className: "btn confirm-btn",
                                    onClick: function() {
                                        return ae()
                                    },
                                    children: "确认"
                                })]
                            })]
                        })
                    })]
                })
            }
            w.enableShareAppMessage = !0, Page((0, a.createPageConfig)(w, "pages/group-manager/index", {
                root: {
                    cn: []
                }
            }, {
                navigationBarTitleText: "群管理",
                navigationStyle: "custom",
                disableScroll: !0,
                enableShareAppMessage: !0
            } || {}))
        }
    },
    function(e) {
        e.O(0, [107, 216, 592], (function() {
            return n = 659, e(e.s = n);
            var n
        })), e.O()
    }
]);