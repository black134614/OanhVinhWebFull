using API.Dtos;

namespace API._Services.Interfaces
{
    public interface IOwnerService
    {
        Task<List<OwnerDTO>> GetSiteOwners();
    }
}
