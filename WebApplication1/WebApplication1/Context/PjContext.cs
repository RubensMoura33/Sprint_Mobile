using Microsoft.EntityFrameworkCore;
using WebApplication1.Domains;

namespace WebApplication1.Context
{
    public class PjContext :DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Room> Rooms { get; set; }
        public DbSet<Booking> Bookings { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=NOTE02-SALA19; DataBase=ApiCompensacao; User Id=sa; Pwd=Senai@134; TrustServerCertificate=True;");
            base.OnConfiguring(optionsBuilder);
        }
    }
}
