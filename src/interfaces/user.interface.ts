export interface IUser {
    firstname: string;
    lastname: string;
    email: string;
    emailVerified: boolean;
    image?: string | null;
    age?: number | null;
    username: string;
    password: string;
}