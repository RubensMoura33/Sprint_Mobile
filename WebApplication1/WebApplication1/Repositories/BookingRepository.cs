using WebApplication1.Context;
using WebApplication1.Domains;
using WebApplication1.Interfaces;

namespace WebApplication1.Repositories
{
    public class BookingRepository : IBookingRepository
    {
        private readonly PjContext _context;
        public BookingRepository() 
        {
            _context = new PjContext();
        }
        public void Delete(Guid id)
        {
            Booking bookingSearched = _context!.Bookings.Find(id)!;
            _context.Bookings.Remove(bookingSearched);
            _context.SaveChanges();
        }

        public List<Booking> Get()
        {
            return _context!.Bookings.ToList();
        }

        public void Post(Booking booking)
        {
            _context!.Bookings.Add(booking);
            _context.SaveChanges();

        }

        public void Put(Guid id, Booking booking)
        {
            Booking bookingSearched = _context.Bookings.Find(id)!;

            if (bookingSearched != null)
            {
                bookingSearched.StartDate = booking.StartDate;
                bookingSearched.EndDate = booking.EndDate;
            }
            _context.Bookings.Update(bookingSearched!);
            _context.SaveChanges();
        }
    }
    }

