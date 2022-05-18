using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using WebOanhVinh.Models;

namespace WebOanhVinh.ViewComponents
{
    public class vcProductListPanel : ViewComponent
    {
        private readonly HttpClient client;
        public vcProductListPanel(IHttpClientFactory clientFactory)
        {
            client = clientFactory.CreateClient("default");
        }
        [Route("san-pham/{mid:int?}/{title?}", Name = "ProductListByID")]
        public async Task<IViewComponentResult> InvokeAsync(int mid)
        {
            var response = await client.GetAsync("api/Product/GetAllProducts?productCategoryID=" + mid);

            if (response == null)
                return View(new List<Product>());

            string json = response.Content.ReadAsStringAsync().Result;
            List<Product> data = JsonConvert.DeserializeObject<List<Product>>(json);
            return View(data);
        }
    }
}
