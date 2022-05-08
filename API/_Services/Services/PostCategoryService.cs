using API._Repositories;
using API._Services.Interfaces;
using API.Dtos;
using API.Helpers;
using API.Models;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

namespace API._Services.Services
{
    public class PostCategoryService : IPostCategoryService
    {
        private readonly IRepositoryAccessor _repositoryAccessor;
        private readonly IMapper _mapper;
        public PostCategoryService(IRepositoryAccessor repositoryAccessor, IMapper mapper)
        {
            _repositoryAccessor = repositoryAccessor;
            _mapper = mapper;
        }

        public async Task<OperationResult> Add(PostCategoryDTO postCategoryDTO)
        {
            postCategoryDTO.CreateTime = DateTime.Now;
            var postCategory = _mapper.Map<PostCategory>(postCategoryDTO);
            if (postCategory != null)
            {
                _repositoryAccessor.PostCategory.Add(postCategory);
                await _repositoryAccessor.SaveChangesAsync();
                return new OperationResult(true, "Thêm thể loại bài viết thành công!");
            }
            return new OperationResult(false, "Thêm thể loại bài viết thất bại!");
        }

        public async Task<OperationResult> Delete(PostCategoryDTO postCategoryDTO)
        {
            var postCategory = _mapper.Map<PostCategory>(postCategoryDTO);
            if (postCategory != null)
            {
                _repositoryAccessor.PostCategory.Remove(postCategory);
                await _repositoryAccessor.SaveChangesAsync();
                return new OperationResult(true, "Xóa thể loại bài viết thành công!");
            }
            return new OperationResult(false, "Xóa thể loại bài viết thất bại!");
        }

        public async Task<List<PostCategoryDTO>> GetAllPostCategories()
        {
            var data = await _repositoryAccessor.PostCategory.FindAll()
                            .Select(x => new PostCategoryDTO()
                            {
                                PostCategoryID = x.PostCategoryID,
                                Description = x.Description,
                                Tittle = x.Tittle,
                                Positon = x.Positon,
                                Status = x.Status,
                                IsDelete = x.IsDelete,
                                CreateTime = x.CreateTime,
                                CreateBy = x.CreateBy
                            }).ToListAsync();
            return data;
        }

        public async Task<OperationResult> Update(PostCategoryDTO postCategoryDTO)
        {
            var postCategory = _mapper.Map<PostCategory>(postCategoryDTO);
            if (postCategory != null)
            {
                _repositoryAccessor.PostCategory.Update(postCategory);
                await _repositoryAccessor.SaveChangesAsync();
                return new OperationResult(true, "Sửa thể loại bài viết thành công!");
            }
            return new OperationResult(false, "Sửa thể loại bài viết thất bại!");
        }
    }
}