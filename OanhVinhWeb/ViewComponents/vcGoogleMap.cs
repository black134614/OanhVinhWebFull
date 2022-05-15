using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebOanhVinh.Models;

namespace WebOanhVinh.ViewComponents
{
    public class vcGoogleMap : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            WebDBContext db = new WebDBContext();
            var data = db.WebsiteInfos
                         .Where(x => x.Status == true);
            return View(data.FirstOrDefault());
        }
    }
}
