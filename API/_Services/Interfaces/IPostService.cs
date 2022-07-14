using API.Dtos;
using API.Helpers;
using API.Helpers.Params;

namespace API._Services.Interfaces
{
    public interface IPostService
    {
        Task<List<PostDTO>> GetAllPosts(PostParams postParams);
        Task<OperationResult> Add(PostDTO postDTO);
        Task<OperationResult> Update(PostDTO postDTO);
        Task<OperationResult> Delete(PostDTO postDTO);
    }
}