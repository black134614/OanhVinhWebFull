using API.Dtos;

namespace API._Services.Interfaces
{
    public interface ICustomerService
    {
        Task<List<CustomerDTO>> GetCustomers();
    }
}
