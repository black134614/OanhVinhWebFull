using API.Dtos;
using API.Helpers;
using API.Helpers.Params;

namespace API._Services.Interfaces
{
    public interface IAuthService
    {
        Task<UserDTO> Login(LoginParams param);
    }
}