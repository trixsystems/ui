import c from "primevue/config";
import d from "@primevue/themes/aura";
import { default as y } from "@primevue/themes/aura";
import { definePreset as i } from "@primevue/themes";
import f from "primevue/toastservice";
import l from "primevue/confirmationservice";
import m from "primevue/dialogservice";
import n from "primevue/tooltip";
const r = i(d, {
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
function g(e, o = {}) {
  const { ripple: a = !0, prefix: t = "p" } = o;
  e.use(c, {
    theme: {
      preset: r,
      options: {
        prefix: t,
        darkModeSelector: ".dark",
        cssLayer: !1
      }
    },
    ripple: a
  }), e.use(f), e.use(l), e.use(m), e.directive("tooltip", n);
}
const h = {
  theme: {
    preset: r,
    options: {
      prefix: "p",
      darkModeSelector: ".dark",
      cssLayer: !1
    }
  },
  ripple: !0
};
export {
  y as Aura,
  r as TrxPreset,
  g as configurePrimeVue,
  h as primeVueConfig
};
