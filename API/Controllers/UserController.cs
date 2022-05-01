using API._Services.Interfaces;
using API.Dtos;
using API.Helpers;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }
        [HttpGet("GetAllUsers")]
        public async Task<IActionResult> GetAllUsers([FromQuery] string username)
        {
            var data = await _userService.GetUserList(username);
            return Ok(data);
        }
        [HttpPut("Update")]
        public async Task<IActionResult> Update([FromBody] UserDTO userDTO)
        {
            var data = await _userService.Update(userDTO);
            return Ok(data);
        }
    }
}
