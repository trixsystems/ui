import d from "primevue/config";
import m from "@primevue/themes/aura";
import { default as L } from "@primevue/themes/aura";
import { definePreset as n } from "@primevue/themes";
import l from "primevue/toastservice";
import i from "primevue/confirmationservice";
import f from "primevue/dialogservice";
import s from "primevue/tooltip";
const c = n(m, {
  semantic: {
    primary: {
      50: "{emerald.50}",
      100: "{emerald.100}",
      200: "{emerald.200}",
      300: "{emerald.300}",
      400: "{emerald.400}",
      500: "{emerald.500}",
      600: "{emerald.600}",
      700: "{emerald.700}",
      800: "{emerald.800}",
      900: "{emerald.900}",
      950: "{emerald.950}"
    }
  },
  components: {
    button: {
      colorScheme: {
        light: {
          secondary: {
            background: "#f1f5f9",
            hoverBackground: "#e2e8f0",
            activeBackground: "#cbd5e1",
            borderColor: "#cbd5e1",
            hoverBorderColor: "#6ee7b7",
            activeBorderColor: "#6ee7b7",
            color: "#334155",
            hoverColor: "#1e293b",
            activeColor: "#1e293b"
          },
          text: {
            primary: {
              hoverBackground: "#f1f5f9",
              activeBackground: "#e2e8f0",
              color: "#64748b",
              hoverColor: "#6ee7b7",
              activeColor: "#5ddba8"
            }
          }
        },
        dark: {
          secondary: {
            background: "#44475a",
            hoverBackground: "#44475a",
            activeBackground: "#6272a4",
            borderColor: "#6272a4",
            hoverBorderColor: "#bd93f9",
            activeBorderColor: "#bd93f9",
            color: "#f8f8f2",
            hoverColor: "#f8f8f2",
            activeColor: "#f8f8f2"
          },
          text: {
            primary: {
              hoverBackground: "#44475a",
              activeBackground: "#6272a4",
              color: "#f8f8f2",
              hoverColor: "#bd93f9",
              activeColor: "#caa9fc"
            }
          }
        }
      }
    }
  }
});
function u() {
  if (typeof window > "u") return;
  const e = localStorage.getItem("trx-theme"), o = window.matchMedia("(prefers-color-scheme: dark)").matches;
  (e ?? (o ? "dark" : "light")) === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
  const r = localStorage.getItem("trx-font-size") ?? "font-normal", a = localStorage.getItem("trx-font-size-num");
  document.documentElement.classList.remove("font-small", "font-normal", "font-large", "font-xlarge"), document.documentElement.classList.add(r), a && (document.documentElement.style.fontSize = `${a}px`);
}
function x(e, o = {}) {
  const { ripple: t = !0, prefix: r = "p" } = o;
  u(), e.use(d, {
    theme: {
      preset: c,
      options: {
        prefix: r,
        darkModeSelector: ".dark",
        cssLayer: !1
      }
    },
    ripple: t
  }), e.use(l), e.use(i), e.use(f), e.directive("tooltip", s);
}
const B = {
  theme: {
    preset: c,
    options: {
      prefix: "p",
      darkModeSelector: ".dark",
      cssLayer: !1
    }
  },
  ripple: !0
};
export {
  L as Aura,
  c as TrxPreset,
  x as configurePrimeVue,
  u as initTheme,
  B as primeVueConfig
};
