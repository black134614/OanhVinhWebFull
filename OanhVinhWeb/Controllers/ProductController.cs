using Microsoft.AspNetCore.Mvc;

namespace WebOanhVinh.Controllers
{
    public class ProductController : Controller
    {
        [Route("san-pham")]
        [Route("product")]
        public IActionResult Index()
        {
            return View();
        }
    }
}
