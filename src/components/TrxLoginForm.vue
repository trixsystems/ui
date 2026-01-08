<script setup lang="ts">
import { ref, computed } from 'vue'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'
import Message from 'primevue/message'

const props = defineProps<{
  appName?: string
  appTitle?: string
  loading?: boolean
  error?: string | null
}>()

const emit = defineEmits<{
  submit: [credentials: { email: string; password: string }]
}>()

const email = ref('')
const password = ref('')

const isValid = computed(() => {
  return email.value.trim() !== '' && password.value.trim() !== ''
})

const handleSubmit = () => {
  if (isValid.value && !props.loading) {
    emit('submit', {
      email: email.value.trim(),
      password: password.value
    })
  }
}
</script>

<template>
  <div class="trx-login">
    <div class="trx-login__container">
      <!-- Header -->
      <div class="trx-login__header">
        <div class="trx-login__logo">
          <span class="trx-login__logo-text">TRX</span>
          <span v-if="appName" class="trx-login__logo-app">{{ appName }}</span>
        </div>
        <h1 class="trx-login__title">{{ appTitle || 'Entrar' }}</h1>
        <p class="trx-login__subtitle">
          <slot name="subtitle">
            Entre com suas credenciais para acessar o sistema
          </slot>
        </p>
      </div>

      <!-- Form -->
      <form @submit.prevent="handleSubmit" class="trx-login__form">
        <!-- Error Message -->
        <Message v-if="error" severity="error" :closable="false" class="trx-login__error">
          {{ error }}
        </Message>

        <!-- Email -->
        <div class="trx-login__field">
          <label for="email" class="trx-login__label">Email</label>
          <InputText
            id="email"
            v-model="email"
            type="email"
            placeholder="seu@email.com"
            class="trx-login__input"
            :disabled="loading"
            autocomplete="email"
          />
        </div>

        <!-- Password -->
        <div class="trx-login__field">
          <label for="password" class="trx-login__label">Senha</label>
          <Password
            id="password"
            v-model="password"
            placeholder="Digite sua senha"
            class="trx-login__input"
            :disabled="loading"
            :feedback="false"
            toggleMask
            autocomplete="current-password"
          />
        </div>

        <!-- Forgot Password Link -->
        <div class="trx-login__forgot">
          <slot name="forgot-password">
            <a href="#" class="trx-login__forgot-link">Esqueceu a senha?</a>
          </slot>
        </div>

        <!-- Submit Button -->
        <Button
          type="submit"
          :label="loading ? 'Entrando...' : 'Entrar'"
          :loading="loading"
          :disabled="!isValid || loading"
          class="trx-login__submit"
          icon="pi pi-sign-in"
        />

        <!-- Extra Actions -->
        <div v-if="$slots.actions" class="trx-login__actions">
          <slot name="actions" />
        </div>
      </form>

      <!-- Footer -->
      <div class="trx-login__footer">
        <slot name="footer">
          <p class="trx-login__copyright">
            &copy; {{ new Date().getFullYear() }} TRX Systems
          </p>
        </slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.trx-login {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--trx-bg-secondary);
  padding: 1rem;
}

.trx-login__container {
  width: 100%;
  max-width: 400px;
  background: var(--trx-bg-card);
  border-radius: var(--trx-card-radius, 16px);
  box-shadow: var(--trx-shadow-xl);
  padding: 2.5rem;
  border: 1px solid var(--trx-border-color);
}

.dark .trx-login__container {
  box-shadow: var(--trx-shadow-xl), 0 0 40px rgba(189, 147, 249, 0.1);
}

/* Header */
.trx-login__header {
  text-align: center;
  margin-bottom: 2rem;
}

.trx-login__logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.trx-login__logo-text {
  font-size: 2rem;
  font-weight: 800;
  color: var(--trx-accent-color);
  letter-spacing: -0.02em;
}

.dark .trx-login__logo-text {
  color: var(--dracula-purple, #bd93f9);
  text-shadow: 0 0 20px rgba(189, 147, 249, 0.5);
}

.trx-login__logo-app {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--trx-text-secondary);
  padding: 0.25rem 0.75rem;
  background: var(--trx-bg-tertiary);
  border-radius: 8px;
}

.trx-login__title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--trx-text-primary);
  margin: 0 0 0.5rem 0;
}

.trx-login__subtitle {
  font-size: 0.875rem;
  color: var(--trx-text-secondary);
  margin: 0;
}

/* Form */
.trx-login__form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.trx-login__error {
  margin: 0;
}

.trx-login__field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.trx-login__label {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--trx-text-primary);
}

.trx-login__input {
  width: 100%;
}

.trx-login__input :deep(input) {
  width: 100%;
}

.trx-login__forgot {
  text-align: right;
  margin-top: -0.5rem;
}

.trx-login__forgot-link {
  font-size: 0.875rem;
  color: var(--trx-info-color);
  text-decoration: none;
  transition: color 0.2s ease;
}

.trx-login__forgot-link:hover {
  color: var(--trx-accent-color);
}

.dark .trx-login__forgot-link {
  color: var(--dracula-cyan, #8be9fd);
}

.dark .trx-login__forgot-link:hover {
  color: var(--dracula-purple, #bd93f9);
}

.trx-login__submit {
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.875rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
}

.trx-login__actions {
  text-align: center;
  padding-top: 1rem;
  border-top: 1px solid var(--trx-border-color);
}

/* Footer */
.trx-login__footer {
  margin-top: 2rem;
  text-align: center;
}

.trx-login__copyright {
  font-size: 0.75rem;
  color: var(--trx-text-muted);
  margin: 0;
}

/* Responsive */
@media (max-width: 480px) {
  .trx-login__container {
    padding: 1.5rem;
  }

  .trx-login__logo-text {
    font-size: 1.75rem;
  }
}
</style>
