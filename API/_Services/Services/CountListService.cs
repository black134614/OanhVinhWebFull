using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API._Repositories;
using API._Services.Interfaces;
using API.Dtos;
using Microsoft.EntityFrameworkCore;

namespace API._Services.Services
{
    public class CountListService : ICountListService
    {
        private readonly IRepositoryAccessor _repositoryAccessor;

        public CountListService(IRepositoryAccessor repositoryAccessor)
        {
            _repositoryAccessor = repositoryAccessor;
        }

        public async Task<CountListDTO> CountList()
        {
            var item = new CountListDTO();
            item.CountPostCategory = _repositoryAccessor.PostCategory.FindAll().ToList().Count();
            item.CountPosts = _repositoryAccessor.Posts.FindAll().ToList().Count();
            item.CountProductCategory = _repositoryAccessor.ProductCategory.FindAll().ToList().Count();
            item.CountProducts = _repositoryAccessor.Product.FindAll().ToList().Count();
            return item;
        }
    }
}