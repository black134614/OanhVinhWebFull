
using API._Repositories.Interfaces;

namespace API._Repositories
{
    public interface IRepositoryAccessor
    {
        ICustomerRepository Customer { get; }
        IUserRepository User { get; }
        IProductCategoryRepository ProductCategory { get; }
        IProductRepository Product { get; }
        IPostCategoryRepository PostCategory { get; }
        IPostRepository Post { get; }

        Task<bool> SaveChangesAsync();
    }
}