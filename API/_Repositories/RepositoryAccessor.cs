using API.Data;

namespace API._Repositories
{
    public class RepositoryAccessor : IRepositoryAccessor
    {
        private DBContext _context;
        public RepositoryAccessor(DBContext context)
        {
            _context = context;
            //BLAttachmentType = new BLAttachmentTypeRepository(_context);
            // productRespository = new ProductRespository(_context);
        }

        //public IBLAttachmentTypeRepository BLAttachmentType { get; private set; }

        // public IProductRespository productRespository { get; private set; }

        public async Task<bool> SaveChangesAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}