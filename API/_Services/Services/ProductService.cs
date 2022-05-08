using API._Repositories;
using API._Services.Interfaces;
using API.Dtos;
using API.Helpers;
using API.Helpers.Params;
using API.Models;
using AutoMapper;
using LinqKit;
using Microsoft.EntityFrameworkCore;

namespace API._Services.Services
{
    public class ProductService : IProductService
    {
        private readonly IRepositoryAccessor _repositoryAccessor;
        private readonly IMapper _mapper;

        public ProductService(IRepositoryAccessor repositoryAccessor, IMapper mapper)
        {
            _repositoryAccessor = repositoryAccessor;
            _mapper = mapper;
        }

        public async Task<OperationResult> Add(ProductDTO productDTO)
        {
            productDTO.CreateTime = DateTime.Now;
            var product = _mapper.Map<Product>(productDTO);
            if (product != null)
            {
                _repositoryAccessor.Product.Add(product);
                await _repositoryAccessor.SaveChangesAsync();
                return new OperationResult(true, "Thêm sản phẩm thành công!");
            }
            return new OperationResult(false, "Thêm sản phẩm thất bại!");
        }

        public async Task<OperationResult> Delete(ProductDTO productDTO)
        {
            var product = _mapper.Map<Product>(productDTO);
            if (product != null)
            {
                _repositoryAccessor.Product.Remove(product);
                await _repositoryAccessor.SaveChangesAsync();
                return new OperationResult(true, "Xóa sản phẩm thành công!");
            }
            return new OperationResult(false, "Xóa sản phẩm thất bại...");
        }

        public async Task<List<ProductDTO>> GetAllProducts(ProductParams productParams)
        {
            var layoutPred = PredicateBuilder.New<Product>(true);
            if (!string.IsNullOrEmpty(productParams.productName))
            {
                layoutPred.And(x => x.ProductName.Contains(productParams.productName));
            }

            var data = await _repositoryAccessor.Product.FindAll(layoutPred)
                        .Join(_repositoryAccessor.ProductCategory.FindAll(),
                        x => x.ProductCategoryID,
                        y => y.ProductCategoryID,
                        (x, y) => new { Product = x, ProductCategory = y })
                        .Select(x => new ProductDTO()
                        {
                            ProductID = x.Product.ProductID,
                            ProductName = x.Product.ProductName,
                            ProductImages = x.Product.ProductImages,
                            ProductDescription = x.Product.ProductDescription,
                            Status = x.Product.Status,
                            CreateBy = x.Product.CreateBy,
                            CreateTime = x.Product.CreateTime,
                            IsDelete = x.Product.IsDelete,
                            ProductALTSeo = x.Product.ProductALTSeo,
                            ProductDetail = x.Product.ProductDetail,
                            UpdateTime = x.Product.UpdateTime,
                            ProductCategoryName = x.ProductCategory.Tittle,
                            ProductCategoryID = x.ProductCategory.ProductCategoryID
                        }).ToListAsync();

            if (!string.IsNullOrEmpty(productParams.productCategoryID))
            {
                data = data.Where(x => x.ProductCategoryID == Convert.ToInt32(productParams.productCategoryID)).ToList();
            }
            return data;
        }

        public async Task<OperationResult> Update(ProductDTO productDTO)
        {
            productDTO.UpdateTime = DateTime.Now;
            var product = _mapper.Map<Product>(productDTO);
            if (product != null)
            {
                _repositoryAccessor.Product.Update(product);
                await _repositoryAccessor.SaveChangesAsync();
                return new OperationResult(true, "Sửa sản phẩm thành công!");
            }
            return new OperationResult(false, "Sửa sản phẩm thất bại...Vui lòng thử lại");
        }
    }
}