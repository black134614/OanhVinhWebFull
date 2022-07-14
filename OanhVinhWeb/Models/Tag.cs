using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace WebOanhVinh.Models
{
    [Table("Tag")]
    public partial class Tag
    {
        [Key]
        public int TagID { get; set; }
        [StringLength(100)]
        public string TagName { get; set; }
        [StringLength(1000)]
        public string TagDescription { get; set; }
        [StringLength(50)]
        [Unicode(false)]
        public string CreateBy { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? CreateTime { get; set; }
        public bool? Status { get; set; }
    }
}
