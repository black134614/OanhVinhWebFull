using Microsoft.AspNetCore.Mvc;

namespace WebOanhVinh.ViewComponents
{
    public class vcOwner : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}
