using Microsoft.AspNetCore.Mvc;

namespace WebOanhVinh.ViewComponents
{
    public class vcAbout : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}
