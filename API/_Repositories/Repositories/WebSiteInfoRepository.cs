using API._Repositories.Interfaces;
using API.Data;
using API.Models;

namespace API._Repositories.Repositories
{
    public class WebSiteInfoRepository : Repository<WebsiteInfo>, IWebsiteInfoRepository
    {
        public WebSiteInfoRepository(DBContext context) : base(context)
        {
        }
    }
}
