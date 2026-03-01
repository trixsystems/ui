<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Message from 'primevue/message'

withDefaults(defineProps<{
  appName: string
  brandPrefix?: string
  appTagline?: string
  loading?: boolean
  error?: string | null
  showRememberMe?: boolean
  showForgotPassword?: boolean
  showFontControls?: boolean
  showLanguageToggle?: boolean
}>(), {
  brandPrefix: 'TRX',
  appTagline: '',
  loading: false,
  showRememberMe: true,
  showForgotPassword: true,
  showFontControls: true,
  showLanguageToggle: true
})

const emit = defineEmits<{
  submit: [credentials: { email: string; password: string; rememberMe: boolean }]
  forgotPassword: []
}>()

// Form state
const credentials = reactive({
  email: '',
  password: ''
})
const rememberMe = ref(false)
const submitted = ref(false)

// Theme state
const isDarkMode = ref(false)

// Language state
const currentLocale = ref(localStorage.getItem('locale') || 'pt-BR')
const localeLabel = computed(() => currentLocale.value === 'pt-BR' ? 'PT' : 'EN')

// Font size state
const fontSize = ref(16)

// Validation
const isValidEmail = computed(() => {
  return /.+@.+\..+/.test(credentials.email)
})

const hasEmailError = computed(() => {
  return submitted.value && (!credentials.email || !isValidEmail.value)
})

const hasPasswordError = computed(() => {
  return submitted.value && !credentials.password
})

// Functions
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

const toggleLanguage = () => {
  const newLocale = currentLocale.value === 'pt-BR' ? 'en' : 'pt-BR'
  currentLocale.value = newLocale
  localStorage.setItem('locale', newLocale)
}

const increaseFontSize = () => {
  if (fontSize.value < 20) {
    fontSize.value += 1
    document.documentElement.style.fontSize = `${fontSize.value}px`
    localStorage.setItem('fontSize', fontSize.value.toString())
  }
}

const decreaseFontSize = () => {
  if (fontSize.value > 12) {
    fontSize.value -= 1
    document.documentElement.style.fontSize = `${fontSize.value}px`
    localStorage.setItem('fontSize', fontSize.value.toString())
  }
}

const handleSubmit = () => {
  submitted.value = true

  if (!credentials.email || !credentials.password || !isValidEmail.value) {
    return
  }

  emit('submit', {
    email: credentials.email,
    password: credentials.password,
    rememberMe: rememberMe.value
  })
}

const handleForgotPassword = () => {
  emit('forgotPassword')
}

onMounted(() => {
  // Load saved theme
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark')
    isDarkMode.value = true
  }

  // Load saved font size
  const savedFontSize = localStorage.getItem('fontSize')
  if (savedFontSize) {
    fontSize.value = parseInt(savedFontSize)
    document.documentElement.style.fontSize = `${fontSize.value}px`
  }
})
</script>

