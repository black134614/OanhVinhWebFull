using API._Repositories;
using API._Services.Interfaces;
using API.Dtos;
using API.Helpers;
using API.Helpers.Params;
using Microsoft.EntityFrameworkCore;

namespace API._Services.Services
{
    public class AuthService : IAuthService
    {
        private readonly IRepositoryAccessor _repositoryAccessor;

        public AuthService(IRepositoryAccessor repositoryAccessor)
        {
            _repositoryAccessor = repositoryAccessor;
        }

        public async Task<UserDTO> Login(LoginParams param)
        {
            if (string.IsNullOrEmpty(param.Username)) return null;
            if (string.IsNullOrEmpty(param.Password)) return null;

            var user = await _repositoryAccessor.User.
                    FindAll(x => x.UserName == param.Username &&
                            x.Password == param.Password)
                            .Select(x => new UserDTO()
                            {
                                UserName = x.UserName,
                                Password = x.Password,
                                Avatar = x.Avatar
                            })
                            .FirstOrDefaultAsync();
            return user;

        }
    }
}