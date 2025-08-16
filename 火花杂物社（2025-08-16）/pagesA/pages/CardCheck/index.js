
require("../../sub-vendors.js"), (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [77], {
        1792: function(e, n, s) {
            var t = s(7842),
                r = s(675),
                a = s(467),
                i = s(5544),
                c = s(6540),
                o = s(118),
                l = s(758),
                u = s.n(l),
                d = s(5237),
                p = s(4634),
                m = s.p + "assets/imgs/tip.svg",
                h = s(4848),
                x = function() {
                    var e = (0, c.useState)(""),
                        n = (0, i.A)(e, 2),
                        s = n[0],
                        t = n[1],
                        l = (0, c.useState)(!1),
                        x = (0, i.A)(l, 2),
                        g = x[0],
                        v = x[1],
                        f = function() {
                            var e = (0, a.A)((0, r.A)().mark((function e() {
                                var n;
                                return (0, r.A)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (s.trim()) {
                                                e.next = 3;
                                                break
                                            }
                                            return u().showToast({
                                                title: "请输入兑换码",
                                                icon: "none"
                                            }), e.abrupt("return");
                                        case 3:
                                            return v(!0), e.prev = 4, e.next = 7, (0, d.P)(s.trim());
                                        case 7:
                                            n = e.sent, console.log("response", n), u().showToast({
                                                title: "兑换成功",
                                                icon: "success"
                                            }), setTimeout((function() {
                                                u().navigateTo({
                                                    url: "/pagesA/pages/MyCard/index"
                                                })
                                            }), 1e3), e.next = 16;
                                            break;
                                        case 13:
                                            e.prev = 13, e.t0 = e.catch(4), u().showToast({
                                                title: (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.errmsg) || "兑换失败，请检查兑换码是否正确",
                                                icon: "none"
                                            });
                                        case 16:
                                            return e.prev = 16, v(!1), e.finish(16);
                                        case 19:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [4, 13, 16, 19]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    return (0, h.jsxs)(h.Fragment, {
                        children: [(0, h.jsx)(p.A, {
                            text: "卡券兑换",
                            isBack: !0
                        }), (0, h.jsxs)(o.Ss, {
                            className: "redemption-code-input-container",
                            children: [(0, h.jsx)(o.TM, {
                                className: "redemption-code-input",
                                value: s,
                                onInput: function(e) {
                                    return t(e.detail.value)
                                },
                                placeholder: "请输入卡券兑换码",
                                placeholderClass: "redemption-code-placeholder"
                            }), (0, h.jsx)(o.$n, {
                                className: "redemption-code-button ".concat(g ? "loading" : ""),
                                onClick: f,
                                disabled: g,
                                children: g ? "兑换中..." : "兑换"
                            }), (0, h.jsxs)(o.Ss, {
                                className: "redemption-code-rule",
                                children: [(0, h.jsxs)(o.Ss, {
                                    className: "redemption-code-rule-title",
                                    children: [(0, h.jsxs)(o.Ss, {
                                        className: "redemption-code-rule-title-left",
                                        children: [(0, h.jsx)(o._V, {
                                            src: m
                                        }), "卡券兑换规则"]
                                    }), (0, h.jsxs)(o.Ss, {
                                        className: "redemption-code-rule-title-right",
                                        onClick: function() {
                                            return u().navigateTo({
                                                url: "/pagesA/pages/MyCard/index"
                                            })
                                        },
                                        children: ["我的卡券 ", ">"]
                                    })]
                                }), (0, h.jsx)(o.Ss, {
                                    className: "redemption-code-rule-item",
                                    children: "1.输入/粘贴火花杂物社卡券兑换码后，点击“兑换”校验卡券是否有效；"
                                }), (0, h.jsx)(o.Ss, {
                                    className: "redemption-code-rule-item",
                                    children: "2. 每个卡券仅可兑换一次，仅支持在有效期内使用"
                                })]
                            })]
                        })]
                    })
                };
            Page((0, t.createPageConfig)(x, "pagesA/pages/CardCheck/index", {
                root: {
                    cn: []
                }
            }, {
                navigationStyle: "custom",
                enableShareAppMessage: !1,
                enableShareTimeline: !1,
                disableSwipeBack: !0
            } || {}))
        }
    },
    function(e) {
        e.O(0, [475, 907, 96, 76], (function() {
            return n = 1792, e(e.s = n);
            var n
        })), e.O()
    }
]);