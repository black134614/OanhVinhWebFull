using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos;

namespace API._Services.Interfaces
{
    public interface ICountListService
    {
        Task<CountListDTO> CountList();



    }
}