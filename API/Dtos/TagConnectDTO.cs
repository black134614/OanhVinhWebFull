using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace API.Dtos
{
    public partial class TagConnectDTO
    {
        public int TagConnectID { get; set; }
        public int? TagID { get; set; }
        public int? ProductID { get; set; }
        public int? PostID { get; set; }
        public bool? Status { get; set; }
    }
}
