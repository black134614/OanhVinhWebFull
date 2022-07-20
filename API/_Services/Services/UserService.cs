using API._Repositories;
using API._Services.Interfaces;
using API.Dtos;
using API.Helpers;
using API.Helpers.Utilities;
using API.Models;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

namespace API._Services.Services
{
    public class UserService : IUserService
    {
        private readonly IRepositoryAccessor _repositoryAccessor;
        private readonly IMapper _mapper;
        public UserService(IRepositoryAccessor repositoryAccessor, IMapper mapper)
        {
            _repositoryAccessor = repositoryAccessor;
            _mapper = mapper;
        }

        public async Task<List<UserDTO>> GetUserList(string username)
        {
            var data = await _repositoryAccessor.User.FindAll()
                        .Select(x => new UserDTO()
                        {
                            UserName = x.UserName,
                            Password = x.Password,
                            FullName = x.FullName,
                            CreateTime = x.CreateTime,
                            IsDelete = x.IsDelete,
                            Avatar = x.Avatar,
                            UserDetail = x.UserDetail,
                            PhoneNumber = x.PhoneNumber
                        }).ToListAsync();
            if (!string.IsNullOrEmpty(username))
            {
                data = data.Where(x => x.UserName.Contains(username)).ToList();
            }
            return data;
        }
        public async Task<OperationResult> Update(UserDTO userDTO)
        {
            userDTO.CreateTime = DateTime.Now;


            var userMapping = _mapper.Map<User>(userDTO);

            try
            {
                _repositoryAccessor.User.Update(userMapping);
                await _repositoryAccessor.SaveChangesAsync();
                return new OperationResult(true, "Sửa Thông Tin Thành Công");
            }
            catch (System.Exception ex)
            {
                return new OperationResult(false, "Sửa Thông Tin Thất bại");
            }
        }
    }
}