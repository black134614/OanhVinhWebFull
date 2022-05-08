import Axios from "axios"
import { DOMAIN, TOKEN } from "../util/constants/settingSystem"

export class baseService {
    put = (url, model) => {
        return Axios({
            url: `${DOMAIN}/${url}`,
            method: 'PUT',
            data: model,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)} //JWT
        })
    }
    post = (url, model) => {
        return Axios({
            url: `${DOMAIN}/${url}`,
            method: 'POST',
            data: model,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)} //JWT
        })
    }


    get = (url, model) => {
        return Axios({
            url: `${DOMAIN}/${url}`,
            method: 'GET',
            data: model,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)} //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
        })
    }

    delete = (url, model) => {
        return Axios({
            url: `${DOMAIN}/${url}`,
            method: 'DELETE',
            data: model,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)} //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
        })
    }
}