export interface UserLoginModel {
    email: string;
    password: string;
}

export class UserLogin implements UserLoginModel {
    constructor(public email: string, public password: string) {}
}
