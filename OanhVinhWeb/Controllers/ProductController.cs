using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using WebOanhVinh.Models;

namespace WebOanhVinh.Controllers
{
    public class ProductController : Controller
    {
        private readonly HttpClient client;

        public ProductController(IHttpClientFactory httpClientFactory)
        {
            client = httpClientFactory.CreateClient("default");
        }

        [Route("san-pham")]
        [Route("product")]
        public async Task<IActionResult> Index()
        {
            ViewData["Title"] = "Sản phẩm | Dế Oanh Vinh";
            var response = await client.GetAsync("api/Product/GetAllProducts");
            if (response == null)
            {
                return View(new List<Product>());
            }
            string json = response.Content.ReadAsStringAsync().Result;
            List<Product> data = JsonConvert.DeserializeObject<List<Product>>(json);

            data = data.OrderBy(x=>x.ProductID).ToList();

            return View(data);
        }
        //[Route("chi-tiet/{id:int}", Name ="ProductDetail")]
        //public async Task<IActionResult> Detail(int id)
        //{
        //    ViewData["Title"] = "Sản phẩm | Dế Oanh Vinh";
        //    var response = await client.GetAsync("api/Product/GetAllProducts" + id);
        //    if (response == null)
        //    {
        //        return View(new Product());
        //    }
        //    string json = response.Content.ReadAsStringAsync().Result;
        //    Product data = JsonConvert.DeserializeObject<Product>(json);
        //    return View(data);
        //}
    }
}
