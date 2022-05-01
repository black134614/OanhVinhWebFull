using API._Repositories.Interfaces;
using API._Repositories.Repositories;
using API.Data;

namespace API._Repositories
{
    public class RepositoryAccessor : IRepositoryAccessor
    {
        private DBContext _context;
        public RepositoryAccessor(DBContext context)
        {
            _context = context;
            Customer = new CustomerRepository(_context);
            User = new UserRepository(_context);
        }


        public ICustomerRepository Customer { get; private set; }
        public IUserRepository User { get; private set; }


        public async Task<bool> SaveChangesAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}