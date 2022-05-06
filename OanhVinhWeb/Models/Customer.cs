using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace WebOanhVinh.Models
{
    [Table("Customer")]
    public partial class Customer
    {
        [Key]
        public int CustomerID { get; set; }
        [StringLength(100)]
        public string Name { get; set; }
        [StringLength(1000)]
        public string Address { get; set; }
        [StringLength(100)]
        public string Jobs { get; set; }
        [StringLength(1000)]
        public string Review { get; set; }
        [StringLength(2048)]
        [Unicode(false)]
        public string Avatar { get; set; }
        [StringLength(10)]
        [Unicode(false)]
        public string PhoneNumber { get; set; }
        [StringLength(2048)]
        [Unicode(false)]
        public string Email { get; set; }
        public bool? IsDelete { get; set; }
        public int? WebsiteID { get; set; }
    }
}
