using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace API.Dtos
{
    public partial class WebsiteActiveImageDTO
    {
        public int WebsiteActiveImageID { get; set; }
        public string ALTSEO { get; set; }
        public string LinkToDetail { get; set; }
        public string WebsiteID { get; set; }
        public string Images { get; set; }
        public bool? IsDelete { get; set; }
    }
}
