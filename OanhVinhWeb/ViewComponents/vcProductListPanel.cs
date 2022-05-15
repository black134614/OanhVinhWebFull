using Microsoft.AspNetCore.Mvc;

namespace WebOanhVinh.ViewComponents
{
    public class vcProductListPanel : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}
