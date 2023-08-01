using System.ComponentModel.DataAnnotations;

namespace LibraryManager.Models
{
    public class Books
    {
        [Key]
        public int Id { get; set; }

        public string Title { get; set; }   
        public string Author { get; set; }
        public int NumberOfPages { get; set; }
        public string Publisher { get; set; }
    }
}
