
(wx.webpackJsonp = wx.webpackJsonp || []).push([
    [959], {
        4553: function(n, o, e) {
            var t = e(6041),
                i = e(2676);
            o.Z = function(n) {
                var o = n.title,
                    e = n.handleClick;
                return (0, i.jsx)(t.G7, {
                    className: "submit-btn",
                    onClick: e,
                    children: o
                })
            }
        },
        1357: function(n, o, e) {
            e.d(o, {
                eq: function() {
                    return s
                },
                s: function() {
                    return c
                }
            });
            var t = e(6976),
                i = e.n(t),
                c = function() {
                    return "ios" == i().getSystemInfoSync().platform
                },
                d = null,
                a = function() {
                    d && d.show().then((function() {
                        i().hideLoading(), console.log("add show")
                    })).catch((function() {
                        d.load().then((function() {
                            return d.show().then((function() {
                                i().hideLoading(), console.log("add show")
                            }))
                        })).catch((function(n) {
                            console.log(n), console.log("激励视频 广告显示失败")
                        }))
                    }))
                },
                s = function(n) {
                    i().showLoading({
                        title: "加载中"
                    }), d ? a() : i().createRewardedVideoAd && ((d = i().createRewardedVideoAd({
                        adUnitId: "adunit-10387f8eeef11993"
                    })).onLoad((function() {
                        console.log("add load")
                    })), d.onError((function(n) {
                        i().hideLoading(), console.log(n), i().showToast({
                            title: "拉取广告失败,请稍后再试",
                            icon: "none"
                        })
                    })), d.onClose((function(o) {
                        i().hideLoading(), o.isEnded ? n && n() : (i().showToast({
                            title: "解锁失败",
                            icon: "none"
                        }), console.log("未观看完视频"))
                    })), a())
                }
        }
    }
]);