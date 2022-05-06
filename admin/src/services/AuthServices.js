import { baseService } from './baseService'

export class AuthServices extends baseService {
    constructor() {
        super();
    }
    signin = (userLogin) => {
        return this.post("Auth/Login", userLogin);
    }
}

export const authServices = new AuthServices();