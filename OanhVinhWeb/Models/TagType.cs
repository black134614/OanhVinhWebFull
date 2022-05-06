using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace WebOanhVinh.Models
{
    [Table("TagType")]
    public partial class TagType
    {
        [Key]
        public int TagTypeID { get; set; }
        [StringLength(50)]
        [Unicode(false)]
        public string CreateBy { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? CreateTime { get; set; }
        [StringLength(100)]
        public string TagTypeName { get; set; }
    }
}
