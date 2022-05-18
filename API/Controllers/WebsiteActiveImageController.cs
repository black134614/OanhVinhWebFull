using API._Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WebsiteActiveImageController : ControllerBase
    {
        private readonly IWebsiteActiveImageService _webSiteActiveImageService;

        public WebsiteActiveImageController(IWebsiteActiveImageService webSiteActiveImageService)
        {
            _webSiteActiveImageService = webSiteActiveImageService;
        }
        [HttpGet("GetWebsiteActiveImages")]
        public async Task<IActionResult> GetWebsiteActiveImage()
        {
            var data = await _webSiteActiveImageService.GetWebsiteActiveImages();
            return Ok(data);
        }
    }
}
