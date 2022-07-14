using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace API.Dtos
{
    public partial class TagTypeDTO
    {
        public int TagTypeID { get; set; }
        public string CreateBy { get; set; }
        public DateTime? CreateTime { get; set; }
        public string TagTypeName { get; set; }
    }
}
