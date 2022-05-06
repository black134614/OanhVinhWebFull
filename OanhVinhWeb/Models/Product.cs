using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace WebOanhVinh.Models
{
    [Table("Product")]
    public partial class Product
    {
        [Key]
        public int ProductID { get; set; }
        [StringLength(100)]
        public string ProductName { get; set; }
        [StringLength(1000)]
        public string ProductDescription { get; set; }
        [Column(TypeName = "ntext")]
        public string ProductDetail { get; set; }
        public string ProductImages { get; set; }
        [StringLength(100)]
        public string ProductALTSeo { get; set; }
        public bool? Status { get; set; }
        public bool? IsDelete { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? CreateTime { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? UpdateTime { get; set; }
        [StringLength(50)]
        [Unicode(false)]
        public string CreateBy { get; set; }
        public int? ProductCategoryID { get; set; }
        public int? TagConnectID { get; set; }
    }
}
