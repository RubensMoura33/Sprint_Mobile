using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApplication1.Domains
{
        [Table(nameof(User))]
    public class User
    {
        [Key]
        public Guid UserId { get; set; } = Guid.NewGuid();

        [Column(TypeName = "VARCHAR(150)")]
        [Required(ErrorMessage = "Nome obrigatorio")]
        public string? Name { get; set; }

        [Column(TypeName = "VARCHAR(150)")]
        [Required(ErrorMessage = "Email obrigatorio")]
        public string? Email { get; set; }

        [Column(TypeName = "VARCHAR(150)")]
        [Required(ErrorMessage = "Senha obrigatorio")]
        public string? Password { get; set; }

        [Column(TypeName = "VARCHAR(150)")]
        [Required(ErrorMessage = "Cargo obrigatorio")]
        public string? Office { get; set; }


    }
}
