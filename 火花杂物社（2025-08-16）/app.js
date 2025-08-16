
require("./common"), require("./vendors"), require("./taro"), require("./runtime"), (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [524], {
        286: function(e, n, t) {
            t(6882);
            var i = t(7842),
                o = t(1291),
                a = t(758),
                r = t(3029),
                s = t(2901),
                c = t(6919),
                u = t(5501),
                d = t(6540),
                p = t.t(d, 2),
                g = t(4015),
                f = (0, t(7813).sH)({
                    counter: 0,
                    counterStore: function() {
                        this.counter++
                    },
                    increment: function() {
                        this.counter++
                    },
                    decrement: function() {
                        this.counter--
                    },
                    incrementAsync: function() {
                        var e = this;
                        setTimeout((function() {
                            e.counter++
                        }), 1e3)
                    }
                }),
                x = t(4848),
                h = {
                    counterStore: f
                },
                l = function(e) {
                    function n() {
                        return (0, r.A)(this, n), (0, c.A)(this, n, arguments)
                    }
                    return (0, u.A)(n, e), (0, s.A)(n, [{
                        key: "componentDidMount",
                        value: function() {}
                    }, {
                        key: "componentDidShow",
                        value: function() {}
                    }, {
                        key: "componentDidHide",
                        value: function() {}
                    }, {
                        key: "render",
                        value: function() {
                            return (0, x.jsx)(g.Kq, {
                                store: h,
                                children: this.props.children
                            })
                        }
                    }])
                }(d.Component),
                m = t(7260),
                v = {
                    pages: ["pages/Home/index", "pages/Mine/index", "pages/TemplateDetail/index", "pages/TaskList/index"],
                    window: {
                        backgroundTextStyle: "light",
                        navigationBarBackgroundColor: "#fff",
                        navigationBarTitleText: "WeChat",
                        navigationBarTextStyle: "black"
                    },
                    subpackages: [{
                        pages: ["pages/PaySuccess/index", "pages/VideoShow/index", "pages/DocumentShow/index", "pages/SharePage/index", "pages/CustomWeb/index", "pages/UploadPhoto/index", "pages/MyCard/index", "pages/CardCheck/index"],
                        root: "pagesA"
                    }],
                    tabBar: {
                        custom: !0,
                        color: "#666A80",
                        selectedColor: "#5991FF",
                        backgroundColor: "#ffffff",
                        list: [{
                            pagePath: "pages/Home/index",
                            text: "首页"
                        }, {
                            pagePath: "pages/Mine/index",
                            text: "我的"
                        }]
                    }
                };
            i.window.__taroAppConfig = v, App((0, o.ND)(l, p, m.Ay, v)), (0, a.initPxTransform)({
                designWidth: 375,
                deviceRatio: {
                    375: 2,
                    640: 1.17,
                    750: 1,
                    828: .905
                },
                baseFontSize: 20,
                unitPrecision: void 0,
                targetUnit: void 0
            })
        }
    },
    function(e) {
        e.O(0, [907, 96], (function() {
            return n = 286, e(e.s = n);
            var n
        })), e.O()
    }
]);