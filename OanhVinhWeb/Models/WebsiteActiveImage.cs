using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace WebOanhVinh.Models
{
    [Table("WebsiteActiveImage")]
    public partial class WebsiteActiveImage
    {
        [Key]
        public int WebsiteActiveImageID { get; set; }
        [StringLength(100)]
        public string ALTSEO { get; set; }
        [StringLength(2048)]
        [Unicode(false)]
        public string LinkToDetail { get; set; }
        [StringLength(10)]
        public string WebsiteID { get; set; }
        [StringLength(2048)]
        [Unicode(false)]
        public string Images { get; set; }
        public bool? IsDelete { get; set; }
    }
}
