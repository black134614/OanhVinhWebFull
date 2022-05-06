using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using WebOanhVinh.Models;

namespace WebOanhVinh.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
<<<<<<< Updated upstream
=======
            ViewData["Title"] = "Trang Chủ | OanhVinh";
            DBContext db = new DBContext(); 

            List<ProductCategory> data = db.ProductCategories.ToList();
            return View(data);
        }
        [Route("gioi-thieu")]
        public IActionResult about()
        {
            ViewData["Title"] = "Giới thiệu | TraiDeOanhVinh";
>>>>>>> Stashed changes
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}