using API._Repositories;
using API._Services.Interfaces;
using API.Dtos;
using API.Helpers;
using API.Models;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

namespace API._Services.Services
{
    public class UserService : IUserService
    {
        private readonly IRepositoryAccessor _repositoryAccessor;
        private readonly IMapper _mapper;
        public UserService(IRepositoryAccessor repositoryAccessor)
        {
            _repositoryAccessor = repositoryAccessor;
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
                            PhoneNumber = x.PhoneNumber
                        }).ToListAsync();
            if (!string.IsNullOrEmpty(username))
            {
                data = data.Where(x => x.UserName == username).ToList();
            }
            return data;
        }
        public async Task<OperationResult> Update(UserDTO userDTO)
        {
            // var check = _repositoryAccessor.User.FindAll(x => x.UserName == userDTO.UserName).FirstOrDefault();

            // if (check == null)
            //     return new OperationResult(false, "Không sửa được");

            var user = new User()
            {
                FullName = userDTO.FullName,
                Password = userDTO.Password,
                IsDelete = true,
                CreateTime = true
            };
            if (user != null)
            {
                _repositoryAccessor.User.Update(user);
                await _repositoryAccessor.SaveChangesAsync();
                return new OperationResult(true, "Sửa Thông Tin Thành Công");
            }
            return new OperationResult(false, "Sửa Thông Tin Thất bại");
        }
    }
}