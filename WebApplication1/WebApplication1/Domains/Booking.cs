using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Domains
{
    [Table(nameof(Booking))]
    public class Booking
    {
        [Key]
        public Guid BookingId { get; set; } = Guid.NewGuid();

        [Column(TypeName = "DATE")]
        [Required(ErrorMessage = "Data de inicio obrigatoria")]
        [DataType(DataType.Date)]
        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:dd/MM/yyyy}")]
        public DateTime? StartDate { get; set; }

        [Column(TypeName = "DATE")]
        [Required(ErrorMessage = "Data fim obrigatorio")]
        [DataType(DataType.Date)]
        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:dd/MM/yyyy}")]
        public DateTime? EndDate { get; set; }


        public Guid UserId { get; set; }

        [ForeignKey(nameof(UserId))]

        public User? Users { get; set; }


        public Guid RoomId { get; set; }

        [ForeignKey(nameof(RoomId))]

        public Room? Rooms { get; set; }
    }
}
