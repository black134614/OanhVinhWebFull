
using API._Repositories.Interfaces;

namespace API._Repositories
{
    public interface IRepositoryAccessor
    {
        ICustomerRepository Customer { get; }
        IUserRepository User { get; }
        Task<bool> SaveChangesAsync();
    }
}