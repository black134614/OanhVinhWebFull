using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using WebOanhVinh.Models;

namespace WebOanhVinh.ViewComponents
{
    public class vcPostActiveImgSidebar : ViewComponent
    {
        public readonly HttpClient client;
        public vcPostActiveImgSidebar (IHttpClientFactory httpClientFactory) {
            client = httpClientFactory.CreateClient("default");
        } 
        public async Task<IViewComponentResult> InvokeAsync()
        {
            var response = await client.GetAsync("api/WebsiteActiveImage/GetWebsiteActiveImages");
            if (response == null && response?.StatusCode != System.Net.HttpStatusCode.OK)
            {
                return View(new List<WebsiteActiveImage>());
            }
            string json = response.Content.ReadAsStringAsync().Result;
            List<WebsiteActiveImage> data = JsonConvert.DeserializeObject<List<WebsiteActiveImage>>(json);
            return View(data);
        }
    }
}
