using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using WebOanhVinh.Models;

namespace WebOanhVinh.ViewComponents
{
    public class vcPostCategorySidebar : ViewComponent
    {
        private readonly HttpClient client;
        public vcPostCategorySidebar(IHttpClientFactory clientFactory)
        {
            client = clientFactory.CreateClient("default");
        }
        public async Task<IViewComponentResult> InvokeAsync()
        {
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
