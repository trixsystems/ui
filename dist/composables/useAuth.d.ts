export interface User {
    id: string;
    email: string;
    name: string;
    role: string;
}
export interface LoginCredentials {
    email: string;
    password: string;
}
export interface LoginResponse {
    access_token: string;
    refresh_token: string;
    user: {
        id: string;
        email: string;
        full_name: string;
    };
    app_access?: {
        app_name: string;
        role: string;
        permissions: string[];
    };
}
export interface UseAuthOptions {
    authUrl?: string;
    appName: string;
    tokenKey?: string;
    refreshTokenKey?: string;
    userKey?: string;
    onLogout?: () => void;
}
/**
 * Composable for unified authentication
 */
export declare function useAuth(options: UseAuthOptions): {
    user: import('vue').Ref<{
        id: string;
        email: string;
        name: string;
        role: string;
    } | null, User | {
        id: string;
        email: string;
        name: string;
        role: string;
    } | null>;
    accessToken: import('vue').Ref<string | null, string | null>;
    refreshToken: import('vue').Ref<string | null, string | null>;
    loading: import('vue').Ref<boolean, boolean>;
    isAuthenticated: import('vue').ComputedRef<boolean>;
    isAdmin: import('vue').ComputedRef<boolean>;
    isSupervisor: import('vue').ComputedRef<boolean>;
    initialize: () => Promise<void>;
    login: (credentials: LoginCredentials) => Promise<{
        success: boolean;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
    }>;
    logout: () => Promise<void>;
    refreshAccessToken: () => Promise<string>;
    fetchCurrentUser: () => Promise<void>;
    changePassword: (currentPassword: string, newPassword: string) => Promise<{
        success: boolean;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
    }>;
};
//# sourceMappingURL=useAuth.d.ts.map