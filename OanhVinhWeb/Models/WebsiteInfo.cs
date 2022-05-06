using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace WebOanhVinh.Models
{
    [Table("WebsiteInfo")]
    public partial class WebsiteInfo
    {
        [Key]
        public int WebsiteID { get; set; }
        [StringLength(100)]
        public string WebsiteName { get; set; }
        [StringLength(10)]
        [Unicode(false)]
        public string WebsitePhoneNumber { get; set; }
        [StringLength(1000)]
        public string Address { get; set; }
        [StringLength(2048)]
        [Unicode(false)]
        public string Email { get; set; }
        [StringLength(2048)]
        [Unicode(false)]
        public string GoogleMap { get; set; }
        [Column(TypeName = "ntext")]
        public string WebSiteAbout { get; set; }
        [StringLength(2048)]
        [Unicode(false)]
        public string WebsiteIcon { get; set; }
        [StringLength(2048)]
        [Unicode(false)]
        public string WebsiteVideoIntro { get; set; }
        [StringLength(1000)]
        public string WebsiteContactNote { get; set; }
        public bool? Status { get; set; }
        public bool? IsDelete { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? CreateTime { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? UpdateTime { get; set; }
        [StringLength(50)]
        [Unicode(false)]
        public string CreateBy { get; set; }
    }
}