<template>
  <div class="trx-login-page">
    <!-- Settings Toggle -->
    <div class="trx-login-page__settings">
      <!-- Font Size Controls -->
      <template v-if="showFontControls">
        <button
          @click="decreaseFontSize"
          title="Diminuir fonte"
          class="trx-login-page__settings-btn"
          :disabled="fontSize <= 12"
        >
          <i class="pi pi-minus"></i>
        </button>
        <button
          @click="increaseFontSize"
          title="Aumentar fonte"
          class="trx-login-page__settings-btn"
          :disabled="fontSize >= 20"
        >
          <i class="pi pi-plus"></i>
        </button>
        <div class="trx-login-page__settings-divider"></div>
      </template>

      <!-- Theme Toggle -->
      <button
        @click="toggleTheme"
        :title="isDarkMode ? 'Modo claro' : 'Modo escuro'"
        class="trx-login-page__settings-btn"
      >
        <i :class="isDarkMode ? 'pi pi-sun' : 'pi pi-moon'"></i>
      </button>

      <!-- Language Toggle -->
      <template v-if="showLanguageToggle">
        <div class="trx-login-page__settings-divider"></div>
        <button
          @click="toggleLanguage"
          title="Idioma"
          class="trx-login-page__settings-btn trx-login-page__settings-btn--lang"
        >
          <i class="pi pi-globe"></i>
          <span class="trx-login-page__lang-label">{{ localeLabel }}</span>
        </button>
      </template>
    </div>

    <!-- Animated Background -->
    <div class="trx-login-page__background">
      <div class="trx-login-page__orb trx-login-page__orb--1"></div>
      <div class="trx-login-page__orb trx-login-page__orb--2"></div>
      <div class="trx-login-page__orb trx-login-page__orb--3"></div>
    </div>

    <div class="trx-login-page__container">
      <div class="trx-login-page__panel">
        <div class="trx-login-page__card">
          <!-- Header with Icon -->
          <div class="trx-login-page__header">
            <div class="trx-login-page__icon">
              <slot name="icon">
                <i class="pi pi-box" style="font-size: 2.5rem; color: white;"></i>
              </slot>
            </div>
            <h1 class="trx-login-page__brand">
              <span v-if="brandPrefix" class="trx-login-page__brand-trx">{{ brandPrefix }}</span>{{ brandPrefix ? ' ' : '' }}{{ appName }}
            </h1>
            <p v-if="appTagline" class="trx-login-page__tagline">{{ appTagline }}</p>
            <h2 class="trx-login-page__title">Acesse sua conta</h2>
            <p class="trx-login-page__subtitle">Preencha seus dados para acessar</p>
          </div>

          <!-- Form -->
          <form class="trx-login-page__form" @submit.prevent="handleSubmit">
            <div class="trx-login-page__field">
              <label for="email" class="trx-login-page__label">
                <i class="pi pi-envelope"></i>
                Email
              </label>
              <InputText
                id="email"
                v-model="credentials.email"
                type="email"
                placeholder="seu@email.com"
                class="trx-login-page__input"
                :class="{ 'p-invalid': hasEmailError }"
              />
              <small v-if="submitted && !credentials.email" class="p-error">
                Campo obrigatorio
              </small>
              <small v-else-if="submitted && credentials.email && !isValidEmail" class="p-error">
                Email invalido
              </small>
            </div>

            <div class="trx-login-page__field">
              <label for="password" class="trx-login-page__label">
                <i class="pi pi-lock"></i>
                Senha
              </label>
              <Password
                id="password"
                v-model="credentials.password"
                :feedback="false"
                toggleMask
                placeholder="Digite sua senha"
                class="trx-login-page__input"
                :class="{ 'p-invalid': hasPasswordError }"
                :inputClass="'w-full'"
              />
              <small v-if="hasPasswordError" class="p-error">
                Campo obrigatorio
              </small>
            </div>

            <div class="trx-login-page__options" v-if="showRememberMe || showForgotPassword">
              <div class="trx-login-page__remember" v-if="showRememberMe">
                <Checkbox
                  id="remember-me"
                  v-model="rememberMe"
                  :binary="true"
                />
                <label for="remember-me" class="trx-login-page__remember-label">
                  Lembrar de mim
                </label>
              </div>

              <a
                v-if="showForgotPassword"
                href="#"
                class="trx-login-page__forgot"
                @click.prevent="handleForgotPassword"
              >
                Esqueceu sua senha?
              </a>
            </div>

            <Button
              type="submit"
              class="trx-login-page__submit"
              :loading="loading"
              :disabled="loading"
            >
              <i v-if="!loading" class="pi pi-sign-in"></i>
              <span>{{ loading ? 'Entrando...' : 'Entrar' }}</span>
            </Button>

            <div v-if="error" class="trx-login-page__error">
              <Message severity="error" :closable="false">
                {{ error }}
              </Message>
            </div>
          </form>

          <!-- Footer -->
          <div class="trx-login-page__footer">
            <slot name="footer">
              <p class="trx-login-page__copyright">
                Powered by <a href="https://trixsystems.io" target="_blank" rel="noopener noreferrer" class="trx-login-page__link">TRIX Systems</a>
              </p>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Settings Toggle */
