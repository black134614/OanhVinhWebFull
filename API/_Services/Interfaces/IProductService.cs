using API.Dtos;
using API.Helpers;
using API.Helpers.Params;

namespace API._Services.Interfaces
{
    public interface IProductService
    {
        Task<List<ProductDTO>> GetAllProducts(ProductParams productParams);
        Task<OperationResult> Add(ProductDTO productDTO);
        Task<OperationResult> Update(ProductDTO productDTO);
        Task<OperationResult> Delete(ProductDTO productDTO);
    }
}