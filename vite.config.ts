import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        'primevue/index': resolve(__dirname, 'src/primevue/index.ts'),
        'utils/index': resolve(__dirname, 'src/utils/index.ts'),
        'composables/index': resolve(__dirname, 'src/composables/index.ts'),
        'components/index': resolve(__dirname, 'src/components/index.ts'),
      },
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        'vue',
        'vue-router',
        'pinia',
        'primevue',
        'primevue/config',
        'primevue/toastservice',
        'primevue/confirmationservice',
        'primevue/dialogservice',
        '@primevue/themes',
        '@primevue/themes/aura',
        'axios',
        'dayjs',
      ],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
