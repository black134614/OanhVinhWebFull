using API.Dtos;
using API.Models;
using AutoMapper;

namespace API.Helpers.AutoMapper
{
    public class DtoToEfMappingProfile : Profile
    {
        public DtoToEfMappingProfile()
        {
            CreateMap<WebsiteInfoDTO, WebsiteInfo>();
            CreateMap<WebsiteActiveImageDTO, WebsiteActiveImage>();
            CreateMap<UserDTO, User>();
            CreateMap<TagTypeDTO, TagType>();
            CreateMap<TagDTO, Tag>();
            CreateMap<TagConnectDTO, TagConnect>();
            CreateMap<ProductDTO, Product>();
            CreateMap<ProductCategoryDTO, ProductCategory>();
            CreateMap<PostDTO, Post>();
            CreateMap<PostCategoryDTO, PostCategory>();
            CreateMap<OwnerDTO, Owner>();
            CreateMap<CustomerDTO, Customer>();
        }
    }
}