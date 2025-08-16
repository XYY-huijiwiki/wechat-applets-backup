
var t = require("../../../@babel/runtime/helpers/typeof");
require("../../sub-vendors.js"), (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [307], {
        4714: function(t, e, n) {
            var r = n(7842),
                s = n(675),
                a = n(467),
                i = n(5544),
                u = n(4015),
                c = n(6540),
                o = n(118),
                l = n(758),
                d = n.n(l),
                h = n(4634),
                f = n(8816),
                m = n(5237),
                $ = n(4353),
                p = n.n($),
                g = n(4848),
                v = (0, u.PA)((function() {
                    var t = (0, c.useState)([]),
                        e = (0, i.A)(t, 2),
                        n = e[0],
                        r = e[1],
                        u = (0, c.useState)(!1),
                        l = (0, i.A)(u, 2),
                        $ = l[0],
                        v = l[1],
                        S = (0, c.useState)(!0),
                        M = (0, i.A)(S, 2),
                        x = M[0],
                        y = M[1];
                    (0, c.useEffect)((function() {
                        D(), d().hideShareMenu()
                    }), []);
                    var D = function() {
                        var t = (0, a.A)((0, s.A)().mark((function t() {
                            var e;
                            return (0, s.A)().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, v(!0), t.next = 4, (0, m.$)({
                                            limit: 999,
                                            offset: 0
                                        });
                                    case 4:
                                        e = t.sent, console.log("response", e), r(e), v(!1), y(!1), t.next = 15;
                                        break;
                                    case 11:
                                        t.prev = 11, t.t0 = t.catch(0), console.error("Failed to fetch cards:", t.t0), v(!1);
                                    case 15:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [0, 11]
                            ])
                        })));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }();
                    return (0, g.jsxs)(g.Fragment, {
                        children: [(0, g.jsx)(h.A, {
                            text: "我的卡券",
                            isBack: !0
                        }), (0, g.jsxs)(o.BM, {
                            className: "card-scrollview",
                            scrollY: !0,
                            onScrollToLower: function() {
                                x && !$ && D()
                            },
                            children: [n.map((function(t) {
                                return (0, g.jsx)(o.Ss, {
                                    className: "card-item",
                                    children: (0, g.jsxs)(o.Ss, {
                                        className: "card-content",
                                        children: [(0, g.jsx)(o._V, {
                                            className: "card-image",
                                            src: t.template.coverUrl || "",
                                            mode: "aspectFill"
                                        }), (0, g.jsxs)(o.Ss, {
                                            style: {
                                                flex: 1
                                            },
                                            children: [(0, g.jsxs)(o.Ss, {
                                                className: "card-info",
                                                children: [(0, g.jsxs)(o.Ss, {
                                                    className: "card-title-wrapper",
                                                    children: [(0, g.jsx)(o.EY, {
                                                        className: "card-title",
                                                        children: t.template.displayName || "--"
                                                    }), (0, g.jsx)(o.Ss, {
                                                        className: "card-tags",
                                                        children: t.template.ipNames.map((function(t) {
                                                            return (0, g.jsx)(o.EY, {
                                                                className: "card-tag",
                                                                children: t
                                                            })
                                                        }))
                                                    })]
                                                }), (0, g.jsx)(o.Ss, {
                                                    className: "card-status",
                                                    children: (0, g.jsx)(o.EY, {
                                                        className: "status-text ".concat("used" === t.status ? "used" : "unused"),
                                                        children: "unused" === t.status ? "待使用" : "used" === t.status ? "已使用" : "已过期"
                                                    })
                                                })]
                                            }), (0, g.jsxs)(o.Ss, {
                                                className: "card-footer",
                                                children: [(0, g.jsx)(o.EY, {
                                                    className: "expire-date",
                                                    children: "used" !== t.status ? "有效期: " + p()(1e3 * t.expiredAt).format("YYYY.MM.DD") : "使用日期: " + p()(1e3 * t.exchangedAt).format("YYYY.MM.DD")
                                                }), (0, g.jsx)(o.Ss, {
                                                    className: "action-button",
                                                    children: "unused" === t.status ? (0, g.jsx)(o.EY, {
                                                        className: "customize-btn",
                                                        onClick: function() {
                                                            return function(t) {
                                                                d().navigateTo({
                                                                    url: "".concat(f.Fd.TemplateDetail, "?name=").concat(t.template.name, "&redemptionId=").concat(t.id)
                                                                })
                                                            }(t)
                                                        },
                                                        children: "去定制"
                                                    }) : "used" === t.status ? (0, g.jsx)(o.EY, {
                                                        className: "view-btn",
                                                        onClick: function() {
                                                            return function(t) {
                                                                d().navigateTo({
                                                                    url: "".concat(f.g5.VideoShow, "?taskId=").concat(t)
                                                                })
                                                            }(t.cardId)
                                                        },
                                                        children: "去查看"
                                                    }) : (0, g.jsx)(g.Fragment, {})
                                                })]
                                            })]
                                        })]
                                    })
                                }, t.id)
                            })), $ && (0, g.jsx)(o.Ss, {
                                className: "loading",
                                children: "加载中..."
                            }), !x && n.length > 0 && (0, g.jsx)(o.Ss, {
                                className: "no-more",
                                children: "没有更多数据了"
                            }), !$ && 0 === n.length && (0, g.jsx)(o.Ss, {
                                className: "empty-state",
                                children: (0, g.jsx)(o.EY, {
                                    children: "暂无卡券"
                                })
                            })]
                        }), (0, g.jsx)(o.Ss, {
                            className: "bottom-safe"
                        })]
                    })
                }));
            Page((0, r.createPageConfig)(v, "pagesA/pages/MyCard/index", {
                root: {
                    cn: []
                }
            }, {
                navigationStyle: "custom",
                enableShareAppMessage: !1,
                enableShareTimeline: !1,
                disableSwipeBack: !0
            } || {}))
        },
        4353: function(e) {
            e.exports = function() {
                var e = 6e4,
                    n = 36e5,
                    r = "millisecond",
                    s = "second",
                    a = "minute",
                    i = "hour",
                    u = "day",
                    c = "week",
                    o = "month",
                    l = "quarter",
                    d = "year",
                    h = "date",
                    f = "Invalid Date",
                    m = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
                    $ = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                    p = {
                        name: "en",
                        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                        ordinal: function(t) {
                            var e = ["th", "st", "nd", "rd"],
                                n = t % 100;
                            return "[" + t + (e[(n - 20) % 10] || e[n] || e[0]) + "]"
                        }
                    },
                    g = function(t, e, n) {
                        var r = String(t);
                        return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t
                    },
                    v = {
                        s: g,
                        z: function(t) {
                            var e = -t.utcOffset(),
                                n = Math.abs(e),
                                r = Math.floor(n / 60),
                                s = n % 60;
                            return (e <= 0 ? "+" : "-") + g(r, 2, "0") + ":" + g(s, 2, "0")
                        },
                        m: function t(e, n) {
                            if (e.date() < n.date()) return -t(n, e);
                            var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),
                                s = e.clone().add(r, o),
                                a = n - s < 0,
                                i = e.clone().add(r + (a ? -1 : 1), o);
                            return +(-(r + (n - s) / (a ? s - i : i - s)) || 0)
                        },
                        a: function(t) {
                            return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
                        },
                        p: function(t) {
                            return {
                                M: o,
                                y: d,
                                w: c,
                                d: u,
                                D: h,
                                h: i,
                                m: a,
                                s: s,
                                ms: r,
                                Q: l
                            }[t] || String(t || "").toLowerCase().replace(/s$/, "")
                        },
                        u: function(t) {
                            return void 0 === t
                        }
                    },
                    S = "en",
                    M = {};
                M[S] = p;
                var x = "$isDayjsObject",
                    y = function(t) {
                        return t instanceof j || !(!t || !t[x])
                    },
                    D = function t(e, n, r) {
                        var s;
                        if (!e) return S;
                        if ("string" == typeof e) {
                            var a = e.toLowerCase();
                            M[a] && (s = a), n && (M[a] = n, s = a);
                            var i = e.split("-");
                            if (!s && i.length > 1) return t(i[0])
                        } else {
                            var u = e.name;
                            M[u] = e, s = u
                        }
                        return !r && s && (S = s), s || !r && S
                    },
                    w = function(e, n) {
                        if (y(e)) return e.clone();
                        var r = "object" == t(n) ? n : {};
                        return r.date = e, r.args = arguments, new j(r)
                    },
                    b = v;
                b.l = D, b.i = y, b.w = function(t, e) {
                    return w(t, {
                        locale: e.$L,
                        utc: e.$u,
                        x: e.$x,
                        $offset: e.$offset
                    })
                };
                var j = function() {
                        function t(t) {
                            this.$L = D(t.locale, null, !0), this.parse(t), this.$x = this.$x || t.x || {}, this[x] = !0
                        }
                        var p = t.prototype;
                        return p.parse = function(t) {
                            this.$d = function(t) {
                                var e = t.date,
                                    n = t.utc;
                                if (null === e) return new Date(NaN);
                                if (b.u(e)) return new Date;
                                if (e instanceof Date) return new Date(e);
                                if ("string" == typeof e && !/Z$/i.test(e)) {
                                    var r = e.match(m);
                                    if (r) {
                                        var s = r[2] - 1 || 0,
                                            a = (r[7] || "0").substring(0, 3);
                                        return n ? new Date(Date.UTC(r[1], s, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, a)) : new Date(r[1], s, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, a)
                                    }
                                }
                                return new Date(e)
                            }(t), this.init()
                        }, p.init = function() {
                            var t = this.$d;
                            this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds()
                        }, p.$utils = function() {
                            return b
                        }, p.isValid = function() {
                            return !(this.$d.toString() === f)
                        }, p.isSame = function(t, e) {
                            var n = w(t);
                            return this.startOf(e) <= n && n <= this.endOf(e)
                        }, p.isAfter = function(t, e) {
                            return w(t) < this.startOf(e)
                        }, p.isBefore = function(t, e) {
                            return this.endOf(e) < w(t)
                        }, p.$g = function(t, e, n) {
                            return b.u(t) ? this[e] : this.set(n, t)
                        }, p.unix = function() {
                            return Math.floor(this.valueOf() / 1e3)
                        }, p.valueOf = function() {
                            return this.$d.getTime()
                        }, p.startOf = function(t, e) {
                            var n = this,
                                r = !!b.u(e) || e,
                                l = b.p(t),
                                f = function(t, e) {
                                    var s = b.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);
                                    return r ? s : s.endOf(u)
                                },
                                m = function(t, e) {
                                    return b.w(n.toDate()[t].apply(n.toDate("s"), (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), n)
                                },
                                $ = this.$W,
                                p = this.$M,
                                g = this.$D,
                                v = "set" + (this.$u ? "UTC" : "");
                            switch (l) {
                                case d:
                                    return r ? f(1, 0) : f(31, 11);
                                case o:
                                    return r ? f(1, p) : f(0, p + 1);
                                case c:
                                    var S = this.$locale().weekStart || 0,
                                        M = ($ < S ? $ + 7 : $) - S;
                                    return f(r ? g - M : g + (6 - M), p);
                                case u:
                                case h:
                                    return m(v + "Hours", 0);
                                case i:
                                    return m(v + "Minutes", 1);
                                case a:
                                    return m(v + "Seconds", 2);
                                case s:
                                    return m(v + "Milliseconds", 3);
                                default:
                                    return this.clone()
                            }
                        }, p.endOf = function(t) {
                            return this.startOf(t, !1)
                        }, p.$set = function(t, e) {
                            var n, c = b.p(t),
                                l = "set" + (this.$u ? "UTC" : ""),
                                f = (n = {}, n[u] = l + "Date", n[h] = l + "Date", n[o] = l + "Month", n[d] = l + "FullYear", n[i] = l + "Hours", n[a] = l + "Minutes", n[s] = l + "Seconds", n[r] = l + "Milliseconds", n)[c],
                                m = c === u ? this.$D + (e - this.$W) : e;
                            if (c === o || c === d) {
                                var $ = this.clone().set(h, 1);
                                $.$d[f](m), $.init(), this.$d = $.set(h, Math.min(this.$D, $.daysInMonth())).$d
                            } else f && this.$d[f](m);
                            return this.init(), this
                        }, p.set = function(t, e) {
                            return this.clone().$set(t, e)
                        }, p.get = function(t) {
                            return this[b.p(t)]()
                        }, p.add = function(t, r) {
                            var l, h = this;
                            t = Number(t);
                            var f = b.p(r),
                                m = function(e) {
                                    var n = w(h);
                                    return b.w(n.date(n.date() + Math.round(e * t)), h)
                                };
                            if (f === o) return this.set(o, this.$M + t);
                            if (f === d) return this.set(d, this.$y + t);
                            if (f === u) return m(1);
                            if (f === c) return m(7);
                            var $ = (l = {}, l[a] = e, l[i] = n, l[s] = 1e3, l)[f] || 1,
                                p = this.$d.getTime() + t * $;
                            return b.w(p, this)
                        }, p.subtract = function(t, e) {
                            return this.add(-1 * t, e)
                        }, p.format = function(t) {
                            var e = this,
                                n = this.$locale();
                            if (!this.isValid()) return n.invalidDate || f;
                            var r = t || "YYYY-MM-DDTHH:mm:ssZ",
                                s = b.z(this),
                                a = this.$H,
                                i = this.$m,
                                u = this.$M,
                                c = n.weekdays,
                                o = n.months,
                                l = n.meridiem,
                                d = function(t, n, s, a) {
                                    return t && (t[n] || t(e, r)) || s[n].slice(0, a)
                                },
                                h = function(t) {
                                    return b.s(a % 12 || 12, t, "0")
                                },
                                m = l || function(t, e, n) {
                                    var r = t < 12 ? "AM" : "PM";
                                    return n ? r.toLowerCase() : r
                                };
                            return r.replace($, (function(t, r) {
                                return r || function(t) {
                                    switch (t) {
                                        case "YY":
                                            return String(e.$y).slice(-2);
                                        case "YYYY":
                                            return b.s(e.$y, 4, "0");
                                        case "M":
                                            return u + 1;
                                        case "MM":
                                            return b.s(u + 1, 2, "0");
                                        case "MMM":
                                            return d(n.monthsShort, u, o, 3);
                                        case "MMMM":
                                            return d(o, u);
                                        case "D":
                                            return e.$D;
                                        case "DD":
                                            return b.s(e.$D, 2, "0");
                                        case "d":
                                            return String(e.$W);
                                        case "dd":
                                            return d(n.weekdaysMin, e.$W, c, 2);
                                        case "ddd":
                                            return d(n.weekdaysShort, e.$W, c, 3);
                                        case "dddd":
                                            return c[e.$W];
                                        case "H":
                                            return String(a);
                                        case "HH":
                                            return b.s(a, 2, "0");
                                        case "h":
                                            return h(1);
                                        case "hh":
                                            return h(2);
                                        case "a":
                                            return m(a, i, !0);
                                        case "A":
                                            return m(a, i, !1);
                                        case "m":
                                            return String(i);
                                        case "mm":
                                            return b.s(i, 2, "0");
                                        case "s":
                                            return String(e.$s);
                                        case "ss":
                                            return b.s(e.$s, 2, "0");
                                        case "SSS":
                                            return b.s(e.$ms, 3, "0");
                                        case "Z":
                                            return s
                                    }
                                    return null
                                }(t) || s.replace(":", "")
                            }))
                        }, p.utcOffset = function() {
                            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
                        }, p.diff = function(t, r, h) {
                            var f, m = this,
                                $ = b.p(r),
                                p = w(t),
                                g = (p.utcOffset() - this.utcOffset()) * e,
                                v = this - p,
                                S = function() {
                                    return b.m(m, p)
                                };
                            switch ($) {
                                case d:
                                    f = S() / 12;
                                    break;
                                case o:
                                    f = S();
                                    break;
                                case l:
                                    f = S() / 3;
                                    break;
                                case c:
                                    f = (v - g) / 6048e5;
                                    break;
                                case u:
                                    f = (v - g) / 864e5;
                                    break;
                                case i:
                                    f = v / n;
                                    break;
                                case a:
                                    f = v / e;
                                    break;
                                case s:
                                    f = v / 1e3;
                                    break;
                                default:
                                    f = v
                            }
                            return h ? f : b.a(f)
                        }, p.daysInMonth = function() {
                            return this.endOf(o).$D
                        }, p.$locale = function() {
                            return M[this.$L]
                        }, p.locale = function(t, e) {
                            if (!t) return this.$L;
                            var n = this.clone(),
                                r = D(t, e, !0);
                            return r && (n.$L = r), n
                        }, p.clone = function() {
                            return b.w(this.$d, this)
                        }, p.toDate = function() {
                            return new Date(this.valueOf())
                        }, p.toJSON = function() {
                            return this.isValid() ? this.toISOString() : null
                        }, p.toISOString = function() {
                            return this.$d.toISOString()
                        }, p.toString = function() {
                            return this.$d.toUTCString()
                        }, t
                    }(),
                    Y = j.prototype;
                return w.prototype = Y, [
                    ["$ms", r],
                    ["$s", s],
                    ["$m", a],
                    ["$H", i],
                    ["$W", u],
                    ["$M", o],
                    ["$y", d],
                    ["$D", h]
                ].forEach((function(t) {
                    Y[t[1]] = function(e) {
                        return this.$g(e, t[0], t[1])
                    }
                })), w.extend = function(t, e) {
                    return t.$i || (t(e, j, w), t.$i = !0), w
                }, w.locale = D, w.isDayjs = y, w.unix = function(t) {
                    return w(1e3 * t)
                }, w.en = M[S], w.Ls = M, w.p = {}, w
            }()
        }
    },
    function(t) {
        t.O(0, [475, 907, 96, 76], (function() {
            return e = 4714, t(t.s = e);
            var e
        })), t.O()
    }
]);