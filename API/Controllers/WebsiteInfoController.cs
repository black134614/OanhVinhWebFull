using API._Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WebsiteInfoController : ControllerBase
    {
        private readonly IWebSiteInfoService _webSiteInfoService;

        public WebsiteInfoController(IWebSiteInfoService webSiteInfoService)
        {
            _webSiteInfoService = webSiteInfoService;
        }
        [HttpGet("GetWebSiteInfos")]
        public async Task<IActionResult> GetWebSiteInfo()
        {
            var data = await _webSiteInfoService.GetWebsiteInfos();
            return Ok(data);
        }
    }
}
