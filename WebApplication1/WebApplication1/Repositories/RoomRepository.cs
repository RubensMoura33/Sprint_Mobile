using WebApplication1.Context;
using WebApplication1.Domains;

namespace WebApplication1.Repositories
{
    public class RoomRepository
    {
        private readonly PjContext _context;
        public RoomRepository()
        {
            _context = new PjContext();
        }
        public void Delete(Guid id)
        {
            Room roomSearched = _context!.Rooms.Find(id)!;
            _context.Rooms.Remove(roomSearched);
            _context.SaveChanges();
        }

        public List<Room> Get()
        {
            return _context!.Rooms.ToList();
        }

        public void Post(Room room)
        {
            _context!.Rooms.Add(room);
            _context.SaveChanges();

        }

        public void Put(Guid id, Room room)
        {
            Room roomSearched = _context.Rooms.Find(id)!;

            if (roomSearched != null)
            {
                roomSearched.Name = room.Name;
                roomSearched.Capacity = room.Capacity;
                roomSearched.Locality = room.Locality;
            }
            _context.Rooms.Update(roomSearched!);
            _context.SaveChanges();
        }
    }
}
