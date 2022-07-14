using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace API.Dtos
{
    public class WebsiteInfoDTO
    {
        public int WebsiteID { get; set; }
        public string WebsiteName { get; set; }
        public string WebsitePhoneNumber { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string GoogleMap { get; set; }
        public string WebSiteAbout { get; set; }
        public string WebsiteIcon { get; set; }
        public string WebsiteVideoIntro { get; set; }
        public string WebsiteContactNote { get; set; }
        public bool? Status { get; set; }
        public bool? IsDelete { get; set; }
        public DateTime? CreateTime { get; set; }
        public DateTime? UpdateTime { get; set; }
        public string CreateBy { get; set; }
    }
}
