using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using WebOanhVinh.Models;

namespace WebOanhVinh.ViewComponents
{
    public class vcPostNewSidebar : ViewComponent
    {
        private readonly HttpClient client;
        public vcPostNewSidebar(IHttpClientFactory httpClientFactory)
        {
            client = httpClientFactory.CreateClient("default");
        }
        public async Task<IViewComponentResult> InvokeAsync()
        {
            var response = await client.GetAsync("api/Post/GetAllPosts");
            if (response == null && response?.StatusCode != System.Net.HttpStatusCode.OK)
            {
                return View(new List<Post>());
            }
            string json = response.Content.ReadAsStringAsync().Result;
            List<Post> data = JsonConvert.DeserializeObject<List<Post>>(json);
            if(data != null)
            {
                data = data.OrderByDescending(x=>x.CreateTime).Take(5).ToList();
            }
            return View(data);
        }
    }
}
