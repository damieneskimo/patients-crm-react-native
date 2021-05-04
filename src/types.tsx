export type User = {
    email: string;
    password?: string;
    prevState?: null,
    token?: string
}

export type AuthContent = {
    user: User | null,
    setUser: (user: User) => void,
    error: string | null,
    login: (email: string, password: string) => void,
    logout: () => void
}

export type RootStackParamList = {
    Login: undefined;
    Notes: { patientId: string }
    PatientsList: { page: string, keywords: string} | undefined
};