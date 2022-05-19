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

        [Route("san-pham/{mid:int?}/{title?}", Name = "ProductListByCategoryID")]
        [Route("product")]
        public async Task<IActionResult> Index(int mid, string title)
        {
            if (title == null)
            {
                ViewData["Title"] = "Tất cả sản phẩm";
            }
            else
            {
                ViewData["Title"] = title;
            }

            var responseProductCategory = await client.GetAsync("api/ProductCategory/GetAllProductCategories");
            if (responseProductCategory == null)
            {
                return View(new List<ProductCategory>());
            }
            string jsonProductCategory = responseProductCategory.Content.ReadAsStringAsync().Result;
            if (jsonProductCategory == null)
                return View(new WebsiteInfo());
            List<ProductCategory> dataProductCategory = JsonConvert.DeserializeObject<List<ProductCategory>>(jsonProductCategory);
            ViewBag.ProductCategory  = dataProductCategory;

            var response = await client.GetAsync("api/Product/GetAllProducts");
            if (response == null)
            {
                return View(new List<Product>());
            }
            string json = response.Content.ReadAsStringAsync().Result;
            if (json == null)
                return View(new WebsiteInfo());
            List<Product> data = JsonConvert.DeserializeObject<List<Product>>(json);

            ViewBag.Active = 0;
            if (data != null)
            {
                data = data.OrderByDescending(x => x.ProductID).ToList();
                if (mid > 0)
                {
                    ViewBag.Active = mid;
                    data = data.Where(x => x.ProductCategoryID == mid).ToList();
                }
            }
            return View(data);
        }
        [Route("chi-tiet-san-pham/{mid:int?}/{id:int}/{title?}", Name = "ProductDetail")]
        public async Task<IActionResult> Detail(int id, int mid, string title)
        {
            if (title == null)
            {
                ViewData["Title"] = "Sản phẩm";
            }
            else
            {
                ViewData["Title"] = title;
            }

            var getContactInfo = await client.GetAsync("api/WebsiteInfo/GetWebSiteInfos");
            if (getContactInfo == null)
            {
                ViewBag.WebsiteInfo = new WebsiteInfo();
            }
            else
            {
                string jsonContactInfo = getContactInfo.Content.ReadAsStringAsync().Result;
                WebsiteInfo dataContactInfo = JsonConvert.DeserializeObject<WebsiteInfo>(jsonContactInfo);
                ViewBag.WebsiteInfo = dataContactInfo;
            }

            var response = await client.GetAsync("api/Product/GetAllProducts");
            if (response == null)
            {
                return View(new Product());
            }
            string json = response.Content.ReadAsStringAsync().Result;
            if (json == null)
                return View(new WebsiteInfo());
            List<Product> data = JsonConvert.DeserializeObject<List<Product>>(json);
            if (data != null)
            {
                ViewBag.RelatedProduct = data.Where(x => x.ProductCategoryID == mid).Take(5).ToList();
                ViewBag.NewProduct = data.OrderByDescending(x => x.CreateTime).Take(5).ToList();

                Product trueData = data.Where(x => x.ProductID == id).FirstOrDefault();
                return View(trueData);
            }
            ViewBag.RelatedProduct = new Product();
            ViewBag.NewProduct = new Product();
            return View();
        }
    }
}
