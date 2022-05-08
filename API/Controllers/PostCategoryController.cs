using System.Security.Claims;
using API._Services.Interfaces;
using API.Dtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostCategoryController : ControllerBase
    {
        private readonly IPostCategoryService _postCategoryService;

        public PostCategoryController(IPostCategoryService postCategoryService)
        {
            _postCategoryService = postCategoryService;
        }
        [HttpGet("GetAllPostCategories")]
        public async Task<IActionResult> GetAllPostCategories() => Ok(await _postCategoryService.GetAllPostCategories());

        [HttpPost("Add")]
        public async Task<IActionResult> Add([FromBody] PostCategoryDTO postCategoryDTO)
        {
            // postCategoryDTO.CreateBy = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            var data = await _postCategoryService.Add(postCategoryDTO);
            return Ok(data);
        }

        [HttpPut("Update")]
        public async Task<IActionResult> Update([FromBody] PostCategoryDTO postCategoryDTO)
        {
            var data = await _postCategoryService.Update(postCategoryDTO);
            return Ok(data);
        }

        [HttpDelete("Delete")]
        public async Task<IActionResult> Delete([FromBody] PostCategoryDTO postCategoryDTO)
        {
            var data = await _postCategoryService.Delete(postCategoryDTO);
            return Ok(data);
        }
    }
}
