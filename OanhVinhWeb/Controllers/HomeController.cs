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
        [Route("trang-chu")]
        [Route("home")]
        [Route("home/index")]
        public IActionResult Index()
        {

            ViewData["Title"] = "Trang Chủ | OanhVinh";
            return View();
        }
        [Route("gioi-thieu")]
        [Route("about")]
        public IActionResult About()
        {
            ViewData["Title"] = "Giới thiệu | TraiDeOanhVinh";
            return View();
        }
        [Route("lien-he")]
        [Route("contact")]
        public IActionResult Contact()
        {
            ViewData["Title"] = "Giới thiệu | TraiDeOanhVinh";
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}