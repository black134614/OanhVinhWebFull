

namespace API.Dtos
{
    public class PostDTO
    {
        public int PostID { get; set; }
        public string PostTitle { get; set; }
        public string PostDescription { get; set; }
        public string PostDetail { get; set; }
        public string PostImages { get; set; }
        public string PostALTSEO { get; set; }
        public bool? Status { get; set; }
        public bool? IsDelete { get; set; }
        public DateTime? CreateTime { get; set; }
        public DateTime? UpdateTime { get; set; }
        public string CreateBy { get; set; }
        public int? PostCategoryID { get; set; }
        public int? TagConnectID { get; set; }
        public string PostCategoryName { get; set; }
    }
}
