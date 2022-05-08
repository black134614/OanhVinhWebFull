using API._Repositories;
using API._Services.Interfaces;
using API.Dtos;
using API.Helpers;
using API.Helpers.Params;
using API.Models;
using AutoMapper;
using LinqKit;
using Microsoft.EntityFrameworkCore;

namespace API._Services.Services
{
    public class PostService : IPostService
    {
        private readonly IRepositoryAccessor _repositoryAccessor;
        private readonly IMapper _mapper;
        public PostService(IRepositoryAccessor repositoryAccessor, IMapper mapper)
        {
            _repositoryAccessor = repositoryAccessor;
            _mapper = mapper;
        }

        public async Task<OperationResult> Add(PostDTO postDTO)
        {
            postDTO.CreateTime = DateTime.Now;
            var post = _mapper.Map<Post>(postDTO);
            if (post != null)
            {
                _repositoryAccessor.Post.Add(post);
                await _repositoryAccessor.SaveChangesAsync();
                return new OperationResult(true, "Thêm bài viết thành công!");
            }
            return new OperationResult(false, "Thêm bài viết thất bại!");
        }

        public async Task<OperationResult> Delete(PostDTO postDTO)
        {
            var post = _mapper.Map<Post>(postDTO);
            if (post != null)
            {
                _repositoryAccessor.Post.Remove(post);
                await _repositoryAccessor.SaveChangesAsync();
                return new OperationResult(true, "Xóa bài viết thành công!");
            }
            return new OperationResult(false, "Xóa bài viết thất bại....");
        }

        public async Task<List<PostDTO>> GetAllPosts(PostParams postParams)
        {
            var layoutPred = PredicateBuilder.New<Post>(true);
            if (!string.IsNullOrEmpty(postParams.PostName))
            {
                layoutPred.And(x => x.PostTitle.Contains(postParams.PostName));
            }

            var data = await _repositoryAccessor.Post.FindAll()
                        .Join(_repositoryAccessor.PostCategory.FindAll(),
                        x => x.PostCategoryID,
                        y => y.PostCategoryID,
                        (x, y) => new { Post = x, PostCategory = y })
                        .Select(x => new PostDTO()
                        {
                            PostID = x.Post.PostID,
                            PostTitle = x.Post.PostTitle,
                            PostDescription = x.Post.PostDescription,
                            CreateBy = x.Post.CreateBy,
                            CreateTime = x.Post.CreateTime,
                            IsDelete = x.Post.IsDelete,
                            PostALTSEO = x.Post.PostALTSEO,
                            PostDetail = x.Post.PostDetail,
                            PostImages = x.Post.PostImages,
                            Status = x.Post.Status,
                            PostCategoryID = x.Post.PostCategoryID,
                            PostCategoryName = x.PostCategory != null ? x.PostCategory.Tittle : "",
                            UpdateTime = x.Post.UpdateTime,
                            TagConnectID = null,
                        }).ToListAsync();
            if (!string.IsNullOrEmpty(postParams.PostCategoryID))
            {
                data = data.Where(x => x.PostCategoryID == Convert.ToInt32(postParams.PostCategoryID)).ToList();
            }
            return data;
        }

        public async Task<OperationResult> Update(PostDTO postDTO)
        {
            postDTO.UpdateTime = DateTime.Now;
            var post = _mapper.Map<Post>(postDTO);
            if (post != null)
            {
                _repositoryAccessor.Post.Update(post);
                await _repositoryAccessor.SaveChangesAsync();
                return new OperationResult(true, "Sửa bài viết thành công!");
            }
            return new OperationResult(false, "Sửa bài viết thất bại....");
        }
    }
}