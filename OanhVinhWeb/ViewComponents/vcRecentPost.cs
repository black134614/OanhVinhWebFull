using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using WebOanhVinh.Models;

namespace WebOanhVinh.ViewComponents
{
    public class vcRecentPost : ViewComponent
    {
        private readonly HttpClient client;
        public vcRecentPost(IHttpClientFactory clientFactory)
        {
            client = clientFactory.CreateClient("default");
        }
        public async Task<IViewComponentResult> InvokeAsync()
        {
            var response = await client.GetAsync("api/Post/GetAllPosts");

            if (response == null)
                return View(new List<Post>());

            string json = response.Content.ReadAsStringAsync().Result;
            List<Post> data = JsonConvert.DeserializeObject<List<Post>>(json);
            if (data == null)
            {
                return View(new List<Post>());
            }
            data = data.OrderByDescending(x => x.PostID).Take(4).ToList();
            return View(data);
        }
    }
}
