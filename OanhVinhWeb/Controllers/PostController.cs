using Microsoft.AspNetCore.Mvc;
using System.Net.Http;

namespace WebOanhVinh.Controllers
{
    public class PostController : Controller
    {
        public PostController()
        {
        }

        [Route("bai-dang")]
        public IActionResult Index()
        {
            return View();
        }
        [Route("chi-tiet-bai-dang")]
        public IActionResult Detail()
        {
            return View();
        }
    }
}
