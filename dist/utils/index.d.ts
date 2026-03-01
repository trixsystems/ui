import { default as dayjs } from 'dayjs';
/**
 * Format date using dayjs
 */
export declare function formatDate(date: string | Date | null | undefined, format?: string): string;
/**
 * Format datetime using dayjs
 */
export declare function formatDateTime(date: string | Date | null | undefined, format?: string): string;
/**
 * Format time using dayjs
 */
export declare function formatTime(date: string | Date | null | undefined, format?: string): string;
/**
 * Format relative time (e.g., "2 hours ago")
 */
export declare function formatRelative(date: string | Date | null | undefined): string;
/**
 * Format currency (BRL)
 */
export declare function formatCurrency(value: number | null | undefined, currency?: string): string;
/**
 * Format number with locale
 */
export declare function formatNumber(value: number | null | undefined, decimals?: number): string;
/**
 * Format percentage
 */
export declare function formatPercent(value: number | null | undefined, decimals?: number): string;
/**
 * Format phone number (Brazilian)
 */
export declare function formatPhone(phone: string | null | undefined): string;
/**
 * Format CPF
 */
export declare function formatCPF(cpf: string | null | undefined): string;
/**
 * Format CNPJ
 */
export declare function formatCNPJ(cnpj: string | null | undefined): string;
/**
 * Format duration in seconds to HH:MM:SS
 */
export declare function formatDuration(seconds: number | null | undefined): string;
/**
 * Truncate text with ellipsis
 */
export declare function truncate(text: string | null | undefined, length?: number): string;
/**
 * Debounce function
 */
export declare function debounce<T extends (...args: any[]) => any>(fn: T, delay: number): (...args: Parameters<T>) => void;
/**
 * Throttle function
 */
export declare function throttle<T extends (...args: any[]) => any>(fn: T, delay: number): (...args: Parameters<T>) => void;
/**
 * Deep clone object
 */
export declare function deepClone<T>(obj: T): T;
/**
 * Check if value is empty (null, undefined, empty string, empty array)
 */
export declare function isEmpty(value: any): boolean;
/**
 * Generate UUID v4
 */
export declare function uuid(): string;
/**
 * Sleep for ms milliseconds
 */
export declare function sleep(ms: number): Promise<void>;
export { dayjs };
//# sourceMappingURL=index.d.ts.map