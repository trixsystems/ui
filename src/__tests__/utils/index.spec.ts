import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import {
  formatDate,
  formatDateTime,
  formatTime,
  formatCurrency,
  formatNumber,
  formatPercent,
  formatPhone,
  formatCPF,
  formatCNPJ,
  formatDuration,
  truncate,
  debounce,
  throttle,
  deepClone,
  isEmpty,
  uuid,
  sleep,
} from '@/utils/index'

describe('formatDate', () => {
  it('formats date to DD/MM/YYYY by default', () => {
    expect(formatDate('2026-06-15')).toBe('15/06/2026')
  })

  it('accepts custom format', () => {
    expect(formatDate('2026-06-15', 'YYYY')).toBe('2026')
  })

  it('returns "-" for null', () => {
    expect(formatDate(null)).toBe('-')
  })

  it('returns "-" for undefined', () => {
    expect(formatDate(undefined)).toBe('-')
  })

  it('accepts Date object', () => {
    const date = new Date(2026, 5, 15) // June 15, 2026 (month is 0-indexed)
    expect(formatDate(date)).toBe('15/06/2026')
  })
})

describe('formatDateTime', () => {
  it('returns "-" for null', () => {
    expect(formatDateTime(null)).toBe('-')
  })

  it('includes time in output', () => {
    const result = formatDateTime('2026-06-15T10:30:00')
    expect(result).toContain('15/06/2026')
    expect(result).toContain('10:30')
  })
})

describe('formatTime', () => {
  it('returns "-" for null', () => {
    expect(formatTime(null)).toBe('-')
  })

  it('formats time as HH:mm:ss', () => {
    expect(formatTime('2026-06-15T14:05:30')).toBe('14:05:30')
  })
})

describe('formatCurrency', () => {
  it('returns "-" for null', () => {
    expect(formatCurrency(null)).toBe('-')
  })

  it('returns "-" for undefined', () => {
    expect(formatCurrency(undefined)).toBe('-')
  })

  it('formats BRL currency', () => {
    const result = formatCurrency(1234.56)
    expect(result).toContain('R$')
    expect(result).toContain('1.234,56')
  })

  it('formats zero as R$ 0,00', () => {
    const result = formatCurrency(0)
    expect(result).toContain('0,00')
  })

  it('formats negative values', () => {
    const result = formatCurrency(-100)
    expect(result).toContain('100,00')
  })
})

describe('formatNumber', () => {
  it('returns "-" for null', () => {
    expect(formatNumber(null)).toBe('-')
  })

  it('formats integer with no decimals', () => {
    expect(formatNumber(1234)).toBe('1.234')
  })

  it('formats with specified decimals', () => {
    const result = formatNumber(1234.5, 2)
    expect(result).toContain('1.234,50')
  })
})

describe('formatPercent', () => {
  it('returns "-" for null', () => {
    expect(formatPercent(null)).toBe('-')
  })

  it('formats percentage', () => {
    const result = formatPercent(50)
    expect(result).toContain('50')
    expect(result).toContain('%')
  })
})

describe('formatPhone', () => {
  it('returns "-" for null', () => {
    expect(formatPhone(null)).toBe('-')
  })

  it('formats 11-digit mobile number', () => {
    expect(formatPhone('11999998888')).toBe('(11) 99999-8888')
  })

  it('formats 10-digit landline number', () => {
    expect(formatPhone('1133334444')).toBe('(11) 3333-4444')
  })

  it('strips non-digit characters before formatting', () => {
    expect(formatPhone('(11) 99999-8888')).toBe('(11) 99999-8888')
  })

  it('returns original string for unknown formats', () => {
    expect(formatPhone('12345')).toBe('12345')
  })
})

describe('formatCPF', () => {
  it('returns "-" for null', () => {
    expect(formatCPF(null)).toBe('-')
  })

  it('formats CPF with dots and dash', () => {
    expect(formatCPF('12345678901')).toBe('123.456.789-01')
  })

  it('strips existing formatting before re-formatting', () => {
    expect(formatCPF('123.456.789-01')).toBe('123.456.789-01')
  })
})

describe('formatCNPJ', () => {
  it('returns "-" for null', () => {
    expect(formatCNPJ(null)).toBe('-')
  })

  it('formats CNPJ correctly', () => {
    expect(formatCNPJ('12345678000195')).toBe('12.345.678/0001-95')
  })
})

