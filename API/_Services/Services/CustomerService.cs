using API._Repositories;
using API._Services.Interfaces;
using API.Dtos;
using Microsoft.EntityFrameworkCore;

namespace API._Services.Services
{
    public class CustomerService : ICustomerService
    {
        private readonly IRepositoryAccessor _repositoryAccessor;

        public CustomerService(IRepositoryAccessor repositoryAccessor)
        {
            _repositoryAccessor = repositoryAccessor;
        }

        public async Task<List<CustomerDTO>> GetCustomers()
        {
            var customers = await _repositoryAccessor.Customer
            .FindAll().Select(x => new CustomerDTO()
            {
                CustomerID = x.CustomerID,
                Name = x.Name,
                Address = x.Address,
                Jobs = x.Jobs,
                Review = x.Review,
                Avatar = x.Avatar,
                PhoneNumber = x.PhoneNumber,
                Email = x.Email,
                IsDelete = x.IsDelete,
                WebsiteID = x.WebsiteID
            })
            .ToListAsync();
            return customers;
        }
    }
}
