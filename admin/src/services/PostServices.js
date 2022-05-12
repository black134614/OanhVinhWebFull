import { baseService } from './baseService'

export class PostService extends baseService {
    constructor() {
        super();
    }
    getAllPost = () => {
        return this.get('Post/GetAllPosts')
    }
    addPost = (Post) => {
        return this.post('Post/Add', Post)
    }
    deletePost = (Post) =>{
        return this.delete('Post/Delete', Post)
    }
    updatePost = (Post) =>{
        return this.put('Post/Update', Post)
    }
}

export const postService = new PostService();
