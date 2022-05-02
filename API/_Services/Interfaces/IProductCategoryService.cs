using API.Dtos;
using API.Helpers;

namespace API._Services.Interfaces
{
    public interface IProductCategoryService
    {
        Task<List<ProductCategoryDTO>> GetProductCategores();

        Task<OperationResult> Add(ProductCategoryDTO productCategoryDTO, string createBy);
        Task<OperationResult> Update(ProductCategoryDTO productCategoryDTO, string createBy);
        Task<OperationResult> Delete(int productCategoryID);

    }
}