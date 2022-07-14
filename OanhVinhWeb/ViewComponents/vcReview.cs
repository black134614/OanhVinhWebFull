using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using WebOanhVinh.Models;

namespace WebOanhVinh.ViewComponents
{
    public class vcReview : ViewComponent
    {
        private readonly HttpClient client;

        public vcReview(IHttpClientFactory httpClientFactory)
        {
            client = httpClientFactory.CreateClient("default");
        }
        public async Task<IViewComponentResult> InvokeAsync()
        {
            var response = await client.GetAsync("api/Customer/GetCustomers");
            if (response == null || response.StatusCode != System.Net.HttpStatusCode.OK)
            {
                return View(new List<Customer>());
            }
            string json = response.Content.ReadAsStringAsync().Result;
            List<Customer> data = JsonConvert.DeserializeObject<List<Customer>>(json);
            return View(data);
        }
    }
}
