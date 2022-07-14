using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace API.Dtos
{
    public class OwnerDTO
    {
        public int OwnerID { get; set; }
        public string OwnerName { get; set; }
        public string OwnerJobs { get; set; }
        public string OwnerDetail { get; set; }
        public int? WebsiteID { get; set; }
        public string Avatar { get; set; }
    }
}
