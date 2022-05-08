using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using API._Services.Interfaces;
using API.Helpers.Params;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;
        private readonly IConfiguration _config;
        private readonly IMapper _mapper;
        public AuthController(IAuthService authService, IConfiguration config, IMapper mapper)
        {
            _authService = authService;
            _config = config;
            _mapper = mapper;
        }
        [HttpPost("Login")]
        public async Task<IActionResult> Login([FromBody] LoginParams userForLoginDto)
        {
            var userFromRepo = await _authService.Login(userForLoginDto);
            if (userFromRepo == null)
                return Unauthorized();
            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, userFromRepo.UserName),
                new Claim(ClaimTypes.Name, userFromRepo.UserName)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8
                .GetBytes(_config.GetSection("AppSettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };

            var tokenHandler = new JwtSecurityTokenHandler();

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return Ok(new
            {
                token = tokenHandler.WriteToken(token),
                user = userFromRepo
            });
        }
    }
}
