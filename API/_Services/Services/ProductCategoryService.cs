using API._Repositories;
using API._Services.Interfaces;
using API.Dtos;
using API.Helpers;
using API.Models;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

namespace API._Services.Services
{
    public class ProductCategoryService : IProductCategoryService
    {
        private readonly IRepositoryAccessor _repositoryAccessor;
        private readonly IMapper _mapper;
        public ProductCategoryService(IRepositoryAccessor repositoryAccessor, IMapper mapper)
        {
            _repositoryAccessor = repositoryAccessor;
            _mapper = mapper;
        }

        public async Task<OperationResult> Add(ProductCategoryDTO productCategoryDTO)
        {
            productCategoryDTO.CreateTime = DateTime.Now;
            var productCategory = _mapper.Map<ProductCategory>(productCategoryDTO);
            try
            {
                _repositoryAccessor.ProductCategory.Add(productCategory);
                await _repositoryAccessor.SaveChangesAsync();
                return new OperationResult(true, "Thêm Loại Sản Phẩm Thành Công");
            }
            catch (System.Exception ex)
            {
                // TODO
                var mesage = ex.Message;
                return new OperationResult(false, "Thêm Loại Sản Phẩm Thất Bại, Xin Thử Lại...");
            }
        }

        public async Task<OperationResult> Delete(int productCategoryID)
        {
            var productCategory = _repositoryAccessor.ProductCategory.FindAll(x => x.ProductCategoryID == Convert.ToInt32(productCategoryID)).FirstOrDefault();
            if (productCategory != null)
            {
                _repositoryAccessor.ProductCategory.Remove(productCategory);
                await _repositoryAccessor.SaveChangesAsync();
                return new OperationResult(true, "Xóa Loại Sản Phẩm Thành Công");
            }
            return new OperationResult(false, "Xóa Loại Sản Phẩm Thất Bại,Vui lòng thử lại ....");
        }

        public async Task<List<ProductCategoryDTO>> GetProductCategores()
        {
            var data = await _repositoryAccessor.ProductCategory.FindAll()
                            .Select(x => new ProductCategoryDTO()
                            {
                                ProductCategoryID = x.ProductCategoryID,
                                Tittle = x.Tittle,
                                Status = x.Status,
                                Description = x.Description,
                                CreateBy = x.CreateBy,
                                CreateTime = x.CreateTime,
                                IsDelete = x.IsDelete,
                                Positon = x.Positon
                            })
                            .OrderBy(x => x.Positon)
                            .ToListAsync();
            return data;
        }

        public async Task<OperationResult> Update(ProductCategoryDTO productCategoryDTO)
        {
            var productCategory = _mapper.Map<ProductCategory>(productCategoryDTO);
            try
            {
                _repositoryAccessor.ProductCategory.Update(productCategory);
                await _repositoryAccessor.SaveChangesAsync();
                return new OperationResult(true, "Sửa Loại Sản Phẩm Thành Công");
            }
            catch (System.Exception ex)
            {
                // TODO
                var mesage = ex.Message;
                return new OperationResult(false, "Sửa Loại Sản Phẩm Thất Bại, Xin Thử Lại...");
            }
        }
    }
}