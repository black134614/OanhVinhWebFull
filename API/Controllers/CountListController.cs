using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API._Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
     [Route("api/[controller]")]
    [ApiController]
    public class CountListController : Controller
    {
        private readonly ICountListService _countListService;

        public CountListController(ICountListService countListService)
        {
            _countListService = countListService;
        }
        [HttpGet("CountListItem")]
        public async Task<IActionResult> GetCountListItem()
        {
            var data = await _countListService.CountList();
            return Ok(data);
        }
        
    }
}