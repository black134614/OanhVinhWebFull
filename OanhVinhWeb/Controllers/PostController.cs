using Microsoft.AspNetCore.Mvc;

namespace WebOanhVinh.Controllers
{
    public class PostController : Controller
    {
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
