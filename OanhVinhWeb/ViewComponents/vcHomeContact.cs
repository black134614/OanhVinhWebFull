using Microsoft.AspNetCore.Mvc;

namespace WebOanhVinh.ViewComponents
{
    public class vcHomeContact : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}
