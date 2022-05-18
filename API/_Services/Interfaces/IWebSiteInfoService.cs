using API.Dtos;

namespace API._Services.Interfaces
{
    public interface IWebSiteInfoService
    {
        Task<WebsiteInfoDTO> GetWebsiteInfos();
    }
}
