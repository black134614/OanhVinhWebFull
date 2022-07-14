using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using WebOanhVinh.Models;

namespace WebOanhVinh.ViewComponents
{
    public class vcMainMenu : ViewComponent
    {
        private readonly HttpClient client;

        public vcMainMenu(IHttpClientFactory httpClientFactory)
        {
            client = httpClientFactory.CreateClient("default");
        }
        public async Task<IViewComponentResult> InvokeAsync()
        {
            var getProductCategory = await client.GetAsync("api/ProductCategory/GetAllProductCategories");
            if(getProductCategory == null)
            {
                ViewBag.ProductCategory = new List<ProductCategory>();
            }
            else
            {
                string jsonProductCategory = getProductCategory.Content.ReadAsStringAsync().Result;
                List<ProductCategory> dataProductCategory = JsonConvert.DeserializeObject<List<ProductCategory>>(jsonProductCategory);
                ViewBag.ProductCategory = dataProductCategory;
            }

            var getPhoneNumber = await client.GetAsync("api/WebsiteInfo/GetWebSiteInfos");
            if (getPhoneNumber == null)
            {
                ViewBag.PhoneNumber = "0985566673";
            }
            else
            {
                string jsonWeb = getPhoneNumber.Content.ReadAsStringAsync().Result;
                WebsiteInfo dataProductCategory = JsonConvert.DeserializeObject<WebsiteInfo>(jsonWeb);
                ViewBag.PhoneNumber = dataProductCategory?.WebsitePhoneNumber;
            }

            var response = await client.GetAsync("api/PostCategory/GetAllPostCategories");
            if (response == null)
            {
                return View(new List<PostCategory>());
            }
            string json = response.Content.ReadAsStringAsync().Result;
            List<PostCategory> data = JsonConvert.DeserializeObject<List<PostCategory>>(json);
            return View(data);
        }
    }
}
