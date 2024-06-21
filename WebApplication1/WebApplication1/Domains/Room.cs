using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Domains
{
    [Table(nameof(Room))]
    public class Room
    {
        [Key]
        public Guid RoomId { get; set; } = Guid.NewGuid();

        [Column(TypeName = "VARCHAR(150)")]
        [Required(ErrorMessage = "Nome obrigatorio")]
        public string? Name { get; set; }

        [Column(TypeName = "VARCHAR(150)")]
        [Required(ErrorMessage = "Capacidade obrigatoria")]
        public string? Capacity { get; set; }

        [Column(TypeName = "VARCHAR(150)")]
        [Required(ErrorMessage = "Localidadde obrigatorio")]
        public string? Locality { get; set; }

    }
}
