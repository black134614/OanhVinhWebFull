using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;
using WebOanhVinh.Models;

namespace WebOanhVinh.Controllers
{
    public class PostController : Controller
    {
        private readonly HttpClient client;
        public PostController(IHttpClientFactory clientFactory)
        {
            client = clientFactory.CreateClient("default");
        }

        [Route("bai-dang")]
        [Route("post")]
        public async Task<IActionResult> Index()
        {
            ViewData["Title"] = "Bài Đăng | Trại Dế Oanh ";
            var response = await client.GetAsync("api/Post/GetAllPosts");

            if (response == null)
                return View(new List<Post>());

            string json = response.Content.ReadAsStringAsync().Result;
            List<Post> data = JsonConvert.DeserializeObject<List<Post>>(json);

            return View(data);
        }
        [Route("chi-tiet-bai-dang/{id:int}/{title?}", Name = "ArticleDetail")]
        [Route("post-detail")]
        public async Task<IActionResult> Detail(int id, string title)
        {
            //var response = await client.GetAsync("/api/ArticleAPI/" + id);

            //if (response == null)
            //    return View(new Article());

            //string json = response.Content.ReadAsStringAsync().Result;

            //Article data = JsonConvert.DeserializeObject<Article>(json);


            //ViewData["Title"] = data.Title + " | TauThuyenViet";

            return View();
        }
    }
}
