export interface UserRegisterModel {
    username: string;
    email: string;
    password: string;
    cloudsync: boolean;
}

export class UserRegister implements UserRegisterModel {
    constructor(public username: string, public email: string, public password: string, public cloudsync: boolean) {}
}
