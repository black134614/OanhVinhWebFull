using API._Repositories;
using API._Services.Interfaces;
using API.Dtos;
using Microsoft.EntityFrameworkCore;

namespace API._Services.Services
{
    public class WebSiteInfoService : IWebSiteInfoService
    {
        private readonly IRepositoryAccessor _repositoryAccessor;

        public WebSiteInfoService(IRepositoryAccessor repositoryAccessor)
        {
            _repositoryAccessor = repositoryAccessor;
        }

        public async Task<WebsiteInfoDTO> GetWebsiteInfos()
        {
            var data = await _repositoryAccessor.WebsiteInfo
            .FindAll(x=>x.Status ==true).Select(x => new WebsiteInfoDTO()
            {
               WebsiteID = x.WebsiteID,
                WebsiteName = x.WebsiteName,
                WebsitePhoneNumber = x.WebsitePhoneNumber,
                Address = x.Address,
                Email = x.Email,
                GoogleMap = x.GoogleMap,
                WebSiteAbout = x.WebSiteAbout,
                WebsiteIcon = x.WebsiteIcon,
                WebsiteVideoIntro = x.WebsiteVideoIntro,
                WebsiteContactNote = x.WebsiteContactNote,
                Status = x.Status,
                IsDelete = x.IsDelete,
                CreateTime = x.CreateTime,
                UpdateTime = x.UpdateTime,
                CreateBy = x.CreateBy
            })
            .FirstOrDefaultAsync();
            return data;
        }
    }
}
