using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using WebOanhVinh.Models;

namespace WebOanhVinh.ViewComponents
{
    public class vcTopProduct : ViewComponent
    {
        private readonly HttpClient client;

        public vcTopProduct(IHttpClientFactory httpClientFactory)
        {
            client = httpClientFactory.CreateClient("default");
        }
        public async Task<IViewComponentResult> InvokeAsync()
        {
            var response = await client.GetAsync("api/Product/GetAllProducts");
            if (response == null)
            {
                return View(new List<Product>());
            }
            string json = response.Content.ReadAsStringAsync().Result;
            List<Product> data = JsonConvert.DeserializeObject<List<Product>>(json);

            if(data == null)
            {
                return View(new List<Product>());
            }
            data = data.OrderByDescending(x => x.ProductID).Take(10).ToList();
           
            return View(data);
        }
    }
}
