using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace WebOanhVinh.Models
{
    [Table("Post")]
    public partial class Post
    {
        [Key]
        public int PostID { get; set; }
        [StringLength(100)]
        public string PostTitle { get; set; }
        [StringLength(1000)]
        public string PostDescription { get; set; }
        [Column(TypeName = "ntext")]
        public string PostDetail { get; set; }
        [Column(TypeName = "ntext")]
        public string PostImages { get; set; }
        [StringLength(100)]
        public string PostALTSEO { get; set; }
        public bool? Status { get; set; }
        public bool? IsDelete { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? CreateTime { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? UpdateTime { get; set; }
        [StringLength(50)]
        [Unicode(false)]
        public string CreateBy { get; set; }
        public int? PostCategoryID { get; set; }
        public int? TagConnectID { get; set; }

        [NotMapped]
        public string Date { get; set; }
        [NotMapped]
        public string PostCategoryName { get; set; }
        [NotMapped]
        public string UserFullName { get; set; }
    }
}
