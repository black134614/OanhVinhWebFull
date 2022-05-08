using API._Repositories.Interfaces;
using API.Data;
using API.Models;

namespace API._Repositories.Repositories
{
    public class PostRepository : Repository<Post>, IPostRepository
    {
        public PostRepository(DBContext context) : base(context)
        {
        }
    }
}