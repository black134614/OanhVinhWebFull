using API._Repositories;
using API._Services.Interfaces;
using API.Dtos;
using Microsoft.EntityFrameworkCore;

namespace API._Services.Services
{
    public class OwnerService : IOwnerService
    {
        private readonly IRepositoryAccessor _repositoryAccessor;

        public OwnerService(IRepositoryAccessor repositoryAccessor)
        {
            _repositoryAccessor = repositoryAccessor;
        }

        public async Task<List<OwnerDTO>> GetAllOwners()
        {
            var data = await _repositoryAccessor.Owner.FindAll()
                        .Select(x => new OwnerDTO()
                        {
                            OwnerID = x.OwnerID,
                            Avatar = x.Avatar,
                            OwnerDetail = x.OwnerDetail,
                            OwnerJobs = x.OwnerJobs,
                            OwnerName = x.OwnerName,
                            WebsiteID = x.WebsiteID
                        }).ToListAsync();
            return data;
        }
    }
}