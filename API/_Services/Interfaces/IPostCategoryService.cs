using API.Dtos;
using API.Helpers;

namespace API._Services.Interfaces
{
    public interface IPostCategoryService
    {
        Task<List<PostCategoryDTO>> GetAllPostCategories();
        Task<OperationResult> Add(PostCategoryDTO postCategoryDTO);
        Task<OperationResult> Update(PostCategoryDTO postCategoryDTO);
        Task<OperationResult> Delete(PostCategoryDTO postCategoryDTO);
    }
}