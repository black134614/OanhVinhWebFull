using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Newtonsoft.Json;
using WebOanhVinh.Models;
using X.PagedList;

namespace WebOanhVinh.Controllers
{
    public class PostController : Controller
    {
        private readonly HttpClient client;
        public PostController(IHttpClientFactory clientFactory)
        {
            client = clientFactory.CreateClient("default");
        }

        [Route("danh-muc-bai-dang")]
        [Route("danh-muc-bai-dang/{mid:int?}/{title?}", Name = "PostListByCategoryID")]
        [Route("post")]
        public async Task<IActionResult> Index(int? mid, string title, int? page = 1)
        {
            if (title == null)
            {
                ViewData["Title"] = "Danh Mục Bài Đăng";
            }
            else
            {
                ViewData["Title"] = title;
            }
            var response = await client.GetAsync("api/Post/GetAllPosts");

            if (response == null)
                return View(new List<Post>());

            string json = response.Content.ReadAsStringAsync().Result;
            if (json == null)
                return View(new WebsiteInfo());
            List<Post> data = JsonConvert.DeserializeObject<List<Post>>(json);
            if (mid > 0 && data != null)
            {
                data = data.Where(x => x.PostCategoryID == mid).ToList();
            }
            ViewBag.CountList = data.Count;

            var pageNumber = page ?? 1;
            ViewBag.post = data.ToPagedList(pageNumber, 5);

            return View();
        }


        [Route("chi-tiet-bai-dang/{mid:int?}/{id:int}/{title?}", Name = "PostDetail")]
        [Route("post-detail")]
        public async Task<IActionResult> Detail(int? mid, int? id, string? title)
        {
            String headTitle = "Chi tiết bài đăng";
            if (title != null)
            {
                headTitle = title;
            }
            ViewData["Title"] = headTitle;
            //api tra ve list
            var response = await client.GetAsync("api/Post/GetAllPosts");

            if (response == null)
                return View(new Post());

            string json = response.Content.ReadAsStringAsync().Result;
            if (json == null)
                return View(new WebsiteInfo());
            List<Post> data = JsonConvert.DeserializeObject<List<Post>>(json);
            if (data != null)
            {
                ViewBag.PostRelated = data.Where((x) => x.PostCategoryID == mid).Take(5).ToList();
                Post trueData = data.Where(x => x.PostID == id).FirstOrDefault();
                return View(trueData);
            }
            ViewBag.PostRelated = new List<Post>();
            return View();
        }

        
    }

}
