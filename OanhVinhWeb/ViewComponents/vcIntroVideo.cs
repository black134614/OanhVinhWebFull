using Microsoft.AspNetCore.Mvc;

namespace WebOanhVinh.ViewComponents
{
    public class vcIntroVideo : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}
