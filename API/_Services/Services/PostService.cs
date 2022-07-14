using API._Repositories;
using API._Services.Interfaces;
using API.Dtos;
using API.Helpers;
using API.Helpers.Params;
using API.Models;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using LinqKit;

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
                _repositoryAccessor.Posts.Add(post);
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
                _repositoryAccessor.Posts.Remove(post);
                await _repositoryAccessor.SaveChangesAsync();
                return new OperationResult(true, "Xóa bài viết thành công!");
            }

            return new OperationResult(false, "Xóa bài viết thất bại!");
        }

        public async Task<List<PostDTO>> GetAllPosts(PostParams postParams)
        {
            var layoutPred = PredicateBuilder.New<Post>(true);
            if (!string.IsNullOrEmpty(postParams.PostName))
            {
                layoutPred.And(x => x.PostTitle.Contains(postParams.PostName));
            }
            var data = await _repositoryAccessor.Posts.FindAll(layoutPred)
                            .Join(_repositoryAccessor.PostCategory.FindAll(),
                            x => x.PostCategoryID,
                            y => y.PostCategoryID,
                            (x, y) => new { Post = x, PostCategory = y })
                            .Join(_repositoryAccessor.User.FindAll(),
                            x => x.Post.CreateBy,
                            z => z.UserName,
                            (x,z) => new{PostConnect = x, User = z})
                            .Select(x => new PostDTO()
                            {
                                PostID = x.PostConnect.Post.PostID,
                                PostTitle = x.PostConnect.Post.PostTitle,
                                CreateBy = x.PostConnect.Post.CreateBy,
                                CreateTime = x.PostConnect.Post.CreateTime,
                                IsDelete = x.PostConnect.Post.IsDelete,
                                PostALTSEO = x.PostConnect.Post.PostALTSEO,
                                PostCategoryID = x.PostConnect.PostCategory.PostCategoryID,
                                PostCategoryName = x.PostConnect.PostCategory.Tittle,
                                PostDescription = x.PostConnect.Post.PostDescription,
                                PostDetail = x.PostConnect.Post.PostDetail,
                                PostImages = x.PostConnect.Post.PostImages,
                                Status = x.PostConnect.Post.Status,
                                UpdateTime = x.PostConnect.Post.UpdateTime.Value.Date,
                                UserFullName = x.User.FullName
                            }).ToListAsync();
            if (!string.IsNullOrEmpty(postParams.PostCategoryID) && !string.IsNullOrEmpty(postParams.PostID))
            {
                data = data.Where(x => x.PostCategoryID == Convert.ToInt32(postParams.PostCategoryID) && x.PostID == Convert.ToInt32(postParams.PostID)).ToList();
            }
            else if (!string.IsNullOrEmpty(postParams.PostCategoryID))
            {
                data = data.Where(x => x.PostCategoryID == Convert.ToInt32(postParams.PostCategoryID)).ToList();
            }
            else if (!string.IsNullOrEmpty(postParams.PostID))
            {
                data = data.Where(x => x.PostID == Convert.ToInt32(postParams.PostID)).ToList();
            }
            return data;
        }
        public async Task<OperationResult> Update(PostDTO postDTO)
        {
            var post = _mapper.Map<Post>(postDTO);

            if (post != null)
            {
                _repositoryAccessor.Posts.Update(post);
                await _repositoryAccessor.SaveChangesAsync();
                return new OperationResult(true, "Sửa bài viết thành công!");
            }

            return new OperationResult(false, "Sửa bài viết thất bại!");
        }
    }
}