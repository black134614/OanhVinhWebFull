import {baseService} from './baseService'

export class UserServices extends baseService {
    constructor() {
        super();
    }
    getUserInfo =   (username) => {
        return this.get(`User/GetAllUsers?username=${username}`,username)
    }
    updateUser = (user) =>{
        return this.put('User/Update', user)
    }
}

export const userServices = new UserServices();
