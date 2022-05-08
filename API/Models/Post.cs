﻿
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace API.Models
{
    [Table("Post")]
    public class Post
    {
        [Key]
        public int PostID { get; set; }
        [StringLength(100)]
        public string PostTitle { get; set; }
        [StringLength(1000)]
        public string PostDescription { get; set; }
        [Column(TypeName = "ntext")]
        public string PostDetail { get; set; }
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
    }
}
