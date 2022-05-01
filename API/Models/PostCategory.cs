using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace API.Models
{
    [Table("PostCategory")]
    public partial class PostCategory
    {
        [Key]
        public int PostCategoryID { get; set; }
        [StringLength(100)]
        public string Tittle { get; set; }
        [StringLength(1000)]
        public string Description { get; set; }
        public int? Positon { get; set; }
        public bool? Status { get; set; }
        public bool? IsDelete { get; set; }
        [StringLength(50)]
        [Unicode(false)]
        public string CreateBy { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? CreateTime { get; set; }
    }
}
