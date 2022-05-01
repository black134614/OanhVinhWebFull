using API.Dtos;
using API.Helpers;

namespace API._Services.Interfaces
{
    public interface IUserService
    {
        Task<List<UserDTO>> GetUserList(string username);
        Task<OperationResult> Update(UserDTO userDTO);
    }
}