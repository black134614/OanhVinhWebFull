using API._Repositories.Interfaces;
using API.Data;
using API.Models;

namespace API._Repositories.Repositories
{
    public class WebsiteActiveImageRepository : Repository<WebsiteActiveImage>, IWebsiteActiveImageRepository
    {
        public WebsiteActiveImageRepository(DBContext context) : base(context)
        {
        }
    }
}
