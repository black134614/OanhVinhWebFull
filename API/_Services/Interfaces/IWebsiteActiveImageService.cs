using API.Dtos;

namespace API._Services.Interfaces
{
    public interface IWebsiteActiveImageService
    {
        Task<List<WebsiteActiveImageDTO>> GetWebsiteActiveImages();
    }
}
