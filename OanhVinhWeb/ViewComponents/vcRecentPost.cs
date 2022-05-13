using Microsoft.AspNetCore.Mvc;

namespace WebOanhVinh.ViewComponents
{
    public class vcRecentPost : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}
