using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace API.Dtos
{
    [Table("PostCategory")]
    public class PostCategoryDTO
    {
        public int PostCategoryID { get; set; }
        public string Tittle { get; set; }
        public string Description { get; set; }
        public int? Positon { get; set; }
        public bool? Status { get; set; }
        public bool? IsDelete { get; set; }
        public string CreateBy { get; set; }
        public DateTime? CreateTime { get; set; }
    }
}
