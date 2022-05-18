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

        public async Task<List<OwnerDTO>> GetSiteOwners()
        {
            var data = await _repositoryAccessor.Owner
            .FindAll().Select(x => new OwnerDTO()
            {
                OwnerID = x.OwnerID,
                OwnerName = x.OwnerName,
                OwnerJobs = x.OwnerJobs,
                OwnerDetail = x.OwnerDetail,
                WebsiteID = x.WebsiteID,
                Avatar = x.Avatar
            })
            .ToListAsync();
            return data;
        }
    }
}
