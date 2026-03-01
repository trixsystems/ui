import { ref as s, computed as y, onMounted as E } from "vue";
const l = s("light"), a = s("font-normal"), e = s(14), o = s("pt-BR"), m = {
  "font-small": 12,
  "font-normal": 14,
  "font-large": 16,
  "font-xlarge": 18
}, u = {
  12: "font-small",
  14: "font-normal",
  16: "font-large",
  18: "font-xlarge",
  20: "font-xlarge"
};
function T() {
  const i = s(!1), d = y({
    get: () => e.value,
    set: (t) => {
      typeof t == "number" ? (e.value = t, a.value = u[t] || "font-normal") : (a.value = t, e.value = m[t]);
    }
  }), v = () => {
    const t = localStorage.getItem("trx-theme"), n = localStorage.getItem("trx-font-size"), f = localStorage.getItem("trx-font-size-num"), g = localStorage.getItem("trx-locale");
    if (t)
      l.value = t;
    else {
      const L = window.matchMedia("(prefers-color-scheme: dark)").matches;
      l.value = L ? "dark" : "light";
    }
    f ? (e.value = parseInt(f) || 14, a.value = u[e.value] || "font-normal") : n && (a.value = n, e.value = m[n]), g && (o.value = g), r(), c();
  }, r = () => {
    i.value = l.value === "dark", l.value === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
  }, c = () => {
    document.documentElement.classList.remove("font-small", "font-normal", "font-large", "font-xlarge"), document.documentElement.classList.add(a.value), document.documentElement.style.fontSize = `${e.value}px`;
  }, S = () => {
    l.value = l.value === "light" ? "dark" : "light", localStorage.setItem("trx-theme", l.value), r();
  }, h = (t) => {
    l.value = t, localStorage.setItem("trx-theme", l.value), r();
  }, x = (t) => {
    a.value = t, e.value = m[t], localStorage.setItem("trx-font-size", a.value), localStorage.setItem("trx-font-size-num", String(e.value)), c();
  }, p = () => {
    e.value < 20 && (e.value += 2, a.value = u[e.value] || a.value, localStorage.setItem("trx-font-size-num", String(e.value)), c());
  }, z = () => {
    e.value > 12 && (e.value -= 2, a.value = u[e.value] || a.value, localStorage.setItem("trx-font-size-num", String(e.value)), c());
  }, I = () => {
    o.value = o.value === "pt-BR" ? "en" : "pt-BR", localStorage.setItem("trx-locale", o.value);
  }, k = (t) => {
    o.value = t, localStorage.setItem("trx-locale", o.value);
  };
  return E(() => {
    v(), window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (n) => {
      localStorage.getItem("trx-theme") || (l.value = n.matches ? "dark" : "light", r());
    });
  }), {
    theme: l,
    fontSize: d,
    fontSizeClass: a,
    isDark: i,
    locale: o,
    toggleTheme: S,
    setTheme: h,
    setFontSize: x,
    increaseFontSize: p,
    decreaseFontSize: z,
    toggleLocale: I,
    setLocale: k,
    initTheme: v
  };
}
export {
  T as u
};
