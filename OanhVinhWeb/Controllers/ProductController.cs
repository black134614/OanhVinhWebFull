using Microsoft.AspNetCore.Mvc;

namespace WebOanhVinh.Controllers
{
    public class ProductController : Controller
    {
        [Route("san-pham")]
        public IActionResult Index()
        {
            return View();
        }
    }
}
