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
            ViewData["Title"] = "Trang Chủ";

           
            return View();
        }
        [Route("gioi-thieu")]
        public IActionResult About()
        {
            ViewData["Title"] = "Giới thiệu";
            return View();
        }
        [Route("lien-he")]
        [Route("contact")]
        public async Task<IActionResult> Contact()
        {
            ViewData["Title"] = "Liên Hệ";
            var response = await client.GetAsync("api/WebsiteInfo/GetWebSiteInfos");
            if (response == null)
            {
                return View(new WebsiteInfo());
            }
            string json = response.Content.ReadAsStringAsync().Result;
            if(json == null)
                return View(new WebsiteInfo());
            WebsiteInfo data = JsonConvert.DeserializeObject<WebsiteInfo>(json);

            return View(data);
        }
    }
}