using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using WebOanhVinh.Models;

namespace WebOanhVinh.ViewComponents
{
    public class vcSearch : ViewComponent
    {
        private readonly HttpClient client;

        public vcSearch(IHttpClientFactory httpClientFactory)
        {
            client = httpClientFactory.CreateClient("default");
        }
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}
