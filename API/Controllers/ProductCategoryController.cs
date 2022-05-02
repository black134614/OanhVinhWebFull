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
        public async Task<IActionResult> Add([FromBody] ProductCategoryDTO productCategoryDTO, string createBy)
        {
            // createBy = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            createBy = "admin";
            var data = await _productCategoryService.Add(productCategoryDTO, createBy);
            return Ok(data);
        }

        [HttpPut("Update")]
        public async Task<IActionResult> Update([FromBody] ProductCategoryDTO productCategoryDTO, string createBy)
        {
            // createBy = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            createBy = "admin";
            var data = await _productCategoryService.Update(productCategoryDTO, createBy);
            return Ok(data);
        }
        [HttpDelete("Delete")]
        public async Task<IActionResult> Update([FromForm] int productCategoryID)
        {
            var data = await _productCategoryService.Delete(productCategoryID);
            return Ok(data);
        }
    }
}
