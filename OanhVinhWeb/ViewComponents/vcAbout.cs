using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using WebOanhVinh.Models;

namespace WebOanhVinh.ViewComponents
{
    public class vcAbout : ViewComponent
    {
        private readonly HttpClient client;

        public vcAbout(IHttpClientFactory httpClientFactory)
        {
            client = httpClientFactory.CreateClient("default");
        }
        public async Task<IViewComponentResult> InvokeAsync()
        {
            var response = await client.GetAsync("api/WebsiteInfo/GetWebSiteInfos");
            if (response == null)
            {
                return View(new WebsiteInfo());
            }
            string json = response.Content.ReadAsStringAsync().Result;
            WebsiteInfo data = JsonConvert.DeserializeObject<WebsiteInfo>(json);
           
            return View(data);
        }
    }
}
