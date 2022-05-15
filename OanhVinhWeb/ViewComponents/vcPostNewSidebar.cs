using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using WebOanhVinh.Models;

namespace WebOanhVinh.ViewComponents
{
    public class vcPostNewSidebar : ViewComponent
    {
        private readonly HttpClient client;
        public vcPostNewSidebar(IHttpClientFactory httpClientFactory)
        {
            client = httpClientFactory.CreateClient("default");
        }
        public async Task<IViewComponentResult> InvokeAsync()
        {
            var response = await client.GetAsync("api/Customer/GetCustomers");
            if (response == null)
            {
                return View(new List<Customer>());
            }
            string json = response.Content.ReadAsStringAsync().Result;
            List<Customer> data = JsonConvert.DeserializeObject<List<Customer>>(json);
            return View(data);
        }
    }
}
