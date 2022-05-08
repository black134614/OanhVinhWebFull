using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace API.Models
{
    [Table("TagConnect")]
    public partial class TagConnect
    {
        [Key]
        public int TagConnectID { get; set; }
        public int? TagID { get; set; }
        public int? ProductID { get; set; }
        public int? PostID { get; set; }
        public bool? Status { get; set; }
    }
}
