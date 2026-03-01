<script setup lang="ts">
import { ref } from 'vue'

export interface TrxAddress {
  zipCode?: string
  street?: string
  number?: string
  complement?: string
  district?: string
  city?: string
  state?: string
}

const props = withDefaults(defineProps<{
  modelValue?: TrxAddress
  disabled?: boolean
  required?: boolean
}>(), {
  modelValue: () => ({}),
})

const emit = defineEmits<{ 'update:modelValue': [address: TrxAddress] }>()

const loadingCep = ref(false)
const cepError = ref('')

function update(field: keyof TrxAddress, value: string) {
  emit('update:modelValue', { ...props.modelValue, [field]: value })
}

async function lookupCep(zip: string) {
  const digits = zip.replace(/\D/g, '')
  update('zipCode', zip)
  if (digits.length !== 8) return
  loadingCep.value = true
  cepError.value = ''
  try {
    const res = await fetch(`https://viacep.com.br/ws/${digits}/json/`)
    const data = await res.json()
    if (data.erro) { cepError.value = 'CEP não encontrado'; return }
    emit('update:modelValue', {
      ...props.modelValue,
      zipCode: zip,
      street: data.logradouro,
      district: data.bairro,
      city: data.localidade,
      state: data.uf,
    })
  } catch {
    cepError.value = 'Erro ao buscar CEP'
  } finally {
    loadingCep.value = false
  }
}
</script>

<template>
  <div class="trx-address" :class="{ 'trx-address--disabled': disabled }">
    <div class="trx-address__row">
      <div class="trx-address__field trx-address__field--zip">
        <label class="trx-address__label">CEP <span v-if="required">*</span></label>
        <div class="trx-address__cep-wrap">
          <input
            class="trx-address__input"
            :class="{ 'trx-address__input--error': cepError }"
            type="text"
            maxlength="9"
            placeholder="00000-000"
            :value="modelValue?.zipCode ?? ''"
            :disabled="disabled"
            @input="lookupCep(($event.target as HTMLInputElement).value)"
          />
          <i v-if="loadingCep" class="pi pi-spin pi-spinner trx-address__cep-icon"></i>
        </div>
        <span v-if="cepError" class="trx-address__error">{{ cepError }}</span>
      </div>
    </div>

    <div class="trx-address__row trx-address__row--street">
      <div class="trx-address__field">
        <label class="trx-address__label">Logradouro</label>
        <input class="trx-address__input" type="text" placeholder="Rua, Avenida..." :value="modelValue?.street ?? ''" :disabled="disabled" @input="update('street', ($event.target as HTMLInputElement).value)" />
      </div>
      <div class="trx-address__field trx-address__field--number">
        <label class="trx-address__label">Número</label>
        <input class="trx-address__input" type="text" placeholder="Nº" :value="modelValue?.number ?? ''" :disabled="disabled" @input="update('number', ($event.target as HTMLInputElement).value)" />
      </div>
    </div>

    <div class="trx-address__row">
      <div class="trx-address__field">
        <label class="trx-address__label">Complemento</label>
        <input class="trx-address__input" type="text" placeholder="Apto, Sala..." :value="modelValue?.complement ?? ''" :disabled="disabled" @input="update('complement', ($event.target as HTMLInputElement).value)" />
      </div>
      <div class="trx-address__field">
        <label class="trx-address__label">Bairro</label>
        <input class="trx-address__input" type="text" placeholder="Bairro" :value="modelValue?.district ?? ''" :disabled="disabled" @input="update('district', ($event.target as HTMLInputElement).value)" />
      </div>
    </div>

    <div class="trx-address__row">
      <div class="trx-address__field">
        <label class="trx-address__label">Cidade</label>
        <input class="trx-address__input" type="text" placeholder="Cidade" :value="modelValue?.city ?? ''" :disabled="disabled" @input="update('city', ($event.target as HTMLInputElement).value)" />
      </div>
      <div class="trx-address__field trx-address__field--state">
        <label class="trx-address__label">UF</label>
        <input class="trx-address__input" type="text" maxlength="2" placeholder="UF" :value="modelValue?.state ?? ''" :disabled="disabled" @input="update('state', ($event.target as HTMLInputElement).value)" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.trx-address { display: flex; flex-direction: column; gap: 0.75rem; }
.trx-address--disabled { opacity: 0.6; pointer-events: none; }

.trx-address__row { display: flex; gap: 0.75rem; }
.trx-address__row--street { }

.trx-address__field { display: flex; flex-direction: column; gap: 0.25rem; flex: 1; }
.trx-address__field--zip { max-width: 140px; }
.trx-address__field--number { max-width: 100px; }
.trx-address__field--state { max-width: 70px; }

.trx-address__label { font-size: 0.8rem; font-weight: 500; color: var(--trx-text-secondary); }

.trx-address__cep-wrap { position: relative; }

.trx-address__input {
  width: 100%;
  padding: 0.45rem 0.75rem;
  border: 1px solid var(--trx-border-color);
  border-radius: 8px;
  background: var(--trx-bg-card);
  color: var(--trx-text-primary);
  font-size: 0.875rem;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.2s;
  font-family: inherit;
}

.trx-address__input:focus { border-color: var(--trx-accent-color); }
.trx-address__input--error { border-color: var(--trx-danger-color); }

.trx-address__cep-icon {
  position: absolute;
  right: 0.6rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--trx-accent-color);
  font-size: 0.8rem;
}

.trx-address__error { font-size: 0.75rem; color: var(--trx-danger-color); }
</style>
