using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace WebOanhVinh.Models
{
    [Table("User")]
    public class User
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
        [Column(TypeName = "datetime")]
        public DateTime? CreateTime { get; set; }
        [StringLength(1000)]
        public string UserDetail { get; set; }
        [StringLength(2048)]
        [Unicode(false)]
        public string Avatar { get; set; }
    }
}
