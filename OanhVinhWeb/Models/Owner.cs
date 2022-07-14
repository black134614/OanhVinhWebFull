using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace WebOanhVinh.Models
{
    [Table("Owner")]
    public partial class Owner
    {
        [Key]
        public int OwnerID { get; set; }
        [StringLength(100)]
        public string OwnerName { get; set; }
        [StringLength(100)]
        public string OwnerJobs { get; set; }
        [StringLength(1000)]
        public string OwnerDetail { get; set; }
        public int? WebsiteID { get; set; }
        [Column(TypeName = "ntext")]
        public string Avatar { get; set; }
    }
}
