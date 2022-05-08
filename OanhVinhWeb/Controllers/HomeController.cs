using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using WebOanhVinh.Models;

namespace WebOanhVinh.Controllers
{
    public class HomeController : Controller
    {
        [Route("")]
        [Route("trang-chu")]
        [Route("home")]
        [Route("home/index")]
        public IActionResult Index()
        {
            ViewData["Title"] = "Trang Chủ | OanhVinh";
            return View();
        }
        [Route("gioi-thieu")]
        public IActionResult about()
        {
            ViewData["Title"] = "Giới thiệu | TraiDeOanhVinh";
            return View();
        }
        [Route("lien-he")]
        [Route("contact")]
        public IActionResult Contact()
        {
            ViewData["Title"] = "Liên Hệ | TauThuyenViet";
            return View();
        }
        [Route("gioi-thieu")]
        [Route("about")]
        public IActionResult About()
        {
            ViewData["Title"] = "Giới Thiệu | TauThuyenViet";
            return View();
        }
    }
}