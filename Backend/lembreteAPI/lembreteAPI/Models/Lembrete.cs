using System.ComponentModel.DataAnnotations;

namespace lembreteAPI.Models
{
    public class Lembrete
    {
        [Key]
        public int id { get; set; }

        [Required]
        public string nome { get; set; }

        [Required]
        public string data { get; set; }
    }
}
