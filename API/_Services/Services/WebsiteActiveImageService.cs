using API._Repositories;
using API._Services.Interfaces;
using API.Dtos;
using Microsoft.EntityFrameworkCore;

namespace API._Services.Services
{
    public class WebsiteActiveImageService : IWebsiteActiveImageService
    {
        private readonly IRepositoryAccessor _repositoryAccessor;

        public WebsiteActiveImageService(IRepositoryAccessor repositoryAccessor)
        {
            _repositoryAccessor = repositoryAccessor;
        }

        public async Task<List<WebsiteActiveImageDTO>> GetWebsiteActiveImages()
        {
            var data = await _repositoryAccessor.WebsiteActiveImage
            .FindAll().Select(x => new WebsiteActiveImageDTO()
            {
                 WebsiteActiveImageID = x.WebsiteActiveImageID,
                ALTSEO = x.ALTSEO,
                LinkToDetail = x.LinkToDetail,
                WebsiteID = x.WebsiteID,
                Images = x.Images
            })
            .ToListAsync();
            return data;
        }

        public Task<List<WebsiteActiveImageDTO>> GetWebsiteInfos()
        {
            throw new NotImplementedException();
        }
    }
}
