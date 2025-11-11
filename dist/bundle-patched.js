(()=>{
    var e, r, t, o, n = {}, a = {};
    function i(e) {
        var r = a[e];
        if (void 0 !== r) return r.exports;
        var t = a[e] = {
            exports: {}
        };
        return n[e](t, t.exports, i), t.exports;
    }
    i.m = n, i.d = (e, r)=>{
        for(var t in r)i.o(r, t) && !i.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: r[t]
        });
    }, i.f = {}, i.e = (e)=>Promise.all(Object.keys(i.f).reduce((r, t)=>(i.f[t](e, r), r), [])), i.u = (e)=>e + ".bundle.js", i.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || Function("return this")();
        } catch (e) {
            if ("object" == typeof window) return window;
        }
    }(), i.o = (e, r)=>Object.prototype.hasOwnProperty.call(e, r), o = {}, i.l = (e, r, t, n)=>{
        if (o[e]) o[e].push(r);
        else {
            if (void 0 !== t) for(var a, l, c = document.getElementsByTagName("script"), s = 0; s < c.length; s++){
                var p = c[s];
                if (p.getAttribute("src") == e || p.getAttribute("data-webpack") == "macro-split:" + t) {
                    a = p;
                    break;
                }
            }
            a || (l = !0, (a = document.createElement("script")).charset = "utf-8", i.nc && a.setAttribute("nonce", i.nc), a.setAttribute("data-webpack", "macro-split:" + t), a.src = e), o[e] = [
                r
            ];
            var u = (r, t)=>{
                a.onerror = a.onload = null, clearTimeout(d);
                var n = o[e];
                if (delete o[e], a.parentNode && a.parentNode.removeChild(a), n && n.forEach((e)=>e(t)), r) return r(t);
            }, d = setTimeout(u.bind(null, void 0, {
                type: "timeout",
                target: a
            }), 12e4);
            a.onerror = u.bind(null, a.onerror), a.onload = u.bind(null, a.onload), l && document.head.appendChild(a);
        }
    }, (()=>{
        i.g.importScripts && (e = i.g.location + "");
        var e, r = i.g.document;
        if (!e && r && (r.currentScript && "SCRIPT" === r.currentScript.tagName.toUpperCase() && (e = r.currentScript.src), !e)) {
            var t = r.getElementsByTagName("script");
            if (t.length) for(var o = t.length - 1; o > -1 && (!e || !/^http(s?):/.test(e));)e = t[o--].src;
        }
        if (!e) throw Error("Automatic publicPath is not supported in this browser");
        i.p = e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
    })(), e = {
        792: 0
    }, i.f.j = (r, t)=>{
        var o = i.o(e, r) ? e[r] : void 0;
        if (0 !== o) if (o) t.push(o[2]);
        else {
            var n = new Promise((t, n)=>o = e[r] = [
                    t,
                    n
                ]);
            t.push(o[2] = n);
            var a = i.p + i.u(r), l = Error();
            i.l(a, (t)=>{
                if (i.o(e, r) && (0 !== (o = e[r]) && (e[r] = void 0), o)) {
                    var n = t && ("load" === t.type ? "missing" : t.type), a = t && t.target && t.target.src;
                    l.message = "Loading chunk " + r + " failed.\n(" + n + ": " + a + ")", l.name = "ChunkLoadError", l.type = n, l.request = a, o[1](l);
                }
            }, "chunk-" + r, r);
        }
    }, r = (r, t)=>{
        var o, n, [a, l, c] = t, s = 0;
        if (a.some((r)=>0 !== e[r])) {
            for(o in l)i.o(l, o) && (i.m[o] = l[o]);
            c && c(i);
        }
        for(r && r(t); s < a.length; s++)n = a[s], i.o(e, n) && e[n] && e[n][0](), e[n] = 0;
    }, (t = self.webpackChunkmacro_split = self.webpackChunkmacro_split || []).forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t)), console.log("Hello from Webpack!");
})();
