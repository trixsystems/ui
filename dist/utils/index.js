import s from "dayjs";
import { default as Z } from "dayjs";
var w = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function v(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var j = { exports: {} };
(function(r, t) {
  (function(e, n) {
    r.exports = n(s);
  })(w, function(e) {
    function n(i) {
      return i && typeof i == "object" && "default" in i ? i : { default: i };
    }
    var u = n(e), a = { name: "pt-br", weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"), weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"), weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"), months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"), monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"), ordinal: function(i) {
      return i + "º";
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [às] HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm" }, relativeTime: { future: "em %s", past: "há %s", s: "poucos segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mês", MM: "%d meses", y: "um ano", yy: "%d anos" } };
    return u.default.locale(a, null, !0), a;
  });
})(j);
var S = { exports: {} };
(function(r, t) {
  (function(e, n) {
    r.exports = n();
  })(w, function() {
    return function(e, n, u) {
      e = e || {};
      var a = n.prototype, i = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
      function $(o, f, l, _) {
        return a.fromToBase(o, f, l, _);
      }
      u.en.relativeTime = i, a.fromToBase = function(o, f, l, _, D) {
        for (var h, p, x, g = l.$locale().relativeTime || i, y = e.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], T = y.length, c = 0; c < T; c += 1) {
          var m = y[c];
          m.d && (h = _ ? u(o).diff(l, m.d, !0) : l.diff(o, m.d, !0));
          var d = (e.rounding || Math.round)(Math.abs(h));
          if (x = h > 0, d <= m.r || !m.r) {
            d <= 1 && c > 0 && (m = y[c - 1]);
            var M = g[m.l];
            D && (d = D("" + d)), p = typeof M == "string" ? M.replace("%d", d) : M(d, f, m.l, x);
            break;
          }
        }
        if (f) return p;
        var b = x ? g.future : g.past;
        return typeof b == "function" ? b(p) : b.replace("%s", p);
      }, a.to = function(o, f) {
        return $(o, f, this, !0);
      }, a.from = function(o, f) {
        return $(o, f, this);
      };
      var Y = function(o) {
        return o.$u ? u.utc() : u();
      };
      a.toNow = function(o) {
        return this.to(Y(this), o);
      }, a.fromNow = function(o) {
        return this.from(Y(this), o);
      };
    };
  });
})(S);
var L = S.exports;
const H = /* @__PURE__ */ v(L);
s.locale("pt-br");
s.extend(H);
function F(r, t = "DD/MM/YYYY") {
  return r ? s(r).format(t) : "-";
}
function B(r, t = "DD/MM/YYYY HH:mm") {
  return r ? s(r).format(t) : "-";
}
function C(r, t = "HH:mm:ss") {
  return r ? s(r).format(t) : "-";
}
function P(r) {
  return r ? s(r).fromNow() : "-";
}
function k(r, t = "BRL") {
  return r == null ? "-" : new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: t
  }).format(r);
}
function O(r, t = 0) {
  return r == null ? "-" : new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: t,
    maximumFractionDigits: t
  }).format(r);
}
function R(r, t = 1) {
  return r == null ? "-" : new Intl.NumberFormat("pt-BR", {
    style: "percent",
    minimumFractionDigits: t,
    maximumFractionDigits: t
  }).format(r / 100);
}
function q(r) {
  if (!r) return "-";
  const t = r.replace(/\D/g, "");
  return t.length === 11 ? t.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3") : t.length === 10 ? t.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3") : r;
}
function I(r) {
  return r ? r.replace(/\D/g, "").replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4") : "-";
}
function E(r) {
  return r ? r.replace(/\D/g, "").replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5") : "-";
}
function J(r) {
  if (r == null) return "-";
  const t = Math.floor(r / 3600), e = Math.floor(r % 3600 / 60), n = Math.floor(r % 60);
  return t > 0 ? `${t.toString().padStart(2, "0")}:${e.toString().padStart(2, "0")}:${n.toString().padStart(2, "0")}` : `${e.toString().padStart(2, "0")}:${n.toString().padStart(2, "0")}`;
}
function z(r, t = 50) {
  return r ? r.length <= t ? r : r.substring(0, t) + "..." : "";
}
function A(r, t) {
  let e;
  return (...n) => {
    clearTimeout(e), e = setTimeout(() => r(...n), t);
  };
}
function G(r, t) {
  let e = 0;
  return (...n) => {
    const u = Date.now();
    u - e >= t && (e = u, r(...n));
  };
}
function K(r) {
  return JSON.parse(JSON.stringify(r));
}
function Q(r) {
  return r == null ? !0 : typeof r == "string" ? r.trim() === "" : Array.isArray(r) ? r.length === 0 : typeof r == "object" ? Object.keys(r).length === 0 : !1;
}
function U() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (r) => {
    const t = Math.random() * 16 | 0;
    return (r === "x" ? t : t & 3 | 8).toString(16);
  });
}
function V(r) {
  return new Promise((t) => setTimeout(t, r));
}
export {
  Z as dayjs,
  A as debounce,
  K as deepClone,
  E as formatCNPJ,
  I as formatCPF,
  k as formatCurrency,
  F as formatDate,
  B as formatDateTime,
  J as formatDuration,
  O as formatNumber,
  R as formatPercent,
  q as formatPhone,
  P as formatRelative,
  C as formatTime,
  Q as isEmpty,
  V as sleep,
  G as throttle,
  z as truncate,
  U as uuid
};
