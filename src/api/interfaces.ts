export interface UserModel {
    id?: string;
    name: string | null;
    mail?: string | null;
    password: string | null;
    passwordconfirm? : string | null;
    active?: boolean;
    createdAt?: string | null;
}