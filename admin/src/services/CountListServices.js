import React, { Component } from 'react'
import { baseService } from './baseService'

export class CountListServices extends baseService {
    constructor() {
        super();
    }
    countList = () => {
        return this.get("CountList/CountListItem");
    }
}

export const countListServices = new CountListServices();