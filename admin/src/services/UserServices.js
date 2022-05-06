import React, { Component } from 'react'
import baseService from './baseService'
class UserServices extends baseService {
    constructor() {
        super();
    }
    getUserInfo = (username) => {
        return this.get(`User/GetAllUsers?username=${username}`)
    }
}

export const userServices = new UserServices();
