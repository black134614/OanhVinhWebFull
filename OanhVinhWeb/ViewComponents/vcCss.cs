using Microsoft.AspNetCore.Mvc;

namespace WebOanhVinh.ViewComponents
{
    public class vcCss : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}
