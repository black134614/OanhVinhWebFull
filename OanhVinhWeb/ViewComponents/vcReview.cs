using Microsoft.AspNetCore.Mvc;

namespace WebOanhVinh.ViewComponents
{
    public class vcReview : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}
