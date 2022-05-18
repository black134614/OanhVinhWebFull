
using API._Repositories.Interfaces;

namespace API._Repositories
{
    public interface IRepositoryAccessor
    {
        IOwnerRepository Owner {get;}
        IWebsiteActiveImageRepository WebsiteActiveImage {get;}
        IWebsiteInfoRepository WebsiteInfo {get;}
        ICustomerRepository Customer { get; }
        IUserRepository User { get; }
        IProductCategoryRepository ProductCategory { get; }
        IProductRepository Product { get; }
        IPostCategoryRepository PostCategory { get; }
        IPostRepository Posts { get; }

        Task<bool> SaveChangesAsync();
    }
}