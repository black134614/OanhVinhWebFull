using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using WebOanhVinh.Models;


namespace WebOanhVinh.ViewComponents
{
    public class vcOwner : ViewComponent
    {
        private readonly HttpClient client;

        public vcOwner(IHttpClientFactory httpClientFactory)
        {
            client = httpClientFactory.CreateClient("default");
        }
        public async Task<IViewComponentResult> InvokeAsync()
        {
            var response = await client.GetAsync("api/Owner/GetOwners");
            if (response == null)
            {
                return View(new List<Owner>());
            }
            string json = response.Content.ReadAsStringAsync().Result;
            List<Owner> data = JsonConvert.DeserializeObject<List<Owner>>(json);

            return View(data);
        }
    }
}
