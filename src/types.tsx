export type User = {
    email: string;
    password?: string;
    prevState?: null,
    token?: string
}

export type Patient = {
    id: number;
    name: string;
    gender: string;
    email: string;
    mobile: string;
}

export type Note = {
    id: number,
    content: string,
    created_at: string
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
    PatientDetail: { id: string }
};