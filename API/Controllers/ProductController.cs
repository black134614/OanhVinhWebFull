using System.Security.Claims;
using API._Services.Interfaces;
using API.Dtos;
using API.Helpers.Params;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;

        public ProductController(IProductService productService)
        {
            _productService = productService;
        }
        [HttpGet("GetAllProducts")]
        public async Task<IActionResult> GetAllProducts([FromQuery] ProductParams productParams) => Ok(await _productService.GetAllProducts(productParams));

        [HttpPost("Add")]
        public async Task<IActionResult> Add([FromBody] ProductDTO productDTO)
        {
            var data = await _productService.Add(productDTO);
            return Ok(data);
        }

        [HttpPut("Update")]
        public async Task<IActionResult> Update([FromBody] ProductDTO productDTO)
        {
            var data = await _productService.Update(productDTO);
            return Ok(data);
        }

        [HttpDelete("Delete")]
        public async Task<IActionResult> Delete([FromBody] ProductDTO productDTO)
        {
            var data = await _productService.Delete(productDTO);
            return Ok(data);
        }
    }
}