describe('formatDuration', () => {
  it('returns "-" for null', () => {
    expect(formatDuration(null)).toBe('-')
  })

  it('formats seconds as MM:SS', () => {
    expect(formatDuration(90)).toBe('01:30')
  })

  it('formats 0 seconds', () => {
    expect(formatDuration(0)).toBe('00:00')
  })

  it('formats as HH:MM:SS when >= 1 hour', () => {
    expect(formatDuration(3661)).toBe('01:01:01')
  })

  it('formats exactly 1 hour', () => {
    expect(formatDuration(3600)).toBe('01:00:00')
  })
})

describe('truncate', () => {
  it('returns empty string for null', () => {
    expect(truncate(null)).toBe('')
  })

  it('returns text as-is when within limit', () => {
    expect(truncate('Hello', 10)).toBe('Hello')
  })

  it('truncates and adds ellipsis when over limit', () => {
    expect(truncate('Hello World', 5)).toBe('Hello...')
  })

  it('uses default limit of 50', () => {
    const long = 'a'.repeat(51)
    const result = truncate(long)
    expect(result.endsWith('...')).toBe(true)
    expect(result.length).toBe(53) // 50 + '...'
  })
})

describe('debounce', () => {
  beforeEach(() => { vi.useFakeTimers() })
  afterEach(() => { vi.useRealTimers() })

  it('delays function call', () => {
    const fn = vi.fn()
    const debounced = debounce(fn, 100)
    debounced('arg')
    expect(fn).not.toHaveBeenCalled()
    vi.advanceTimersByTime(100)
    expect(fn).toHaveBeenCalledWith('arg')
  })

  it('cancels previous call on rapid invocations', () => {
    const fn = vi.fn()
    const debounced = debounce(fn, 100)
    debounced('a')
    debounced('b')
    debounced('c')
    vi.advanceTimersByTime(100)
    expect(fn).toHaveBeenCalledTimes(1)
    expect(fn).toHaveBeenCalledWith('c')
  })
})

describe('throttle', () => {
  beforeEach(() => { vi.useFakeTimers() })
  afterEach(() => { vi.useRealTimers() })

  it('calls function immediately on first call', () => {
    const fn = vi.fn()
    const throttled = throttle(fn, 100)
    throttled()
    expect(fn).toHaveBeenCalledTimes(1)
  })

  it('ignores calls within throttle window', () => {
    const fn = vi.fn()
    const throttled = throttle(fn, 100)
    throttled()
    throttled()
    throttled()
    expect(fn).toHaveBeenCalledTimes(1)
  })

  it('allows call after throttle window', () => {
    const fn = vi.fn()
    const throttled = throttle(fn, 100)
    throttled()
    vi.advanceTimersByTime(101)
    throttled()
    expect(fn).toHaveBeenCalledTimes(2)
  })
})

describe('deepClone', () => {
  it('clones a plain object', () => {
    const obj = { a: 1, b: { c: 2 } }
    const clone = deepClone(obj)
    expect(clone).toEqual(obj)
    expect(clone).not.toBe(obj)
    expect(clone.b).not.toBe(obj.b)
  })

  it('clones an array', () => {
    const arr = [1, 2, { x: 3 }]
    const clone = deepClone(arr)
    expect(clone).toEqual(arr)
    expect(clone).not.toBe(arr)
  })
})

describe('isEmpty', () => {
  it('returns true for null', () => expect(isEmpty(null)).toBe(true))
  it('returns true for undefined', () => expect(isEmpty(undefined)).toBe(true))
  it('returns true for empty string', () => expect(isEmpty('')).toBe(true))
  it('returns true for whitespace string', () => expect(isEmpty('   ')).toBe(true))
  it('returns true for empty array', () => expect(isEmpty([])).toBe(true))
  it('returns true for empty object', () => expect(isEmpty({})).toBe(true))
  it('returns false for non-empty string', () => expect(isEmpty('hello')).toBe(false))
  it('returns false for non-empty array', () => expect(isEmpty([1])).toBe(false))
  it('returns false for non-empty object', () => expect(isEmpty({ a: 1 })).toBe(false))
  it('returns false for 0', () => expect(isEmpty(0)).toBe(false))
  it('returns false for false', () => expect(isEmpty(false)).toBe(false))
})

describe('uuid', () => {
  it('returns a valid UUID v4 format', () => {
    const id = uuid()
    expect(id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/)
  })

  it('returns unique values on each call', () => {
    expect(uuid()).not.toBe(uuid())
  })
})

describe('sleep', () => {
  it('resolves after specified ms', async () => {
    vi.useFakeTimers()
    const promise = sleep(100)
    vi.advanceTimersByTime(100)
    await expect(promise).resolves.toBeUndefined()
    vi.useRealTimers()
  })
})
