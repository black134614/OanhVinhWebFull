using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using WebOanhVinh.Models;

namespace WebOanhVinh.Controllers
{
    public class HomeController : Controller
    {
        private readonly HttpClient client;

        public HomeController(IHttpClientFactory httpClientFactory)
        {
            client = httpClientFactory.CreateClient("default");
        }

        [Route("")]
        [Route("trang-chu")]
        [Route("home")]
        [Route("home/index")]
        public async Task<IActionResult> Index()
        {
            ViewData["Title"] = "Trang Chủ | OanhVinh";

            var response = await client.GetAsync("api/PostCategory/GetAllPostCategories");
            if (response == null)
            {
                return View(new List<PostCategory>());
            }
            string json = response.Content.ReadAsStringAsync().Result;
            List<PostCategory> data = JsonConvert.DeserializeObject<List<PostCategory>>(json);
            return View(data);
        }
        [Route("gioi-thieu")]
        public IActionResult About()
        {
            ViewData["Title"] = "Giới thiệu | TraiDeOanhVinh";
            return View();
        }
        [Route("lien-he")]
        [Route("contact")]
        public IActionResult Contact()
        {
            ViewData["Title"] = "Liên Hệ | TauThuyenViet";
            return View();
        }
    }
}