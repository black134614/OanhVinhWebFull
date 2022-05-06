using Microsoft.AspNetCore.Mvc;

namespace WebOanhVinh.Controllers
{
    public class PostController : Controller
    {
        [Route("bai-dang")]
        [Route("post")]
        public IActionResult Index()
        {
            return View();
        }

        [Route("chi-tiet-bai-dang")]
        [Route("post-detail")]
        public IActionResult Detail()
        {
            return View();
        }
    }
}
