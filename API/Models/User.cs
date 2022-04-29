using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace API.Models
{
    [Table("User")]
    public partial class User
    {
        [Key]
        [StringLength(50)]
        [Unicode(false)]
        public string UserName { get; set; }
        [StringLength(50)]
        [Unicode(false)]
        public string Password { get; set; }
        [StringLength(100)]
        public string FullName { get; set; }
        [StringLength(10)]
        [Unicode(false)]
        public string PhoneNumber { get; set; }
        public bool? IsDelete { get; set; }
        public bool? CreateTime { get; set; }
    }
}
