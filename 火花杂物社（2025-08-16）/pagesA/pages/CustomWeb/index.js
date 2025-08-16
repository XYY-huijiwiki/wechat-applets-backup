
require("../../sub-vendors.js"), (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [954], {
        9359: function(e, n, r) {
            var s = r(7842),
                a = r(118),
                t = r(758),
                o = r(4848),
                i = function() {
                    var e = (0, t.useRouter)().params.src,
                        n = void 0 === e ? "" : e;
                    return (0, o.jsx)(o.Fragment, {
                        children: n ? (0, o.jsx)(a.SC, {
                            src: n
                        }) : ""
                    })
                };
            Page((0, s.createPageConfig)(i, "pagesA/pages/CustomWeb/index", {
                root: {
                    cn: []
                }
            }, {
                navigationBarTitleText: "喜洋洋大电影"
            } || {}))
        }
    },
    function(e) {
        e.O(0, [907, 96], (function() {
            return n = 9359, e(e.s = n);
            var n
        })), e.O()
    }
]);