using Microsoft.AspNetCore.Mvc;

namespace WebOanhVinh.ViewComponents
{
    public class vcMainMenu : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}
