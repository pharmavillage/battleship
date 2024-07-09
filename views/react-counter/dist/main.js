(() => {
  var e,
    r,
    t,
    n,
    o,
    a,
    i = {
      587: (e, r, t) => {
        t.e(467).then(t.bind(t, 467));
      },
      300: (e, r, t) => {
        'use strict';
        var n = new Error();
        e.exports = new Promise((e, r) => {
          if ('undefined' != typeof react_counter) return e();
          t.l(
            'http://locahost:58841/remoteEntry.js',
            (t) => {
              if ('undefined' != typeof react_counter) return e();
              var o = t && ('load' === t.type ? 'missing' : t.type),
                a = t && t.target && t.target.src;
              (n.message = 'Loading script failed.\n(' + o + ': ' + a + ')'),
                (n.name = 'ScriptExternalLoadError'),
                (n.type = o),
                (n.request = a),
                r(n);
            },
            'react_counter'
          );
        }).then(() => react_counter);
      },
      278: (e, r, t) => {
        'use strict';
        var n = new Error();
        e.exports = new Promise((e, r) => {
          if ('undefined' != typeof store) return e();
          t.l(
            'http://locahost:55955/remoteEntry.js',
            (t) => {
              if ('undefined' != typeof store) return e();
              var o = t && ('load' === t.type ? 'missing' : t.type),
                a = t && t.target && t.target.src;
              (n.message = 'Loading script failed.\n(' + o + ': ' + a + ')'),
                (n.name = 'ScriptExternalLoadError'),
                (n.type = o),
                (n.request = a),
                r(n);
            },
            'store'
          );
        }).then(() => store);
      },
      738: (e, r, t) => {
        'use strict';
        var n = new Error();
        e.exports = new Promise((e, r) => {
          if ('undefined' != typeof vue_counter) return e();
          t.l(
            'http://locahost:51997/remoteEntry.js',
            (t) => {
              if ('undefined' != typeof vue_counter) return e();
              var o = t && ('load' === t.type ? 'missing' : t.type),
                a = t && t.target && t.target.src;
              (n.message = 'Loading script failed.\n(' + o + ': ' + a + ')'),
                (n.name = 'ScriptExternalLoadError'),
                (n.type = o),
                (n.request = a),
                r(n);
            },
            'vue_counter'
          );
        }).then(() => vue_counter);
      },
    },
    u = {};
  function s(e) {
    var r = u[e];
    if (void 0 !== r) return r.exports;
    var t = (u[e] = { exports: {} });
    return i[e](t, t.exports, s), t.exports;
  }
  (s.m = i),
    (s.c = u),
    (s.n = (e) => {
      var r = e && e.__esModule ? () => e.default : () => e;
      return s.d(r, { a: r }), r;
    }),
    (r = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (s.t = function (t, n) {
      if ((1 & n && (t = this(t)), 8 & n)) return t;
      if ('object' == typeof t && t) {
        if (4 & n && t.__esModule) return t;
        if (16 & n && 'function' == typeof t.then) return t;
      }
      var o = Object.create(null);
      s.r(o);
      var a = {};
      e = e || [null, r({}), r([]), r(r)];
      for (var i = 2 & n && t; 'object' == typeof i && !~e.indexOf(i); i = r(i))
        Object.getOwnPropertyNames(i).forEach((e) => (a[e] = () => t[e]));
      return (a.default = () => t), s.d(o, a), o;
    }),
    (s.d = (e, r) => {
      for (var t in r)
        s.o(r, t) &&
          !s.o(e, t) &&
          Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
    }),
    (s.f = {}),
    (s.e = (e) =>
      Promise.all(Object.keys(s.f).reduce((r, t) => (s.f[t](e, r), r), []))),
    (s.u = (e) => e + '.js'),
    (s.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if ('object' == typeof window) return window;
      }
    })()),
    (s.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (t = {}),
    (n = 'react-counter:'),
    (s.l = (e, r, o, a) => {
      if (t[e]) t[e].push(r);
      else {
        var i, u;
        if (void 0 !== o)
          for (
            var f = document.getElementsByTagName('script'), l = 0;
            l < f.length;
            l++
          ) {
            var c = f[l];
            if (
              c.getAttribute('src') == e ||
              c.getAttribute('data-webpack') == n + o
            ) {
              i = c;
              break;
            }
          }
        i ||
          ((u = !0),
          ((i = document.createElement('script')).charset = 'utf-8'),
          (i.timeout = 120),
          s.nc && i.setAttribute('nonce', s.nc),
          i.setAttribute('data-webpack', n + o),
          (i.src = e)),
          (t[e] = [r]);
        var p = (r, n) => {
            (i.onerror = i.onload = null), clearTimeout(d);
            var o = t[e];
            if (
              (delete t[e],
              i.parentNode && i.parentNode.removeChild(i),
              o && o.forEach((e) => e(n)),
              r)
            )
              return r(n);
          },
          d = setTimeout(
            p.bind(null, void 0, { type: 'timeout', target: i }),
            12e4
          );
        (i.onerror = p.bind(null, i.onerror)),
          (i.onload = p.bind(null, i.onload)),
          u && document.head.appendChild(i);
      }
    }),
    (s.r = (e) => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (o = { 422: [23], 467: [103], 719: [719] }),
    (a = {
      23: ['default', './VueCounter', 738],
      103: ['default', './Counter', 278],
      719: ['default', './ReactCounter', 300],
    }),
    (s.f.remotes = (e, r) => {
      s.o(o, e) &&
        o[e].forEach((e) => {
          var t = s.R;
          t || (t = []);
          var n = a[e];
          if (!(t.indexOf(n) >= 0)) {
            if ((t.push(n), n.p)) return r.push(n.p);
            var o = (r) => {
                r || (r = new Error('Container missing')),
                  'string' == typeof r.message &&
                    (r.message +=
                      '\nwhile loading "' + n[1] + '" from ' + n[2]),
                  (s.m[e] = () => {
                    throw r;
                  }),
                  (n.p = 0);
              },
              i = (e, t, a, i, u, s) => {
                try {
                  var f = e(t, a);
                  if (!f || !f.then) return u(f, i, s);
                  var l = f.then((e) => u(e, i), o);
                  if (!s) return l;
                  r.push((n.p = l));
                } catch (e) {
                  o(e);
                }
              },
              u = (e, r, o) => i(r.get, n[1], t, 0, f, o),
              f = (r) => {
                (n.p = 1),
                  (s.m[e] = (e) => {
                    e.exports = r();
                  });
              };
            i(
              s,
              n[2],
              0,
              0,
              (e, r, t) => (e ? i(s.I, n[0], 0, e, u, t) : o()),
              1
            );
          }
        });
    }),
    (() => {
      s.S = {};
      var e = {},
        r = {};
      s.I = (t, n) => {
        n || (n = []);
        var o = r[t];
        if ((o || (o = r[t] = {}), !(n.indexOf(o) >= 0))) {
          if ((n.push(o), e[t])) return e[t];
          s.o(s.S, t) || (s.S[t] = {});
          var a = s.S[t],
            i = 'react-counter',
            u = (e, r, t, n) => {
              var o = (a[e] = a[e] || {}),
                u = o[r];
              (!u || (!u.loaded && (!n != !u.eager ? n : i > u.from))) &&
                (o[r] = { get: t, from: i, eager: !!n });
            },
            f = (e) => {
              var r = (e) => {
                return (
                  (r = 'Initialization of sharing external failed: ' + e),
                  void (
                    'undefined' != typeof console &&
                    console.warn &&
                    console.warn(r)
                  )
                );
                var r;
              };
              try {
                var o = s(e);
                if (!o) return;
                var a = (e) => e && e.init && e.init(s.S[t], n);
                if (o.then) return l.push(o.then(a, r));
                var i = a(o);
                if (i && i.then) return l.push(i.catch(r));
              } catch (e) {
                r(e);
              }
            },
            l = [];
          return (
            'default' === t &&
              (u('effector-react', '22.5.4', () =>
                Promise.all([s.e(12), s.e(815)]).then(() => () => s(12))
              ),
              u('react-dom', '16.14.0', () =>
                Promise.all([s.e(144), s.e(322)]).then(() => () => s(144))
              ),
              u('react', '16.14.0', () => s.e(803).then(() => () => s(41))),
              u('styled-components', '5.3.11', () =>
                Promise.all([s.e(57), s.e(878)]).then(() => () => s(57))
              ),
              f(278),
              f(300),
              f(738)),
            l.length
              ? (e[t] = Promise.all(l).then(() => (e[t] = 1)))
              : (e[t] = 1)
          );
        }
      };
    })(),
    (() => {
      var e;
      s.g.importScripts && (e = s.g.location + '');
      var r = s.g.document;
      if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
        var t = r.getElementsByTagName('script');
        if (t.length)
          for (var n = t.length - 1; n > -1 && (!e || !/^http(s?):/.test(e)); )
            e = t[n--].src;
      }
      if (!e)
        throw new Error(
          'Automatic publicPath is not supported in this browser'
        );
      (e = e
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (s.p = e);
    })(),
    (() => {
      var e = (e) => {
          var r = (e) => e.split('.').map((e) => (+e == e ? +e : e)),
            t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
            n = t[1] ? r(t[1]) : [];
          return (
            t[2] && (n.length++, n.push.apply(n, r(t[2]))),
            t[3] && (n.push([]), n.push.apply(n, r(t[3]))),
            n
          );
        },
        r = (e) => {
          var t = e[0],
            n = '';
          if (1 === e.length) return '*';
          if (t + 0.5) {
            n +=
              0 == t
                ? '>='
                : -1 == t
                ? '<'
                : 1 == t
                ? '^'
                : 2 == t
                ? '~'
                : t > 0
                ? '='
                : '!=';
            for (var o = 1, a = 1; a < e.length; a++)
              o--,
                (n +=
                  'u' == (typeof (u = e[a]))[0]
                    ? '-'
                    : (o > 0 ? '.' : '') + ((o = 2), u));
            return n;
          }
          var i = [];
          for (a = 1; a < e.length; a++) {
            var u = e[a];
            i.push(
              0 === u
                ? 'not(' + s() + ')'
                : 1 === u
                ? '(' + s() + ' || ' + s() + ')'
                : 2 === u
                ? i.pop() + ' ' + i.pop()
                : r(u)
            );
          }
          return s();
          function s() {
            return i.pop().replace(/^\((.+)\)$/, '$1');
          }
        },
        t = (r, n) => {
          if (0 in r) {
            n = e(n);
            var o = r[0],
              a = o < 0;
            a && (o = -o - 1);
            for (var i = 0, u = 1, s = !0; ; u++, i++) {
              var f,
                l,
                c = u < r.length ? (typeof r[u])[0] : '';
              if (i >= n.length || 'o' == (l = (typeof (f = n[i]))[0]))
                return !s || ('u' == c ? u > o && !a : ('' == c) != a);
              if ('u' == l) {
                if (!s || 'u' != c) return !1;
              } else if (s)
                if (c == l)
                  if (u <= o) {
                    if (f != r[u]) return !1;
                  } else {
                    if (a ? f > r[u] : f < r[u]) return !1;
                    f != r[u] && (s = !1);
                  }
                else if ('s' != c && 'n' != c) {
                  if (a || u <= o) return !1;
                  (s = !1), u--;
                } else {
                  if (u <= o || l < c != a) return !1;
                  s = !1;
                }
              else 's' != c && 'n' != c && ((s = !1), u--);
            }
          }
          var p = [],
            d = p.pop.bind(p);
          for (i = 1; i < r.length; i++) {
            var h = r[i];
            p.push(
              1 == h ? d() | d() : 2 == h ? d() & d() : h ? t(h, n) : !d()
            );
          }
          return !!d();
        },
        n = (r, t) => {
          var n = r[t];
          return Object.keys(n).reduce(
            (r, t) =>
              !r ||
              (!n[r].loaded &&
                ((r, t) => {
                  (r = e(r)), (t = e(t));
                  for (var n = 0; ; ) {
                    if (n >= r.length)
                      return n < t.length && 'u' != (typeof t[n])[0];
                    var o = r[n],
                      a = (typeof o)[0];
                    if (n >= t.length) return 'u' == a;
                    var i = t[n],
                      u = (typeof i)[0];
                    if (a != u)
                      return ('o' == a && 'n' == u) || 's' == u || 'u' == a;
                    if ('o' != a && 'u' != a && o != i) return o < i;
                    n++;
                  }
                })(r, t))
                ? t
                : r,
            0
          );
        },
        o = (e, o, u, s) => {
          var f = n(e, u);
          return (
            t(s, f) ||
              a(
                ((e, t, n, o) =>
                  'Unsatisfied version ' +
                  n +
                  ' from ' +
                  (n && e[t][n].from) +
                  ' of shared singleton module ' +
                  t +
                  ' (required ' +
                  r(o) +
                  ')')(e, u, f, s)
              ),
            i(e[u][f])
          );
        },
        a = (e) => {
          'undefined' != typeof console && console.warn && console.warn(e);
        },
        i = (e) => ((e.loaded = 1), e.get()),
        u = ((e) =>
          function (r, t, n, o) {
            var a = s.I(r);
            return a && a.then
              ? a.then(e.bind(e, r, s.S[r], t, n, o))
              : e(r, s.S[r], t, n, o);
          })((e, r, t, n, a) => (r && s.o(r, t) ? o(r, 0, t, n) : a())),
        f = {},
        l = {
          159: () =>
            u('default', 'styled-components', [1, 5, 3, 5], () =>
              Promise.all([s.e(57), s.e(878)]).then(() => () => s(57))
            ),
          368: () =>
            u('default', 'effector-react', [1, 22, 5, 4], () =>
              Promise.all([s.e(12), s.e(815)]).then(() => () => s(12))
            ),
          575: () =>
            u('default', 'react', [1, 16, 13, 0], () =>
              s.e(803).then(() => () => s(41))
            ),
          807: () =>
            u('default', 'react-dom', [1, 16, 13, 0], () =>
              Promise.all([s.e(144), s.e(322)]).then(() => () => s(144))
            ),
          432: () =>
            u(
              'default',
              'react',
              [, [1, 18, 0, 0], [1, 17, 0, 0], [1, 16, 8, 0], 1, 1],
              () => s.e(803).then(() => () => s(41))
            ),
          896: () =>
            u('default', 'react', [, [-1, 19, 0, 0], [0, 16, 8, 0], 2], () =>
              s.e(803).then(() => () => s(41))
            ),
          322: () =>
            u('default', 'react', [1, 16, 14, 0], () =>
              s.e(41).then(() => () => s(41))
            ),
          878: () =>
            u('default', 'react', [0, 16, 8, 0], () =>
              s.e(803).then(() => () => s(41))
            ),
        },
        c = {
          322: [322],
          467: [159, 368, 575, 807],
          815: [432, 896],
          878: [878],
        },
        p = {};
      s.f.consumes = (e, r) => {
        s.o(c, e) &&
          c[e].forEach((e) => {
            if (s.o(f, e)) return r.push(f[e]);
            if (!p[e]) {
              var t = (r) => {
                (f[e] = 0),
                  (s.m[e] = (t) => {
                    delete s.c[e], (t.exports = r());
                  });
              };
              p[e] = !0;
              var n = (r) => {
                delete f[e],
                  (s.m[e] = (t) => {
                    throw (delete s.c[e], r);
                  });
              };
              try {
                var o = l[e]();
                o.then ? r.push((f[e] = o.then(t).catch(n))) : t(o);
              } catch (e) {
                n(e);
              }
            }
          });
      };
    })(),
    (() => {
      var e = { 792: 0 };
      s.f.j = (r, t) => {
        var n = s.o(e, r) ? e[r] : void 0;
        if (0 !== n)
          if (n) t.push(n[2]);
          else if (/^(322|719|815|878)$/.test(r)) e[r] = 0;
          else {
            var o = new Promise((t, o) => (n = e[r] = [t, o]));
            t.push((n[2] = o));
            var a = s.p + s.u(r),
              i = new Error();
            s.l(
              a,
              (t) => {
                if (s.o(e, r) && (0 !== (n = e[r]) && (e[r] = void 0), n)) {
                  var o = t && ('load' === t.type ? 'missing' : t.type),
                    a = t && t.target && t.target.src;
                  (i.message =
                    'Loading chunk ' + r + ' failed.\n(' + o + ': ' + a + ')'),
                    (i.name = 'ChunkLoadError'),
                    (i.type = o),
                    (i.request = a),
                    n[1](i);
                }
              },
              'chunk-' + r,
              r
            );
          }
      };
      var r = (r, t) => {
          var n,
            o,
            [a, i, u] = t,
            f = 0;
          if (a.some((r) => 0 !== e[r])) {
            for (n in i) s.o(i, n) && (s.m[n] = i[n]);
            u && u(s);
          }
          for (r && r(t); f < a.length; f++)
            (o = a[f]), s.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
        },
        t = (self.webpackChunkshell = self.webpackChunkshell || []);
      t.forEach(r.bind(null, 0)), (t.push = r.bind(null, t.push.bind(t)));
    })(),
    (s.nc = void 0),
    s(587);
})();
