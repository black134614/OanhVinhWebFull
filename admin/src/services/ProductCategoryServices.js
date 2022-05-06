import { baseService } from './baseService'

export class ProductCategoryService extends baseService {
    constructor() {
        super();
    }
    addProductCategory = (userName, ProductCategory) => {
        return this.post(`ProductCategory/Add?createBy=${userName}`, ProductCategory);
    }
    getAllProductCategory = () => {
        return this.get("ProductCategory/GetAllProductCategories");
    }
    deleteProductCategory = (productCategoryID) => {
        return this.delete("ProductCategory/Delete/" + productCategoryID);
    }
    updateProductCategory = (ProductCategory) =>{
        return this.put('ProductCategory/Update', ProductCategory)
    }
}

export const productCategoryServices = new ProductCategoryService();