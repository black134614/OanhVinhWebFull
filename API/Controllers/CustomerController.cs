﻿using API._Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly ICustomerService _customerService;

        public CustomerController(ICustomerService customerService)
        {
            _customerService = customerService;
        }
        [HttpGet("GetCustomers")]
        public async Task<IActionResult> GetCustomer()
        {
            var customes = await _customerService.GetCustomers();
            return Ok(customes);
        }
    }
}
