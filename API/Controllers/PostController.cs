using System.Security.Claims;
using API._Services.Interfaces;
using API.Dtos;
using API.Helpers.Params;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly IPostService _postService;

        public PostController(IPostService postService)
        {
            _postService = postService;
        }

        [HttpGet("GetAllPosts")]
        public async Task<IActionResult> GetAllPosts([FromQuery] PostParams postParams) => Ok(await _postService.GetAllPosts(postParams));

        [HttpPost("Add")]
        public async Task<IActionResult> Add([FromBody] PostDTO postDTO)
        {
            postDTO.CreateBy = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            var data = await _postService.Add(postDTO);
            return Ok(data);
        }

        [HttpPut("Update")]
        public async Task<IActionResult> Update([FromBody] PostDTO postDTO)
        {
            postDTO.CreateBy = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            var data = await _postService.Update(postDTO);
            return Ok(data);
        }

        [HttpDelete("Delete")]
        public async Task<IActionResult> Delete([FromBody] PostDTO postDTO)
        {
            var data = await _postService.Delete(postDTO);
            return Ok(data);
        }
    }
}
