using Microsoft.AspNetCore.Mvc;

namespace WebOanhVinh.ViewComponents
{
    public class vcGoogleMap : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}
