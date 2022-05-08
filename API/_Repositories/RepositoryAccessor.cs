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
            ProductCategory = new ProductCategoryRepository(_context);
            Product = new ProductRepository(_context);
            PostCategory = new PostCategoryRepository(_context);
            Posts = new PostRepository(_context);
        }


        public ICustomerRepository Customer { get; private set; }
        public IUserRepository User { get; private set; }
        public IProductCategoryRepository ProductCategory { get; private set; }

        public IProductRepository Product { get; private set; }

        public IPostCategoryRepository PostCategory { get; private set; }

        public IPostRepository Posts { get; private set; }

        public async Task<bool> SaveChangesAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}