using API._Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    
    public class OwnerController : ControllerBase
    {
        private readonly IOwnerService _ownerService;
        public OwnerController(IOwnerService ownerService)
        {
            _ownerService = ownerService;
        }
        [HttpGet("GetOwners")]
        public async Task<IActionResult> GetSiteOwner()
        {
            var data = await _ownerService.GetSiteOwners();
            return Ok(data);
        }
    }
}
