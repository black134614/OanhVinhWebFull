
using API._Repositories.Interfaces;

namespace API._Repositories
{
    public interface IRepositoryAccessor
    {
        ICustomerRepository Customer { get; }
        IUserRepository User { get; }
        IProductCategoryRepository ProductCategory { get; }
        IProductRepository Product { get; }
        Task<bool> SaveChangesAsync();
    }
}