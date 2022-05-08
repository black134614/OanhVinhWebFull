import { baseService } from './baseService'

export class ProductCategoryService extends baseService {
    constructor() {
        super();
    }
    addProductCategory = (ProductCategory) => {
        return this.post('ProductCategory/Add', ProductCategory);
    }
    getAllProductCategory = () => {
        return this.get("ProductCategory/GetAllProductCategories");
    }
    deleteProductCategory = (productCategory) => {
        return this.delete("ProductCategory/Delete  " , productCategory);
    }
    updateProductCategory = (ProductCategory) =>{
        return this.put('ProductCategory/Update', ProductCategory)
    }
}

export const productCategoryServices = new ProductCategoryService();