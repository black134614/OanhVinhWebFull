using API.Dtos;
using API.Models;
using AutoMapper;

namespace API.Helpers.AutoMapper
{
    public class EfToDtoMappingProfile : Profile
    {
        public EfToDtoMappingProfile()
        {
            CreateMap<WebsiteInfo, WebsiteInfoDTO>();
            CreateMap<WebsiteActiveImage, WebsiteActiveImageDTO>();
            CreateMap<User, UserDTO>();
            CreateMap<TagType, TagTypeDTO>();
            CreateMap<Tag, TagDTO>();
            CreateMap<TagConnect, TagConnectDTO>();
            CreateMap<Product, ProductDTO>();
            CreateMap<ProductCategory, ProductCategoryDTO>();
            CreateMap<Post, PostDTO>();
            CreateMap<PostCategory, PostCategoryDTO>();
            CreateMap<Owner, OwnerDTO>();
            CreateMap<Customer, CustomerDTO>();
        }
    }
}