.trx-login-page__settings {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 100;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: 0.35rem 0.75rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.dark .trx-login-page__settings {
  background: rgba(40, 42, 54, 0.9);
}

.trx-login-page__settings-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  padding: 0 0.5rem;
  border-radius: 8px;
  background: transparent;
  border: none;
  color: var(--trx-text-primary);
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.875rem;
}

.trx-login-page__settings-btn:hover:not(:disabled) {
  background: rgba(0, 0, 0, 0.1);
}

.dark .trx-login-page__settings-btn:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.15);
}

.trx-login-page__settings-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.trx-login-page__settings-btn--lang {
  gap: 0.25rem;
}

.trx-login-page__settings-divider {
  width: 1px;
  height: 20px;
  background: var(--trx-border-color, #e2e8f0);
  margin: 0 0.25rem;
}

.dark .trx-login-page__settings-divider {
  background: var(--trx-border-color, #44475a);
}

.trx-login-page__lang-label {
  font-size: 0.75rem;
  font-weight: 600;
  margin-left: 0.25rem;
}

/* Main Page */
.trx-login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--trx-bg-secondary);
  position: relative;
  overflow: hidden;
}

/* Animated Background */
.trx-login-page__background {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.trx-login-page__orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
  animation: trx-float 20s infinite ease-in-out;
}

.trx-login-page__orb--1 {
  width: 600px;
  height: 600px;
  background: linear-gradient(135deg, #6ee7b7 0%, #34d399 100%);
  top: -200px;
  left: -200px;
  animation-delay: 0s;
}

.dark .trx-login-page__orb--1 {
  background: linear-gradient(135deg, #bd93f9 0%, #ff79c6 100%);
}

.trx-login-page__orb--2 {
  width: 500px;
  height: 500px;
  background: linear-gradient(135deg, #22d3ee 0%, #6366f1 100%);
  bottom: -150px;
  right: -150px;
  animation-delay: -7s;
}

.dark .trx-login-page__orb--2 {
  background: linear-gradient(135deg, #8be9fd 0%, #bd93f9 100%);
}

.trx-login-page__orb--3 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: -14s;
  opacity: 0.2;
}

.dark .trx-login-page__orb--3 {
  background: linear-gradient(135deg, #ffb86c 0%, #ff5555 100%);
}

@keyframes trx-float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(30px, -30px) scale(1.05); }
  50% { transform: translate(-20px, 20px) scale(0.95); }
  75% { transform: translate(20px, 30px) scale(1.02); }
}

/* Container */
.trx-login-page__container {
  display: flex;
  width: 100%;
  max-width: 480px;
  margin: 1rem;
  background: var(--trx-bg-card);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 1;
}

.dark .trx-login-page__container {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 60px -15px rgba(189, 147, 249, 0.2);
}

.trx-login-page__panel {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.trx-login-page__card {
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

/* Icon */
.trx-login-page__icon {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #6ee7b7 0%, #10b981 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem auto;
  flex-shrink: 0;
  box-shadow: 0 8px 24px rgba(110, 231, 183, 0.3);
}

.dark .trx-login-page__icon {
  background: linear-gradient(135deg, #bd93f9 0%, #a78bfa 100%);
  box-shadow: 0 8px 24px rgba(189, 147, 249, 0.3);
}

/* Header */
.trx-login-page__header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin-bottom: 2rem;
}

.trx-login-page__brand {
  font-size: 2rem;
  font-weight: 800;
  color: var(--trx-text-primary);
  margin: 0 0 0.25rem;
  letter-spacing: -0.02em;
  text-align: center;
  width: 100%;
}

.trx-login-page__brand-trx {
  color: #10b981;
  font-style: italic;
}

.dark .trx-login-page__brand-trx {
  color: var(--dracula-purple, #bd93f9);
}

.trx-login-page__tagline {
  font-size: 1rem;
  color: var(--trx-text-secondary);
  margin: 0 0 1.5rem;
  text-align: center;
  width: 100%;
}

.trx-login-page__title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--trx-text-primary);
  margin: 0 0 0.5rem;
}

.trx-login-page__subtitle {
  font-size: 1rem;
  color: var(--trx-text-secondary);
  margin: 0;
}

/* Form */
.trx-login-page__form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  text-align: left;
  width: 100%;
}

.trx-login-page__field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.trx-login-page__label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--trx-text-primary);
}

