using System.Security.Claims;
using API._Services.Interfaces;
using API.Dtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductCategoryController : ControllerBase
    {
        private readonly IProductCategoryService _productCategoryService;

        public ProductCategoryController(IProductCategoryService productCategoryService)
        {
            _productCategoryService = productCategoryService;
        }
        [HttpGet("GetAllProductCategories")]
        public async Task<IActionResult> GetAllProductCategories() => Ok(await _productCategoryService.GetProductCategores());

        [HttpPost("Add")]
        public async Task<IActionResult> Add([FromBody] ProductCategoryDTO productCategoryDTO)
        {
            productCategoryDTO.CreateBy = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            var data = await _productCategoryService.Add(productCategoryDTO);
            return Ok(data);
        }

        [HttpPut("Update")]
        public async Task<IActionResult> Update([FromBody] ProductCategoryDTO productCategoryDTO)
        {
            productCategoryDTO.CreateBy = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            var data = await _productCategoryService.Update(productCategoryDTO);
            return Ok(data);
        }
        [HttpDelete("Delete/{productCategoryID}")]
        public async Task<IActionResult> Delete([FromForm] int productCategoryID)
        {
            var data = await _productCategoryService.Delete(productCategoryID);
            return Ok(data);
        }
    }
}
