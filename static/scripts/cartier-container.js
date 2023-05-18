String.prototype.startsWith ||
  (String.prototype.startsWith = function (t, e) {
    return (e = e || 0), this.indexOf(t, e) === e;
  }),
  String.prototype.endsWith ||
    (String.prototype.endsWith = function (t, e) {
      return (
        (void 0 === e || e > this.length) && (e = this.length),
        this.substring(e - t.length, e) === t
      );
    }),
  Array.prototype.forEach ||
    (Array.prototype.forEach = function (t, e) {
      e = e || window;
      for (var n = 0; n < this.length; n++) t.call(e, this[n], n, this);
    }),
  Array.from ||
    (Array.from = (function () {
      function l(t) {
        return "function" == typeof t || "[object Function]" === e.call(t);
      }
      function c(t) {
        return (
          (t = (function (t) {
            return (
              (t = Number(t)),
              isNaN(t)
                ? 0
                : 0 !== t && isFinite(t)
                ? (0 < t ? 1 : -1) * Math.floor(Math.abs(t))
                : t
            );
          })(t)),
          Math.min(Math.max(t, 0), n)
        );
      }
      var e = Object.prototype.toString,
        n = Math.pow(2, 53) - 1;
      return function (t) {
        var e = Object(t);
        if (null == t)
          throw new TypeError(
            "Array.from requires an array-like object - not null or undefined"
          );
        var n,
          r = 1 < arguments.length ? arguments[1] : void 0;
        if (void 0 !== r) {
          if (!l(r))
            throw new TypeError(
              "Array.from: when provided, the second argument must be a function"
            );
          2 < arguments.length && (n = arguments[2]);
        }
        for (
          var i,
            o = c(e.length),
            a = l(this) ? Object(new this(o)) : new Array(o),
            s = 0;
          s < o;

        )
          (i = e[s]),
            (a[s] = r ? (void 0 === n ? r(i, s) : r.call(n, i, s)) : i),
            (s += 1);
        return (a.length = o), a;
      };
    })());
let UXContainerHttpClient = function () {
    this.get = function (t, e, n) {
      var r = new XMLHttpRequest();
      (r.onreadystatechange = function () {
        4 == r.readyState && 200 == r.status
          ? e(r.responseText)
          : 4 == r.readyState && 404 == r.status && n && n();
      }),
        r.open("GET", t, !0),
        r.send(null);
    };
  },
  loadContainer = function (n) {
    if (n && n.customer && n.container) {
      let e = new UXContainerHttpClient();
      var t;
      isInt(n.version)
        ? ((t = buildContainerUrl(n, n.version)),
          e.get(t, function (t) {
            return injectContainer(t, n);
          }))
        : ((t = buildManifestUrl(n)),
          e.get(t, function (t) {
            !t ||
              ((t = JSON.parse(t)) &&
                isInt(t.version) &&
                ((t = buildContainerUrl(n, t.version)),
                e.get(t, function (t) {
                  return injectContainer(t, n);
                })));
          }));
    }
  };
function injectContainer(t, e) {
  injectHtmlAsBody(parseHTML(t), e);
}
function injectHtmlAsBody(t, e) {
  let n = document.getElementsByTagName("html")[0];
  if (n && e.isStaging) {
    let t = e.previewAttributeName || "data-is-preview";
    !1 === t.startsWith("data-") && (t = "data-" + t), n.setAttribute(t, "");
  }
  var r = document.getElementById(e.targetDivId);
  injectCSS(t, r);
  var i = Array.from(t.body.children);
  for (let t = 0; t < i.length; t++) insertElementIntoTarget(i[t], r);
}
function insertElementIntoTarget(t, e) {
  let n = document.createElement(t.tagName),
    r;
  Array.from(t.attributes).forEach(function (t) {
    var e = t.name,
      t = t.value;
    n.setAttribute(e, t);
  }),
    n.id && (n.id = trimTrailingSlash(n.id)),
    n.src && (n.src = trimTrailingSlash(n.src)),
    (n.textContent = t.textContent),
    e.appendChild(n),
    0 < t.children.length &&
      Array.from(t.children).forEach(function (t) {
        insertElementIntoTarget(t, n);
      });
}
function injectCSS(t, e) {
  for (var n = t.head.getElementsByTagName("link"), r = 0; r < n.length; r++) {
    var i = n[r];
    "stylesheet" === i.getAttribute("rel") && insertElementIntoTarget(i, e);
  }
  for (var o = t.head.getElementsByTagName("style"), r = 0; r < o.length; r++)
    insertElementIntoTarget(o[r], e);
}
function trimTrailingSlash(t) {
  return t.endsWith("/") ? t.slice(0, -1) : t;
}
let parseHTML = function (t) {
    let e;
    return new DOMParser().parseFromString(t, "text/html");
  },
  MINISITE_BASE_URL = "https://cdn.occtoo.com/";
function buildManifestUrl(t) {
  return (
    MINISITE_BASE_URL +
    "occtoo/sites/" +
    t.customer +
    "/" +
    t.container +
    "/manifest.json?t=" +
    new Date().getTime()
  );
}
function buildContainerUrl(e, t) {
  var n = e.isStaging ? e.container + "-staging" : e.container,
    r = e.rootFileName && "" !== e.rootFileName ? e.rootFileName : "index.html";
  let i = MINISITE_BASE_URL + e.customer + "/sites/" + n;
  if (((i = i + "/v" + t), e.isStaging)) {
    let t = 1;
    isInt(e.revision) && (t = e.revision), (i = i + "-rev" + t);
  }
  return (i = i + "/" + r), i;
}
function isInt(t) {
  let e;
  return !isNaN(t) && ((e = parseFloat(t)), (0 | e) === e);
}

window.MinisiteSettings = {
  partner: "d81281cd-b3ea-46a2-a004-2d3700eb93d8",
  language: "pt-BR",
};
loadContainer({
  customer: "cartier",
  container: "minisite",
  targetDivId: "cartier-container",
});