.trx-login-page__label i {
  color: var(--trx-text-secondary);
  font-size: 0.9rem;
}

.trx-login-page__input {
  width: 100%;
}

.trx-login-page__input :deep(input) {
  width: 100%;
}

.trx-login-page__options {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.trx-login-page__remember {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.trx-login-page__remember-label {
  font-size: 0.9rem;
  color: var(--trx-text-secondary);
  cursor: pointer;
}

.trx-login-page__forgot {
  font-size: 0.9rem;
  color: var(--trx-accent-color, #10b981);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s;
}

.trx-login-page__forgot:hover {
  text-decoration: underline;
}

.dark .trx-login-page__forgot {
  color: var(--dracula-purple, #bd93f9);
}

/* Submit Button */
.trx-login-page__submit {
  width: 100%;
  background: linear-gradient(135deg, #6ee7b7 0%, #10b981 100%) !important;
  border: none !important;
  font-weight: 600;
  padding: 0.875rem 1.5rem;
  font-size: 1rem;
  margin-top: 0.5rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.dark .trx-login-page__submit {
  background: linear-gradient(135deg, #bd93f9 0%, #a78bfa 100%) !important;
}

.trx-login-page__submit:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px -5px rgba(110, 231, 183, 0.4);
}

.dark .trx-login-page__submit:hover:not(:disabled) {
  box-shadow: 0 10px 20px -5px rgba(189, 147, 249, 0.4);
}

/* Error */
.trx-login-page__error {
  margin-top: 0.5rem;
}

.p-error {
  color: var(--trx-danger-color, #ef4444);
  font-size: 0.875rem;
}

/* Footer */
.trx-login-page__footer {
  text-align: center;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--trx-border-color);
  width: 100%;
}

.trx-login-page__copyright {
  font-size: 0.85rem;
  color: var(--trx-text-muted);
  margin: 0;
}

.trx-login-page__link {
  font-weight: 600;
  color: var(--trx-accent-color, #10b981);
  text-decoration: none;
}

.trx-login-page__link:hover {
  text-decoration: underline;
}

.dark .trx-login-page__link {
  color: var(--dracula-purple, #bd93f9);
}

/* Input styling */
:deep(.p-inputtext),
:deep(.p-password-input) {
  background: var(--trx-bg-primary);
  border: 2px solid var(--trx-border-color);
  color: var(--trx-text-primary);
  border-radius: 12px;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  transition: all 0.2s ease;
}

:deep(.p-inputtext:enabled:hover),
:deep(.p-password-input:enabled:hover) {
  border-color: var(--trx-accent-color, #6ee7b7);
}

:deep(.p-inputtext:enabled:focus),
:deep(.p-password-input:enabled:focus) {
  border-color: var(--trx-accent-color, #6ee7b7);
  box-shadow: 0 0 0 3px rgba(110, 231, 183, 0.25);
}

.dark :deep(.p-inputtext:enabled:focus),
.dark :deep(.p-password-input:enabled:focus) {
  border-color: var(--dracula-purple, #bd93f9);
  box-shadow: 0 0 0 3px rgba(189, 147, 249, 0.25);
}

/* Responsive */
@media (max-width: 899px) {
  .trx-login-page__container {
    max-width: 450px;
    min-height: auto;
  }

  .trx-login-page__panel {
    padding: 2.5rem 1.5rem;
  }
}

.w-full {
  width: 100%;
}
</style>
