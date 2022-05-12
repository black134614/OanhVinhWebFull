import { baseService } from './baseService'

export class PostCategoryService extends baseService {
    constructor() {
        super();
    }
    addPostCategory = (PostCategory) => {
        return this.post('PostCategory/Add', PostCategory);
    }
    getAllPostCategory = () => {
        return this.get("PostCategory/GetAllPostCategories");
    }
    deletePostCategory = (PostCategory) => {
        return this.delete("PostCategory/Delete", PostCategory);
    }
    updatePostCategory = (PostCategory) => {
        return this.put('PostCategory/Update', PostCategory)
    }
}

export const postCategoryServices = new PostCategoryService();