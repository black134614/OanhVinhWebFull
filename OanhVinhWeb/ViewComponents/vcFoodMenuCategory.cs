using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using WebOanhVinh.Models;

namespace WebOanhVinh.ViewComponents
{
    public class vcFoodMenuCategory : ViewComponent
    {
        private readonly HttpClient client;

        public vcFoodMenuCategory(IHttpClientFactory httpClientFactory)
        {
            client = httpClientFactory.CreateClient("default");
        }
        public async Task<IViewComponentResult> InvokeAsync()
        {
            var response = await client.GetAsync("api/ProductCategory/GetAllProductCategories");
            if (response == null)
            {
                return View(new List<ProductCategory>());
            }
            string json = response.Content.ReadAsStringAsync().Result;
            List<ProductCategory> data = JsonConvert.DeserializeObject<List<ProductCategory>>(json);
           
            return View(data);
        }
    }
}
