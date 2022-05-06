using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace API.Dtos
{
    public class TagDTO
    {
        public int TagID { get; set; }
        public string TagName { get; set; }
        public string TagDescription { get; set; }
        public string CreateBy { get; set; }
        public DateTime? CreateTime { get; set; }
        public bool? Status { get; set; }
    }
}
