!function (e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {i: r, l: !1, exports: {}};
        return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
    }

    var n = {};
    t.m = e, t.c = n, t.d = function (e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: r})
    }, t.n = function (e) {
        var n = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 2)
}({
    2: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, o = function (e, t) {
            var n = new RegExp(".*[&?]" + e + "=([^&]*)(&|$)"), r = void 0;
            return r = t ? t.match(n) : window.location.search.match(n), r ? decodeURIComponent(r[1]) : ""
        }, i = function (e) {
            window.location.href = e
        }, a = function () {
            window.location.href = "loginReg.html?returnUrl=" + encodeURIComponent(window.location.href)
        }, c = function (e) {
            for (var t = 0, n = 0; n < e.length; n++) {
                /^[\u0000-\u00ff]$/.test(e.charAt(n)) ? t += .5 : t += 1
            }
            return t
        }, u = function (e, t) {
            return c(e) > t ? e.substring(0, t) + "..." : e
        }, d = function () {
            return !!navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
        }, l = function (e) {
            return !!/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(e)
        }, s = function (e) {
            return /^1[3|4|5|7|8][0-9]\d{8}$/.test(e)
        }, f = function (e) {
            return !!/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/.test(e)
        }, p = function (e) {
            var t = document.title, n = "";
            n = "object" === (void 0 === e ? "undefined" : r(e)) ? e.join("_") : e, document.title = n + "_" + t
        }, g = function (e) {
            e.target.value.replace(/\D/g, function (t, n, r) {
                e.target.value = r.replace(/\D/g, "");
                var o = null;
                e.target.setSelectionRange ? e.target.setSelectionRange(n, n) : (o = e.target.createTextRange(), o.moveStart("character", n), o.collapse(!0), o.select())
            })
        }, m = function (e) {
            var t = new RegExp("((https|http)://)[A-Za-z0-9-_]+\\.[A-Za-z0-9-_%&?/.=]+", "gi");
            return e = function (e, t) {
                return t.replace(e, function (e) {
                    return '<a href="' + e + '" target="_blank">' + e + "</a>"
                })
            }(t, e)
        }, v = function (e) {
            for (var t = "", n = 0; n < e; n++) t += "*";
            return t
        }, h = function (e, t) {
            var n = '<span class="no">暂无报价</span>', r = "";
            return t && (r = "<b>起</b>"), e && (n = '<i class="sub">¥</i>' + Math.abs(e.toFixed(2)) + r), n
        }, b = function (e) {
            return e ? '<i class="sub">¥</i>' + Math.abs(e.toFixed(2)) : '<i class="sub">¥</i>0'
        }, w = function (e) {
            var t = parseFloat(e);
            if (isNaN(t)) return !1;
            var n = Math.round(100 * e) / 100, r = n.toString(), o = r.indexOf(".");
            for (o < 0 && (o = r.length, r += "."); r.length <= o + 2;) r += "0";
            return r
        }, $ = function (e, t, n) {
            var r = e + t + n;
            return 0 === Number(e) ? "0%" : (e / r * 100).toFixed(0) + "%"
        }, y = function (e, t) {
            var n = e - t, r = n / 2592e6, o = n / 6048e5, i = n / 864e5, a = n / 36e5, c = n / 6e4;
            return r >= 1 ? parseInt(r, 10) + "个月前" : o >= 1 ? parseInt(o, 10) + "周前" : i >= 1 ? parseInt(i, 10) + "天前" : a >= 1 ? parseInt(a, 10) + "个小时前" : c >= 1 ? parseInt(c, 10) + "分钟前" : "刚刚"
        }, x = function (e) {
            for (var t = e.target, n = [["^0(\\d+)$", "$1"], ["[^\\d\\.]+$", ""], ["\\.(\\d?)\\.+", ".$1"], ["^(\\d+\\.\\d{2}).+", "$1"]], r = 0; r < n.length; r++) {
                var o = new RegExp(n[r][0]);
                t.value = t.value.replace(o, n[r][1])
            }
        }, S = function (e) {
            var t = e.target, n = t.value;
            "" === n ? n = "0.00" : "0" === n ? n = "0.00" : "0." === n ? n = "0.00" : /^0+\d+\.?\d*.*$/.test(n) ? n = n.replace(/^0+(\d+\.?\d*).*$/, "$1") : /^0\.\d$/.test(n) ? n += "0" : /^\d+\.\d{2}$/.test(n) || (/^\d+\.\d{2}.+/.test(n) ? n = n.replace(/^(\d+\.\d{2}).*$/, "$1") : /^\d+$/.test(n) ? n += ".00" : /^\d+\.$/.test(n) ? n += "00" : /^\d+\.\d$/.test(n) ? n += "0" : n = /^[^\d]+\d+\.?\d*$/.test(n) ? n.replace(/^[^\d]+(\d+\.?\d*)$/, "$1") : /\d+/.test(n) ? n.replace(/^[^\d]*(\d+\.?\d*).*$/, "$1") : /^0+\d+\.?\d*$/.test(n) ? n.replace(/^0+(\d+\.?\d*)$/, "$1") : "0.00"), t.value = n
        }, I = function (e) {
            return 0 !== e && "0.00" !== e && "" === e || void 0 === e ? "" : 100 * e
        }, O = function (e) {
            return 0 !== e && "0.00" !== e && "" === e || void 0 === e ? "" : (e / 100).toFixed(2)
        }, R = window.parent;
        R.imgSrc = {};
        var P = function (e, t, n, r) {
            var o = "imgIfr" + r;
            return R.imgSrc[o] = "<img src='" + e + '\' style="width:100%;height:100%; display:block;position:absolute;left:0;top:0;"/>', "<iframe src=\"javascript:parent.imgSrc['" + o + '\'];" frameBorder="0" scrolling="no" style="width:' + t + ";height:" + n + ';overflow: hidden;"></iframe>'
        }, B = {
            save: function (e, t, n) {
                var r = new Date;
                r.setDate(r.getDate() + n), document.cookie = e + "=" + t + ";expires=" + r
            }, load: function (e) {
                for (var t = document.cookie.replace(/\s/g, "").split(";"), n = 0; n < t.length; n++) {
                    var r = t[n].split("=");
                    if (r[0] === e) return decodeURIComponent(r[1])
                }
                return ""
            }, remove: function (e) {
                (void 0).save(e, "1", -1)
            }
        }, U = function (e) {
            for (var t = e.split(","), n = t[0].match(/:(.*?);/)[1], r = atob(t[1]), o = r.length, i = new Uint8Array(o); o--;) i[o] = r.charCodeAt(o);
            return new Blob([i], {type: n})
        }, M = function (e) {
            return e.replace(/<[^>]+>/g, "")
        }, N = function () {
            return Number(window.location.href.substring(window.location.href.indexOf("pageOn=") + 7, window.location.href.length) || 0)
        };
        t.default = {
            urlParam: o,
            redirect: i,
            loginReturnUrl: a,
            getBytesCount: c,
            txtIntercept: u,
            isPhone: d,
            isCardId: l,
            isMobile: s,
            priceIsOk: f,
            documentTitle: p,
            inputNum: g,
            asterisk: v,
            toFixedNumPriceOne: h,
            toFixedNumPriceTwo: b,
            strURLReplace: m,
            toDecimal2: w,
            getGoodNum: $,
            timeBefore: y,
            priceOnKeyUp: x,
            priceOnBlur: S,
            priceCents: I,
            priceDollars: O,
            cookie: B,
            showImg: P,
            dataURLtoBlob: U,
            delHtmlTag: M,
            getPageOn: N
        }
    }
});