import { baseService } from './baseService'

export class ProductService extends baseService {
    constructor() {
        super();
    }
    getAllProduct = () => {
        return this.get('Product/GetAllProducts')
    }
    addProduct = (product) => {
        return this.post('Product/Add', product)
    }
    deleteProduct = (product) =>{
        return this.delete('Product/Delete', product)
    }
    updateProduct = (product) =>{
        return this.put('Product/Update', product)
    }
}

export const productService = new ProductService();
