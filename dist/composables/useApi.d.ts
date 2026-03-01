import { AxiosInstance, AxiosRequestConfig } from 'axios';
export interface ApiResponse<T = any> {
    data?: T;
    error?: string;
    status?: number;
}
export interface UseApiOptions {
    baseURL?: string;
    tokenKey?: string;
    onUnauthorized?: () => void;
}
/**
 * Create an API client instance
 */
export declare function createApiClient(options?: UseApiOptions): AxiosInstance;
/**
 * Composable for API requests with loading state
 */
export declare function useApi<T = any>(client?: AxiosInstance): {
    loading: import('vue').Ref<boolean, boolean>;
    error: import('vue').Ref<string | null, string | null>;
    data: [T | null] extends [import('vue').Ref<any, any>] ? import('@vue/shared').IfAny<import('vue').Ref<any, any> & T, import('vue').Ref<import('vue').Ref<any, any> & T, import('vue').Ref<any, any> & T>, import('vue').Ref<any, any> & T> : import('vue').Ref<import('vue').UnwrapRef<T> | null, T | import('vue').UnwrapRef<T> | null>;
    request: <R = T>(config: AxiosRequestConfig) => Promise<ApiResponse<R>>;
    get: <R = T>(url: string, config?: AxiosRequestConfig) => Promise<ApiResponse<R>>;
    post: <R = T>(url: string, body?: any, config?: AxiosRequestConfig) => Promise<ApiResponse<R>>;
    put: <R = T>(url: string, body?: any, config?: AxiosRequestConfig) => Promise<ApiResponse<R>>;
    patch: <R = T>(url: string, body?: any, config?: AxiosRequestConfig) => Promise<ApiResponse<R>>;
    del: <R = T>(url: string, config?: AxiosRequestConfig) => Promise<ApiResponse<R>>;
    client: AxiosInstance;
};
//# sourceMappingURL=useApi.d.ts.map