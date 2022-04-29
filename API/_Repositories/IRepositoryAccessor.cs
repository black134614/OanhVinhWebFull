
namespace API._Repositories
{
    public interface IRepositoryAccessor
    {
        // IProductRespository productRespository { get; }
        
        Task<bool> SaveChangesAsync();
    }
}