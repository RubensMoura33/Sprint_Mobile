using WebApplication1.Domains;

namespace WebApplication1.Interfaces
{
    public interface IBookingRepository
    {
        List<Booking> Get();

        void Post (Booking booking);

        void Delete (Guid id);

        void Put(Guid id, Booking booking);
    }
}
